import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const AppFooter: FC = () => {
    const links = [
        {
            to: '/',
            name: 'About'
        },
        {
            to: '/',
            name: 'Support'
        },
        {
            to: '/',
            name: 'Submit a game'
        },
        {
            to: '/',
            name: 'Privacy | Terms'
        },
    ]
    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            paddingTop: '60px',
        }}
    >
        {links.map(({to, name}, id) => <Link
            onClick={() => {
                window.scrollTo(0, 0)
            }}
            key={id}
            to={to}
            style={{
                color: '#40434F',
                fontFamily: 'Gilroy',
                fontWeight: 600,
                fontSize: '17px',
                lineHeight: '125%',
                letterSpacing: '-0.28px',
                textAlign: 'center',
                textDecoration: 'none',
            }}
        >{name}</Link>)}

    <Link 
        onClick={() => {
            window.scrollTo(0, 0)
        }}
        to='/'
        style={{
            textAlign: 'center',
            paddingTop: '48px',
        }}
    >
        <img src='main_header.png' alt='' height={48} width={118}/>
    </Link>

    <Typography
        sx={{
            color: '#40434F',
            fontFamily: 'Gilroy',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '-0.28px',
            textAlign: 'center',
            padding: '40px 0 0',
            textDecoration: 'none',
        }}
    >© 2025 PGE Friends</Typography>
    <Typography
        sx={{
            color: '#40434F',
            fontFamily: 'Gilroy',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '-0.28px',
            textAlign: 'center',
            padding: '8px 0 0',
            textDecoration: 'none',
        }}
    >All referenced trademarks are the properties of their respective owners.</Typography>
    </Box>
} 

export default AppFooter;