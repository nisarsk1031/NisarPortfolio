import "./ContactFormStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5e09nfs",
        "template_9bh7q9i",
        form.current,
        "LRnK-gb72LNFhh5s0"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent succefully");
          // console.log("message sent succesfully");
          console.log(e.target.reset())
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="sender-Name" />
        <label>Email</label>
        <input type="email" name="sender-Email" />
        <label>Message</label>
        <textarea  className="txtar" name="client-message" placeholder="Message me here" />
        <input className="sendcss" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
