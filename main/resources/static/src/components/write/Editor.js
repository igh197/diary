import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
// import { Link } from 'react-router-dom';

// 수정
const EditorBlock = styled.div`
  width: 100%;
  height: 100%;
  /* 페이지 위아래 여백 지정 */
  background-color: ${(props) => props.theme.content};
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
  background-color: ${(props) => props.theme.content};
`;

// 수정
const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  background-color: ${(props) => props.theme.content};
  border-top: 3px solid ${palette.gray[0]};
  border-bottom: 3px solid ${palette.gray[0]};
  padding-top: 2rem;
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

export default function Editor({ title, body, onChangeField }) {
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요...',
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
}
