import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "@styles/event.module.scss";
// const imagesPath = "@image";

export default function EventCard({ data }) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    import(`../assets/images/${data.imageId}.jpeg`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);
  return (
    <div className={styles.eventCard}>
      <img src={image} />
      <div className={styles.info}>
        <p>{data.title}</p>
      </div>
    </div>
  );
}
EventCard.propTypes = {
  data: PropTypes.object.isRequired,
  isLeft: PropTypes.bool.isRequired,
};
