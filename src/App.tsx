import { Theme, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import { useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameLayout from './layouts/GameLayout';
import AppLayout from './layouts/AppLayout';
import GamePage from './pages/GamePage';
import MainPage from './pages/MainPage';
import LeaderBoardPage from './pages/LeaderBoardPage';
import ChooseGamePage from './pages/ChooseGamePage';
import GameParamsPage from './pages/GameParamsPage';

export default function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(localStorage.getItem('theme') === 'dark');
  const handleSwitchTheme = (e: any) => {
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    switch(isDarkMode) {
      case true: 
        setTheme(darkTheme);
        break;
      case false: 
        setTheme(lightTheme);
        break;
    }
  }, [isDarkMode, setTheme])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={
            <GameLayout>
              <GamePage />
            </GameLayout>
          } />
          <Route path="/" element={
            <AppLayout>
              <MainPage /> 
            </AppLayout>
          } />
          <Route path="/leaderboard" element={
            <AppLayout>
              <LeaderBoardPage /> 
            </AppLayout>
          } />
          <Route path="/choose-game" element={
            <AppLayout>
              <ChooseGamePage /> 
            </AppLayout>
          } />
          <Route path="/choose-game/:slug" element={
            <AppLayout>
              <GameParamsPage />
            </AppLayout>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
