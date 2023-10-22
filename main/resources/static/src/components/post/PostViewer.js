import styled from 'styled-components';
import Responsive from '../common/Responsive';
import ToTop from '../common/ToTop';
import Updates from './modal/Updates';

const PostViewerBlock = styled(Responsive)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostHead = styled.div`
  width: 100%;
  height: 120px;
  padding: 30px 65px 20px 65px;
  background: ${(props) => props.theme.background};
  box-shadow: 0px 23px 6px 0 rgba(0, 0, 0, 0),
    0px 14px 6px 0 rgba(0, 0, 0, 0.01), 0px 8px 5px 0 rgba(0, 0, 0, 0.05),
    0px 4px 4px 0 rgba(0, 0, 0, 0.09), 0px 1px 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .category {
    padding: 0 0 5px 0;

    font-size: 1.2rem;
    font-weight: 900;
    color: ${(props) => props.theme.text};
  }

  .subtitles {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${(props) => props.theme.subtext};
  }
`;

const Contents = styled.div`
  width: 66%;
  height: 100vh;
  margin: 3rem;
  padding: 1rem 3rem;
  border-radius: 16px;
  background: ${(props) => props.theme.postContent}};

  color: ${(props) => props.theme.subtext};

  .title {
    padding: 3rem 0 1.5rem 0;
  }

  span {
    font-size: 1.5rem;
  }
`;

const PostContent = styled.div`
  padding: 1rem;
  // font-size: 1.3125rem;
`;

const postInfo = {
  backgroundImage: '/images/Background/Login2.png',
  contentColor: '#F2F2F2',
};

export default function PostViewer({ post, onEdit, onRemove }) {
  const { backgroundImage, contentColor } = postInfo;
  window.scrollTo({ top: 0 });
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
    <PostViewerBlock
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'round',
        backgroundSize: '25% 25%',
      }}
    >
      <PostHead>
        {console.log('post', post)}
        <div>
          <div className="category">
            {createdAt.slice(0, 4)}년 {createdAt.slice(5, 7)}월{' '}
            {createdAt.slice(8, 10)}일
          </div>
          <div className="subtitles">
            님의 마음구슬을 <span>{emoji}</span>구슬이에요.
          </div>
        </div>
        <Updates onEdit={onEdit} onRemove={onRemove} />
      </PostHead>
      <Contents>
        <div
          className="title"
          style={{ borderBottom: `2px solid ${contentColor}` }}
        >
          <span>{title}</span>
        </div>
        {/* <PostContent dangerouslySetInnerHTML={{ __html: content }} /> */}
        <PostContent>{content}</PostContent>
      </Contents>
      <ToTop />
    </PostViewerBlock>
  );
}
