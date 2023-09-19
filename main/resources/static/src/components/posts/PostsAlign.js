import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const WritePostButtonWrapper = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: center;
`;

const WritePostButton = styled(Button)`
  display: inline-block;
  text-align: center;
  border-radius: 50px;
  width: 60%;
  height: 4rem;
  font-size: 3rem;
  font-weight: bold;
  background: ${(props) => props.theme.weeklyContent};
  color: ${(props) => props.theme.text2};
`;

const PostItemBlock = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: row;
  align-items: center;
  border-bottom: 1px solid ${palette.gray[0]};
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }

  h2 {
    margin-left: 3rem;
    color: ${(props) => props.theme.text3};
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[0]};
    }
  }

  p {
    margin-top: 2rem;
  }

  .img {
    display: inline-block;
    width: 12rem;
    height: 6rem;
    margin-left: 1rem;
    maring-right: 1rem;
    background: ${palette.gray[0]};
  }
`;

const PostItem = ({ post, id }) => {
  // const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <div className="img" />
      <h2>제목{id}</h2>
      {/* <h2>
        <Link to={`/@${user.account}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo account={user.account} publishedDate={new Date(publishedDate)} />
      <Tags tags={tags} />
      <p>{body}</p> */}
    </PostItemBlock>
  );
};

const PostsAlignBlock = styled.div`
  display: inline-block;

  height: 40rem;
  background: ${(props) => props.theme.content};
  margin-bottom: 3rem;
`;

export default function PostsAlign() {
  return (
    <PostsAlignBlock>
      {' '}
      <WritePostButtonWrapper>
        <WritePostButton to="/write">+</WritePostButton>
        {/* {showWriteButton && <Button to="/write">새 글 작성하기</Button>} */}
      </WritePostButtonWrapper>
      <PostItem id={1} />
      <PostItem id={2} />
      <PostItem id={3} />
      {/* 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
      {/* {!loading && posts && (
<div>
  <PostItem />
  <PostItem />
  <PostItem />
</div>
)} */}
    </PostsAlignBlock>
  );
}
