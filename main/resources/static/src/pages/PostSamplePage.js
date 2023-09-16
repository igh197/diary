import Header from '../components/common/HeaderContainer';
import PostList from '../components/posts/PostList';
import Pagination from '../components/posts/Pagination';

export default function PostSamplePage() {
  return (
    <>
      <Header />
      <PostList />
      <Pagination />
    </>
  );
}
