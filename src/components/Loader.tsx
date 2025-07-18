import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";
import "./Loader.css"

const Loader: FC =() => {
    return <Container
        sx={{
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#0B0A0A',
        }}
        disableGutters
        maxWidth={false}
    >
    <img
        alt=""
        style={{
            position: 'absolute',
            top: -10,
            left: -10,
            zIndex: 10,
            width: 'min(393px, 100%)'
        }}
        src='/main_bg.png'
    />
    <Box
        sx={{
            zIndex: 10,
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <img
            // className="loader"
            alt=""
            style={{
                marginTop: '-140px',
                width: 'min(393px, 100%)'
            }}
            src='/icons/logo.svg'
        />
        <Typography
            sx={{
                mt: '-110px',
                fontFamily: 'Gilroy',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: 1,
                letterSpacing: '-0.28px',
                color: '#FFFFFF',
                textTransform: 'uppercase',
            }}
        >PUBG GEO SEARCH</Typography>
        <Typography
            sx={{
                mt: 1,
                fontFamily: 'Gilroy',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: 1.25,
                letterSpacing: '0',
                color: '#8A8989',
            }}
        >Подготовка локации...</Typography>
    </Box>
  </Container>
}

export default Loader