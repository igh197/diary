import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import WriteForm from '../../components/write/WriteForm';
import { postState, writeState } from '../../State/postState';
import { userState } from '../../State/userState';
import { writePost, updatePost } from '../../lib/api/posts';

// 모달 구현!
// header로 따라서 모달 구현하자

export default function EditorContainer() {
  const user = useRecoilValue(userState);
  const reset = useResetRecoilState(writeState);
  const [write, setWrite] = useRecoilState(postState);
  const { postInfo, post, postError } = write;
  const { id, title, content, emoji, tags, createdAt, updatedAt, deletedAt } =
    postInfo;
  const navigate = useNavigate();

  const onChangeField = (e) => {
    setWrite({
      ...write,
      [e.key]: e.value,
    });
  };

  // 포스트 등록
  const onPublish = () => {
    if (createdAt) {
      updatePost({ id, title, content, emoji, tags, updatedAt });
      return;
    }
    writePost({
      id,
      title,
      content,
      emoji,
      tags,
      createdAt,
    });
  };

  // 취소
  const onCancel = () => {
    navigate(-1);
  };

  // 성공 혹은 실패 시 할 작업
  // useEffect(() => {
  //   if (post) {
  //     navigate(`/@${user.account}/${id}`);
  //   }
  //   if (postError) {
  //     console.log(postError);
  //   }
  // }, [navigate, post, postError, user, id]);

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
      content={content}
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={id}
    />
  );
}
