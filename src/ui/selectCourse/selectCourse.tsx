import  React,{useState} from "react"
//component
//@ts-ignore
import Checkbox from 'react-custom-checkbox';
//style
import style from "./selectCourse.module.css"
//icons
import checkIcon from "../../assets/schedule/check.svg"
//interface
import selectInterface from "./interface"



const SelectCourse: React.FC<selectInterface> = (props) => {
  const [isTrue, setValue] = useState(false);
  return (
    <section className={style.selectCourseWrapper}>
      <button className={style.checkBoxStyle} onClick={() => setValue(!isTrue)}>
        <Checkbox
          checked={isTrue}
          icon={<img src={checkIcon} alt='' />}
          borderColor='#E6E9ED'
          borderRadius={3}
          size={18}
          style={
            isTrue
              ? {
                  backgroundColor: '#29BF6A',
                }
              : null
          }
          padding={0}
        />
      </button>
      <p>{props.name}</p>
    </section>
  );
};

export default SelectCourse;