// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDT-zrQbWvHt15SiNKCcDofxl1ubVj9mLE',
  authDomain: 'yourstudypath-ysp.firebaseapp.com',
  databaseURL: 'https://yourstudypath-ysp-default-rtdb.firebaseio.com',
  projectId: 'yourstudypath-ysp',
  storageBucket: 'yourstudypath-ysp.appspot.com',
  messagingSenderId: '899670359755',
  appId: '1:899670359755:web:53d7178f926074ec6c654e',
  measurementId: 'G-RZKLL82KYC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const storage = getStorage(app);



//@ts-ignore
export default  function uploadImage(file,size,name)
{

  const imageRef = ref(storage, 'images/' + name);

  const metadata = {
    contentType: 'image/jpeg',
    size,
  };
  const uploadTask = uploadBytesResumable(imageRef, file,metadata)
  

console.log('uploadTask', uploadTask);
  return  uploadTask
}
