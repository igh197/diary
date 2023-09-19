// import { Link } from '../../node_modules/react-router-dom/dist/index';
import HeaderContainer from '../containers/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

export default function PostListPage() {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
}
