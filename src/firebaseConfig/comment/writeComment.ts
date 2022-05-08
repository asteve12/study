import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  update,
  push,
} from 'firebase/database';

interface commentObj{
    name:string;
    comment:string,
    img:string
}
  const db = getDatabase();


export default async function commentHandler(commentObj: commentObj) {
  const newPostKey = push(child(ref(db), 'comment')).key;


let commentHandler =  set(ref(db,'comment/'+ newPostKey), {
  comment:commentObj.comment,
  name:commentObj.name,
  img:commentObj.img
  }).then((response) => {
      console.log('comment in database', response);
      //@ts-ignore
      if(response){
          return true
           
      }

  })

 return commentHandler;
}
