"use client";

import { FormEvent, useEffect } from "react";
import { initEmailJS, sendEmail } from "@/lib/emailjs";

export default function ProductInquiryForm() {
  useEffect(() => {
    initEmailJS();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    sendEmail({
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("description") as HTMLTextAreaElement)
        .value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
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
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className="input-box">
          <input type="text" name="phone" placeholder="Phone Number" />
        </div>
        <div className="input-box">
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className="input-box">
          <input type="text" name="company" placeholder="Company Name" />
        </div>
        <div className="input-box">
          <textarea
            name="description"
            cols={40}
            rows={10}
            placeholder="Message"
          />
        </div>
        <div className="button">
          <button type="submit" className="form-btn">
            Submit
          </button>
        </div>
      </form>
  );
}
