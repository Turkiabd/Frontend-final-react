import React, { useEffect, useState } from "react";
import ImageGrid from "./ImageGrid";
import ProgressBar from "./ProgressBar";
import Title from "./Title";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import Swal from "sweetalert2";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState([]);

  const types = ["image/png", "image/jpeg"];
  const Swal = require("sweetalert2");

  const onChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  // -------------------------------
  // to ref the of images from firebase storage
  const imagesListRef = ref(storage, "/files");
  const uploadPic = () => {
    if (file == null) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    // upload an image to firebase by using uploadBytes()
    uploadBytes(storageRef, file).then((snapshot) => {
      // promies
      //whenver upload is finish do this
      Swal.fire("SUCCESS!", "Outfit Pic Uploaded!", "success");

      getDownloadURL(snapshot.ref).then((url) => {
        setUrl((prev) => [...prev, url]);
      });
    });
  };
  // useEffect
  //listAll() of the files in a specific path in this case imageListRef --> "/files"
  //.then after we get the images we get response from this request run the code after.then()
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      //go through each of items in our storage n get the url
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setUrl((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <form>
      <label>
        <input className="input" type="file" onChange={onChange} />
        <span>+</span>
      </label>
      <div className="output">
        <Title />
        {error && <div className="error"> {error} </div>}
        {/* to display image name underneth */}
        {/* if the left side true do th eright side */}
        {file && <div>{file.name}</div>}
        {/* if there is a file then show the progress file */}
        {/* {file && <ProgressBar file={file} setFile={setFile} />} */}
        <div className="col-md-12 text-center">
          <button
            onClick={uploadPic}
            type="button"
            className="btn btn-secondary"
          >
            upload
          </button>
        </div>

        {url.map((url) => {
          return (
            <div className="img-container">
              <img className="img" src={url} />
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default UploadForm;
