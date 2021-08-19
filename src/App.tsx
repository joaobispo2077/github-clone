import 'react-calendar-heatmap/dist/styles.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repository from './pages/Repository';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { ThemeName, themes } from './styles/themes';

function App() {
  const [themeName, setThemeName] = useState<ThemeName>('dark');
  const currentTheme = themes[themeName];

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repository />} />
        </Routes>
        <Footer />

        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
