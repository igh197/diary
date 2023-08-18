import Pagination from '../../components/posts/Pagination';
import { useSelector } from '../../../node_modules/react-redux/es/exports';
// import { withRouter } from "../../../node_modules/react-router-dom/esm/react-router-dom";
import qs from 'qs';

const PostListContainer = ({ location, match }) => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));

  // 포스트가 아직 없거나 로딩 중이면 아무것도 보여 주지 않음
  if (!posts || loading) return null;
  const { account } = match.params;

  // page가 없으면 1을 기본값으로 사용
  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      page={parseInt(page, 10)}
      lastPage={lastPage}
      account={account}
    />
  );
};

export default PostListContainer;
