// import { useState, useEffect } from "react";
// // import { firestore } from "../firebase/config";
// import { storage, firestore } from "../firebase/config";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

// const useStorage = () => {
//   // states
//   const [file, setFile] = useState(null);

//   const [progress, setProgress] = useState(0);
//   const [error, setError] = useState(null);
//   const [url, setUrl] = useState([]);

//   // const imagesListRef = ref(storage, "/files/");

//   useEffect(() => {
//     // if (!file) return;

//   //   const imagesListRef = ref(storage, "/files");
//   // const uploadFile = () => {
//   //   if (file == null) return;
//   //   const storageRef = ref(storage, `images/${file.name }`);
//   //   uploadBytes(storageRef, file).then((snapshot) => {
//   //     getDownloadURL(snapshot.ref).then((url) => {
//   //       setUrl((prev) => [...prev, url]);
//   //     });
//   //   });
//   // };
//     // ---------------------------------

//     //listAll() of the files in a specific path in this case imageListRef --> "/files"
//     //.then after we get the images we get response from this request run the code after.then()
//   //   listAll(imagesListRef).then((response) => {
//   //     //go through each of items in our storage n get the url
//   //     response.items.forEach((item) => {
//   //       getDownloadURL(item).then((url) => {
//   //         setUrl((prev) => [...prev, url]);
//   //       });
//   //     }); 
//   //   });
//   // }, []);

//   return { progress, url, error };
// };

// export default useStorage;
