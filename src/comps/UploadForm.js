import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import ProgressBar from "./ProgressBar";
import Title from "./Title";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const onChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
 
    <form>
      <label>
        <input className="input"type="file" onChange={onChange} />
        <span>+</span>
      </label>
      <div className="output">
        <Title/>
        {error && <div className="error"> {error} </div>}
        {/* to display image name underneth */}
        {/* if the left side true do th eright side */}
        {file && <div>{file.name}</div>}
        {/* if there is a file then show the progress file */}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
      <ImageGrid/>

    
    </form>
  
  );
};

export default UploadForm;
