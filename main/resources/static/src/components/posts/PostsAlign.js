import styled from 'styled-components';
import Button from '../common/Button';
import PostItem from './PostItem';

const Wrapper = styled.div`
  width: 30%;
  height: 50%;

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 0.5rem;
    font-size: 1rem;
  }
`;

const WritePostButton = styled(Button)`
  font-weight: bold;
  color: ${(props) => props.theme.text2};
  letter-spacing: 1px;
`;

const PostListBlock = styled.div`
  background-image: url('/images/Posts/ListBlock.png');
  background-size: cover;
  border-radius: 13px;
  width: 100%;
  color: white;
  padding: 1rem 1.5rem;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export default function PostsAlign({ posts }) {
  const postsExample = [
    {
      id: 1,
      post: {
        title: '우오와아',
        body: '가나다라마바사아자차카타파하어느정도적어야이길이가끝이나는것일까알아맞혀보자이정도로썼는데도아직도안넘어갔다면그럴때는다시생각해보자답이나올것이다',
        publishedDate: '2023.10.13',
      },
    },
    {
      id: 2,
      post: {
        title: '가을이다',
        body: '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
        publishedDate: '2023.10.13',
      },
    },
    {
      id: 3,
      post: {
        title: '가을이다',
        body: '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
        publishedDate: '2023.10.13',
      },
    },
    {
      id: 4,
      post: {
        title: '가을이다',
        body: '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
        publishedDate: '2023.10.13',
      },
    },
    {
      id: 5,
      post: {
        title: '가을이다',
        body: '선선한가을날씨와함께부는싱그러운바람이얼마나좋은지모른다이래서가을인가너무너무좋다',
        publishedDate: '2023.10.13',
      },
    },
  ];

  return (
    <Wrapper>
      <div className="button-wrapper">
        <WritePostButton to="/write">글쓰기</WritePostButton>
        {/* {showWriteButton && <Button to="/write">새 글 작성하기</Button>} */}
      </div>
      <PostListBlock>
        <p>내 일기</p>
        {postsExample.map((content) => (
          <PostItem key={content.id} post={content.post} />
        ))}
        {/* 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
        {/* {!loading && posts && (
<div>
  <PostItem />
  <PostItem />
  <PostItem />
</div>
)} */}
      </PostListBlock>
    </Wrapper>
  );
}
