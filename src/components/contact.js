import React, { useState } from "react";
import Input from "./Input";
import "./right.css";
import "./contact.css";
const Contact = ({ handleContact, closeContact }) => {
  const [fname, setFN] = useState("");
  const [lname, setLN] = useState("");
  const [co, setCO] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeClass, setActiveClass] = useState("");
  const [accept, setAccept] = useState(false);

  const [errorFn, setErrorFn] = useState("");
  const [errorLn, setErrorLn] = useState("");
  const [errorCo, setErrorCo] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    let { target } = e;
    let { value, name } = target;
    console.log(name, value);
    if (name === "firstname") {
      setFN(value);
      setErrorFn("");
    } else if (name === "lastname") {
      setLN(value);
      setErrorLn("");
    } else if (name === "company") {
      setCO(value);
      setErrorCo("");
    } else if (name === "email") {
      setEmail(value);
      setErrorEmail("");
    } else if (name === "message") {
      setMessage(value);
      setErrorMessage("");
    }
  };

  const doSignup = () => {
    if (fname.length <= 0) {
      setErrorFn("input-error");
    }

    if (lname.length <= 0) {
      setErrorLn("input-error");
    }

    if (co.length <= 0) {
      setErrorCo("input-error");
    }

    if (email.length <= 0) {
      setErrorEmail("input-error");
    }

    if (message.length <= 0) {
      setErrorMessage("input-error");
    }

    if (
      notEmpty(fname) &&
      notEmpty(lname) &&
      notEmpty(co) &&
      notEmpty(email) &&
      notEmpty(message)
    ) {
      handleContact();
    }
  };

  const notEmpty = (str) => {
    return str.length > 0;
  };

  const handleBlur = ({ target: { value } }) => {
    if (value.length <= 0) {
      setActiveClass("input-error");
    } else {
      setActiveClass("");
    }
  };

  return (
    <div className="form-div">
      <div className="form-div-content">
        <span className="form-label">Get in touch</span>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-name">
            <Input
              placeholder="First Name"
              name="firstname"
              textvalue={fname}
              handleChange={handleChange}
              error={errorFn}
            />
            <Input
              placeholder="Last Name"
              name="lastname"
              textvalue={lname}
              handleChange={handleChange}
              error={errorLn}
            />
          </div>
          <div>
            <Input
              placeholder="Company"
              name="company"
              textvalue={co}
              handleChange={handleChange}
              customClass="fluid"
              error={errorCo}
            />
          </div>
          <div>
            <Input
              placeholder="Email"
              name="email"
              textvalue={email}
              handleChange={handleChange}
              customClass="fluid"
              error={errorEmail}
            />
          </div>

          <div>
            <textarea
              name="message"
              onChange={handleChange}
              rows={3}
              type="text"
              onBlur={handleBlur}
              className={`input fluid tarea ${activeClass} ${errorMessage}`}
              placeholder="Message"
            />
          </div>

          <div className="agree-div">
            <input type="checkbox" className="cbox" id="cbox" />{" "}
            <span className="term-tag">
              By checking this box I agree with the{" "}
              <a href="/privacy" className="link-agree">
                Privacy Policy
              </a>
              , Opt out at any time
            </span>
          </div>
          <div>
            <input type="checkbox" className="cbox" id="cbox" />{" "}
            <span className="term-tag">
              Nostrud veniam adipisicing sunt ex nostrud.
            </span>
          </div>

          <div className="submit-btns">
            <button onClick={() => closeContact()} className="cancel-btn btn">
              Cancel
            </button>
            <button onClick={() => doSignup()} className="submit-btn btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
