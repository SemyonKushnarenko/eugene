import Game from "../components/ChooseGame/Game";
import { Box, Button, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetGame } from "../api/hooks/queries/use-get-game";
import './GameParams.css'
import { useAtom } from "jotai";
import { timeAtom } from "../store/gameAtoms";

const GameParamsPage: FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { data: game } = useGetGame(slug || "");
    if (!slug) return null;

    const [time, setTime] = useAtom(timeAtom)

    const timeOptions = [
        {
            time: 20,
            label: '20 секунд',
        },
        {
            time: 60,
            label: '1 минута',
        },
        {
            time: 300,
            label: '5 минут',
        },
        {
            time: 600,
            label: '10 минут',
        },
        {
            time: 1800,
            label: '30 минут',
        },
        {
            time: 3600,
            label: '60 минут',
        },
    ]

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTime(Number(e.target.value))
    }

    return <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%',
            pt: '30px',
        }}
    >
        {game && <Game game={game} />}
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                mt: '20px',
                gap: '10px',
            }}
        >
            <Typography
                sx={{
                    color: '#FFFFFF',
                    fontFamily: 'Gilroy',
                    fontWeight: 600,
                    fontSize: '22px',
                    lineHeight: 1.25,
                    letterSpacing: 0,
                }}
            >Лучший результат</Typography>
            <Box
                sx={{
                    height: 246,
                    overflow: 'hidden',
                    width: '100%',
                    position: 'relative',
                    bgcolor: '#6C5DD31A',
                    borderRadius: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        color: '#828289',
                        fontFamily: 'Gilroy',
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: 1,
                        letterSpacing: 0,
                    }}
                >Начните играть чтобы увидеть результат</Typography>
                <img
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        translate: '-50%'
                    }}
                    src='/leaderboard/logo.svg'
                    alt=''
                />
            </Box>
        </Box>
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                height: '48px',
                p: 1.5,
                mt: 3.5,
                bgcolor: '#161413',
                borderRadius: '16px',
            }}
        >
            <select
                style={{
                    padding: '12px 16px',
                    borderRadius: '16px',
                    appearance: 'none',
                    backgroundColor: '#201E1D',
                    border: 'none',
                    width: '130px',
                    fontFamily: 'Gilroy',
                    fontWeight: 500,
                    fontSize: '17px',
                    lineHeight: '17px',
                    letterSpacing: 0,
                    color: '#828289',
                    position: 'relative',
                    height: '100%',
                    outline: 'none',
                }}
                className="select"
                onChange={handleChange}
            >
                <img
                    style={{

                    }}
                    src='/icons/alert.svg'
                    alt=""
                    width={24}
                    height={24}
                />
                {timeOptions.map(option => 
                    <option value={option.time} selected={time === option.time}>{option.label}</option>
                )}
            </select>
            <Button
                sx={{
                    bgcolor: '#6C5DD3',
                    borderRadius: '16px',
                    py: '12px',
                    width: '100%',
                    zIndex: 15,
                    textTransform: 'none',
                }}
            >
                <Link 
                    to='/game'
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px',
                        textDecoration: 'none',
                        fontFamily: 'Gilroy',
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: 0,
                        color: '#fff',
                        verticalAlign: 'middle',
                    }}
                >
                    Начать игру
                    <img
                        src='/icons/arrowRight.svg'
                        alt=''
                    />
                </Link>
            </Button>
        </Box>
    </Box>
}

export default GameParamsPage;