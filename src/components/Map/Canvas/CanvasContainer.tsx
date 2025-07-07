import interact from "interactjs";
import Canvas from "./Canvas";
import { FC, useEffect, useRef, useState } from "react";

export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const CanvasContainer: FC<{
    children?: React.ReactNode;
    draw: (ctx: CanvasRenderingContext2D, frameCount: number, scale: number) => void;
    width: number;
    height: number;
    onPointerDown?: (coords: { x: number; y: number }) => void;
    onPointerUp?: (coords: { x: number; y: number }) => void;
    onPointerMove?: (coords: { x: number; y: number }) => void;
  }> = ({ draw, width, height, onPointerDown, onPointerUp, onPointerMove }) => {
      const containerRef = useRef<HTMLDivElement>(null);
      const canvasRef = useRef<HTMLCanvasElement>(null);
      const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
      const [minScale, setMinScale] = useState(1);
      const [canvasSize, setCanvasSize] = useState({ width, height });
      const MAX_SCALE = 2;
  
      useEffect(() => {
          function updateMinScale() {
              const container = containerRef.current;
              const canvas = canvasRef.current;
              if (container && canvas) {
                  const containerRect = container.getBoundingClientRect();
                  const canvasWidth = canvas.width;
                  const canvasHeight = canvas.height;
                  setCanvasSize({ width: canvasWidth, height: canvasHeight });
                  const scaleX = containerRect.width / canvasWidth;
                  const scaleY = containerRect.height / canvasHeight;
                  const coverScale = Math.max(scaleX, scaleY);
                  setMinScale(coverScale);
                  setTransform({
                      x: (containerRect.width - canvasWidth * coverScale) / 2,
                      y: (containerRect.height - canvasHeight * coverScale) / 2,
                      scale: coverScale
                  });
              }
          }
          updateMinScale();
          window.addEventListener('resize', updateMinScale);
          return () => window.removeEventListener('resize', updateMinScale);
      }, [width, height]);
  
      const getCurrentSizes = (
        transform: { x: number, y: number, scale: number },
        event: { dx: number, dy: number },
        containerRect: DOMRect,
        canvasSize: { width: number, height: number }
      ) => {
        const vw = containerRect.width;
        const vh = containerRect.height;
        const canvasWidth = canvasSize.width;
        const canvasHeight = canvasSize.height;
        const scale = transform.scale;
        const scaledWidth = canvasWidth * scale;
        const scaledHeight = canvasHeight * scale;
        const minX = vw - scaledWidth;
        const maxX = 0;
        const minY = vh - scaledHeight;
        const maxY = 0;
        let x = transform.x + event.dx;
        let y = transform.y + event.dy;
        if (scaledWidth <= vw) {
          x = (vw - scaledWidth) / 2;
        } else {
          x = Math.min(maxX, Math.max(minX, x));
        }
        if (scaledHeight <= vh) {
          y = (vh - scaledHeight) / 2;
        } else {
          y = Math.min(maxY, Math.max(minY, y));
        }
        return { x, y };
      };
  
      const applyScaleAtPoint = (
          scaleDelta: number,
          cx: number,
          cy: number,
          container: HTMLDivElement,
          t: { x: number; y: number; scale: number },
          minScale: number,
          canvasSize: { width: number; height: number }
      ) => {
          const rect = container.getBoundingClientRect();
          const prevScale = t.scale;
          let newScale = t.scale * scaleDelta;
          newScale = Math.max(minScale, Math.min(MAX_SCALE, newScale));
          const px = (cx - t.x) / prevScale;
          const py = (cy - t.y) / prevScale;
          let x = cx - px * newScale;
          let y = cy - py * newScale;
          const scaledWidth = canvasSize.width * newScale;
          const scaledHeight = canvasSize.height * newScale;
          if (scaledWidth <= rect.width) {
              x = (rect.width - scaledWidth) / 2;
          } else {
              const minX = rect.width - scaledWidth;
              const maxX = 0;
              x = Math.min(maxX, Math.max(minX, x));
          }
          if (scaledHeight <= rect.height) {
              y = (rect.height - scaledHeight) / 2;
          } else {
              const minY = rect.height - scaledHeight;
              const maxY = 0;
              y = Math.min(maxY, Math.max(minY, y));
          }
          return { x, y, scale: newScale };
      };
  
      useEffect(() => {
          const node = canvasRef.current;
          const container = containerRef.current;
          if (!node || !container) return;
          interact(node).unset();
          interact(node)
              .draggable({
                  listeners: {
                      move(event) {
                          setTransform(t => {
                              const rect = container.getBoundingClientRect();
                              const { x, y } = getCurrentSizes(t, event, rect, canvasSize);
                              return { ...t, x, y };
                          });
                      }
                  }
              })
              .gesturable({
                  listeners: {
                      move(event) {
                          event.da = 0;
                          event.rotation = 0;
                          setTransform(t => {
                              const container = containerRef.current;
                              if (!container) return t;
                              const rect = container.getBoundingClientRect();
                              const cx = event.clientX - rect.left;
                              const cy = event.clientY - rect.top;
                              const scaleDelta = 1 + event.ds;
                              return applyScaleAtPoint(
                                  scaleDelta,
                                  cx,
                                  cy,
                                  container,
                                  t,
                                  minScale,
                                  canvasSize
                              );
                          });
                      }
                  }
              });
  
          // Wheel zoom support
          const handleWheel = (e: WheelEvent) => {
              e.preventDefault();
              setTransform(t => {
                  const rect = container.getBoundingClientRect();
                  const cx = e.clientX - rect.left;
                  const cy = e.clientY - rect.top;
                  const scaleDelta = e.deltaY < 0 ? 1.1 : 0.9;
                  return applyScaleAtPoint(
                      scaleDelta,
                      cx,
                      cy,
                      container,
                      t,
                      minScale,
                      canvasSize
                  );
              });
          };
          node.addEventListener('wheel', handleWheel, { passive: false });
          return () => {
              interact(node).unset();
              node.removeEventListener('wheel', handleWheel);
          };
      }, [minScale, canvasSize]);
  
      return (
          <div
              ref={containerRef}
              style={{
                  width: '100vw',
                  height: '72vh',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#222',
                  touchAction: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
          >
              <Canvas
                  ref={canvasRef}
                  draw={(ctx, frameCount, scale) => draw(ctx, frameCount, scale)}
                  width={canvasSize.width}
                  height={canvasSize.height}
                  style={{
                      border: '2px solid #333',
                      background: '#fff',
                      display: 'block',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                      transformOrigin: 'top left',
                  }}
                  onPointerDown={onPointerDown}
                  onPointerUp={onPointerUp}
                  onPointerMove={onPointerMove}
                  scale={transform.scale}
              />
          </div>
      );
  };

  export default CanvasContainer;
  