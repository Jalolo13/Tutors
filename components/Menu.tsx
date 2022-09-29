import React from "react";
import styles from "../styles/Burger.module.sass";

type Props = {
    active: boolean;
    handleClick: () => void;
};

const Menu = ({ active, handleClick }: Props) => {
    return (
        <div className={styles.burger_menu_list}>
            <div
                className={
                    active ? styles.menu + " " + styles.active : styles.menu
                }
            >
                <div
                    className={
                        active
                            ? styles.overlay + " " + styles.active
                            : styles.overlay
                    }
                    onClick={handleClick}
                />
                <div className={styles.menu__content}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;
