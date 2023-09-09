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

const ToolBar = () => {
  return (
    <div id="toolbar">
      <select className='ql-header' defaultValue='false'>
        <option value='1' />
        <option value='2' />
        <option value='3' />
        <option value='false' />
      </select>

      <div>
        <button className="ql-bold">bold</button>
        <button className="ql-italic">italic</button>
        <button className="ql-underline">underline</button>
        <button className="ql-strike">strike</button>
      </div>

      <div>
        <select className='ql-color'></select>
        <select className='ql-background'></select>
      </div>

      <div>
        <button className="ql-blockquote">quote</button>
        <button className="ql-code-block">code</button>
      </div>

      <div>
        <select className='ql-list'>
          <option value='ordered' />
          <option value='bullet' />
        </select>
        <select className='ql-align'></select>
      </div>
      <div>
        <button className='ql-link'></button>
        <button className='ql-image'></button>
      </div>
    </div>
  );
}

export default ToolBar;