import formatTime from "../../shared/utils/formatTime";
import { timeOptions } from "../../helpers/timeOptions";
import {
  canPlayAtom,
  currentRoundAtom,
  isFinishAtom,
  markAtom,
  timeAtom,
} from "../../store/gameAtoms";
import { Box, Button, Typography } from "@mui/material";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerResults from "./PlayerResults";

const YourResult: FC = () => {
  const navigate = useNavigate();
  const isFinish = useAtomValue(isFinishAtom);
  const time = useAtomValue(timeAtom);
  const [currentRound, setCurrentRound] = useAtom(currentRoundAtom);

  const [timeToShow, setTimeToShow] = useState<string>("-");

  useEffect(() => {
    const necessaryTime = timeOptions.find((t) => t.time === time);
    if (!necessaryTime) return;
    if (necessaryTime.time < 0) return setTimeToShow("");
    setTimeToShow(formatTime(necessaryTime.time));
  }, [time]);
  const setCanPlay = useSetAtom(canPlayAtom);
  const setMark = useSetAtom(markAtom);
  const handleNextRoundClick = () => {
    setCanPlay(true);
    setMark(null);
    setCurrentRound(isFinish ? 1 : currentRound + 1);
    if (isFinish) {
      navigate("/finish");
    }
  };
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        bgcolor: "#201E1D",
        borderRadius: 2,
        p: 1.5,
        position: "relative",
        zIndex: 0,
      }}
    >
      <PlayerResults timeToShow={timeToShow} />
      <Button
        sx={{
          bgcolor: "#6C5DD3",
          borderRadius: "16px",
          width: "100%",
          zIndex: 15,
          textTransform: "none",
          p: "14px",
        }}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          textDecoration: "none",
          fontFamily: "Gilroy",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: 0,
          color: "#fff",
          verticalAlign: "middle",
        }}
        onClick={handleNextRoundClick}
      >
        {isFinish ? "Завершить игру" : "Следующий раунд"}
        <img src="icons/arrowRight.svg" alt="" />
      </Button>
    </Box>
  );
};

export default YourResult;
