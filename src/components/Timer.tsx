import { FC, useEffect, useState } from "react";
import { useSetAtom } from "jotai";
import { canPlayAtom } from "../store/gameAtoms";
import { Typography } from "@mui/material";

interface TimerProps {
    seconds: number;
}

const Timer: FC<TimerProps> = ({ seconds }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const setCanPlay = useSetAtom(canPlayAtom);

    useEffect(() => {
        if (timeLeft <= 0) {
            setCanPlay(false);
            return;
        }
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, setCanPlay]);

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return <Typography
        sx={{
            fontFamily: 'Gilroy',
            fontWeight: 500,
            fontSize: '17px',
            width: '43px',
        }}
    >{formatTime(timeLeft)}</Typography>;
}

export default Timer;