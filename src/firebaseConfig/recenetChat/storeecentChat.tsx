// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, push, update, get } from 'firebase/database';

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
    // const newPostKey = push(child(ref(db), 'recentsChats')).key;
  
      const updateRecentChat = () => {
       const dbRef = ref(getDatabase());

        get(child(dbRef, `recentsChats/`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log("validating recentChat",snapshot.val());
              const ownerRecChat = localStorage.getItem("sender")
              console.log('ownerCht', ownerRecChat);
               const data = snapshot.val();
               //@ts-ignore
               const currObj = data[ownerRecChat];
               if(!currObj){
                   const newPostKey = push(child(ref(db), 'posts')).key;
                   //@ts-ignore
                   updates['recentsChats/' + `${username}/` + newPostKey] = {
                     receiver,
                   };

                   //recentsChats
                   update(ref(db), updates);
                   return ;

               }
               
                let currentUser = Object.keys(currObj);
                  let chatAlreadyExist;
                for (let eachUserKeys of currentUser) {
                  console.log(
                    'uyo',
                    currObj[eachUserKeys].receiver === receiver
                  );
                  if(currObj[eachUserKeys].receiver === receiver ){
                    chatAlreadyExist = true;
                    break;

                  }
                 
                 
                }

                   console.log('chatAlreadyExst', chatAlreadyExist);
                   if (chatAlreadyExist === true) {
                     return;
                   }
                   const newPostKey = push(child(ref(db), 'posts')).key;
                   //@ts-ignore
                   updates['recentsChats/' + `${username}/` + newPostKey] = {
                     receiver,
                   };

                   //recentsChats
                   update(ref(db), updates);

                return;
            } else {
              console.log('No data available');
                const newPostKey = push(child(ref(db), 'posts')).key;
                //@ts-ignore
                updates['recentsChats/' + `${username}/` + newPostKey] = {
                  receiver,
                };

                //recentsChats
                update(ref(db), updates);
            }
          })
          .catch((error) => {
            console.error(error);
          });
   
      };

      updateRecentChat()
   
  // set(ref(db, 'recentsChats/' + `${username}/`), {
  //   receiver,
  // });

  return true;
}
