import React from 'react';
//styles
import style from './resourceDetail.module.css';
//svg 
import BgImg from "../../assets/resource/demoBg.svg"


const ResourceDetail: React.FC = (props) => {
  return (
    <section className={style.chatDetailPage}>
      <div className={style.chatDetailPageHeader}>
        <section className={style.picsCon}>
          <div className={style.profilePic}></div>
          <div className={style.userName}>
            <p className={style.fileSize}>Art the fvck.jpg</p>
            <p>1.8 MB</p>
          </div>
        </section>
        <section className={style.unfollowBtn}>
          <button>Download</button>
        </section>
      </div>
      <div className={style.textContainer}>
        <div className={style.bgImgContainer}>
          <img src={BgImg} className={style.resoureBg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default ResourceDetail;
