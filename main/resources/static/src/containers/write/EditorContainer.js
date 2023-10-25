import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import WriteForm from '../../components/write/WriteForm';
import { postState, postErrorState } from '../../State/postState';
import { userAccount } from '../../State/userState';
import { writePost, updatePost } from '../../lib/api/posts';

export default function EditorContainer() {
  const user = useRecoilValue(userAccount);
  const [write, setWrite] = useRecoilState(postState);
  const [post, setPost] = useRecoilState(postErrorState);
  const reset = useResetRecoilState(postState);

  const { id, title, body, emoji, summed, createdAt } = write;
  const navigate = useNavigate();

  const onChangeField = (e) => {
    if (e.key === 'body') {
      setWrite({
        ...write,
        body: e.value,
      });
      console.log(write);
      return;
    }

    if (e.target.name) {
      setWrite({
        ...write,
        [e.target.name]: e.target.value,
      });
      return;
    }

    setWrite({
      ...write,
      emoji: e.target.value,
    });
  };

  // 포스트 등록
  const onPublish = () => {
    if (createdAt) {
      updatePost({ id, title, body, emoji, summed, createdAt });
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
        summed,
        createdAt,
      });
    }

    try {
      setPost({ error: false });
    } catch (e) {
      setPost({ error: true });
    }
  };

  // 취소
  const onCancel = () => {
    navigate(-1);
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post.error) {
      console.log(post.error);
    }
    if (post.error === false) {
      navigate(`/${user.account}/${id}`);
      reset();
    }
    setPost({ error: null });
  }, [post.error, navigate, user.account, id, reset, setPost]);

  return (
    <WriteForm
      onChangeField={onChangeField}
      onPublish={onPublish}
      onCancel={onCancel}
      tempEmoji={emoji}
    />
  );
}
