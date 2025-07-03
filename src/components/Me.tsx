import { FC, useRef, useState, useEffect } from "react";
import Canvas from "./Canvas";
import interact from 'interactjs';

const CoordinateDisplay: FC<{ tap: {x: number, y: number} | null, pointer: {x: number, y: number} | null }> = ({ tap, pointer }) => (
    <div style={{
        position: 'fixed',
        top: 10,
        right: 10,
        background: 'rgba(0,0,0,0.7)',
        color: '#fff',
        padding: '10px 16px',
        borderRadius: 8,
        fontFamily: 'monospace',
        zIndex: 1000,
        minWidth: 180,
    }}>
        <div>Tap: {tap ? `${tap.x.toFixed(0)}, ${tap.y.toFixed(0)}` : '--'}</div>
        <div>Pointer: {pointer ? `${pointer.x.toFixed(0)}, ${pointer.y.toFixed(0)}` : '--'}</div>
    </div>
);

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

                            const prevScale = t.scale;
                            let newScale = t.scale * (1 + event.ds);
                            newScale = Math.max(minScale, Math.min(5, newScale));

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
                        });
                    }
                }
            });
        return () => {
            interact(node).unset();
        };
    }, [minScale, canvasSize]);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100vw',
                height: '100vh',
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

const Me: FC = () => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const markImgRef = useRef<HTMLImageElement | null>(null);
    const lastScaleRef = useRef(1);
    const [tapCoords, setTapCoords] = useState<{x: number, y: number} | null>(null);
    const [pointerCoords, setPointerCoords] = useState<{x: number, y: number} | null>(null);
    const [mark, setMark] = useState<{x: number, y: number} | null>(null);
    const [pointerDown, setPointerDown] = useState<{x: number, y: number, time: number} | null>(null);

    const draw = (ctx: CanvasRenderingContext2D, frameCount: number, currentScale: number = 1) => {
        lastScaleRef.current = currentScale;
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;

        if (!imgRef.current) {
            const img = new window.Image();
            img.src = "/bg2.jpg";
            img.onload = () => {
                imgRef.current = img;
                ctx.drawImage(img, 0, 0, width, height);
            };
            ctx.clearRect(0, 0, width, height);
            return;
        }

        ctx.drawImage(imgRef.current, 0, 0, width, height);

        ctx.save();
        ctx.strokeStyle = "rgba(116, 100, 100, 0.32)";
        ctx.lineWidth = 1 / currentScale;
        const minSquare = 100;
        const maxSquare = 1000;
        const widthAvail = width;
        const heightAvail = height;
        let squareSize = maxSquare;
        while (squareSize > minSquare && (widthAvail / squareSize < 1 || heightAvail / squareSize < 1)) {
            squareSize -= 1;
        }
        if (squareSize < minSquare) squareSize = minSquare;
        for (let x = squareSize; x < widthAvail; x += squareSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, heightAvail);
            ctx.stroke();
        }
        for (let y = squareSize; y < heightAvail; y += squareSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(widthAvail, y);
            ctx.stroke();
        }
        ctx.restore();

        if (mark) {
            ctx.save();
            const size = 24 / (currentScale || 1);
            if (!markImgRef.current) {
                const img = new window.Image();
                img.src = '/mark.svg';
                img.onload = () => {
                    markImgRef.current = img;
                    ctx.drawImage(img, mark.x - size / 2, mark.y - size / 2, size, size);
                };
            } else {
                ctx.drawImage(markImgRef.current, mark.x - size / 2, mark.y - size / 2, size, size);
            }
            ctx.restore();
        }
    };

    const handlePointerDown = (coords: {x: number, y: number}) => {
        setPointerDown({ ...coords, time: Date.now() });
    };
    const handlePointerUp = (coords: {x: number, y: number}) => {
        if (!pointerDown) return;
        const dt = Date.now() - pointerDown.time;
        const dx = coords.x - pointerDown.x;
        const dy = coords.y - pointerDown.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dt < 300 && dist < 16) {
            setTapCoords(coords);
            setMark(current => {
                const size = 24 / (lastScaleRef.current || 1);
                if (current) {
                    const dx = coords.x - current.x;
                    const dy = coords.y - current.y;
                    if (Math.sqrt(dx*dx + dy*dy) <= size / 2) {
                        return null;
                    }
                }
                return coords;
            });
        }
        setPointerDown(null);
    };

    return <>
        <CanvasContainer
            draw={(ctx, frameCount, scale) => draw(ctx, frameCount, scale)}
            width={10280}
            height={9352}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={setPointerCoords}
        />
        <CoordinateDisplay tap={tapCoords} pointer={pointerCoords} />
    </>;
}

export default Me;