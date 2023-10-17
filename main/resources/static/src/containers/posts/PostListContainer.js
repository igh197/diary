import { useEffect } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Responsive from '../../components/common/Responsive';
import PostsAlign from '../../components/posts/PostsAlign';
import MonthlyCalendar from '../../components/posts/MonthlyCalendar';
import { postState } from '../../State/postState';
import { userState } from '../../State/userState';
import { useRecoilState, useRecoilValue } from 'recoil';

const PostListBlock = styled(Responsive)`
  width: 100%;
  padding: 50px 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const postsExample = [
  {
    id: 1,
    post: {
      title: '우오와아',
      content:
        '가나다라마바사아자차카타파하어느정도적어야이길이가끝이나는것일까알아맞혀보자이정도로썼는데도아직도안넘어갔다면그럴때는다시생각해보자답이나올것이다',
      emoji: 'BlackFace',
      createAt: '2023-10-11T22:46:17.348',
    },
  },
  {
    id: 2,
    post: {
      title: '가을이다',
      content:
        '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
      emoji: 'BlackFace',
      createAt: '2023-10-12T22:46:17.348',
    },
  },
  {
    id: 3,
    post: {
      title: '가을이다',
      content:
        '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
      emoji: 'BlackFace',
      createAt: '2023-10-13T22:46:17.348',
    },
  },
  {
    id: 4,
    post: {
      title: '가을이다',
      content:
        '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
      emoji: 'BlackFace',
      createAt: '2023-10-14T22:46:17.348',
    },
  },
  {
    id: 5,
    post: {
      title: '가을이다',
      content:
        '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
      emoji: 'BlackFace',
      createAt: '2023-10-15T22:46:17.348',
    },
  },
];

export default function PostListContainer() {
  // const account = useRecoilValue(userState).account;
  // const [posts, setPosts] = useRecoilState(postState).posts;
  // const [error, setError] = useRecoilState(postState).error;
  // const [loading, setLoading] = useRecoilState(postState).loading;

  // 포스트 목록 불러오기

  // 에러 발생 시
  // if (error) {
  //   return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  // }
  return (
    <PostListBlock>
      <MonthlyCalendar posts={postsExample} />
      <PostsAlign posts={postsExample} />
    </PostListBlock>
  );
}
