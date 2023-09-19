import React from "react";
import link from "@images/link.svg";
import styles1 from "@styles/index.module.scss";
import styles2 from "@styles/home.module.scss";
export default function HomeComp() {
  return (
    <section className={styles1.section}>
      <p>home page</p>
      <div>
        <h3>Developers</h3>
        <a
          className={styles2.anchore}
          href="https://linktr.ee/vaaghu"
          rel="author noreferrer"
          target="_blank"
        >
          <img src={link} /> Vaaghu
        </a>
        <br />
        <a className={styles2.anchore} href="https://linktr.ee/riyaz03" rel="author" target="_blank">
          <img src={link} /> Riayz
        </a>
        <br />
        <a className={styles2.anchore} href="" rel="author" target="_blank">
          <img src={link} /> keerthana
        </a>
      </div>
    </section>
  );
}
