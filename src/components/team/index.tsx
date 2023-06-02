import React from "react";
import s from "../../modules/card/card.module.scss";

const Card = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.card}>
          <div>
            <svg className="card_img_maksym"></svg>
          </div>
          <strong className={s.title}> Максимов Максимов</strong>
          <div className={s.card__body}>Ведучий</div>
          <span>
            <strong className={s.title}> Максимов Максимов</strong>
            <div className={s.card__body}>
              Ведучий
              <p>Автор та редактор подкасту "Франкова земля”</p>
              <p>Автор та редактор подкасту "Франкова земля”</p>
            </div>
          </span>
        </div>
        <div className={s.card}>
          <div>
            <svg className="card_img_eva"></svg>
          </div>
          <strong className={s.title}> Єва Райська</strong>
          <div className={s.card__body}>Ведучий</div>
          <span>
            <strong className={s.title}> Єва Райська</strong>
            <div className={s.card__body}>
              Ведучий
              <p>Автор та редактор подкасту "Франкова земля”</p>
              <p>Автор та редактор подкасту "Франкова земля”</p>
            </div>
          </span>
        </div>
        <div className={s.card}>
          <div>
            <svg className="card_img_maksymov"></svg>
          </div>
          <strong className={s.title}> Максимов Максимов</strong>
          <div className={s.card__body}>Ведучий</div>
          <span>
            <strong className={s.title}> Максимов Максимов</strong>
            <div className={s.card__body}>
              Ведучий
              <p>Автор та редактор подкасту "Франкова земля”</p>
              <p>Автор та редактор подкасту "Франкова земля”</p>
            </div>
          </span>
        </div>
        <div className={s.card}>
          <div>
            <svg className="card_img_maks"></svg>
          </div>
          <strong className={s.title}> Максимов Максимов</strong>
          <div className={s.card__body}>Ведучий</div>
          <span>
            <strong className={s.title}> Максимов Максимов</strong>
            <div className={s.card__body}>
              Ведучий
              <p>Автор та редактор подкасту "Франкова земля”</p>
              <p>Автор та редактор подкасту "Франкова земля”</p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
