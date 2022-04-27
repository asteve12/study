


export interface State {
  Email: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}


 export interface validateInput {
   Email: string;
   password: string;
 }


  export interface emailInterface {
   Email?: string;
   password?: string;
 }

 export interface asyncInput {
   type: string;
   values:{
       Email:string,
       password:string
   };
 }


