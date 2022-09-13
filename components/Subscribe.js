/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setState("Loading");

    try {
      const response = await axios.post("/api/joinWaitlist", { email });
      console.log(response);
      setState("Success");
      setEmail("");
    } catch (error) {
      console.log(error.response.data.error);
      setErrorMsg(error.response.data.error);
      setState("Error");
    }
  };

  return (
    <>
      <h4>Subscribe to the newsletter</h4>
      <p>
        Get to notified on quality articles about frontend development and more
        // eslint-disable-next-line react/no-unescaped-entities sent to your
        inbox. I&ll send you an email once a month, no spam.
      </p>
      <form onSubmit={subscribe}>
        <div>
          <input
            required
            id="email-input"
            name="email"
            type="email"
            placeholder="What's your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sub-form-btn">
          <button
            disabled={state === "Loading"}
            type="submit"
            className="form-btn"
            onClick={subscribe}
          >
            Subscribe
          </button>
        </div>
        {state === "Error" && <h2 className="error-state">{errorMsg}</h2>}
        {state === "Success" && <h2>Awesome, you&ve been subscribed!</h2>}
      </form>
    </>
  );
}

export default Subscribe;
