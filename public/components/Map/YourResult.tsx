import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const YourResult: FC = () => {
    return <Box
        sx={{
            boxSizing: 'border-box',
            bgcolor: '#201E1D',
            borderRadius: 2,
            p: 1.5,
            position: 'relative',
            zIndex: 0,
        }}
    >
        <Box
            sx={{
            boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 0.5,
            }}
        >
            <img
                src='/countries/ru.svg'
                alt=''
            />
            <Typography
                sx={{
                    textDecoration: 'none',
                    fontFamily: 'Gilroy',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    color: '#fff',
                }}
            >Oleg Staravoit</Typography>
        </Box>
        <Box
            sx={{
            boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                mb: 2.5,
                gap: 1.5,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                }}
            >
                <img
                    src='/icons/star.svg'
                    alt='star'
                    width={24}
                    height={24}
                />
                <Typography
                    sx={{
                        textDecoration: 'none',
                        fontFamily: 'Gilroy',
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: 1,
                        letterSpacing: 0,
                        color: '#828289',
                    }}
                >1200 баллов</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                }}
            >
                <img
                    src='/icons/alert_gray.svg'
                    alt='star'
                    width={24}
                    height={24}
                />
                <Typography
                    sx={{
                        textDecoration: 'none',
                        fontFamily: 'Gilroy',
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: 1,
                        letterSpacing: 0,
                        color: '#828289',
                    }}
                >1:20 мин</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                }}
            >
                <img
                    src='/icons/mark_gray.svg'
                    alt='star'
                    width={24}
                    height={24}
                />
                <Typography
                    sx={{
                        textDecoration: 'none',
                        fontFamily: 'Gilroy',
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: 1,
                        letterSpacing: 0,
                        color: '#828289',
                    }}
                >90 м</Typography>
            </Box>
        </Box>
        <Button
            sx={{
                bgcolor: '#6C5DD3',
                borderRadius: '16px',
                width: '100%',
                zIndex: 15,
                textTransform: 'none',
                p: '14px',
            }}
        >
            <Link
                to='/choose-game'
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
                Следующая игра
                <img
                    src='/icons/arrowRight.svg'
                    alt=''
                />
            </Link>
        </Button>
    </Box>
}

export default YourResult;