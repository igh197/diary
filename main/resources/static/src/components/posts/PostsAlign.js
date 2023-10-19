import styled from 'styled-components';
import Button from '../common/Button';
import PostItem from './PostItem';

const Wrapper = styled.div`
  margin: 0 10px;

  .button-wrapper {
    margin: 0 0 2rem 0;
    padding: 0 0.5rem 0 1rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-size: 1rem;
  }
`;

const WritePostButton = styled(Button)`
  font-weight: bold;
  color: ${(props) => props.theme.subtext};
  letter-spacing: 1px;
`;

const PostListBlock = styled.div`
  width: 425px;
  height: 753px;
  background-image: url(${(props) => props.theme.src});
  background-size: cover;
  background-position: bottom;
  border-radius: 13px;
  padding: 1rem 1.5rem;

  color: white;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export default function PostsAlign({ posts }) {
  return (
    <Wrapper>
      <div className="button-wrapper">
        <WritePostButton to="/write">글쓰기</WritePostButton>
      </div>
      <PostListBlock>
        <p>내 일기</p>
        {posts.map((info) => (
          <PostItem key={info.id} post={info.post} />
        ))}
      </PostListBlock>
    </Wrapper>
  );
}
