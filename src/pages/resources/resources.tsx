import React, { useState } from 'react';
//styles
import style from './resources.module.css';
//component

import Sidebar from '../../components/Home/sidebar/sidebar';
import ResourceCom  from "../../components/resource/resource"

const ResourcePage: React.FC = (props) => {
  const [displayChatPage, setChatPage] = useState(false);

  const handleResChange = () => {
    setChatPage(true);
  };

  return (
    <section className={style.ResourcePageWrapper}>
      <Sidebar></Sidebar>
      <ResourceCom
        status={displayChatPage}
        handleResChange={handleResChange}
      ></ResourceCom>
    </section>
  );
};

export default ResourcePage;
