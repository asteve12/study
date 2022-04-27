export interface State {
  LegalFirstName: string;
  LegalLastName: string;
  phonenumber: string;
  NIN: string;
  City: string;
  showPassword: boolean;
}

 export interface validateInput {
   firstName: string;
   lastName: string;
   city: string;
   state: string;
   phoneNumber: string;
   NIN: string;
   gender: string;
   street: string;
   locale: string;
   country: string;
   username:string
 }
 export interface emailInterface {
   firstName?: string;
   lastName?: string;
   city?: string;
   state?: string;
   phoneNumber?: string;
   NIN?: string;
   gender?: string;
   street?: string;
   locale?: string;
   country?: string;
   username?: string;
 }


 export interface asynInputType {
   type: string;
   values: {
     firstName: string;
     lastName: string;
     city: string;
     state: string;
     phoneNumber: string;
     NIN: string;
     gender: string;
     street: string;
     locale: string;
     country: string;
     username:string
   };
 } 

 
