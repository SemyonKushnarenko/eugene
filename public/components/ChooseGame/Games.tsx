import { Box } from "@mui/material";
import { FC } from "react";
import Game from "./Game";
import { games } from "../../helpers/games";

const Games: FC = () => {
    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            width: '100%',
        }}
    >
        {games.map(game => <Game game={game} />)}
    </Box>
}

export default Games;