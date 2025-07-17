import Games from "../components/ChooseGame/Games";
import { Box } from "@mui/material";
import { FC } from "react";

const ChooseGamePage: FC = () => {
    return <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%',
            mb: '160px',
            mt: '30px',
        }}
    >
        <Games />
    </Box>
}

export default ChooseGamePage;