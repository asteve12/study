import React from "react"
//styles 
import style from "./schedule.module.css"
//components 
import Sidebar from "../../components/Home/sidebar/sidebar"
import ScheduleComp from "../../components/schedule/schedule"



const SchedulePage:React.FC = (props)=>{
    return(
        <section className={style.Scheduled}>
            <Sidebar></Sidebar>
            <ScheduleComp></ScheduleComp>

        </section>
    )
}

export default SchedulePage;