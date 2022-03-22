import React from "react"
//component
import SideBar from "../../components/Home/sidebar/sidebar"
import ProfileComp from "../../components/profile/profile"

//styles
import style from "./profile.module.css"





const Profile:React.FC = (props)=>{

    return(
        <div className={style.ProfilePage}>
            <SideBar></SideBar>
            <ProfileComp></ProfileComp>
            
        </div>
    )

}


export default Profile;;