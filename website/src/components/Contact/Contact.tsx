import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <h2>📬 Contact</h2>

      <p>Let's build the future together.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setSubmitted(false);
            }}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setSubmitted(false);
            }}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setSubmitted(false);
            }}
            rows={5}
          />
          {errors.message && (
            <span className="form-error">{errors.message}</span>
          )}
        </div>

        <button type="submit">🚀 Send Message</button>
      </form>

      {submitted && (
        <div className="contact-message">
          <h3>✅ Message Ready!</h3>

          <p>
            Thank you, {name}! Your message has been prepared successfully.
          </p>
        </div>
      )}
    </section>
  );
}

export default Contact;