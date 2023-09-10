// const moduleOptions = {
  //   toolbar: {
  //     container: [
  //       [{ 'header': [1, 2, 3, false] }],
  
  
  //       ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  //       [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //       ['blockquote', 'code-block'],
  
  //       [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  //       [{ 'align': [] }],
  
  //     ],
  //   },
  // }
  
/**
 * 툴바를 React-Quill의 에디팅 영역과 분리하기 위해 커스텀 한 컴포넌트  
 * ※ id 값은 toolbar로, write-section의 container과 동일하게 정의해야 함  
 * 적용된 옵션은 파일 내 주석 참고
 */
const ToolBar = () => {
  return (
    <div id="toolbar">
      {/* 헤딩 타입: h1, h2, h3 */}
      <select className='ql-header' defaultValue='false'>
        <option value='1' />
        <option value='2' />
        <option value='3' />
        <option value='false' />
      </select>
      {/* 글자 효과 영역 */}
      <div>
        <button className="ql-bold">bold</button>
        <button className="ql-italic">italic</button>
        <button className="ql-underline">underline</button>
        <button className="ql-strike">strike</button>
      </div>
      {/* 색 관련 영역 */}
      <div>
        <select className='ql-color'></select>
        <select className='ql-background'></select>
      </div>
      {/* 별도 블럭 영역 */}
      <div>
        <button className="ql-blockquote">quote</button>
        <button className="ql-code-block">code</button>
      </div>
      {/* 리스트, 정렬 */}
      <div>
        <select className='ql-list'>
          <option value='ordered' />
          <option value='bullet' />
        </select>
        <select className='ql-align'></select>
      </div>
      {/* 링크, 이미지 */}
      <div>
        <button className='ql-link'></button>
        <button className='ql-image'></button>
      </div>
    </div>
  );
}

export default ToolBar;