import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface IPlayerResults {
  timeToShow: string;
}

const PlayerResults: FC<IPlayerResults> = ({ timeToShow }) => {
  return (
    <Box>
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 0.5,
        }}
      >
        <img src="countries/ru.svg" alt="" />
        <Typography
          sx={{
            textDecoration: "none",
            fontFamily: "Gilroy",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: 0,
            color: "#fff",
          }}
        >
          Oleg Staravoit
        </Typography>
      </Box>
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          mb: 2.5,
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <img src="icons/star.svg" alt="star" width={24} height={24} />
          <Typography
            sx={{
              textDecoration: "none",
              fontFamily: "Gilroy",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: 1,
              letterSpacing: 0,
              color: "#828289",
            }}
          >
            1200 баллов
          </Typography>
        </Box>
        {timeToShow && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <img src="icons/alert_gray.svg" alt="star" width={24} height={24} />
            <Typography
              sx={{
                textDecoration: "none",
                fontFamily: "Gilroy",
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: 1,
                letterSpacing: 0,
                color: "#828289",
              }}
            >
              {timeToShow} мин
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <img src="icons/mark_gray.svg" alt="star" width={24} height={24} />
          <Typography
            sx={{
              textDecoration: "none",
              fontFamily: "Gilroy",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: 1,
              letterSpacing: 0,
              color: "#828289",
            }}
          >
            90 м
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PlayerResults;
