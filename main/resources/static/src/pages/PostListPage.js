import React from 'react';
// import { Link } from '../../node_modules/react-router-dom/dist/index';
// import Header from '../components/base/Header';
import HeaderContainer from '../components/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;