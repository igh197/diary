import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PostItemBlock = styled.div`
  width: 100%;
  height: 6rem;
  margin: 0 0 1rem 0;
  padding: 1rem 1.2rem;
  background: ${(props) => props.theme.listBlock};
  backdrop-filter: blur(3px);
  background-size: cover;
  border-radius: 7px;

  z-index: 55;
`;

const PostContentBlock = styled.div`
  height: 100%;
  z-index: 60;

  span {
    margin: 0 0.5rem 0 0;

    color: ${(props) => props.theme.subtext};
    font-size: 1rem;

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

export default function PostItem({ account, post }) {
  const { title, content, createAt } = post;

  return (
    <PostItemBlock>
      <PostContentBlock>
        <div className="title">
          <Link to={`/${account}/${post.id}`}>
            <span>{title}</span>
          </Link>

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
