import { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
// import { Link } from 'react-router-dom';
import { EditorState, convertToRaw } from 'draft-js';
import draftjsToHtml from 'draftjs-to-html';

// 수정
const EditorBlock = styled.div`
  width: 100%;
  height: 100%;
  /* 페이지 위아래 여백 지정 */
  // background-color: ${(props) => props.theme.content};
  background: white;
  padding: 2rem;
  overflow-y: auto;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  padding-top: 2rem; // 꼼수야 다른 방법이 있으면 수정 (글 아래로 배치)
  outline: none;
  border: none;
  border-bottom: 5px solid ${(props) => props.theme.button}; // 수정
  width: 100%;
  height: 10rem;
  // background-color: ${(props) => props.theme.content};
`;

const Container = styled.div`
  width: 100%;
`;

const RowBox = styled.div`
  width: 100%;
  display: flex;
`;

const Viewer = styled.div`
  width: calc(50% - 40px);
  height: 400px;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid gray;
`;

export default function Edit({ title, content, onChangeField }) {
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlString, setHtmlString] = useState('');

  const updateTextDescription = async (state) => {
    await setEditorState(state);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlString(html);
  };

  const uploadCallback = () => {
    console.log('이미지 업로드');
  };

  return (
    <>
      <Container>
        <Editor
          placeholder="게시글을 작성해주세요"
          editorState={editorState}
          onEditorStateChange={updateTextDescription}
          toolbar={{
            image: { uploadCallback: uploadCallback },
          }}
          localization={{ locale: 'ko' }}
          editorStyle={{
            height: '400px',
            width: '100%',
            border: '3px solid lightgray',
            padding: '20px',
          }}
        />
      </Container>
      {/* <RowBox>
        <Viewer dangerouslySetInnerHTML={{ __html: htmlString }} />
        <Viewer>{htmlString}</Viewer>
      </RowBox> */}
    </>
  );
}
