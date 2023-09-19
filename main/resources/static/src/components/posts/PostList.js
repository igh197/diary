import styled from 'styled-components';
// import { Link } from '../../../node_modules/react-router-dom/dist/index';
import Responsive from '../common/Responsive';
// import SubInfo from '../common/SubInfo';
// import Tags from '../common/Tags';
import WeeklyCalendar from './calendar/WeeklyCalendar';
import Catagories from './Catagories';
import PostsAlign from './PostsAlign';
import MonthlyCalendar from './calendar/MonthlyCalendar';

const PostListBlock = styled(Responsive)`
  width: 100%;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const PostListBottom = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListAndCalendarBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 3rem;
`;

export default function PostList({ posts, loading, error, showWriteButton }) {
  // 에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WeeklyCalendar />
      <PostListBottom>
        <Catagories />
        <ListAndCalendarBlock>
          <PostsAlign />
          <MonthlyCalendar />
        </ListAndCalendarBlock>
      </PostListBottom>
    </PostListBlock>
  );
}
