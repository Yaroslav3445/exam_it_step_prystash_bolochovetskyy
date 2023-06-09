import React from "react";
import s from "../../modules/podkasty/podkasty.module.scss";
import Link from "next/link";

const PodkastyGroup = () => {
  return (
    <>
      <div className={s.main_border}>
        <div className={s.border}>
          <Link href="/podkast">
            <div className={s.border_image_1}></div>
          </Link>
        </div>
        <div className={s.border}>
          <Link href="/podkast">
            <div className={s.border_image_2}></div>
          </Link>
        </div>
        <div className={s.border}>
          <Link href="/podkast">
            <div className={s.border_image_3}></div>
          </Link>
        </div>
      </div>
      <div className={s.main_border_item}>
        <div className={s.border_blue}>
          <Link href="/podkast">
            <div className={s.border_image_4}>
              <div className={s.pause}></div>
            </div>
          </Link>
        </div>
        <div className={s.border_blue}>
          <Link href="/podkast">
            <div className={s.border_image_5}></div>
          </Link>
        </div>
      </div>
      <div className={s.main_border}>
        <div className={s.border}>
          <Link href="/podkast">
            <div className={s.border_image_6}></div>
          </Link>
        </div>
        <div className={s.border}>
          <Link href="/podkast">
            <div className={s.border_image_7}></div>
          </Link>
        </div>
        <div className={s.border}>
          <Link href="/podkast">
            <div className={s.border_image_8}></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PodkastyGroup;
