import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { writeState } from '../../State/postState';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { writePost, updatePost } from '../../lib/api/posts';
import WriteForm from '../../components/write/WriteForm';

// 모달 구현!

export default function EditorContainer() {
  const reset = useResetRecoilState(writeState);
  const [write, setWrite] = useRecoilState(writeState);
  const { title, body, tags, post, postError, originalPostId } = write;
  const navigate = useNavigate();

  const onChangeField = useCallback(
    (payload) => {
      setWrite((prev) => ({ ...prev, [payload.key]: payload.value }));
    },
    [setWrite],
  );

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      updatePost({ title, body, tags, id: originalPostId });
      return;
    }
    writePost({
      title,
      body,
      tags,
    });
  };

  // 취소
  const onCancel = () => {
    navigate(-1);
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.account}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <WriteForm
      onChangeField={onChangeField}
      title={title}
      body={body}
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={originalPostId}
    />
  );
}
