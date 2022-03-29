import React from "react"
//components
import {Link} from "react-router-dom"
//styles
import style from "./continueBtn.module.css"
//interfaces
import continueBtnInterface from "./interface"




const ContinuBtn: React.FC = () => {
  return (
    <button type="submit" className={style.continueBtn}>
      continue
    </button>
  );
};

export default ContinuBtn