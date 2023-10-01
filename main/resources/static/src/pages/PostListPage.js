import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Header from '../components/common/header/Header';

export default function PostListPage() {
  return (
    <>
      <Header />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
}
