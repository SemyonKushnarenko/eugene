import { Box, Typography } from "@mui/material";
import { FC } from "react";

const AppHeader: FC = () => {
    return <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
        }}
    >
        <img
            alt=""
            height={48}
            width={118}
            src='/main_header.png'
        />
        <img
            alt=""
            height={24}
            width={24}
            src='/icons/menu.svg'
        />
    </Box>
}

export default AppHeader;