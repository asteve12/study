import React from "react"

//icons
import resendIcon from "../../assets/sure/sure.svg"

//styles
import style from "./sure.module.css"
//components
import Backbtn from '../../ui/backBtn/backBtn';
import SureForm from "../form/sure/sure"
import {Link} from "react-router-dom"
import ContinueBtn from "../../ui/continueBtn/continueBtn"

const SureComponent:React.FC =(props)=>{
    return (
      <section className={style.sureComponent}>
        <div className={style.contentWrapper}>
          <Backbtn path='/createAccount'></Backbtn>
          <h1>Just To Be Sure</h1>
          <p>
            We sent a code to {<Link to='/'>dukauwa.du@gmail.com.</Link>} Enter
            it here to prove it is really you
          </p>
          <br></br>
          <SureForm></SureForm>
          <br></br>
          <div>
            <Link
              to='/'
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: ' #444F60',
                fontSize: '16px',
              }}
            >
              <img src={resendIcon}></img> &nbsp;Resend
            </Link>
          </div>
          <br></br>
          <br></br>
          <ContinueBtn path='/chooseAStudyPath'></ContinueBtn>
        </div>
      </section>
    );
}

export default SureComponent;