import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import YourResult from "./YourResult";
import { useAtomValue } from "jotai";
import { mapSizeAtom, markAtom } from "../../store/gameAtoms";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const TimeStop: FC = () => {
    const mark = useAtomValue(markAtom)
    const mapSize = useAtomValue(mapSizeAtom)
    const [flag, setFlag] = useState<{ x: number; y: number } | null>(null)

    useEffect(() => {
        if (!mapSize) return;
        setFlag({
            x: Math.random() * mapSize.width,
            y: Math.random() * mapSize.height,
        })
    }, [mapSize])

    useEffect(() => console.log(mark), [mark])
    return <Box
        sx={{
            boxSizing: 'border-box',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 2,
        }}
    >
        {flag && mapSize && <TransformWrapper
            minScale={1}
            maxScale={1}
            initialScale={1}
            limitToBounds
            centerOnInit
            initialPositionX={flag.x || 0}
            initialPositionY={0}
            doubleClick={{ disabled: true }}
            panning={{ velocityDisabled: true }}
            alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
        >
            <TransformComponent
                contentStyle={{ width: 'max-content', height: '100vh' }}
                wrapperStyle={{ width: '100vw', height: '100vh', 
                    position: 'fixed',
                    left: 0,
                    top: 0, }}
            >
                <div
                    style={{ width: '100%', height: '100%', position: 'relative' }}>
                    {mark && (
                        <img
                            src='/icons/mark.svg'
                            alt="mark"
                            style={{
                                position: 'absolute',
                                left: `${(mark.x / mapSize!.width) * 100}%`,
                                top: `${(mark.y / mapSize!.height) * 100}%`,
                                width: 40,
                                height: 40,
                                transform: 'translate(-50%, -50%)',
                                pointerEvents: 'auto',
                                zIndex: 20,
                                cursor: 'pointer',
                            }}
                            onClick={e => {
                                e.stopPropagation();
                            }}
                        />
                    )}
                    {flag && mark && <img
                        src='/icons/flag.svg'
                        alt="flag"
                        style={{
                            position: 'absolute',
                            left: `${(flag!.x / mapSize!.width) * 100}%`,
                            top: `${(flag!.y / mapSize!.height) * 100}%`,
                            width: 40,
                            height: 40,
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'auto',
                            zIndex: 20,
                            cursor: 'pointer',
                        }}
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    />}
                    <img
                        src='/bg.jpg'
                        alt=''
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </TransformComponent>
        </TransformWrapper>}
        {!mark && <>
            <Box
                sx={{
                    bgcolor:'#00000099',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    zIndex: 0,
                    overflow: 'hidden',
                }}
            ></Box>
            <Typography
                sx={{
                    position: 'fixed',
                    top: '50%',
                    right: '50%',
                    width: '100%',
                    translate: '50% -50%',
                    fontFamily: 'Gilroy',
                    fontWeight: 600,
                    fontSize: '39px',
                    lineHeight: 1,
                    letterSpacing: 0,
                    color: '#fff',
                    textAlign: 'center',
                    mb: '200px',
                }}
            >Время вышло!</Typography>
        </>}
        <YourResult />
    </Box>
}

export default TimeStop;