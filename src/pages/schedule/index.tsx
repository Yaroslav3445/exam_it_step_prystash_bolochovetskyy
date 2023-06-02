import React from "react";
import s from "../../modules/schedule/schedule.module.scss";
import Schedules from "../../components/schedule";

const Schedule = () => {
  return (
    <>
      <div className={s.our}>
        <div className={s.title_news}>
          <a className={s.title_gradiend} href="#">
            Понеділок
          </a>
          <a className={s.title_gradiend} href="#">
            Вівторок
          </a>
          <a className={s.title_gradiend} href="#">
            Середа
          </a>
          <a className={s.title_gradiend} href="#">
            Четвер
          </a>
          <a className={s.title_gradiend} href="#">
            Пятниця
          </a>
          <a className={s.title_gradiend} href="#">
            Субота
          </a>
          <a className={s.title_gradiend} href="#">
            Неділя
          </a>
        </div>
        <Schedules />
      </div>
    </>
  );
};

export default Schedule;
