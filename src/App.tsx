import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repository from './pages/Repository';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repository />} />
      </Routes>
      <Footer />

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
