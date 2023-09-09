'use client';
import ReactQuill from "react-quill";
import dynamic from 'next/dynamic'; // react-quill이 document를 요구하기 때문에 필요.
import 'react-quill/dist/quill.snow.css';
import './section.css';
import ToolBar from "./toolbar";
import { useState } from "react";

// https://quilljs.com/docs/modules/
// 따로 타입 없는듯?

// var toolbarOptions = [
//   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
//   ['blockquote', 'code-block'],

//   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//   [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
//   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
//   [{ 'direction': 'rtl' }],                         // text direction

//   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

//   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//   [{ 'font': [] }],
//   [{ 'align': [] }],

//   ['clean']                                         // remove formatting button
// ];

const moduleOptions = {
  toolbar: {
    container: "#toolbar",
  },
}

const Quill = dynamic(() => import('react-quill'),{ssr: false});

const WriteSection = () => {
  const [value, setValue] = useState('');
  const [wcount, setWCount] = useState(0);
  function onChange(v: string, _1: any, _2: any, editor: ReactQuill.UnprivilegedEditor) {
    setValue(v);
    console.log(editor.getText());
    setWCount(editor.getLength() - 1); // 항상 개행 포함
  }

  return (
    <div className="m-4">
      <ToolBar />
      <div className="parent-scroll overflow-auto lg:h-[500px] sm:h-[400px] border-[1px] border-base-400">
        <div id='scrolling-container'>
          <Quill
            value={value}
            onChange={onChange}
            modules={moduleOptions}
            bounds="#scrolling-container"
            scrollingContainer=".parent-scroll"/>
        </div>
      </div>
      <div>문자 개수: {wcount}</div>
    </div>
  );
}

export default WriteSection;