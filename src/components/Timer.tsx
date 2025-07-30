import { FC, useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { canPlayAtom, loadingGameAtom } from "../store/gameAtoms";
import { Typography } from "@mui/material";
import formatTime from "../shared/utils/formatTime";

interface TimerProps {
    seconds: number;
}

const Timer: FC<TimerProps> = ({ seconds }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const setCanPlay = useSetAtom(canPlayAtom);
    const isLoading = useAtomValue(loadingGameAtom);

    useEffect(() => {
        if (timeLeft <= 0) {
            setCanPlay(false);
            return;
        }
        if (isLoading) return;
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, setCanPlay, isLoading]);

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