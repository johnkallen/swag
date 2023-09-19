import { ChangeEvent, useState, useRef, useEffect } from 'react';

const inputStyle = { display: 'none' };

const LoadYAML = () => {

  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    // const files = e.target.files;
    // console.log('handleFileChange');
    // if (files.length > 0) {
    //   console.log('File received');
    //   const file = files[0];
    //   setFile(file);
    // } else {
    //   console.log('No File!');
    //   setFile(null);
    // }
  };

  useEffect(() => {
    inputRef.current?.click();
  }, []);

  return (
   <div>
      {/* <label htmlFor="fileUpload">
        <div>
          <h3>Open</h3>
          <p>Other stuff in here</p>
        </div>
      </label> */}
      <input ref={inputRef} style={inputStyle} type="file" onChange={handleFileChange} />
      {/* <input hidden id="fileUpload" type="file" accept="video/*" /> */}
   </div>
  );
};


export default LoadYAML;