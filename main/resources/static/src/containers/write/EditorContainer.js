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
  const { id, title, body, emoji, tags, createdAt } = postInfo;
  const navigate = useNavigate();

  const onChangeField = (e) => {
    if (e.target.value) {
      setWrite({
        ...write,
        emoji: e.target.value,
      });
      return;
    }
    setWrite({
      ...write,
      [e.key]: e.value,
    });
  };

  // 포스트 등록
  const onPublish = () => {
    if (createdAt) {
      updatePost({ id, title, body, emoji, tags, createdAt });
      return;
    } else {
      setWrite({
        ...write,
        createdAt: new Date(),
      });
      writePost({
        id,
        title,
        body,
        emoji,
        tags,
        createdAt,
      });
    }

    try {
      setWrite({
        ...write,
        post: true,
        postError: null,
      });
      console.log(postInfo);
    } catch (e) {
      setWrite({
        ...write,
        post: null,
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
      reset();
      navigate(`/${user.account}/${postInfo.id}`); // 나중에 ${user.account} 앞에 @추가
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError, postInfo.id, user.account, reset]);

  return (
    <WriteForm
      onChangeField={onChangeField}
      onPublish={onPublish}
      onCancel={onCancel}
      tempEmoji={emoji}
    />
  );
}
