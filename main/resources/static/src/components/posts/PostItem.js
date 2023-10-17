import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PostItemBlock = styled.div`
  width: 100%;
  height: 6rem;
  background: ${(props) => props.theme.listBlock};
  backdrop-filter: blur(3px);
  background-size: cover;
  border-radius: 7px;
  margin-bottom: 1rem;
  padding: 1rem 1.2rem;
  z-index: 55;
`;

const PostContentBlock = styled.div`
  z-index: 60;
  height: 100%;

  span {
    color: ${(props) => props.theme.subtext};
    font-size: 1rem;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.gray[0]};
    }
  }

  .title {
    margin-bottom: 0.5rem;
  }

  color: ${palette.gray[0]};
  font-size: 0.8rem;
  font-weight: bold;
  padding-right: 3rem;
  text-align: left;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default function PostItem({ post }) {
  const { title, content, createAt } = post;

  return (
    <PostItemBlock>
      <PostContentBlock>
        <div className="title">
          <span>{title}</span>
          {createAt}
        </div>
        {content}
      </PostContentBlock>

      {/* <h2>
        <Link to={`/@${user.account}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo account={user.account} createAt={new Date(createAt)} />
      <Tags tags={tags} />
      <p>{content}</p> */}
    </PostItemBlock>
  );
}
