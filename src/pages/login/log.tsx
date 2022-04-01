import React, { useState } from 'react';
//styles
import style from './login.module.css';
//components
import BestTeacher from '../../components/bestTeacher/bestTeacher';
import Login from '../../components/login/login';
//interface
import isIndicatorOn from './interface';

const LoginPage: React.FC = (props) => {
  const [isIndicatorOn, setIsIndicatorOn] = useState<isIndicatorOn[]>([
    { btnStatus: true },
    { btnStatus: false },
    { btnStatus: false },
  ]);

  const handleIndicator = (e: React.MouseEvent) => {
    const selectedElement = e.target as HTMLParagraphElement;
    isIndicatorOn.map((eachItems, index) => {
      if (selectedElement.id === '0') {
        setIsIndicatorOn([
          { btnStatus: true },
          { btnStatus: false },
          { btnStatus: false },
        ]);
      } else if (selectedElement.id === '1') {
        setIsIndicatorOn([
          { btnStatus: false },
          { btnStatus: true },
          { btnStatus: false },
        ]);
      } else if (selectedElement.id === '2') {
        setIsIndicatorOn([
          { btnStatus: false },
          { btnStatus: false },
          { btnStatus: true },
        ]);
      }
      return;
    });
  };
  return (
    <section className={style.homePageContainer}>
      <BestTeacher
        isIndicatorOn={isIndicatorOn}
        handleIndicator={handleIndicator}
      ></BestTeacher>
      <Login></Login>
    </section>
  );
};

export default LoginPage;
