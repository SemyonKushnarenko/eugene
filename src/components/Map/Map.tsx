import { FC, useRef, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Coordinates from "../Coordinates";
import { Box, Button } from "@mui/material";

const MAP_IMAGE = "/bg.jpg";
const MARK_IMAGE = "/icons/mark.svg";
const MAP_WIDTH = 5140;
const MAP_HEIGHT = 4676;

const Map: FC = () => {
    const minScale = 1;
    const maxScale = 3;
    const [mark, setMark] = useState<{ x: number; y: number } | null>(null);
    const [pointerCoords, setPointerCoords] = useState<{ x: number; y: number } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [scale, setScale] = useState(1);
    const [a, setA] = useState<number[]>([]);
    const [positionX, setPositionX] = useState(0)
    const [positionY, setPositionY] = useState(0)
  
    function handleChange(event: any) {
        setScale(event.instance.transformState.scale);
        setPositionX(event.instance.transformState.positionX);
        setPositionY(event.instance.transformState.positionY);
        
    }

    return (
        <Box ref={containerRef} sx={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', touchAction: 'none', userSelect: 'none' }}>
            <TransformWrapper
                minScale={minScale}
                maxScale={maxScale}
                initialScale={scale}
                centerOnInit
                limitToBounds
                doubleClick={{ disabled: true }}
                wheel={{ step: 40 }}
                panning={{ velocityDisabled: true }}
                onTransformed={e => handleChange(e)}
            >
                {({ instance }) => {
                    return (
                        <>
                            <TransformComponent
                                contentStyle={{ width: '100%', height: '100%' }}
                                wrapperStyle={{ width: '100%', height: '100%' }}
                            >
                                <div
                                    style={{ width: '100%', height: '100%', position: 'relative' }}
                                    onClick={e => {
                                        const container = containerRef.current;
                                        const img = imageRef.current;
                                        if (!container || !img) return;
                                        const rect = container.getBoundingClientRect()
                                        const imgRect = img.getBoundingClientRect()
                                        const [x, y] = [
                                            (e.clientX - imgRect.left) * (MAP_WIDTH / rect.width) / scale, 
                                            (e.clientY - imgRect.top) * (MAP_HEIGHT / rect.height) / scale, 
                                        ]
                                        setMark({ x, y });
                                    }}                                >
                                    <img
                                        ref={imageRef}
                                        width="100%"
                                        height="100%"
                                        style={{ objectFit: 'cover', display: 'block' }}
                                        src={MAP_IMAGE}
                                        alt=""
                                        draggable={false}
                                        onLoad={() => setImageLoaded(true)}
                                    />
                                    {mark && (
                                        <img
                                            src={MARK_IMAGE}
                                            alt="mark"
                                            style={{
                                                position: 'absolute',
                                                left: `${(mark.x / MAP_WIDTH) * 100}%`,
                                                top: `${(mark.y / MAP_HEIGHT) * 100}%`,
                                                width: 40,
                                                height: 40,
                                                transform: `translate(-50%, -50%) scale(${1/scale})`,
                                                pointerEvents: 'auto',
                                                zIndex: 20,
                                                cursor: 'pointer',
                                            }}
                                            onClick={e => {
                                                e.stopPropagation();
                                                setMark(null);
                                            }}
                                        />
                                    )}
                                </div>
                            </TransformComponent>
                        </>
                    );
                }}
            </TransformWrapper>
            <Button
                onClick={e => e.stopPropagation()}
                onPointerDown={e => e.stopPropagation()}
                sx={{
                    bgcolor: '#6C5DD3',
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    left: 16,
                    borderRadius: '16px',
                    py: 1.5,
                    zIndex: 15,
                    fontFamily: 'Gilroy',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    color: '#fff',
                    '&:disabled': {
                        color: '#fff',
                        bgcolor: '#201E1D',
                        pointerEvents: 'none',
                    },
                    textTransform: 'none',
                }}
                disabled={!mark}
            >
                {mark ? 'Сравнить метку' : 'Разместите метку на карте' }
            </Button>
            <Coordinates tap={mark} />
        </Box>
    );
};

export default Map;