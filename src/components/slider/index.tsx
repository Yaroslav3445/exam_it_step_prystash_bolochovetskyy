import React from 'react'
import s from '../../modules/slider/slider.module.scss'

const Slider = () => {
  return (
    <>
    <svg className="comand"></svg>
  <div className={s.container}>
        <div className={s.card}>
          <div>
            <svg className="slider1"></svg>
          </div>
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
      </>
  )
}

export default Slider