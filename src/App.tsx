import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameLayout from "./layouts/GameLayout";
import AppLayout from "./layouts/AppLayout";
import GamePage from "./pages/GamePage";
import MainPage from "./pages/MainPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import ChooseGamePage from "./pages/ChooseGamePage";
import GameParamsPage from "./pages/GameParamsPage";
import { init, isTMA, miniApp, swipeBehavior } from "@telegram-apps/sdk-react";
import { LanguageEnum, OpenAPI } from "./api/generated";
import { retrieveLaunchParams, RetrieveLPResult } from "@telegram-apps/sdk";
import { useGetMe } from "./api/hooks/queries/use-get-me";
import FinishPage from "./pages/FinishPage";

// init();
// miniApp.mount.ifAvailable();
// miniApp.ready.ifAvailable();
// swipeBehavior.mount.ifAvailable();
// swipeBehavior.disableVertical.ifAvailable();

// const { initDataRaw } = retrieveLaunchParams();
// if (initDataRaw && isTMA()) {
//   OpenAPI.HEADERS = {
//     Authorization: String(initDataRaw),
//   };
// }

// console.log(initDataRaw);

export default function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useGetMe({
    nickname: "trisemya",
    lang: LanguageEnum.RU,
    country: "Belarus",
    country_code: "RU",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <MainPage />
            </AppLayout>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <AppLayout>
              <LeaderBoardPage />
            </AppLayout>
          }
        />
        <Route path="/finish" element={<FinishPage />} />
        <Route
          path="/choose-game"
          element={
            <AppLayout>
              <ChooseGamePage />
            </AppLayout>
          }
        />
        <Route
          path="/choose-game/:slug"
          element={
            <AppLayout>
              <GameParamsPage />
            </AppLayout>
          }
        />
        <Route
          path="/game"
          element={
            <GameLayout>
              <GamePage />
            </GameLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
