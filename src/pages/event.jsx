import { React, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import search from "@images/search.svg";
import EventCard from "@components/eventCard";
import eventsData from "@utils/events.json";

import styles1 from "@styles/index.module.scss";
import styles2 from "@styles/event.module.scss";
export default function EventComp({ navigate }) {
  const [eventCards, setEventCards] = useState(eventsData);
  const sectionRef = useRef(null);

  let filter = (event) => {
    if (!event) return;
    let value = typeof event === "string" ? event : event.currentTarget.value;
    localStorage.setItem("searchText", value);
    if (value.length <= 0) {
      setEventCards([...eventsData]);
    } else {
      const regex = new RegExp(value, "i");
      setEventCards(
        eventsData.filter((element) => {
          return regex.test(element.title);
        })
      );
    }
  };

  useEffect(() => {
    filter(localStorage.getItem("searchText"));
    if (sectionRef.current) {
      sectionRef.current.scrollTop = parseInt(
        localStorage.getItem("scrollTop")
      ); // Set the desired initial value (in pixels)
    }
  }, []);
  console.log(localStorage.getItem("searchText"));
  return (
    <section
      className={styles1.section}
      ref={sectionRef}
      onScroll={(event) => {
        localStorage.setItem("scrollTop", event.currentTarget.scrollTop);
      }}
    >
      <div className={styles2.searchBar}>
        <img src={search} />
        <input
          type="text"
          placeholder="search bar"
          value={
            localStorage.getItem("searchText") !== null
              ? localStorage.getItem("searchText")
              : ""
          }
          onChange={filter}
          onBlur={filter}
        />
      </div>
      <div className={styles2.eventsContainer}>
        {eventCards.map((element) => (
          <EventCard key={element.id} data={element} navigate={navigate} />
        ))}
        {(!eventCards || eventCards.length == 0) && <p>no events... 🤷‍♀️</p>}
      </div>
      {/* <p>events page</p> */}
    </section>
  );
}

EventComp.propTypes = {
  navigate: PropTypes.func.isRequired,
};
