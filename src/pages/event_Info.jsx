import { React, useEffect, useState } from "react";
import styles1 from "@styles/eventInfo.module.scss";
import styles2 from "@styles/index.module.scss";
import styles3 from "@styles/event.module.scss";

import PropTypes from "prop-types";
import arrowLeft from "@images/arrowLeft.svg";
import contact from "@images/call_fill.svg";
export default function EventInfoComp({ navigate }) {
  let eventInfo = JSON.parse(localStorage.getItem("eventInfo"));
  const [image, setImage] = useState(null);
  useEffect(() => {
    import(`../assets/images/${eventInfo.imageId}.jpg`)
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
        <a href={eventInfo.link}>REGISTER NOW</a>
        <p className="description">{eventInfo.description}</p>
        {eventInfo.notice && <p className="notice">{eventInfo.notice}</p>}
        {eventInfo.rules && (
          <div className="rules">
            {eventInfo.rules.map((event, index) => {
              return (
                <div key={index}>
                  <p className="rule_title">{Object.keys(event)[0]}:</p>
                  <div>
                    {event[Object.keys(event)[0]].map((element, index) => {
                      return <p key={index}>{element}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {eventInfo.contacts && (
        <div>
          for queries contact:
          <br />
          {eventInfo.contacts.map((person, index) => {
            console.log(person);
            return (
              <a key={index} href={`tel:${person.number}`}>
                <img src={contact} />
                {person.name}
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
}
EventInfoComp.propTypes = {
  navigate: PropTypes.func.isRequired,
};
