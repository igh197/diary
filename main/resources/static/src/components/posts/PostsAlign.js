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

  color: ${(props) => props.theme.listTitle};

  p {
    margin-bottom: 1.5rem;

    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }
`;

export default function PostsAlign({ account, posts }) {
  return (
    <Wrapper>
      <div className="button-wrapper">
        <WritePostButton to="/write">글쓰기</WritePostButton>
      </div>
      <PostListBlock>
        <p>내 일기</p>
        {posts.map((info) => (
          <PostItem key={info.post.id} post={info.post} account={account} />
        ))}
      </PostListBlock>
    </Wrapper>
  );
}
