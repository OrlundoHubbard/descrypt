import { useRef, useState } from "react";
import styles from "../styles/Home.module.css";

export default function WaitlistForm() {
  const inputRef = useRef(null);

  const joinWaitlist = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/joinWaitlist", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
  };

  console.log(joinWaitlist);
  return (
    <form onSubmit={joinWaitlist}>
      {/* <label htmlFor="email-input">Enter your email</label> */}
      <input
        className={styles.emailInput}
        type="text"
        name="email"
        placeholder="Enter your email address"
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
      />
      <button className={styles.waitlist} type="submit" name="join">
        Join the waitlist!
      </button>
    </form>
  );
}
