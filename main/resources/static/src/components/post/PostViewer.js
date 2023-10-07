import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import Responsive from '../common/Responsive';
import UserImage from '../common/userImage/UserImage';

// 테마 담는 공간 일단은 div로 놓고 나중에 image로 바꾸자
const PostViewerBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
`;

const Contents = styled.div`
  z-index: 10;
  width: 66%;
  height: 100vh;
  overflow-y: auto;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.content};
  color: ${(props) => props.theme.text3};
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[0]};
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  span {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0 1rem;
  }

  .info {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 3rem;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
`;

export default function PostViewer({
  userImage,
  post,
  error,
  loading,
  actionButtons,
}) {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }

  const { category, title, body, account, publishedDate, tags, emotions } =
    post;
  return (
    <PostViewerBlock>
      <Contents>
        <PostHead>
          <div className="info">
            <UserImage value={userImage} shrink={true} />
            {new Date(publishedDate).toLocaleDateString()}
          </div>
          {category} : <span>{title}</span>
          {/* <SubInfo account={account}>
            <span>
              <b>{account}</b>
            </span>
          </SubInfo> */}
          <Tags tags={tags} />
        </PostHead>
        {actionButtons}
        <PostContent dangerouslySetInnerHTML={{ __html: body }} />
      </Contents>
    </PostViewerBlock>
  );
}
