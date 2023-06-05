import React from "react";
import s from "../../modules/switcher/switcher.module.scss";

const Switcher = () => {
  return (
    <>
      <div className={s.link_news}>
        <a className={s.link_gradiend} href="#">
          1
        </a>
        <a className={s.link_gradiend} href="#">
          2
        </a>
        <a className={s.link_gradiend} href="#">
          3
        </a>
        <a className={s.link_gradiend} href="#">
          4
        </a>
        <a className={s.link_gradiend} href="#">
          5
        </a>
        <a className={s.link_right} href="#">
          :.
        </a>
      </div>
    </>
  );
};

export default Switcher;
