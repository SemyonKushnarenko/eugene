import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Timer from "../../components/Timer";
import { useAtom, useAtomValue } from "jotai";
import { canPlayAtom, roundsAtom, timeAtom } from "../../store/gameAtoms";
import { Link } from "react-router-dom";

const GameHeader: FC = () => {
    const time = useAtomValue(timeAtom)
    const rounds = useAtomValue(roundsAtom)
    const canPlay = useAtomValue(canPlayAtom)

    return <Box
        sx={{
            position: 'relative',
            zIndex: 7,
            mt: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            color: '#ffffff',
            boxSizing: 'border-box',
            minHeight: '30px',
        }}
    >
        <Link
            onClick={() => {
                window.scrollTo(0, 0)
            }}
            to='/'
            style={{
                position: "absolute",
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                fontSize: 0,
            }}
        >
        <img
            src="icons/headerIcon.svg"
            alt=""
            width={30}
            height={30}
        />
        </Link>
        {canPlay && <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                ml: 'auto',
            }}
        >
            {time >=0 && <Box
                sx={{
                    display: "flex",
                    py: 1,
                    px: 2.5,
                    bgcolor: 'rgba(0,0,0,0.7)',
                    borderRadius: '10px'
                }}
            >
                <img
                    src="icons/alert.svg"
                    width={24}
                    height={24}
                />
                <Timer seconds={time} />
            </Box>}
            {rounds > 1 && <><Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Gilroy',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '125%',
                        letterSpacing: 0,
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                    }}
                >Раунд</Typography>
                <Typography
                    sx={{
                        fontFamily: 'Gilroy',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: 1,
                        letterSpacing: 0,
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                    }}
                >1 из {rounds}</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Gilroy',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '125%',
                        letterSpacing: 0,
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                    }}
                >Очки</Typography>
                <Typography
                    sx={{
                        fontFamily: 'Gilroy',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: 1,
                        letterSpacing: 0,
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                    }}
                >1000</Typography>
            </Box></>}
        </Box>}
    </Box>
} 

export default GameHeader;