// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import SettingsPage from './pages/SettingsPage';
import { ThemeProvider } from 'styled-components';
import { themeState } from './State/userState';
import { themes } from './lib/styles/theme';
import PasswordContainer from './containers/settings/PasswordContainer';
import ThemeContainer from './containers/settings/ThemeContainer';

export default function App() {
  const currentTheme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Router>
        <Routes>
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<LoginPage />} path="/" />
          <Route element={<SettingsPage />} path="/user">
            <Route element={<PasswordContainer />} path="/user/" />
            <Route element={<ThemeContainer />} path="/user/theme" />
          </Route>
          <Route element={<PostListPage />} path="/:account" />
          <Route element={<WritePage />} path="/write" />
          <Route element={<PostPage />} path="/:account/:postId" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
