'use client';
import { UnprivilegedEditor } from "react-quill";
import dynamic from 'next/dynamic'; // react-quill이 document를 요구하기 때문에 필요.
import 'react-quill/dist/quill.snow.css';
import './section.css';
import { useState } from "react";
import Spinner from "@/components/spinner";

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
    container: [
      [{ 'header': [1, 2, 3, false] }],


      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      ['blockquote', 'code-block'],

      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image', 'video']
    ],
  },
}
// 클라이언트 측에서 렌더링되도록 처리(document 요구)
const ReactQuill = dynamic(() => import('react-quill'),
  {
    ssr: false,
    loading: () => <Spinner />
  }
);
/**
 * 글을 작성하는 영역. 툴바 + 에디팅 영역 포함됨.
 */
const WriteSection = () => {
  const [value, setValue] = useState('');
  const [wcount, setWCount] = useState(0);
  function onChange(v: string, _1: any, _2: any, editor: UnprivilegedEditor) {
    setValue(v);
    console.log(editor.getText());
    setWCount(editor.getLength() - 1); // 항상 개행 포함
  }

  return (
    <div className="m-4">
      <div className="border-[1px] border-base-400">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={moduleOptions}
        />
      </div>
      <div>문자 개수: {wcount}</div>
    </div>
  );
}

export default WriteSection;