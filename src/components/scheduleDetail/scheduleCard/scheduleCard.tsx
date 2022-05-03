import React from 'react'
import ReactPlayer from 'react-player';
import {Link} from "react-router-dom"
//style
import style from "./schedule.module.css"
//@ts-ignore
function scheduleCard(props) {
    return (
      <Link to="/" className={style.goToWrapper}>
        <div className={style.scheduleCard}>
          <section className={style.videoContainer}>
            <ReactPlayer
              className={style.videoPlayer}
              width='100%'
              height='100%'
              url={`${props.videoItem}`}
            />
          </section>
          <section className={style.courseCardText}>
            <h5>{props.title}</h5>
            <p>these video explain the meaning of science and technology</p>
          </section>
        </div>
      </Link>
    );
}

export default scheduleCard
