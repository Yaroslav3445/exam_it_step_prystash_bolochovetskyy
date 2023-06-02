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
                <Link href="/news">Новини</Link>
              </li>
              <li>
                <Link href="/">Про нас</Link>
              </li>
              <li>
                <Link href="/schedule">Розклад</Link>
              </li>
              <li>
                <Link href="/team">Команда</Link>
              </li>
              <li>
                <Link href="/">Подкасти</Link>
              </li>
              <li>
                <Link href="/">Контакти</Link>
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
