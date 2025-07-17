import { IGame } from "../../helpers/games";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface IGameProps {
    game: IGame
}

const Game: FC<IGameProps> = ({game}) => {
    const { name, slug, icon, bg } = game;

    return <Link
        to={slug}
        style={{
            boxSizing: "border-box",
            height: 132,
            width: '100%',
            borderRadius: '10px',
            padding: 8,
            backgroundImage: 'url(' + bg + ')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'flex-end',
            textDecoration: 'none',
            position: 'relative',
            overflow: 'hidden',
        }}
    >
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(180deg, rgba(14, 14, 14, 0) 0%, rgba(0, 0, 0, 1) 100%)',
            }}
        ></Box>
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                position: 'relative',
                zIndex: 2
            }}
        >
            <img
                src={icon}
                alt={name}
                width={32}
                height={32}
            />
            <Typography
                sx={{
                    fontFamily: 'Gilroy',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: 1,
                    letterSpacing: '-0.28px',
                    color: '#FFFFFF',
                }}
            >{name}</Typography>
        </Box>
    </Link>
}

export default Game;