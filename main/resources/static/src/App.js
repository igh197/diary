import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PostListPage />} path="/@:account" exact />
          <Route element={<PostListPage />} path="/" exact />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<WritePage />} path="/write" />
          <Route element={<PostPage />} path="/@:account/:postId" />
          <Route element={<SettingsPage />} path="/settings" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
