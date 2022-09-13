import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { email } = req.body;

  console.log({ email });

  if (!email || !email.length) {
    return res.status(400).json({ error: "Email is required" });
  }

  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const DATACENTER = process.env.MAILCHIMP_API_SERVER;

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `apikey ${API_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, options);
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error when you tried to join the waitlist. Please email descrypt@gmai.com.`,
      });
    }

    return res.status(201).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
