import { getCupByIndex, getShortAmount, players } from "../../helpers/leaderboard";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

interface ILeaderBoard {
    isMain?: boolean
}

const PAGE_SIZE = 30;

const LeaderBoard: FC<ILeaderBoard> = ({isMain = false}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;
    const totalPages = Math.ceil(players.length / PAGE_SIZE);
    const pagedPlayers = isMain
        ? players.slice(0, 3)
        : players.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    const handleChange = (newPage: number) => {
        setSearchParams({ ...Object.fromEntries(searchParams.entries()), page: String(newPage) });
    };
    return <Box
            sx={{
                bgcolor: isMain ? '#6C5DD31A' : '',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: !isMain ? '5px' : '',
                px: isMain ? 2 : 0,
                borderRadius: 2,
                mt: '40px',
                position: 'relative',
                zIndex: 5,
                boxSizing: 'border-box',
            }}
        >
            {isMain && <Typography
                sx={{
                    color: '#FFFFFF',
                    fontFamily: 'Gilroy',
                    fontWeight: 600,
                    fontSize: '15px',
                    lineHeight: '125%',
                    letterSpacing: 0,
                    textAlign: 'center',
                    padding: '16px 0 4px',
                    textDecoration: 'none',
                    // borderBottom: '1px solid #40434F',
                    width: '100%',
                }}
            >Список лидеров:</Typography>}
            {pagedPlayers.map(({id, name, points, country, avatar}, index) => {
                const cup = getCupByIndex((page - 1) * PAGE_SIZE + index + 1);
                return (
                <Box 
                    key={id}
                    sx={{
                        position: 'relative',
                        boxSizing: 'border-box',
                        bgcolor: isMain ? '' : '#6C5DD31A',
                        display: 'flex',
                        gap: !isMain ? 1 : 2,
                        alignItems: 'center',
                        width: '100%',
                        borderBottom: isMain ? '1px solid #40434F' : '',
                        borderRadius: !isMain ? 2 : 0,
                        p: isMain ? 'auto' : 2,
                        minHeight: '82px',
                        maxHeight: '82px',
                        mb: !isMain && index === pagedPlayers.length - 1 ? '20px' : '',
                    }}
                >
                    {!isMain && <Box
                        sx={{
                            bgcolor: '#161413',
                            height: '20px',
                            width: '28px',
                            borderRadius: '60px',
                            fontFamily: 'Gilroy',
                            fontWeight: 800,
                            fontSize: '12px',
                            lineHeight: 1,
                            letterSpacing: 0,
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >{(page - 1) * PAGE_SIZE + index + 1}.</Box>}
                    <img 
                        src={avatar ? avatar : '/avatar/no_avatar.svg'}
                        alt=''
                        width={isMain ? 40 : 48}
                        height={isMain ? 40 : 48}
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
                                    fontSize: isMain ? '15px' : '17px',
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
                                fontSize: isMain ? '13px' : '15px',
                                lineHeight: '125%',
                                letterSpacing: 0,
                                textAlign: 'center',
                            }}
                        >{getShortAmount(points)}</Typography>
                    </Box>
                    <img
                        style={{
                            position: 'absolute',
                            right: 0,
                            marginLeft: 'auto',
                            translate: isMain ? '14px 3px' : !cup.startsWith('n') ? '14px' : '-16px',
                        }}
                        width={isMain ? 64 : cup.startsWith('n') ? 24 : 84}
                        height={isMain ? 64 : cup.startsWith('n') ? 24 : 84}
                        alt=""
                        src={`leaderboard/${cup}`}
                    />
                </Box>
            )})}
            {isMain && <Link
                to='leaderboard'
                style={{
                    color: '#40434F',
                    fontFamily: 'Gilroy',
                    fontWeight: 600,
                    fontSize: '13px',
                    lineHeight: '125%',
                    letterSpacing: 0,
                    textAlign: 'center',
                    padding: '16px 0',
                    textDecoration: 'none',
                }}
            >Показать всех</Link>}
            {!isMain && <Pagination total={totalPages} page={page} onChange={handleChange} />}
        </Box>
}

export default LeaderBoard;