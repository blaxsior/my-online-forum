'use client';
import { UnprivilegedEditor } from "react-quill";
import dynamic from 'next/dynamic'; // react-quill이 document를 요구하기 때문에 필요.
import 'react-quill/dist/quill.snow.css';
import './section.css';
import { useState } from "react";
import Spinner from "@/components/spinner";

// https://quilljs.com/docs/modules/
// 따로 타입 없는듯?

const moduleOptions = {
  toolbar: {
    container: [
      [{ 'header': [1, 2, 3, false] }],


      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      ['blockquote', 'code-block'],

      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image', 'video']
    ],
  },
};

// 클라이언트 측에서 렌더링되도록 처리(document 요구)
const ReactQuill = dynamic(() => import('react-quill'),
  {
    ssr: false,
    loading: () => <Spinner />
  }
);

/**
 * 글을 작성하는 영역. 툴바 + 에디팅 영역 포함됨  
 * 게시글 작성 페이지 내에서 사용됨  
 * name: content
 */
const ArticleContent = () => {
  const [content, setContent] = useState('');
  const [wcount, setWCount] = useState(0);
  function onChange(v: string, _1: any, _2: any, editor: UnprivilegedEditor) {
    setContent(v);
    setWCount(editor.getLength() - 1); // 항상 개행 포함
  }
  return (
    <div className="border-2 border-base-400 rounded-md">
        <ReactQuill
          theme="snow"
          onChange={onChange}
          modules={moduleOptions}
        />
      <div className="border-t-2 text-right p-2">
        문자 개수: {wcount}
      </div>
      <input readOnly name='content' hidden value={content}/>
    </div>
  );
}

export default ArticleContent;