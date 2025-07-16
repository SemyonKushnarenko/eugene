import { FC, ReactNode } from "react";
import { Container } from "@mui/material";
import GameHeader from "./Header/GameHeader";

const GameLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '100vh',
      bgcolor: 'background.default',
      p: 0,
      maxWidth: '100vw',
      px: '16px'
    }}
    disableGutters
    maxWidth={false}
  >
    <GameHeader />
    {children}
  </Container>
);

export default GameLayout; 