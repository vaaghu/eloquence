import { React, useEffect, useState } from "react";
import styles1 from "@styles/eventInfo.module.scss";
import styles2 from "@styles/index.module.scss";
import styles3 from "@styles/event.module.scss";

import PropTypes from "prop-types";
import arrowLeft from "@images/arrowLeft.svg";

export default function EventInfoComp({ navigate }) {
  let eventInfo = JSON.parse(localStorage.getItem("eventInfo"));
  const [image, setImage] = useState(null);
  useEffect(() => {
    import(`../assets/images/${eventInfo.imageId}`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);
  return (
    <section className={styles1.section}>
      <div>
        <button
          className={styles2.buttons}
          onClick={() => {
            navigate("../event");
          }}
        >
          <img src={arrowLeft} />
        </button>
      </div>
      <div className={styles3.eventCard}>
        <img src={image} />
        <p>{eventInfo.title}</p>
      </div>
      <div>
        <p>{eventInfo.description}</p>
      </div>
    </section>
  );
}
EventInfoComp.propTypes = {
  navigate: PropTypes.func.isRequired,
};
