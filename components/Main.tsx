import React from "react";
import styles from "../styles/Main.module.sass";
import TutorSearch from "./TutorSearch";
type Props = {};

const Main = () => {
    return (
        <main className={styles.main}>
            <TutorSearch />
        </main>
    );
};

export default Main;
