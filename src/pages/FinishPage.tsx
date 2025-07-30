import GameInfo from "../components/Finish/GameInfo";
import Game from "../components/ChooseGame/Game";
import { currentGameAtom } from "../store/gameAtoms";
import { Box, Button, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import PlayerResults from "../components/Map/PlayerResults";
import formatTime from "../shared/utils/formatTime";

const FinishPage: FC = () => {
  const navigate = useNavigate();
  const [currentGame, setCurrentGame] = useAtom(currentGameAtom);
  if (!currentGame) {
    navigate("/choose-game");
    return;
  }

  function handlePlayAgain() {
    setCurrentGame(null);
    navigate("/choose-game");
  }

  function handleBack() {
    setCurrentGame(null);
    navigate("/");
  }

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        p: 2,
        pt: "68px",
        gap: "10px",
      }}
    >
      <img
        alt=""
        style={{
          position: "absolute",
          left: -10,
          right: 0,
          top: -10,
          zIndex: -1,
          width: "min(393px, 100%)",
        }}
        src="main_bg.png"
      />
      <Typography
        sx={{
          fontFamily: "Gilroy",
          fontWeight: 600,
          fontSize: "22px",
          lineHeight: 1.25,
          letterSpacing: 0,
          color: "#828289",
        }}
      >
        Результаты
      </Typography>
      <Game game={currentGame} isFinish />
      <GameInfo />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          width: "100%",
          p: 2,
          bgcolor: "#6C5DD31A",
          borderRadius: "16px",
        }}
      >
        <PlayerResults timeToShow={formatTime(96)} />
        <Box
          sx={{
            bgcolor: "#40434F",
            height: "1px",
            width: "100%",
            mb: "16px",
          }}
        />
        <PlayerResults timeToShow={formatTime(196)} />
        <Box
          sx={{
            bgcolor: "#40434F",
            height: "1px",
            width: "100%",
            mb: "16px",
          }}
        />
        <PlayerResults timeToShow={formatTime(9)} />
        <Box
          sx={{
            height: "1px",
            mb: "-16px",
          }}
        />
      </Box>
      <Button
        sx={{
          bgcolor: "#6C5DD3",
          borderRadius: "16px",
          width: "100%",
          zIndex: 15,
          textTransform: "none",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          fontFamily: "Gilroy",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: 0,
          color: "#fff",
        }}
        onClick={handlePlayAgain}
      >
        Играть снова
        <img src="icons/arrowRight.svg" alt="" />
      </Button>
      <Button
        onClick={handleBack}
        sx={{
          bgcolor: "#201E1D",
          borderRadius: "16px",
          height: "45px",
          zIndex: 15,
          fontFamily: "Gilroy",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: 0,
          color: "#fff",
          textTransform: "none",
        }}
      >
        Вернуться в меню
      </Button>
    </Box>
  );
};

export default FinishPage;
