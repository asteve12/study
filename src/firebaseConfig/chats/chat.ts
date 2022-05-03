// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get, set, update,push } from 'firebase/database';

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



  const updates = {};
  // const newPostKey = push(child(ref(db), 'recentsChats')).key;

  const updateRecentChat = () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `recentsChats/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log('validating recentChat', snapshot.val());
          const ownerRecChat = localStorage.getItem('sender');
          const data = snapshot.val();
          //@ts-ignore
       
          // let currentUser = Object.keys(currObj);
          let recentChatAlreadyExist;
          let recentReceiver = username.split("-")
          let intUser = recentReceiver.filter(
            (eachUser) => eachUser !== ownerRecChat
          );
            //  const currObj = data[intUser[0]];
          
          // for (let eachUserKeys of currentUser) {
          //   // console.log('uyo', currObj[eachUserKeys].receiver === receiver);
          //   if (currObj[eachUserKeys].receiver === intUser[0]) {
          //   
          //     break;
          //   }
          // }
          if (data[intUser[0]]) {
            recentChatAlreadyExist = true;
            console.log('recentChatAlreadyExis', recentChatAlreadyExist);
          }
            if (recentChatAlreadyExist === true) {
              set(ref(db, 'message/' + `${username}/` + `${timestamp}`), {
                sender,
                receiver: 'ronke',
                message: msg,
                verification: fireBaseUid,
                read: false,
              });

              return;
            } else {
              const newPostKey = push(child(ref(db), 'posts')).key;
              //@ts-ignore
              updates['recentsChats/' + `${intUser[0]}/` + newPostKey] = {
                receiver: ownerRecChat,
              };

              //recentsChats
              update(ref(db), updates);

              set(ref(db, 'message/' + `${username}/` + `${timestamp}`), {
                sender,
                receiver: 'ronke',
                message: msg,
                verification: fireBaseUid,
                read: false,
              });
            }
        

          return;
        } else {
          console.log('No data available');
            set(ref(db, 'message/' + `${username}/` + `${timestamp}`), {
              sender,
              receiver: 'ronke',
              message: msg,
              verification: fireBaseUid,
              read: false,
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  updateRecentChat();



  return true
}


