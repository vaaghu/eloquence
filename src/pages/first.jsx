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
      <p>eloquence</p>
      <p>click to continue</p>
    </section>
  );
}
FirstComp.propTypes = {
  navigate: PropTypes.func.isRequired,
};
