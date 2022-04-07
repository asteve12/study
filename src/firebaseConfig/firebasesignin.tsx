import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';


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




 const signUpUser = async (email:string,password:string)=>{

    const auth = getAuth(app);
  
      let mySignupReply = await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //console.log('signinuserFirebase', user);
     return { requestStatus: true, userInfo: user};
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log('my signup error msg', errorMessage);
        return { requestStatus: false, errorMsg: errorMessage };
        // ..
      });


      return  await mySignupReply;

}

export default signUpUser;