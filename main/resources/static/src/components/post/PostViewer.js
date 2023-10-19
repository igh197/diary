import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import ToTop from '../write/ToTop';

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

export default function PostViewer({ post, actionButtons, onRemove }) {
  //error
  // // 에러 발생 시
  // if (error) {
  //   if (error.response && error.response.status === 404) {
  //     return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
  //   }
  //   return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  // }

  // // 로딩 중이거나 아직 포스트 데이터가 없을 때
  // if (loading || !post) {
  //   return null;
  // }

  const { id, title, content, emoji, tags, createdAt, updatedAt, deletedAt } =
    post;
  return (
    <PostViewerBlock>
      <Contents>
        <PostHead>
          <div>
            <div className="info">
              <div>{createdAt}</div>
              <div>
                님의 마음구슬을 <span>{emoji}</span>구슬이에요.
              </div>
            </div>
            <div className="Updates">{updatedAt}</div>
          </div>
          <span>{title}</span>
        </PostHead>
        {actionButtons}
        <PostContent dangerouslySetInnerHTML={{ __html: content }} />
      </Contents>
      <ToTop />
    </PostViewerBlock>
  );
}
