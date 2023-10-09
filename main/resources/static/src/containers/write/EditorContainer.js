import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postState, writeState } from '../../State/postState';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { writePost, updatePost } from '../../lib/api/posts';
import WriteForm from '../../components/write/WriteForm';

// 모달 구현!
// header로 따라서 모달 구현하자

export default function EditorContainer() {
  const user = localStorage.getItem('account');
  const reset = useResetRecoilState(writeState);
  const [write, setWrite] = useRecoilState(postState);
  const { postContent, post, postError } = write;
  const { id, title, body, emoji, tags, publishedDate } = postContent;
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setWrite({
      ...write,
      [name]: value,
    });
  };

  // 포스트 등록
  const onPublish = () => {
    if (id) {
      updatePost({ id, title, body, emoji, tags, publishedDate });
      return;
    }
    writePost({
      id,
      title,
      body,
      emoji,
      tags,
      publishedDate,
    });
  };

  // 취소
  const onCancel = () => {
    navigate(-1);
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      navigate(`/@${user}/${id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError, user, id]);

  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <WriteForm
      onChange={onChange}
      title={title}
      body={body}
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={id}
    />
  );
}
