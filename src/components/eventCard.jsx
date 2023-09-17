import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import styles from "@styles/first.module.scss";
// const imagesPath = "@image";
export default function EventCard({ data }) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    import(`/src/assets/images/${data.imageId}`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);
  return (
    <div>
      <img src={image} />
      <p>{data.title}</p>
      {data.description.length > 40 ? (
        <p>{data.description.slice(0, 40) + "..."}</p>
      ) : (
        <p>{data.description}</p>
      )}
    </div>
  );
}
EventCard.propTypes = {
  data: PropTypes.object.isRequired,
};
