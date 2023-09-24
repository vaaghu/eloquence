import React from "react";
import link from "@images/link.svg";
import call_fill from "@images/call_fill.svg";

// import styles1 from "@styles/index.module.scss";
import styles2 from "@styles/home.module.scss";
export default function HomeComp() {
  return (
    <section className={styles2.section}>
      <div className={styles2.topNav}>
        <img src="https://i.postimg.cc/fR59c2pf/CAHCET-LOGO-FULL.png" alt="" />
        <i>
          C.ABDUL HAKEEM COLLEGE OF ENGINEERING AND TECHNOLOGY <br />{" "}
          MELVISHARAM - 632 509
        </i>
        <img src="https://i.postimg.cc/BZ1HrCPJ/nba-logo.png" alt="" />
      </div>
      <div>
        <img
          className={styles2.mainImg}
          src="https://i.postimg.cc/fL7HQtXH/mainpic.png"
          alt=""
        />
      </div>
      <div>
        <h3>principal</h3>
        <i className={styles2.para}>Dr.M. Sasi Kumar</i>
      </div>
      <div>
        <h3>head of department</h3>
        <i className={styles2.para}>Dr.K. Abrar Ahmed</i>
      </div>
      <div>
        <h3>coordinators</h3>
        <i className={styles2.para}>Dr.R.Z. Inamul Hussain</i>
        <br />
        <i className={styles2.para}>Mr.K.Suhail Ahmed</i>
        <br />
        <i className={styles2.para}>Mr.B.Palanisamy</i>
        <br />
      </div>
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
        <a
          className={styles2.anchore}
          href="https://linktr.ee/keerthana1817"
          rel="author noreferrer"
          target="_blank"
        >
          <img src={link} /> keerthana
        </a>
      </div>
    </section>
  );
}
