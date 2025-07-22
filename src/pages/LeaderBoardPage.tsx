import LeaderBoard from "../components/Main/LeaderBoard";
import { Box } from "@mui/material";
import { FC, useLayoutEffect } from "react";

const LeaderBoardPage: FC = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return <Box
        sx={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%'
        }}
    >
        <LeaderBoard />
    </Box>
}

export default LeaderBoardPage;