// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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



const auth = getAuth(app);
//@ts-ignore

 async function signupUser  (email:string,password:string):boolean{
    let signUpRes =  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        

        // ...

        return true
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return false
        // ..
      });
//@ts-ignore
      return  signUpRes;

}


export default signupUser;

