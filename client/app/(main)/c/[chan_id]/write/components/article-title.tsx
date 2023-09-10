'use client';
/**
 * 글 작성페이지 제목 컴포넌트  
 * name = 'title'
 */
const ArticleTitle = () => {

  return (
    <div className="flex space-x-1">
      <label htmlFor="title"
        className="
    px-2 py-[1px]
    border-[3px] 
   border-gray-400
   bg-gray-200 
   text-lg rounded-md">제목</label>
      <input
        name="title"
        type='text'
        className="
   w-auto flex-1 px-2
   border-2
  border-gray-400
  focus:border-blue-500
  outline-none rounded-md" />
    </div>
  );
}

export default ArticleTitle;