import React, { useRef, useEffect, forwardRef } from 'react'

interface ICanvasProps {
    draw: (ctx: CanvasRenderingContext2D, frameCount: number, scale: number) => void
    width?: number;
    height?: number;
    onPointerDown?: (coords: { x: number; y: number }) => void;
    onPointerMove?: (coords: { x: number; y: number }) => void;
    onPointerUp?: (coords: { x: number; y: number }) => void;
    style?: React.CSSProperties;
    scale?: number;
}

const Canvas = forwardRef<HTMLCanvasElement, ICanvasProps>(({ draw, width = 1920, height = 1080, onPointerDown, onPointerMove, onPointerUp, style, scale = 1, ...rest }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const combinedRef = (node: HTMLCanvasElement | null) => {
    if (typeof ref === 'function') ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLCanvasElement | null>).current = node;
    canvasRef.current = node;
  };
  
  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current
    if (canvas) {
        const context: CanvasRenderingContext2D = canvas.getContext('2d')!
        let frameCount = 0;
        let animationFrameId: number;
        
        const render = () => {
            frameCount++
            draw(context, frameCount, scale)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }
    
    
  }, [draw, scale])

  const getPointerCoords = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = (event.target as HTMLCanvasElement).getBoundingClientRect();
    const scaleX = width / rect.width;
    const scaleY = height / rect.height;
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    };
  };

  return (
    <div style={{ touchAction: 'none', display: 'inline-block', width: '100vw' }}>
      <canvas
        ref={combinedRef}
        width={width}
        height={height}
        style={style}
        onPointerDown={onPointerDown ? (e) => onPointerDown(getPointerCoords(e)) : undefined}
        onPointerMove={onPointerMove ? (e) => onPointerMove(getPointerCoords(e)) : undefined}
        onPointerUp={onPointerUp ? (e) => onPointerUp(getPointerCoords(e)) : undefined}
        {...rest}
      />
    </div>
  )
})

Canvas.displayName = 'Canvas'

export default Canvas