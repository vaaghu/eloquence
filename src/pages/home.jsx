import React from "react";
import link from "@images/link.svg";
import call_fill from "@images/call_fill.svg";

import logo from "@images/CAHCET-LOGO-FULL.png";
import nba from "@images/nba-logo.png";
import mainpic from "@images/mainpic.png";

import styles1 from "@styles/index.module.scss";
import styles2 from "@styles/home.module.scss";

import CountdownClock from "@components/countDown";

export default function HomeComp() {
  return (
    <section className={styles1.section}>
      <div className={styles2.topNav}>
        <img src={logo} alt="" />
        <i>
          C.ABDUL HAKEEM COLLEGE OF ENGINEERING AND TECHNOLOGY <br />{" "}
          MELVISHARAM - 632 509
        </i>
        <img src={nba} alt="" />
      </div>
      <div className={styles2.logoDiv}>
        <p>On 7th Oct </p>
        <img className={styles2.mainImg} src={mainpic} alt="" />
      </div>
      <CountdownClock />
      <div className={styles2.otherDiv}>
        <h3>Principal</h3>
        <i className={styles2.para}>Dr. M. Sasi Kumar</i>
      </div>
      <div className={styles2.otherDiv}>
        <h3>Head Of Department</h3>
        <i className={styles2.para}>Dr. K. Abrar Ahmed</i>
      </div>
      <div className={styles2.otherDiv}>
        <h3>coordinators</h3>
        <i className={styles2.para}>Dr. R. Z. Inamul Hussain</i>
        <br />
        <i className={styles2.para}>Mr. K. Suhail Ahmed</i>
        <br />
        <i className={styles2.para}>Mr. B. Palanisamy</i>
        <br />
      </div>
      <div className={styles2.otherDiv}>
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
      <div className={styles2.otherDiv}>
        <h3>Developers team</h3>
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
          href="https://instagram.com/md.riyaz2003?igshid=OGQ5ZDc2ODk2ZA=="
          rel="author noreferrer"
          target="_blank"
        >
          <img src={link} /> Riyaz
        </a>
        <br />
        <a
          className={styles2.anchore}
          href="https://linktr.ee/keerthana1817"
          rel="author noreferrer"
          target="_blank"
        >
          <img src={link} /> Keerthana
        </a>
      </div>
      <div className={styles2.lastDiv}>
        <h3>Design team</h3>
        <a
          className={styles2.anchore}
          href="https://linktr.ee/iamkamalraj"
          rel="author noreferrer"
          target="_blank"
        >
          <img src={link} /> Kamal
        </a>
        <br />
        <a
          className={styles2.anchore}
          href="https://linktr.ee/mohamedrafique"
          rel="author noreferrer"
          target="_blank"
        >
          <img src={link} /> Mohamed Rafique
        </a>
        <br />
        <a
          className={styles2.anchore}
          href="https://linktr.ee/rakshasria1"
          rel="author noreferrer"
          target="_blank"
        >
          <img src={link} /> Raksha Sri
        </a>
        <br />
      </div>
    </section>
  );
}
