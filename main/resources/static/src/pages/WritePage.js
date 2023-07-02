import React from "react";
import Editor from "../components/write/Editor";
import Resposive from "../components/common/Responsive";
import Header from "../components/base/Header";

const WritePage = () => {
    return (
        <>
        <Header/>
    <Resposive>
        <Editor/>
    </Resposive>
        </>
);
};

export default WritePage;