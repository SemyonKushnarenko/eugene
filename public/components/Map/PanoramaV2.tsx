import React, { useRef, useState, useEffect } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const TEXTURE = '/texture.jpg';

const PanoramaV2: React.FC = () => {
    const [imgWidth, setImgWidth] = useState<number | null>(null);
    const [dragStart, setDragStart] = useState<number | null>(null);
    const [startOffset, setStartOffset] = useState(0);
    const [offset, setOffset] = useState(0);

    // Load image to get its aspect ratio
    useEffect(() => {
        const img = new window.Image();
        img.src = TEXTURE;
        img.onload = () => {
            const aspect = img.width / img.height;
            setImgWidth(window.innerHeight * aspect);
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
            {({ instance }) => {
                return (
                    <>
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
                                    background: '#000',
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
                                    <img src={TEXTURE} alt="panorama" style={{ width: imgWidth, height: '100vh', translate: '1px', objectFit: 'cover', flexShrink: 0 }} draggable={false} />
                                    <img src={TEXTURE} alt="panorama" style={{ width: imgWidth, height: '100vh', translate: '1px', objectFit: 'cover', flexShrink: 0 }} draggable={false} />
                                    <img src={TEXTURE} alt="panorama" style={{ width: imgWidth, height: '100vh', translate: '1px', objectFit: 'cover', flexShrink: 0 }} draggable={false} />
                                </div>
                            </div>
                        </TransformComponent>
                    </>
                );
            }}
        </TransformWrapper>
    );
};

export default PanoramaV2; 