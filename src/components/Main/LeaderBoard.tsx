import { getCupByIndex, getShortAmount } from "../../helpers/leaderboard";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface IPlayer {
    id: number,
    name: string,
    points: number,
    country?: string,
    avatar?: string,
};

const players: IPlayer[] = [
    {
        id: 56745,
        name: 'Oleg Starovoit',
        points: 135_000_000,
        country: 'ru',
        avatar: '/avatar/Oleg.png',
    },
    {
        id: 526745,
        name: 'Natalia Vi',
        points: 122_000_000,
        country: 'es',
        avatar: '/avatar/Oleg.png',
    },
    {
        id: 5263745,
        name: 'Elena Marin',
        points: 122_000,
        country: '',
        avatar: '',
    },
    {
        id: 52633745,
        name: 'Alice Kuralesina',
        points: 387,
        country: '',
        avatar: '/avatar/Oleg.png',
    },
    {
        id: 52653745,
        name: 'Natalia Vi',
        points: 254,
        country: 'ch',
        avatar: '',
    },
    {
        id: 52653745,
        name: 'Natalia Vi',
        points: 254,
        country: '',
        avatar: '',
    },
]

interface ILeaderBoard {
    isMain?: boolean
}

const LeaderBoard: FC<ILeaderBoard> = ({isMain = false}) => {
    return <Box
            sx={{
                bgcolor: '#6C5DD31A',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                px: 2,
                borderRadius: 2,
                mt: '40px'
            }}
        >
            {players.slice(0, 5).map(({id, name, points, country, avatar}, index) => (
                <Box 
                    key={id}
                    sx={{
                        pt: 2,
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        borderBottom: '1px solid #40434F',
                        minHeight: '84px',
                    }}
                >
                    <img 
                        src={avatar ? avatar : '/avatar/no_avatar.svg'}
                        alt=''
                        width={48}
                        height={48}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 0.5,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                alignItems: 'center',
                            }}
                        >
                            {country && <img 
                                src={`/countries/${country}.svg`}
                                alt={country}
                                width={16}
                                height={16}
                            />}
                            <Typography
                                sx={{     
                                    color: '#FFFFFF',
                                    fontFamily: 'Gilroy',
                                    fontWeight: 600,
                                    fontSize: '17px',
                                    lineHeight: '100%',
                                    letterSpacing: 0,
                                    textAlign: 'center',
                                }}
                            >{name}</Typography>
                        </Box>
                        <Typography
                            sx={{     
                                color: '#8A8989',
                                fontFamily: 'Gilroy',
                                fontWeight: 500,
                                fontSize: '15px',
                                lineHeight: '125%',
                                letterSpacing: 0,
                                textAlign: 'center',
                            }}
                        >{getShortAmount(points)}</Typography>
                    </Box>
                    <img
                        style={{
                            marginLeft: 'auto',
                            translate: index < 3 ? '30px' : '',
                        }}
                        width={index >= 3 ? 24 : 84}
                        height={index >= 3 ? 24 : 84}
                        alt=""
                        src={`leaderboard/${getCupByIndex(index + 1)}`}
                    />
                </Box>
            ))}
            <Link
                to='leaderboard'
                style={{
                    color: '#40434F',
                    fontFamily: 'Gilroy',
                    fontWeight: 600,
                    fontSize: '15px',
                    lineHeight: '125%',
                    letterSpacing: 0,
                    textAlign: 'center',
                    padding: '16px 0',
                    textDecoration: 'none',
                }}
            >Показать всех</Link>
        </Box>
}

export default LeaderBoard;