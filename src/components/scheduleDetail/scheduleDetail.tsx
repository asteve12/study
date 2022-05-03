import React,{useEffect,useState} from 'react'
//chatHeader
import ChatHeader from "../../ui/chatHeader/chatHeader"
import ReactPlayer from 'react-player';
import ScheduleCard from "./scheduleCard/scheduleCard"
import BaseUrl from "../../axios"
import { Grid } from 'react-loader-spinner';
import {useParams} from "react-router-dom"
//styles
import style from "./scheduleDetail.module.css"
//logo
import Logo from "../../assets/createAcct/logo.svg"

function ScheduleDetail() {
  const [cardObject,setCardObject] = useState()
  const { id, courseName } = useParams()
  const [subject,setSubject] = useState()
  const [currentVideo,setCurrentVid] = useState()
 

  useEffect(() => {
    window.addEventListener('beforeunload', handleChange);
     window.addEventListener('unload', handleChange);
    return () => {
      window.removeEventListener('beforeunload', handleChange);
        window.removeEventListener('unload', handleChange);
        alert()
     
    };
  }, []);
//@ts-ignore
  const handleChange = (e)=>{
    e.preventDefault();
      e.returnValue = '';
    alert("you are about to leave these page")

  }

  const storedVideoTime = ()=>{
    alert("")

  }
  

  useEffect(()=>{
    if (id === 'subjects'){
        const userToken = localStorage.getItem('accessToken');
        BaseUrl.get('/api/courses/list/', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }).then((response) => {
       
          setCurrentVid(
            //@ts-ignore
            response.data.filter((eachVids) => eachVids.slug === courseName)
          );
             console.log('obtain subject', currentVideo);
          setSubject(response.data);
        });

        return;

    }
      const userToken = localStorage.getItem('accessToken');
    BaseUrl.get('/api/videos/list/', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }).then((response) => {
      console.log('obtain scheduleCard', response);
      setCardObject(response.data);
    });

  },[])
  if (id === 'subjects') {
    return (
      <div className={style.scheduleWrapper}>
        <div className={style.scheduleDetailHeader}>
          <ChatHeader title='ScheduleDetail'></ChatHeader>
        </div>
        <section className={style.detailCont}>
          <div className={style.imgDetail}>
            <ReactPlayer
              // width='100%'
              height='100%'
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              controls={false}
              className={style.playedVideo}
            />
            {/* @ts-ignore */}
            {/* <h1>{currentVideo.title}</h1> */}
          </div>
          <div className={style.scheduleList}>
            <p className={style.scheduleHeader}>Other Subjects</p>
            <hr />
            {!subject ? (
              <div className={style.loaderCont}>
                <Grid color='#49669D'></Grid>
              </div>
            ) : (
              <>
                {
                  //@ts-ignore
                  subject.map((eachItem) => {
                    if (courseName === eachItem.slug) {
                      return;
                    }
                    return (
                      <ScheduleCard
                        //@ts-ignore
                        title={eachItem.title}
                        videoItem={eachItem.embed_code}
                      ></ScheduleCard>
                    );
                  })
                }
              </>
            )}
          </div>
        </section>
      </div>
    );
  }
    return (
      <div className={style.scheduleWrapper}>
        <div className={style.scheduleDetailHeader}>
          <ChatHeader title='ScheduleDetail'></ChatHeader>
        </div>
        <section className={style.detailCont}>
          <div className={style.imgDetail}>
         
            <ReactPlayer
              // width='100%'
              height='100%'
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              controls={false}
              className={style.playedVideo}
            />
          </div>
          <div className={style.scheduleList}>
            <p className={style.scheduleHeader}>Your Schedule</p>
            <hr />
            {!cardObject ? (
              <div className={style.loaderCont}>
                <Grid color='#49669D'></Grid>
              </div>
            ) : (
              <>
          
                {
                //@ts-ignore
                cardObject.map((eachItem)=>{
                  return (
                    <ScheduleCard
                      //@ts-ignore
                      title={eachItem.title}
                      videoItem={eachItem.embed_code}
                    ></ScheduleCard>
                  );
                })}
               
              </>
            )}
          </div>
        </section>
      </div>
    );
}

export default ScheduleDetail
