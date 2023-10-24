import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { readPost } from '../../lib/api/posts';
import PostViewer from '../../components/post/PostViewer';
import { removePost } from '../../lib/api/posts';
import { useRecoilValue } from 'recoil';
import { userAccount } from '../../State/userState';

//http://localhost:3000/account/0

export default function PostViewerContainer() {
  const { postId } = useParams();
  const account = useRecoilValue(userAccount);
  // reset도 할 것 수정
  const navigate = useNavigate();

  // 처음 마운트될 때 포스트 읽기 API 요청

  const viewPost = async () => {
    try {
      const response = await readPost(postId);
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    readPost(postId);
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      // unloadPost();
    };
  }, [postId]);

  const onEdit = () => {
    // setPostInfo({ ...postInfo, originalPostId: post._id });
    navigate('/write');
  };

  // 수정 이건 또 뭔데?
  // const ownPost = (account && account._id) === (post && post._id);

  const onRemove = async () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      await removePost(postId);
    } else {
      return;
    }
    try {
      navigate(`/@${account.account}`); // 메인화면으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostViewer
      // post={post}
      // error={error}
      post={viewPost}
      onEdit={onEdit}
      // actionButtons={ownPost && <PostActionButtons onEdit={onEdit} />}
      onRemove={onRemove}
    />
  );
}
