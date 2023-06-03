import React from "react";
// style
import s from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.container}>
          <Link className="header_logo" href="/"></Link>
          <nav>
            <ul className={s.header_list}>
              <li>
                <Link className={s.header_list} href="/news">Новини</Link>
              </li>
              <li>
                <Link className={s.header_list} href="/">Про нас</Link>
              </li>
              <li>
                <Link className={s.header_list} href="/schedule">Розклад</Link>
              </li>
              <li>
                <Link className={s.header_list} href="/team">Команда</Link>
              </li>
              <li>
                <Link className={s.header_list} href="/">Подкасти</Link>
              </li>
              <li>
                <Link className={s.header_list} href="/">Контакти</Link>
              </li>
            </ul>
          </nav>
          <Link className={s.header_link_gradiend} href="/">
            Підтримати
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
