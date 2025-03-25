import React from "react";

export default function ContactForm() {
  return (
    <>
      <div className="quote-all wow fadeInRight" data-wow-delay="0.3s">
        <form
          id="contactForm"
          method="POST"
          className="contact-form"
        >
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
                required
                data-error="Please enter your name"
              />
              <div className="help-block with-errors"></div>
              <input
                type="email"
                className="email form-control"
                id="email"
                placeholder="Email"
                required
                data-error="Please enter your email"
              />
              <div className="help-block with-errors"></div>
              <input
                type="text"
                id="msg_subject"
                className="form-control last-part"
                placeholder="Subject"
                required
                data-error="Please enter your message subject"
              />
              <div className="help-block with-errors last-part"></div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <textarea
                id="message"
                rows="7"
                placeholder="Message"
                className="form-control"
                required
                data-error="Write your message"
              ></textarea>
              <div className="help-block with-errors"></div>
              <button type="submit" id="submit" className="anti-btn quote-btn">
                Submit
              </button>
              <div id="msgSubmit" className="h3 text-center hidden"></div>
              <div className="clearfix"></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
