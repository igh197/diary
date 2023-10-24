import PostListContainer from '../containers/posts/PostListContainer';
// import PaginationContainer from '../containers/posts/PaginationContainer';
import HeaderContainer from '../containers/header/HeaderContainer';

export default function PostListPage() {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      {/* <PaginationContainer /> */}
    </>
  );
}
