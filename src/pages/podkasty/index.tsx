import React from "react";
import s from "../../modules/podkasty/podkasty.module.scss";
import Switcher from "@/components/switcher";
import PodkastyGroup from "@/components/podkasty";

const Podkasty = () => {
  return (
    <>
      <div className={s.h1}></div>
      <div className="container">
        <PodkastyGroup />
        <div className={s.position_cube}></div>
        <div className={s.position_asew}></div>
        <div className={s.paimt_item_1}></div>
        <div className={s.paimt_item_2}></div>
        <div className={s.paimt_item_3}></div>
        <Switcher />
      </div>
    </>
  );
};

export default Podkasty;
