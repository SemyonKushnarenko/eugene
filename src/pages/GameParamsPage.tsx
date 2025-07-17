import Game from "../components/ChooseGame/Game";
import { Box } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetGame } from "../api/hooks/queries/use-get-game";

const GameParamsPage: FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { data: game } = useGetGame(slug || "");
    if (!slug) return null;
    return <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%',
            pt: '30px',
        }}
    >
        {game && <Game game={game} />}
    </Box>
}

export default GameParamsPage;