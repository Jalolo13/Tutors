import React, { useState } from "react";
import styles from "../styles/TutorSearch.module.sass";
import { CgProfile } from "react-icons/cg";

type Props = {};

const TutorSearch = () => {
    const [active, setActive] = useState(false);

    return (
        <section className={styles.section__tutor_search}>
            <div className={styles.section__tutor_search__header}>
                <a
                    href="tel:+996705705314"
                    className={styles.section__tutor__header_number}
                >
                    +996 (705) 705-314
                </a>
                <div className={styles.section__tutor__header_inner}>
                    <div
                        className={styles.section__tutor__header_profile}
                        onMouseEnter={() => setActive(true)}
                        onMouseLeave={() => setActive(false)}
                    >
                        <CgProfile size={30} color={"#d1d1d1"} />
                        <p className={styles.section__header_profile_link}>
                            Личный кабинет
                        </p>
                    </div>
                    <div
                        className={
                            active
                                ? styles.section__tutor__profile_modal +
                                  " " +
                                  styles.active
                                : styles.section__tutor__profile_modal
                        }
                        onMouseEnter={() => setActive(true)}
                        onMouseLeave={() => setActive(false)}
                    >
                        <button
                            className={styles.section__tutor__profile_login}
                        >
                            <a href="#">Вход</a>
                        </button>
                        <button className={styles.section__tutor__profile_reg}>
                            <a href="#">Регистрация репетиторов</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TutorSearch;
