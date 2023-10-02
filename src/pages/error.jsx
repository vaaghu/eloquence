import React from "react";
import PropTypes from "prop-types";
import styles from "@styles/first.module.scss";
export default function ErrorComp({ navigate }) {
  return (
    <section className={styles.errorSection}>
      <p className="location-title">A secret garden 👒</p>
      <p>you weren{"'"}t meant to find 🫢👀</p>
      <button
        onClick={() => {
          navigate("../");
        }}
      >
        Go Home
      </button>
    </section>
  );
}
ErrorComp.propTypes = {
  navigate: PropTypes.func.isRequired,
};
