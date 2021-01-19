import React, { useState } from "react";
import "./right.css";
import Input from "./Input";
const RightForm = ({ handleSignup, closeSignup }) => {
  const [fn, setFN] = useState("");
  const [ln, setLN] = useState("");
  const [co, setCO] = useState("");
  const [email, setEmail] = useState("");
  const [accept, setAccept] = useState(false);

  const doSignup = () => {
    console.log(fn, ln, co, email);
    handleSignup();
  };

  const handleChange = (e) => {
    let { target } = e;
    let { value, name } = target;
    if (name === "firstname") {
      setFN(value);
    } else if (name === "lastname") {
      setLN(value);
    } else if (name === "company") {
      setCO(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <div className="form-div">
      <div className="form-div-content">
        <span className="form-label">Get notified when we launch</span>
        <form>
          <div className="form-name">
            <Input
              placeholder="First Name"
              name="firstname"
              handleChange={handleChange}
            />
            <Input
              placeholder="Last Name"
              name="lastname"
              handleChange={handleChange}
            />
          </div>
          <div>
            <input type="text" class="input fluid" placeholder="Company" />
          </div>
          <div>
            <input type="text" class="input fluid" placeholder="Email" />
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
