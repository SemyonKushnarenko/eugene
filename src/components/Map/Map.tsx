import { FC, useRef, useState, useEffect } from "react";
import CanvasContainer from "./Canvas/CanvasContainer";
import Coordinates from "../Coordinates";
import { Box, Button } from "@mui/material";

const Map: FC = () => {
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
            img.src = "/bg.jpg";
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
        const minSquare = 50;
        const maxSquare = 500;
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
            const size = 32 / (currentScale || 1);
            if (!markImgRef.current) {
                const img = new window.Image();
                img.src = '/icons/mark.svg';
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

    return <Box sx={{ width: '100%', height: '100%' }}>
        <CanvasContainer
            draw={(ctx, frameCount, scale) => draw(ctx, frameCount, scale)}
            width={5140}
            height={4676}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={setPointerCoords}
        />
        <Button
            sx={{
                bgcolor: mark ? '#6C5DD3' : '#201E1D',
                position: 'absolute',
                bottom: 16,
                right: 16,
                left: 16,
                borderRadius: '16px',
                py: 1.5,
                fontFamily: 'Gilroy',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: 0,
                color: '#fff',
                textTransform: 'none',
            }}
        >{mark ? 'Поставить метку' : 'Разместите метку на карте' }</Button>
        <Coordinates tap={tapCoords} pointer={pointerCoords} />
    </Box>;
}

export default Map;