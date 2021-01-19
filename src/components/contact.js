import React from "react";
import "./right.css";
import "./contact.css";
const Contact = ({ handleContact, closeContact }) => {
  const doSignup = () => {
    handleContact();
  };

  return (
    <div className="form-div">
      <div className="form-div-content">
        <span className="form-label">Get notified when we launch</span>
        <form>
          <div className="form-name">
            <input type="text" class="input" placeholder="First Name" />
            <input type="text" class="input" placeholder="Last Name" />
          </div>
          <div>
            <input type="text" class="input fluid" placeholder="Company" />
          </div>
          <div>
            <input type="text" class="input fluid" placeholder="Email" />
          </div>

          <div>
            <textarea
              rows={3}
              type="text"
              class="input fluid tarea"
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
