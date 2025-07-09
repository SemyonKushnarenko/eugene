import { Container, Theme, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import { useEffect, useState } from 'react';
import GameHeader from './components/Header/GameHeader';
import MapContainer from './components/Map/MapContainer';
// import Sphere from './components/Sphere';
import PanoramaV2 from './components/Map/PanoramaV2';

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
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <GameHeader/>
        <MapContainer/>
        {/* <Sphere /> */}
        <PanoramaV2 />
      </Container>
    </ThemeProvider>
  );
}
