import React from "react";
import link from "@images/link.svg";
import call_fill from "@images/call_fill.svg";

import styles1 from "@styles/index.module.scss";
import styles2 from "@styles/home.module.scss";
export default function HomeComp() {
  return (
    <section className={styles1.section}>
      <p>home page</p>
      <div>
        <h3>student coordinators</h3>
        <a
          className={styles2.anchore}
          href="tel:9042529779"
          rel="author noreferrer"
          target="_blank"
        >
          <img src={call_fill} /> Vahitha
        </a>
        <br />
        <a
          className={styles2.anchore}
          href="tel:9361584559"
          rel="author noreferrer"
          target="_blank"
        >
          <img src={call_fill} /> Priyadharshinee
        </a>
        <br />
        <a
          className={styles2.anchore}
          href="tel:7667186387"
          rel="others noreferrer"
          target="_blank"
        >
          <img src={call_fill} /> Lokesh
        </a>
        <br />
        <a
          className={styles2.anchore}
          href="tel:9003829145"
          rel="author noreferrer"
          target="_blank"
        >
          <img src={call_fill} /> Thejas
        </a>
        <br />
      </div>
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
        <a
          className={styles2.anchore}
          href="https://linktr.ee/riyaz03"
          rel="author noreferrer"
          target="_blank"
        >
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
