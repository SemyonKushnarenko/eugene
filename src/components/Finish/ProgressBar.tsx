import { isFinishAtom } from "../../store/gameAtoms";
import { IGame } from "../../helpers/games";
import { Box, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";

interface IProgressBar {
  from: number;
  to: number;
}

const ProgressBar: FC<IProgressBar> = ({ from, to }) => {
  useEffect(() => {}, [from, to]);

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        boxSizing: "border-box",
        bgcolor: "#000000B2",
        width: "100%",
        height: "35px",
        mt: "auto",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        px: "12px",
        py: "8px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: "10px",
          bgcolor: "#40434F",
          borderRadius: "32px",
          overflow: "hidden",
          mr: 1,
        }}
      >
        <Box
          sx={{
            borderRadius: "32px",
            height: "100%",
            width: (from / to) * 100 + "%",
            bgcolor: "#9287DE",
          }}
        ></Box>
      </Box>
      <Typography
        sx={{
          fontFamily: "Gilroy",
          fontWeight: 600,
          fontSize: "22px",
          lineHeight: 1,
          letterSpacing: "-0.28px",
          color: "#9287DE",
        }}
      >
        {from}
      </Typography>
      <Typography
        sx={{
          alignSelf: "flex-end",
          fontFamily: "Gilroy",
          fontWeight: 600,
          fontSize: "15px",
          lineHeight: 1,
          letterSpacing: "-0.28px",
          color: "#828289",
        }}
      >
        /{to}
      </Typography>
    </Box>
  );
};

export default ProgressBar;
