import React from "react"

//styles
import style from "./sure.module.css"
//components
import Backbtn from '../../ui/backBtn/backBtn';
import SureForm from "../form/sure/sure"

const SureComponent:React.FC =(props)=>{
    return(
        <section className={style.sureComponent}>
            <div className={style.contentWrapper}>
                <Backbtn path="/sure"></Backbtn>
                <SureForm></SureForm>
            </div>

        </section>
    )
}

export default SureComponent;