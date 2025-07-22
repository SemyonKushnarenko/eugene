import { imageLoadedAtom } from '../../store/gameAtoms';
import { useSetAtom } from 'jotai';
import React, { useRef, useState, useEffect } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import './panorama.css'
import { Box } from '@mui/material';

const TEXTURE = 'texture.jpg';

const PanoramaV2: React.FC = () => {
    const [imgWidth, setImgWidth] = useState<number | null>(null);
    const [dragStart, setDragStart] = useState<number | null>(null);
    const [startOffset, setStartOffset] = useState(0);
    const [offset, setOffset] = useState(0);
    const setImageLoaded = useSetAtom(imageLoadedAtom);

    useEffect(() => {
        const img = new window.Image();
        img.src = TEXTURE;
        img.onload = () => {
            const aspect = img.width / img.height;
            setImgWidth(window.innerHeight * aspect);
            setImageLoaded(true);
        };
    }, []);

    const handlePointerDown = (e: React.PointerEvent) => {
        setDragStart(e.clientX);
        setStartOffset(offset);
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (dragStart !== null) {
            const dx = e.clientX - dragStart;
            setOffset(startOffset + dx);
        }
    };

    const handlePointerUp = () => {
        setDragStart(null);
    };

    if (!imgWidth) return null;

    const effectiveOffset = ((offset % imgWidth) + imgWidth) % imgWidth;

    return (
        <TransformWrapper
            minScale={2}
            maxScale={2}
            initialScale={2}
            centerOnInit
            limitToBounds
            doubleClick={{ disabled: true }}
            panning={{ velocityDisabled: true }}
            alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
        >
            <TransformComponent
                contentStyle={{ width: '100vw', height: '100vh' }}
                wrapperStyle={{ width: '100vw', height: '100vh', 
                    position: 'fixed',
                    left: 0,
                    top: 0, }}
            >
                <div
                    style={{
                        width: '100vw',
                        height: '100vh',
                        overflow: 'hidden',
                        // background: '#000', // убираем чёрный фон
                        touchAction: 'none',
                        userSelect: 'none',
                    }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                >
                    <div
                        style={{
                            width: imgWidth * 3,
                            height: '100vh',
                            display: 'flex',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            transform: `translateX(${-imgWidth + effectiveOffset}px)`,
                            transition: dragStart ? 'none' : 'transform 0.1s',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                backdropFilter: 'blur(3px)',
                                width: imgWidth*3, 
                                height: '100vh', 
                                display: 'block',
                                zIndex: 2,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                        >
                        </Box>
                        <img 
                            className="image"
                            src={TEXTURE} 
                            alt="panorama" 
                            style={{ 
                                width: imgWidth, 
                                height: '100vh', 
                                objectFit: 'cover', 
                                display: 'block',
                                zIndex: 3,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                            draggable={false}
                        />
                        <img 
                            className="image"
                            src={TEXTURE} 
                            alt="panorama" 
                            style={{ 
                                width: imgWidth, 
                                height: '100vh', 
                                objectFit: 'cover', 
                                display: 'block',
                                zIndex: 3,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                            draggable={false}
                        />
                        <img 
                            className="image"
                            src={TEXTURE} 
                            alt="panorama" 
                            style={{ 
                                width: imgWidth, 
                                height: '100vh', 
                                objectFit: 'cover', 
                                display: 'block',
                                zIndex: 3,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                            draggable={false}
                        />
                        <img 
                            className="image-blured"
                            src={TEXTURE} 
                            alt="" 
                            style={{
                                position: 'absolute',
                                top: 0,
                                width: imgWidth, 
                                height: '100vh', 
                                objectFit: 'cover', 
                                display: 'block',
                                zIndex: 1,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                            draggable={false}
                        />
                        <img 
                            className="image-blured"
                            src={TEXTURE} 
                            alt="" 
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: imgWidth,
                                width: imgWidth, 
                                height: '100vh', 
                                objectFit: 'cover', 
                                display: 'block',
                                zIndex: 1,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                            draggable={false}
                        />
                    </div>
                </div>
            </TransformComponent>
        </TransformWrapper>
    );
};

export default PanoramaV2; 