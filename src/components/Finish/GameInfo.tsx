import formatTime from "../../shared/utils/formatTime";
import { roundOptions } from "../../helpers/roundOptions";
import { roundsAtom, timeAtom } from "../../store/gameAtoms";
import { Box, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { FC } from "react";

const GameInfo: FC = () => {
  const rounds = useAtomValue(roundsAtom);
  const time = useAtomValue(timeAtom);
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        boxSizing: "border-box",
        bgcolor: "#6C5DD31A",
        width: "100%",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        px: "12px",
        py: "8px",
      }}
    >
      <Box
        sx={{
          gap: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src="/icons/gamepad.svg" alt="" width={24} height={24} />
        <Typography
          sx={{
            fontFamily: "Gilroy",
            fontWeight: 600,
            fontSize: "17px",
            lineHeight: 1,
            color: "#FFFFFF",
          }}
        >
          {roundOptions.find((r) => r.rounds === rounds)?.label ?? "1 раунд"}
        </Typography>
      </Box>
      {time >= 0 && (
        <Box
          sx={{
            gap: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="/icons/alert.svg" alt="" width={24} height={24} />
          <Typography
            sx={{
              fontFamily: "Gilroy",
              fontWeight: 600,
              fontSize: "17px",
              lineHeight: 1,
              color: "#FFFFFF",
            }}
          >
            {formatTime(time)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default GameInfo;
