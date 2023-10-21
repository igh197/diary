import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-balloon';

const editorConfiguration = {
  language: 'ko',
  placeholder: '기억에 남는 일과 생각들을 기록해보세요!',
};

const Container = styled.div`
  width: 100%;
  // height: 100%;
  min-height: 100vh;
  padding: 30px 70px;
  background: ${(props) => props.theme.writeContent};
`;

const TitleInput = styled.input`
  width: 100%;
  height: 5rem;
  padding: 0 12px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.gray[0]}; // 수정
  background: ${(props) => props.theme.writeContent};

  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.subtext};

  ::placeholder {
    color: ${palette.gray[0]};
  }
`;

const Editor = styled(CKEditor)`
  width: 80px;
  white-space: pre-wrap;
`;

export default function Edit({ onChangeField }) {
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <Container>
      <TitleInput placeholder="제목을 입력해주세요" onChange={onChangeTitle} />
      <Editor
        editor={ClassicEditor}
        config={editorConfiguration}
        data=""
        onChange={(event, editor) => {
          const data = editor.getData();
          onChangeField({ key: 'content', value: data });
        }}
      />
    </Container>
  );
}
