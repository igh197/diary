import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';
import LobbyPage from './pages/LobbyPage';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { themes } from './lib/styles/theme';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.pinkTheme);

  const handleChangeTheme = (themeName) => {
    const newTheme = themes[themeName];
    setCurrentTheme(newTheme);
    localStorage.setItem('new-theme', JSON.stringify(newTheme));
  };

  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const newTheme = JSON.parse(localStorage.getItem('new-theme'));
    if (newTheme) {
      setCurrentTheme(newTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <Routes>
          <Route element={<LobbyPage />} path="/" />
          <Route element={<PostListPage />} path="/@:account" exact />
          <Route element={<PostListPage />} path="/" exact />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<WritePage />} path="/write" />
          <Route element={<PostPage />} path="/@:account/:postId" />
          <Route
            element={
              <SettingsPage
                onChangeTheme={handleChangeTheme}
                value={currentTheme}
              />
            }
            path="/settings"
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
