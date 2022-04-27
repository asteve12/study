import React,{useState} from "react";
//components
import ChatHeader from "../../ui/chatHeader/chatHeader";
import {MobileSidebar} from "../../components/Home/sidebar/sidebar"
//styles
import style from "./profile.module.css"
//icons
import pencilIcon from "../../assets/profile/pencil.svg"
//link
import {NavLink,Navigate} from "react-router-dom"

import {clearState} from "../../redux/reducers/login"
import {useDispatch,useSelector} from "react-redux"
import {clearSigninDetails} from "../../redux/reducers/signup"
 import {RootState,AppDispatch} from "../../redux/store"



const ProfileComp:React.FC = (props)=>{
  let [islogout,setLogout] = useState(false)

  const signinUser = useSelector((state: RootState) => state.login);

  const logUserOut = useDispatch()
  const clearuserState = useDispatch()
  const clearSignupState = useDispatch()
    return (
      <>
        {islogout === true ? <Navigate to='/' replace={true}></Navigate> : null}
        <section className={style.ProfileCom}>
          <div className={style.chatHead}>
            <ChatHeader title='Profile'></ChatHeader>
          </div>
          <div className={style.profileDetailPage}>
            <section className={style.ProfileBgCont}>
              <div className={style.BgImg}></div>
              <img className={style.BgPics} src={signinUser.img}></img>
              <button className={style.changeProfile}>
                <img src={pencilIcon} alt='' />
              </button>
            </section>
            <br></br>
            <br></br>
            <div className={style.profileNameCont}>
              <h3>
                {signinUser.firstName} {signinUser.lastName}
              </h3>
              <p>{signinUser.email}</p>
            </div>
            <div className={style.linkCont}>
              <NavLink to='' className={style.linkStyle}>
                Notification
              </NavLink>
              <NavLink to='' className={style.linkStyle}>
                Payment
              </NavLink>
              <NavLink to='' className={style.linkStyle}>
                Legal
              </NavLink>
              <NavLink to='' className={style.linkStyle}>
                Speak with us
              </NavLink>
              <button
                className={style.logout}
                onClick={() => {
                  localStorage.clear();

                  clearuserState(clearState());

                  console.log('logout');
                }}
              >
                Log Out
              </button>
            </div>
          </div>
          <MobileSidebar></MobileSidebar>
        </section>
      </>
    ); 
}

export default ProfileComp;