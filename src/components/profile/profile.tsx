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
import {logout} from "../../redux/reducers/logout"
import {clearState} from "../../redux/reducers/login"
import {useDispatch} from "react-redux"



const ProfileComp:React.FC = (props)=>{
  let [islogout,setLogout] = useState(false)

  const logUserOut = useDispatch()
  const clearuserState = useDispatch()
    return (
      <>
        {islogout === true ? (
          <Navigate to='/login' replace={true}></Navigate>
        ) : null}
        <section className={style.ProfileCom}>
          <div className={style.chatHead}>
            <ChatHeader title='Profile'></ChatHeader>
          </div>
          <div className={style.profileDetailPage}>
            <section className={style.ProfileBgCont}>
              <div className={style.BgImg}></div>
              <div className={style.BgPics}></div>
              <button className={style.changeProfile}>
                <img src={pencilIcon} alt='' />
              </button>
            </section>
            <br></br>
            <br></br>
            <div className={style.profileNameCont}>
              <h3>Ukauwa David</h3>
              <p>dukauwa.du@gmail.com</p>
            </div>
            <div className={style.linkCont}>
              <NavLink to='/notification' className={style.linkStyle}>
                Notification
              </NavLink>
              <NavLink to='/payment' className={style.linkStyle}>
                Payment
              </NavLink>
              <NavLink to='/legal' className={style.linkStyle}>
                Legal
              </NavLink>
              <NavLink to='/speackWithUs' className={style.linkStyle}>
                Speak with us
              </NavLink>
              <button
                className={style.logout}
                onClick={() => {
                 
                  logUserOut(logout());
                  clearuserState(clearState());
                  setLogout(true);
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