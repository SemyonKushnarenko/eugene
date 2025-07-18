import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const StartGame: FC = () => {
    return <Box
            sx={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <img
                style={{
                    position: 'absolute',
                    transform: 'translateY(-78px)',
                    zIndex: -1,
                }}
                alt=""
                src='/logo.png'
            />
            <Typography
                sx={{
                    pt: '258px',
                    color: '#FFFFFF',
                    fontFamily: 'Gilroy',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '-0.28px',
                    textAlign: 'center',
                    width: '284px',
                }}
            >Ace Friends</Typography>
            <Typography
                sx={{
                    pt: 1,
                    color: '#8A8989',
                    fontFamily: 'Gilroy',
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '125%',
                    letterSpacing: 0,
                    textAlign: 'center',
                    width: '284px',
                }}
            >PGS - Попробуй отгадать где находишься, используя окружающую тебя обстановку</Typography>
            <Button
                sx={{
                    bgcolor: '#6C5DD3',
                    borderRadius: '16px',
                    py: 1.5,
                    mt: '20px', 
                    width: '100%',
                    zIndex: 15,
                    textTransform: 'none',
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
                    Начать игру
                    <img
                        src='/icons/arrowRight.svg'
                        alt=''
                    />
                </Link>
            </Button>
        </Box>
}

export default StartGame;