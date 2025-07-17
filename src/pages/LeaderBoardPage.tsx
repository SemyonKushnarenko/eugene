import LeaderBoard from "../components/Main/LeaderBoard";
import { Box } from "@mui/material";
import { FC } from "react";

const LeaderBoardPage: FC = () => {
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