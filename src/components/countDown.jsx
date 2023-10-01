import React, { useEffect, useState } from "react";
import styles from "@styles/home.module.scss";
const CountdownClock = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("2023-10-07T09:30:00+05:30");
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return null;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <>
      {timeLeft ? (
        <div className={styles.countDown}>
          <div>
            <p className={styles.countDownTitle}>Day</p>
            <p className={styles.countDownTimer}>{timeLeft.days}</p>
          </div>
          <div>
            <p className={styles.countDownTitle}>Hour</p>
            <p className={styles.countDownTimer}>{timeLeft.hours}</p>
          </div>
          <div>
            <p className={styles.countDownTitle}>Minute</p>
            <p className={styles.countDownTimer}>{timeLeft.minutes}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CountdownClock;
