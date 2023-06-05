import React from "react";
import s from "../../modules/slider/slider.module.scss";
import Link from "next/link";

const Slider = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.card}>
          <div>
            <svg className="slider1"></svg>
          </div>
        </div>
        <div className={s.card}>
          <div>
            <svg className="slider2"></svg>
          </div>
        </div>
        <div className={s.card}>
          <div>
            <svg className="slider1"></svg>
          </div>
        </div>
        <div className={s.card}>
          <div>
            <svg className="slider2"></svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
