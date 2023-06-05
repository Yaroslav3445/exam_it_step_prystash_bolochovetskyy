import React from "react";
import s from "../../modules/podkasty_body/podkasty_body.module.scss";

const PodkastyHeader = () => {
  return (
    <>
      <div className={s.main_border}>
        <div className={s.border}>
          <div className={s.border_image_1}></div>
        </div>
        <div className={s.border}>
          <div className={s.border_image_2}></div>
        </div>
        <div className={s.border}>
          <div className={s.border_image_3}></div>
        </div>
      </div>
      <div className={s.main_border_item}>
        <div className={s.border_blue}>
          <div className={s.border_image_4}>
            <div className={s.pause}></div>
          </div>
        </div>
        <div className={s.border_blue}>
          <div className={s.border_image_5}></div>
        </div>
      </div>
    </>
  );
};

export default PodkastyHeader;
