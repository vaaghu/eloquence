import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import home from "@images/home.svg";
import event from "@images/event.svg";
import location from "@images/location.svg";
import register from "@images/register.svg";
//with fill
import home_fill from "@images/home_fill.svg";
import event_fill from "@images/event_fill.svg";
import location_fill from "@images/location_fill.svg";

import styles from "@styles/index.module.scss";

export default function NavBar({ navigate }) {
  let [isHome, setIsHome] = useState(true);
  let [isEvent, setIsEvent] = useState(false);
  let [isLocation, setIsLocation] = useState(false);
  let iconChange = (str) => {
    navigate("./" + str);
    switch (str) {
      case "home":
      default:
        setIsHome(true);
        setIsEvent(false);
        setIsLocation(false);
        break;
      case "event":
        setIsHome(false);
        setIsEvent(true);
        setIsLocation(false);
        break;
    }
    localStorage.setItem("nav", str);
  };
  useEffect(() => {
    iconChange(localStorage.getItem("nav"));
  }, []);
  return (
    <div className={styles.navBar}>
      <button onClick={() => iconChange("home")} className={styles.buttons}>
        <img src={isHome ? home_fill : home} />
        home
      </button>
      <button onClick={() => iconChange("event")} className={styles.buttons}>
        <img src={isEvent ? event_fill : event} />
        event
      </button>
      {/* <button onClick={() => iconChange("location")} className={styles.buttons}>
        <img src={isLocation ? location_fill : location} />
        location
      </button> */}
      <a
        className={styles.buttons}
        href="https://maps.app.goo.gl/nEHHnuemWKZ1zYiF9"
        target="_blank"
        rel="noreferrer"
      >
        <img src={isLocation ? location_fill : location} />
        location
      </a>
      <a
        className={styles.buttons}
        href="https://forms.gle/bqLPoi8G5jxR2REcA"
        target="_blank"
        rel="noreferrer"
      >
        <img src={register} />
        register
      </a>
    </div>
  );
}

NavBar.propTypes = {
  navigate: PropTypes.func.isRequired,
};
