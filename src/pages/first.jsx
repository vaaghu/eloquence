import React from "react";
import PropTypes from "prop-types";
import styles from "@styles/first.module.scss";
export default function FirstComp({ navigate }) {
  return (
    <section
      className={styles.section}
      onClick={() => {
        navigate("./home");
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
        <span>&apos23</span>
      </h1>
    </section>
  );
}
FirstComp.propTypes = {
  navigate: PropTypes.func.isRequired,
};
