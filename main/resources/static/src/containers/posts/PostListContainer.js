import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import Responsive from '../../components/common/Responsive';
import PostsAlign from '../../components/posts/PostsAlign';
import MonthlyCalendar from '../../components/posts/MonthlyCalendar';
import { postListState } from '../../State/postState';
import { userState } from '../../State/userState';
// import { listPosts } from '../../lib/api/posts';

const PostListBlock = styled(Responsive)`
  width: 100%;
  padding: 50px 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// id, title, content, emoji, tags, createdAt, updatedAt, deletedAt
export const postsExample = [
  {
    postId: 0,
    post: {
      id: 0,
      title: '우오와아',
      content:
        '가나다라마바사아자차카타파하어느정도적어야이길이가끝이나는것일까알아맞혀보자이정도로썼는데도아직도안넘어갔다면그럴때는다시생각해보자답이나올것이다',
      emoji: 'Love',
      tags: '',
      createdAt: '2023-10-11T22:46:17.348',
      updatedAt: '',
      deletedAt: '',
    },
  },
  {
    postId: 1,
    post: {
      id: 1,
      title: '가을이다',
      content:
        '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
      emoji: 'PokerFace',
      tags: '',
      createdAt: '2023-10-12T22:46:17.348',
      updatedAt: '',
      deletedAt: '',
    },
  },
  {
    postId: 2,
    post: {
      id: 2,
      title: '가을이다',
      content:
        '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
      emoji: 'Fear',
      tags: '',
      createdAt: '2023-10-13T22:46:17.348',
      updatedAt: '',
      deletedAt: '',
    },
  },
  {
    postId: 3,
    post: {
      id: 3,
      title: '가을이다',
      content:
        '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
      emoji: 'Sad',
      tags: '',
      createdAt: '2023-10-14T22:46:17.348',
      updatedAt: '',
      deletedAt: '',
    },
  },
  {
    postId: 4,
    post: {
      id: 4,
      title: '가을이다',
      content:
        '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
      emoji: 'Happy',
      tags: '',
      createdAt: '2023-10-15T22:46:17.348',
      updatedAt: '',
      deletedAt: '',
    },
  },
];

export default function PostListContainer() {
  const account = useRecoilValue(userState).account;
  const [postList, setPostList] = useRecoilState(postListState);
  const { postsInfo, posts, postsError } = postList;
  // const [loading, setLoading] = useRecoilState(postState).loading;
  const navigate = useNavigate();

  // 포스트 목록 불러오기
  useEffect(() => {
    const getPosts = async () => {
      try {
        // 로딩 시작
        // setLoading(true);
        // 포스트 목록 불러오기
        // const response = await listPosts(account);
        // setPostList({
        //   ...posts,
        //   postInfo: response.data,
        // });
      } catch (e) {}
      // setLoading(false);
    };
    getPosts();
  }, [account, posts, setPostList]);

  // 에러 발생 시
  if (postsError) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <MonthlyCalendar account={account} posts={postsExample} />
      <PostsAlign account={account} posts={postsExample} />
    </PostListBlock>
  );
}
