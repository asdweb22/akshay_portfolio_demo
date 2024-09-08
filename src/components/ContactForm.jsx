// import React, { useState } from "react";
import Banner from "./Banner";
import Zoom from "react-reveal/Zoom";
import { toast } from "react-toastify";
import img1 from "../images/contactus.png";
// import axios from "axios";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [from_name, SetName] = useState("");
  const [from_email, Setemail] = useState("");
  const [message, SetMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     if (!name || !email || !message) {
  //       toast.error("Please enter value");
  //     }
  //     const res = await axios.post("/api/v1/portfolio/sendEmail", {
  //       name,
  //       email,
  //       message,
  //     });
  //     if (res.data.success) {
  //       toast.success(res.data.mesage);
  //       SetName("");
  //       Setemail("");
  //       SetMessage("");
  //     } else {
  //       toast.error(res.data.mesage);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!from_name || !from_email || !message) {
      toast.error("please enter all the values");
    } else {
      emailjs
        .sendForm(
          "service_05mo20k",
          "template_x6gep1c",
          form.current,
          "grHpiIOKZip38y3Af"
        )
        .then(
          (result) => {
            toast.success("mail send thank you for your response");
            console.log(result.text);
            SetName("");
            Setemail("");
            SetMessage("");
          },
          (error) => {
            toast.error("Something went wrong");
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <div className="contactus mb-5" id="contact">
        <Banner title="Contact Us " />
        <Zoom>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={img1} className="img-fluid " alt="" srcset="" />
              </div>
              <div className="col-md-6">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="shadow px-3 py-3"
                >
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="from_name"
                      className="form-control"
                      value={from_name}
                      onChange={(e) => SetName(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="from_email"
                      className="form-control"
                      value={from_email}
                      onChange={(e) => Setemail(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      value={message}
                      onChange={(e) => SetMessage(e.target.value)}
                    />
                  </div>
                  <br />
                  <input type="submit" value="Send" className="btn card-btn" />
                </form>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
}
