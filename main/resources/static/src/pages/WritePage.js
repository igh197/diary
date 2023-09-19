import React from 'react';
import Resposive from '../components/common/Responsive';
import Header from '../components/common/header/Header';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <>
      <Header />
      <Resposive>
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButtonContainer />
      </Resposive>
    </>
  );
};

export default WritePage;
