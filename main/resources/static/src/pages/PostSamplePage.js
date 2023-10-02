import PostList from '../components/posts/PostList';
import Pagination from '../components/posts/Pagination';
import Header from '../components/common/Header';

export default function PostSamplePage() {
  return (
    <>
      <Header />
      <PostList />
      <Pagination />
    </>
  );
}
