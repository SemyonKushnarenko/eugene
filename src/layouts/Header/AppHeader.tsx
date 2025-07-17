import { Box, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const AppHeader: FC = () => {
    const location = useLocation();
    const backLinks: Record<string, string[]> = {
        '/': ['/leaderboard', '/choose-game']   
    };
    const backLink = useMemo(() => {
        if (location.pathname.startsWith('/choose-game/') && location.pathname !== '/choose-game') {
            return '/choose-game';
        }
        for (const [target, sources] of Object.entries(backLinks)) {
            if (sources.includes(location.pathname)) {
                return target;
            }
        }
        return '';
    }, [location.pathname]);
    
    return <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            gap: 2,
        }}
    >
        <img
            alt=""
            height={48}
            width={118}
            src='/main_header.png'
        />
        {backLink && <Link
            to={backLink}
            style={{
                width: 40,
                aspectRatio: 1,
                backgroundColor: '#6C5DD333',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img
                alt=""
                height={24}
                width={24}
                src='/icons/backArrow.svg'
            />
        </Link>}
        <img
            style={{
                marginLeft: 'auto',
            }}
            alt=""
            height={24}
            width={24}
            src='/icons/menu.svg'
        />
    </Box>
}

export default AppHeader;