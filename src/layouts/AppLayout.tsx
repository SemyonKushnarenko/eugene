import { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";
import AppHeader from "./Header/AppHeader";
import AppFooter from "./Footer/AppFooter";

const AppLayout: FC<{ children?: ReactNode }> = ({ children = null }) => (
  <Container
    sx={{
      minHeight: '100vh',
      maxWidth: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2,
    }}
    disableGutters
    maxWidth={false}
  >
    <img
        alt=""
        style={{
            position: 'absolute',
            left: -10,
            right: 0,
            top: -10,
            zIndex: -1,
            width: 'min(393px, 100%)'
        }}
        src='/main_bg.png'
    />
    <AppHeader />
    <Box
        sx={{
            flex: 1,
            width: '100%',
            // overflow: 'hidden',
        }}
    >
        {children}
    </Box>
    <AppFooter />
  </Container>
);

export default AppLayout; 