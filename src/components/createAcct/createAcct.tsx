import React,{useState} from "react";
import  {registerNewUser} from "../../axios"
import {useDispatch,useSelector} from "react-redux"
import {addUser} from '../../redux/reducers/signup';

//styles 
import style from "./createAcct.module.css"
//svg

import checkBoxIcon from "../../assets/createAcct/checkBox.svg"
//components
import SigninForm from "../form/signin/signin"
import {GoogleLogin} from "react-google-login"

//@ts-ignore
import  Checkbox from "react-custom-checkbox"
//link
//@ts-ignore
import {Navigate} from "react-router-dom"
//icons
import {FcGoogle} from "react-icons/fc"
import Logo from '../../assets/createAcct/logo.svg';






const CreateAcct:React.FC = (props)=>{
  const[errorMsg,setErrorMsg] = useState("")
  //@ts-ignore
  const signinUserDetail = useSelector((state)=> state.login);
  const [redirectPage,setRedirectPage] = useState(false)
  const addNewUser = useDispatch<any>()

const checkUserExist = (userEmail: string) => {

  registerNewUser.get('/signup.json').then((response) => {
 
      let availaBleUser = Object.keys(response.data);
      let alreadyExist=false
      let doesNotExist = false

      for (let eachItems of availaBleUser) {
          
        if (response.data[eachItems].Email === userEmail) {
          alreadyExist = true;
        }
        else if (response.data[eachItems].Email !== userEmail) {
          doesNotExist = false
        }
      }
    
        if (alreadyExist) {
          return true;
        } else if (!doesNotExist) {
          return false;
        }
    })
    .then((response) => {
      if (response) {
      ;
        setErrorMsg('user already exist');
        // setTimeout(() => setErrorMsg(''), 1000);
      } else  if (response === false) {
        
        setRedirectPage(true);
      }
    })
    .catch((error) => {
      console.log('user already exist', error);
    });
};
  const handleLogin =  (googleData:any) => {
     if(googleData.error){
       setErrorMsg("sorry,an error occurred try again");
}
      if(googleData.profileObj){
        const { email, familyName, givenName } = googleData.profileObj;
        let userToAdd = {
          Email: email,
          firstName: familyName,
          lastName: givenName,
        };
        checkUserExist(email);
        addNewUser(addUser(userToAdd));
       
      
     
      }

  };
    return (
      <>
        {signinUserDetail.email ? <Navigate to={`/homePage`} /> : null}
        {redirectPage ? <Navigate to='/createAccount' /> : null}
        <section className={style.createAcctContainer}>
          <div className={style.createAcctWrapper}>
            <div className={style.ImgWrapper}>
              <img src={Logo} alt='' />
            </div>
            <div className={style.createTextWrapper}>
              <p className={style.createAccHeader}>
                Take Your First Step Towards Success
              </p>

              {/* <GoogleLogin
                clientId='715423435625-7d590qpf3nbd6t9brb1hgvmjmjuousf6.apps.googleusercontent.com'
                buttonText='Log in with Google'
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
              /> */}
              <GoogleLogin
                clientId='715423435625-7d590qpf3nbd6t9brb1hgvmjmjuousf6.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
                // redirectUri="/sure"
                // render={(renderProps) => (
                //   <button
                //     onClick={renderProps.onClick}
                //     disabled={renderProps.disabled}
                //   >
                //     This is my custom Google button
                //   </button>
                // )}
                render={(renderProps) => (
                  <button
                    className={style.signInWithGoogle}
                    onClick={renderProps.onClick}
                  >
                    <div>
                      <FcGoogle></FcGoogle>
                    </div>
                    Sign Up With Google
                  </button>
                )}
              />
              <div className={style.errorMsg}>{errorMsg}</div>
              <br></br>
              <div className={style.signUpWithEmail}>
                <div className={style.hzRule}></div>&nbsp; Sign Up With
                Email&nbsp;<div className={style.hzRule}></div>
              </div>
              <br></br>
              <SigninForm></SigninForm>
              <br></br>
              {/* <div className={style.agreementSection}>
                <Checkbox
                  checked={true}
                  icon={<img src={checkBoxIcon} alt='' />}
                  borderColor='#E6E9ED'
                  borderRadius={3}
                  size={18}
                />
                <div>
                  By creating an account you agree Yourstudypath’s Privacy and
                  Terms or use
                  <br></br>
                </div>
              </div> */}
              <br></br>

              {/* <button className={style.createAccount} onClick={()=> alert("D")} type="submit" >
                Create Account
              </button> */}
              <br />

              {/* <section className={style.createAccoutEnding}>
                <span>
                  Already a member?{' '}
                  <Link to='/'>
                    <b>Log in</b>
                  </Link>
                </span>
              </section> */}
            </div>
          </div>
        </section>
      </>
    );
}

export default CreateAcct;