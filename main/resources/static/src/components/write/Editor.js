import React, { useRef, useEffect} from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import {Link} from 'react-router-dom';

const EditorBlock = styled(Responsive)`
    /* 페이지 위아래 여백 지정 */
    background-color: ${palette.pink[0]};
    padding-top: 1rem;
    padding-bottom: 5rem;
`;

const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[4]};
    margin-bottom: 2rem;
    width: 100%;
    height: 10rem;
    background-color : ${palette.gray[0]};
`;

const QuillWrapper = styled.div`
    /* 최소 크기 지정 및 padding 제거 */
    background-color: ${palette.pink[0]};
    border-top: 3px solid ${palette.pink[1]};
    border-bottom: 3px solid ${palette.pink[1]};
    .ql-editor {
        padding: 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-editor.ql-blank::before{
        left: 0px;
    }
`;


const Editor = () => {
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
                    [{header: '1'}, {header: '2'}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            },
        });
    }, []);

    return (
        <>
        <Link to="/"><Button x = "true">X</Button></Link>
        <EditorBlock>
            <TitleInput placeholder="제목을 입력하세요"/>
            <QuillWrapper>
                <div ref={quillElement}/>
            </QuillWrapper>
            
        </EditorBlock>
        </>
    );
}

export default Editor;