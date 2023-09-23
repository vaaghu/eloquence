import { React, useState } from "react";
import PropTypes from "prop-types";

import search from "@images/search.svg";
import EventCard from "@components/eventCard";
import eventsData from "@utils/events.json";

import styles1 from "@styles/index.module.scss";
import styles2 from "@styles/event.module.scss";
export default function EventComp({ navigate }) {
  const [eventCards, setEventCards] = useState(eventsData);
  let filter = (event) => {
    let value = event.currentTarget.value;
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
  return (
    <section className={styles1.section}>
      <div className={styles2.searchBar}>
        <img src={search} />
        <input
          type="text"
          placeholder="search bar"
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
