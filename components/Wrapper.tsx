import React from "react";
import styles from "../styles/Home.module.sass";
import { Header } from "./Header";
import Main from "./Main";

type Props = {};

const Wrapper = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Main />
        </div>
    );
};

export default Wrapper;
