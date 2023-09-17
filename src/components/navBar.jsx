import React from "react";
import PropTypes from "prop-types";
import home from "@images/home.svg";
import event from "@images/event.svg";
import location from "@images/location.svg";
import register from "@images/register.svg";

import styles from "@styles/index.module.scss";

export default function NavBar({ navigate }) {
  return (
    <div className={styles.navBar}>
      <button onClick={() => navigate("./home")} className={styles.buttons}>
        <img src={home} />
        home
      </button>
      <button onClick={() => navigate("./event")} className={styles.buttons}>
        <img src={event} />
        event
      </button>
      <button onClick={() => navigate("./map")} className={styles.buttons}>
        <img src={location} />
        location
      </button>
      <button className={styles.buttons}>
        <img src={register} />
        register
      </button>
    </div>
  );
}

NavBar.propTypes = {
  navigate: PropTypes.func.isRequired,
};
