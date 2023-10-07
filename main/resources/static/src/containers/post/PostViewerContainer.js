// import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
// import { removePost } from '../../lib/api/posts';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userProfileState } from '../../State/userState';
// import { postState } from '../../State/postState';

//http://localhost:3000/account/1
const postIdData = {
  1: {
    post: {
      category: '카테고리1',
      title: '제목',
      body: '내용',
      account: 'account',
      publishedDate: '2021-08-18T11:22:01.000Z',
      tags: ['태그1', '태그2', '태그3'],
      emotions: '기쁨',
    },

    error: null,
  },
};

// 여기에 이미지도 추가해야해 (사용자 프로필 사진)
export default function PostViewerContainer({ match }) {
  // Sample
  const { postId } = useParams();
  const posting = postIdData[postId];

  // 처음 마운트될 때 포스트 읽기 API 요청
  // 다시 보자!!
  // const { postId } = match.params;/
  const user = useRecoilValue(userProfileState);
  const { account, userImage } = user;
  const navigate = useNavigate();
  // const [postInfo, setPostInfo] = useRecoilState(postState);
  // const { post, error } = postInfo;

  // useEffect(() => {
  //   readPost(postId);
  //   // 언마운트될 때 리덕스에서 포스트 데이터 없애기
  //   return () => {
  //     unloadPost();
  //   };
  // }, [postId]);

  const onEdit = () => {
    // setPostInfo({ ...postInfo, originalPostId: post._id });
    navigate('/write');
  };

  // 수정 이건 또 뭔데?
  // const ownPost = (account && account._id) === (post && post._id);

  const onRemove = async () => {
    try {
      // await removePost(postId);
      navigate('/'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostViewer
      profileImage={userImage}
      // post={post}
      // error={error}
      post={posting.post}
      error={posting.error}
      // actionButtons={ownPost && <PostActionButtons onEdit={onEdit} />}
      actionButtons={<PostActionButtons onEdit={onEdit} />}
      onRemove={onRemove}
    />
  );
}
