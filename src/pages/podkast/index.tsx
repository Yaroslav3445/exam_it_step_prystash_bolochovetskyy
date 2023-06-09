import React from "react";
import s from "../../modules/podkast/podkast.module.scss";

function Podkast() {
  return (
    <>
      <div className="container">
        <div className={s.audio}>
          <div className={s.audio__block}>
            <div className={s.audio__bord}>
              <div className={s.audio__image}>
                <svg className={s.sow}></svg>
              </div>
            </div>
          </div>
          <div className={s.audio__text}>
            <h1 className={s.audio__name}>Назва подкасту</h1>
            <p className={s.audio__play__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={s.player}>
              <div className={s.play__menu}>
                <div className={s.play__control}>
                  <div id="#repeat" className={s.play__repeat}></div>
                  <div id="#pauses" className={s.play__pause}></div>
                  <div id="#mext" className={s.play__next}></div>
                </div>
              </div>
              <div className={s.sound__volume}>
                <div className={s.sound__dunamic}></div>
                <div className={s.sound__scale}>
                  <input type="range" className={s.progress} />
                  <div className={s.controls}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Podkast;
