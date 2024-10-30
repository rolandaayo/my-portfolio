import { useState } from "react";
import ContactUse from "./ContactUse";
import Validation from "./Validation";

const ContactForm = ({ handleSucessForm }) => {
  const { handleForm, handleValue, values, errors, form } = ContactUse(
    Validation,
    handleSucessForm
  );

  const [isLoading, setIsLoading] = useState(false)
  const FORMSPARK_ACTION_URL = "https://submit-form.com/6CCVXkJSQ";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true)  
    try {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      handleForm(e);
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false)
  };

  return (
    <div className="form-container">
      <form className="form" ref={form} onSubmit={onSubmit}>
        <div className="input-container">
          <input
            type="name"
            name="name"
            placeholder="Name"
            onChange={handleValue}
            value={values.name}
            disabled={isLoading}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleValue}
            value={values.email}
            disabled={isLoading}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div className="input-container">
          <textarea
            name="message"
            onChange={handleValue}
            value={values.message}
            placeholder="Message"
            disabled={isLoading}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>
        <input disabled={isLoading} type="submit" value={isLoading ? "Sending..." : "Send Message"} />
      </form>
    </div>
  );
};

import PropTypes from 'prop-types';

ContactForm.propTypes = {
  handleSucessForm: PropTypes.func.isRequired,
};

export default ContactForm;