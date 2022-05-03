// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyDT-zrQbWvHt15SiNKCcDofxl1ubVj9mLE',
//   authDomain: 'yourstudypath-ysp.firebaseapp.com',
//   databaseURL: 'https://yourstudypath-ysp-default-rtdb.firebaseio.com',
//   projectId: 'yourstudypath-ysp',
//   storageBucket: 'yourstudypath-ysp.appspot.com',
//   messagingSenderId: '899670359755',
//   appId: '1:899670359755:web:53d7178f926074ec6c654e',
//   measurementId: 'G-RZKLL82KYC',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const database = getDatabase(app);

// interface messageObj{
//   receiver:string,
//   sender:string,
//   time:string,
  

// }


export default async function writeUserData(msg:string,username:string,sender:string) {
   console.log("write message to firebase",username)
    const timestamp = Date.now();
    const fireBaseUid = localStorage.getItem('firebaseLogin');
  
  const db = getDatabase();
  console.log("userDetail","send msg")

  set(ref(db, 'message/' + `${username}/` + `${timestamp}`), {
    sender,
    receiver: 'ronke',
    message: msg,
    verification: fireBaseUid,
    read:false
  });

  return true
}


