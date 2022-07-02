import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  // using the hook we made
  const { url, progress } =
    useStorage(
      file
    ); /* this hook will run the code inside the useEffect, it'll take the file n create a ref
  using (const storageRef = ref(storage, `/files/ ${file.name}`);) n try to upload that file */

  // print the percentage of the progress in console
  // console.log(progress, url);
  // now we want if the image uploaded completley the progress bar disapear
  // bu using useEffect

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]); // run when url changes

  // the width here depends on the progress bar means if the upload completed the width will changde
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
