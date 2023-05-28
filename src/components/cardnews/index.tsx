import React from 'react'
import s from '../../modules/cardnews/cardnews.module.scss'
import Link from 'next/link'

const NewsComponents = () => {
  return (
    <>
    <div className={s.card_news}>
        <div className={s.card_news_cover}>
          <svg className="card_news_img"></svg>
        </div>
        <div className={s.card_news_news}>
          <div>
            <p className={s.card_news_name}>Назва новини</p>
            <p className={s.card_news_info}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              enim aliquam nisi, blanditiis nobis et, repudiandae ea a
              consequatur officia laboriosam omnis alias. Enim earum et ullam
              error deserunt vero.
            </p>
            <Link className={s.card_news_link} href="#">Дізнатись більше</Link>
          </div>
        </div>
      </div>
      <div className={s.card_news}>
        <div className={s.card_news_cover}>
          <svg className="card_news_img"></svg>
        </div>
        <div className={s.card_news_news}>
          <div>
            <p className={s.card_news_name}>Назва новини</p>
            <p className={s.card_news_info}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              enim aliquam nisi, blanditiis nobis et, repudiandae ea a
              consequatur officia laboriosam omnis alias. Enim earum et ullam
              error deserunt vero.
            </p>
            <Link className={s.card_news_link} href="#">Дізнатись більше</Link>
          </div>
        </div>
      </div>
      <div className={s.card_news}>
        <div className={s.card_news_cover}>
          <svg className="card_news_img"></svg>
        </div>
        <div className={s.card_news_news}>
          <div>
            <p className={s.card_news_name}>Назва новини</p>
            <p className={s.card_news_info}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              enim aliquam nisi, blanditiis nobis et, repudiandae ea a
              consequatur officia laboriosam omnis alias. Enim earum et ullam
              error deserunt vero.
            </p>
            <Link className={s.card_news_link} href="#">Дізнатись більше</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsComponents