import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
// import SubInfo from '../common/SubInfo';
// import Tags from '../common/Tags';
import PostsAlign from './PostsAlign';
import MonthlyCalendar from './MonthlyCalendar';

const PostListBlock = styled(Responsive)`
  width: 100%;
  padding: 0 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function PostList({ posts, error }) {
  // 에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <MonthlyCalendar />
      <PostsAlign posts={posts} />
    </PostListBlock>
  );
}
