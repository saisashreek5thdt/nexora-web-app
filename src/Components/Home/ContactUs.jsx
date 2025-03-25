import React from "react";
import ContactBrands from "./ContactBrands";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <>
      <div className="quote-area bg-color">
        <div className="container">
          <div className="row quote-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="brand-content-inner">
                <div className="brand-text wow fadeInUp" data-wow-delay="0.3s">
                  <h3>Contact us for create animation story</h3>
                  <p>
                    Music video actor perform a nice song .Music video actor
                    perform a nice song .Music video actor perform.
                  </p>
                </div>
                {/* Start Brand Area */}
                <ContactBrands />
                {/* End Brand Area */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              {/* Form Start */}
              <ContactForm />
              {/* Form End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
