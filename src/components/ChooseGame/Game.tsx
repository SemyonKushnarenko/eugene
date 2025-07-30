import { isFinishAtom } from "../../store/gameAtoms";
import { IGame } from "../../helpers/games";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import ProgressBar from "../Finish/ProgressBar";

interface IGameProps {
  game: IGame;
  isFinish?: boolean;
}

const Game: FC<IGameProps> = ({ game, isFinish = false }) => {
  const { name, slug, icon, bg } = game;

  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      to={slug}
      style={{
        boxSizing: "border-box",
        height: 132,
        width: "100%",
        borderRadius: "10px",
        padding: 8,
        backgroundImage: "url(" + bg + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: isFinish ? "space-between" : "flex-start",
        flexDirection: "column",
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
        pointerEvents: isFinish ? "none" : "auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          backgroundImage: isFinish
            ? ""
            : "linear-gradient(180deg, rgba(14, 14, 14, 0) 0%, rgba(0, 0, 0, 1) 100%)",
          backdropFilter: "blur(1px)",
          zIndex: 1,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <img src={icon} alt={name} width={32} height={32} />
        <Typography
          sx={{
            fontFamily: "Gilroy",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: 1,
            letterSpacing: "-0.28px",
            color: "#FFFFFF",
          }}
        >
          {name}
        </Typography>
      </Box>
      {isFinish && <ProgressBar from={230} to={2500} />}
    </Link>
  );
};

export default Game;
