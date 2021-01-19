import React, { useState } from "react";
import "./right.css";
import Input from "./Input";
const RightForm = ({ handleSignup, closeSignup }) => {
  const [fname, setFN] = useState("");
  const [lname, setLN] = useState("");
  const [co, setCO] = useState("");
  const [email, setEmail] = useState("");
  const [accept, setAccept] = useState(false);

  const [errorFn, setErrorFn] = useState("");
  const [errorLn, setErrorLn] = useState("");
  const [errorCo, setErrorCo] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

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

    if (notEmpty(fname) && notEmpty(lname) && notEmpty(co) && notEmpty(email)) {
      handleSignup();
    }
  };

  const notEmpty = (str) => {
    return str.length > 0;
  };

  const handleChange = (e) => {
    let { target } = e;
    let { value, name } = target;
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
    }
  };

  return (
    <div className="form-div">
      <div className="form-div-content">
        <span className="form-label">Get notified when we launch</span>
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

          <div className="submit-btns">
            <button onClick={() => closeSignup()} className="cancel-btn btn">
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
export default RightForm;
