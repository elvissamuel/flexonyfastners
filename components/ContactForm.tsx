"use client";

import { FormEvent, useEffect } from "react";
import { initEmailJS, sendEmail } from "@/lib/emailjs";

export default function ContactForm() {
  useEffect(() => {
    initEmailJS();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)
      .value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    sendEmail({
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      message,
    })
      .then(() => {
        form.reset();
        alert("Your message was sent successfully");
      })
      .catch((err) => console.log(err));
  }

  return (
    <form className="myform" onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="text" name="firstName" placeholder="First Name" required />
      </div>
      <div className="input-box">
        <input type="text" name="lastName" placeholder="Last Name" required />
      </div>
      <div className="input-box">
        <input type="email" name="email" placeholder="Email Address" required />
      </div>
      <div className="input-box">
        <input type="text" name="phone" placeholder="Phone No" />
      </div>
      <div className="input-box">
        <textarea name="message" cols={40} rows={10} placeholder="Message" />
      </div>
      <div className="button">
        <button type="submit" className="form-btn">
          Submit
        </button>
      </div>
    </form>
  );
}
