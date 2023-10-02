import { React, useEffect, useState } from "react";
import styles1 from "@styles/eventInfo.module.scss";
import styles2 from "@styles/index.module.scss";
import styles3 from "@styles/event.module.scss";
import PropTypes from "prop-types";

import arrowLeft from "@images/arrowLeft.svg";
import contact from "@images/call_fill_secondary.svg";
import register from "@images/register_secondary.svg";
import timer from "@images/timer.svg";
import location from "@images/location_secondary.svg";
import rupee from "@images/rupee.svg";

export default function EventInfoComp({ navigate }) {
  let eventInfo = JSON.parse(localStorage.getItem("eventInfo"));
  const [image, setImage] = useState(null);
  function toggleActive(event) {
    console.log(event.target, event.currentTarget);
    // event.preventDefault();
    let button = event.currentTarget;
    setTimeout(function () {
      document.activeElement.blur();
      window.open(button.href, "_blank");
    }, 700);
  }
  useEffect(() => {
    import(`../assets/images/${eventInfo.imageId}.webp`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);
  return (
    <section className={styles1.section}>
      <div className={styles1.topNavBar}>
        <button
          className={styles2.buttons}
          onClick={() => {
            navigate("../event");
          }}
        >
          <img src={arrowLeft} />
        </button>
        <a
          className={styles1.registerButton}
          href={eventInfo.link}
          target="_blank"
          rel="noreferrer"
          onFocus={(event) => toggleActive(event)}
        >
          <p>Register</p>
          <img src={register} />
        </a>
      </div>
      <div className={styles3.eventCard}>
        <img src={image} />
        <p>{eventInfo.title}</p>
      </div>
      <div className={styles1.textDiv}>
        {eventInfo.location && (
          <p className={styles1.info}>
            <img src={location} />
            {eventInfo.location}
          </p>
        )}
        <p className={styles1.info}>
          <img src={timer} />
          {eventInfo.timing}
        </p>
        <p className={styles1.info}>
          <img src={rupee} />
          {eventInfo.price ? eventInfo.price : "50 per person"}
        </p>
      </div>
      <div className={styles1.textDiv}>
        <p className={styles1.description}>{eventInfo.description}</p>
        {eventInfo.notice && (
          <p className={styles1.notice}>
            NOTE ⚠️
            <br />
            {eventInfo.notice}
          </p>
        )}
        {eventInfo.rules && (
          <div className={styles1.rules}>
            {eventInfo.rules.map((event, index) => {
              return (
                <div key={index}>
                  <h3>{Object.keys(event)[0]}:</h3>
                  <>
                    <ul>
                      {event[Object.keys(event)[0]].map((element, index) => {
                        return <li key={index}>{element}</li>;
                      })}
                    </ul>
                  </>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {eventInfo.contacts && (
        <div className={styles1.contactDiv}>
          {eventInfo.contacts.map((person, index) => {
            // console.log(person);
            return (
              <a
                key={index}
                href={`tel:${person.number}`}
                className={styles1.contactButton}
                onFocus={(event) => toggleActive(event)}
              >
                <img src={contact} />
                <p>{person.name}</p>
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
