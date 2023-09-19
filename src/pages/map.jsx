import React from "react";
import styles1 from "@styles/index.module.scss";
export default function MapComp() {
  return (
    <section className={styles1.section}>
      <p className="location-title">LOCATION INFO</p>

      <img
        className="map-image"
        src="https://i.postimg.cc/7PGYFsSY/map-final-final.png"
        alt=""
        srcSet=""
      />
    </section>
  );
}
