import React from "react";
import styles from "../styles/Header.module.sass";
import { useState } from "react";
import Menu from "./Menu";

interface IAppProps {}

export function Header({}) {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive((prevState) => !prevState);
    };
    return (
        <header className={styles.header}>
            <div className={styles.burger}>
                <nav className={styles.burger_menu}>
                    <div className={styles.burger_btn} onClick={handleClick}>
                        <span />
                    </div>
                    <Menu active={active} handleClick={handleClick} />
                </nav>
            </div>
            <h1 className={styles.header__title}>Ucitel.KG</h1>
            <input
                type="text"
                className={styles.header__search}
                placeholder="Поиск репетитора"
            />
        </header>
    );
}
