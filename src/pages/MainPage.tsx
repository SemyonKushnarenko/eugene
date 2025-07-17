import LeaderBoard from "../components/Main/LeaderBoard";
import StartGame from "../components/Main/StartGame";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

const MainPage: FC = () => {
    return <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%'
        }}
    >
        <StartGame></StartGame>
        <LeaderBoard isMain></LeaderBoard>
    </Box>
}

export default MainPage;