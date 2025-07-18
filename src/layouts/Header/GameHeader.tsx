import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Timer from "../../components/Timer";
import { useAtom, useAtomValue } from "jotai";
import { canPlayAtom, timeAtom } from "../../store/gameAtoms";

const GameHeader: FC = () => {
    const time = useAtomValue(timeAtom)
    const canPlay = useAtomValue(canPlayAtom)

    return <Box
        sx={{
            position: 'relative',
            zIndex: 7,
            pt: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            color: '#ffffff'
        }}
    >
        <img
            src="/icons/headerIcon.svg"
            alt=""
            width={24}
            height={24}
        />
        {canPlay && <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    mr: '20px',
                    py: 1,
                    px: 2.5,
                    bgcolor: 'rgba(0,0,0,0.7)',
                    borderRadius: '10px'
                }}
            >
                <img
                    src="/icons/alert.svg"
                    width={24}
                    height={24}
                />
                <Timer seconds={time} />
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
                >2 из 5</Typography>
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
                >9999</Typography>
            </Box>
        </Box>}
    </Box>
} 

export default GameHeader;