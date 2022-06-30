import { useState, useEffect } from "react";
// import { firestore } from "../firebase/config";
import { storage ,firestore } from "../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { async } from "@firebase/util";

const useStorage = (file) => {
  // states
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // run every time we get a new file value

  // every time file depenc changes so if we have a new file value
  // it'll run this code
  useEffect(() => {
    // references

    if (!file) return;
    const storageRef = ref(storage, `/files/ ${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const collectionRef =  doc(collection(firestore,'images'));
    



    uploadTask.on(
      "state_changed",
      (snap) => {
        // formula to cal the percentage of progress
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        // const url = await storageRef.getDownloadURL();
         getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
         
       
        await setDoc(collectionRef, url);
      
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
