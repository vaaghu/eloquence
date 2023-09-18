import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "@styles/event.module.scss";
// const imagesPath = "@image";

export default function EventCard({ data, isLeft }) {
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
      {isLeft && (
        <img src={image} style={{ borderRadius: "15px 0px 0px 15px" }} />
      )}
      <div className={styles.info}>
        <p>{data.title}</p>
        {data.description.length > 100 ? (
          <p>{data.description.slice(0, 100) + "..."}</p>
        ) : (
          <p>{data.description}</p>
        )}
      </div>
      {!isLeft && (
        <img src={image} style={{ borderRadius: "0px 15px 15px 0px" }} />
      )}
    </div>
  );
}
EventCard.propTypes = {
  data: PropTypes.object.isRequired,
  isLeft: PropTypes.bool.isRequired,
};
