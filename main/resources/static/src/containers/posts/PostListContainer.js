import React, { useEffect } from 'react';
import qs from 'qs';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import PostList from '../../components/posts/PostList';

const PostListContainer = ({ location, match }) => {
  const navigate = useNavigate();
  const {
    posts,
    error,
    loading,
    user,
  } = ({ posts, loading, user }) => ({
    posts: posts.posts,
    error: posts.error,
    loading: loading['posts/LIST_POSTS'],
    user: user.user,
  });

  useEffect(() => {
    const { account } = match.parse;
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    // listPosts({ tag, page, account });
  }, [location.search]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default PostListContainer;
