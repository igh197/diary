import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import WriteForm from '../../components/write/WriteForm';
import { postState, writeState } from '../../State/postState';
import { userState } from '../../State/userState';
import { writePost, updatePost } from '../../lib/api/posts';

// 모달 구현!

export default function EditorContainer() {
  const user = useRecoilValue(userState);
  const reset = useResetRecoilState(writeState);
  const [write, setWrite] = useRecoilState(postState);
  const { postInfo, post, postError } = write;
  const { id, title, content, emoji, tags, createdAt, updatedAt } = postInfo;
  const navigate = useNavigate();

  const onChangeField = (e) => {
    setWrite({
      ...write,
      [e.key]: e.value,
    });
    console.log(write);
  };

  // 포스트 등록
  const onPublish = () => {
    if (createdAt) {
      updatePost({ id, title, content, emoji, tags, updatedAt });
      return;
    } else {
      setWrite({
        ...write,
        createdAt: new Date(),
      });
      writePost({
        id,
        title,
        content,
        emoji,
        tags,
        createdAt,
      });
    }

    try {
      setWrite({
        ...write,
        post: true,
        postError: false,
      });
      console.log(postInfo);
    } catch (e) {
      setWrite({
        ...write,
        post: false,
        postError: true,
      });
    }
  };

  // 취소
  const onCancel = () => {
    navigate(-1);
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      navigate(`/${user.account}/${postInfo.id}`); // 나중에 ${user.account} 앞에 @추가
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError, postInfo.id, user.account]);

  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <WriteForm
      onChangeField={onChangeField}
      onPublish={onPublish}
      onCancel={onCancel}
    />
  );
}
