import React from "react"
//components
import {Link} from "react-router-dom"
//styles
import style from "./continueBtn.module.css"
//interfaces
import continueBtnInterface from "./interface"




const ContinuBtn: React.FC<continueBtnInterface> = (props) => {
  return (
    <Link to={props.path} className={style.continueBtn}>
      continue
    </Link>
  );
};

export default ContinuBtn