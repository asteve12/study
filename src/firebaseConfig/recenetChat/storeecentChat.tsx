// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, push, update } from 'firebase/database';
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

export default async function writeRecentChats(username: string,receiver:string) {
  console.log('storeRecentChat', username);

  const db = getDatabase();
  const updates = {};
    const newPostKey = push(child(ref(db), 'recentsChats')).key;
  //@ts-ignore
   updates['recentsChats/' + `${username}/` + newPostKey] = {
     receiver,
   };

  //recentsChats
  return update(ref(db), updates);
  // set(ref(db, 'recentsChats/' + `${username}/`), {
  //   receiver,
  // });

  return true;
}
