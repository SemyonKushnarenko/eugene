import { Theme, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameLayout from './layouts/GameLayout';
import AppLayout from './layouts/AppLayout';
import GamePage from './pages/GamePage';
import MainPage from './pages/MainPage';
import LeaderBoardPage from './pages/LeaderBoardPage';

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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
