import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "@styles/first.module.scss";
export default function FirstComp({ navigate }) {
  useEffect(() => {
    setTimeout(() => {
      navigate(`./${localStorage.getItem("nav")}`);
    }, 2500); //2.5sec
  });
  return (
    <section
      className={styles.section}
      onClick={() => {
        setTimeout(() => {
          navigate("./home");
        }, 1000);
      }}
    >
      <h1>
        <span>E</span>
        <span>L</span>
        <span>O</span>
        <span>Q</span>
        <span>U</span>
        <span>E</span>
        <span>N</span>
        <span>C</span>
        <span>E</span>
        <br />
        <span>{"'"}23</span>
      </h1>
    </section>
  );
}
FirstComp.propTypes = {
  navigate: PropTypes.func.isRequired,
};
