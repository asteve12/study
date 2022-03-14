import React,{useState} from 'react';
//styles
import style from './indicator.module.css';
//interface 
import indicatorInterface from "./interface"

const Indicator: React.FC <indicatorInterface> = (props) => {
 

  return (
    <p
      className={
         props.status ? style.indicatorCircle : style.offIndicatorCircle
      }
      onClick={props.handleIndicator}
      id={props.indexed ? props.toString():""}
    ></p>
  );
};

export default Indicator;


