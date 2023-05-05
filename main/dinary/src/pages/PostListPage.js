import React from 'react';
import Button from '../components/common/Button';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const PostListPage = () => {
  return (
    <div>
      <Link to={"/login"}><Button>Login</Button></Link>
    </div>
  );
};

export default PostListPage;
