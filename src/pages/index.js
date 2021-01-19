import React, { useState } from "react";
import Layout from "../components/layout";
import LeftTouch from "../components/left-touch";
import RightForm from "../components/right-form";
import SignedUp from "../components/signedup";
import Contact from "../components/contact";
import "./index.css";

const App = () => {
  const [signedup, setSignedup] = useState(false);
  const [contacted, setContacted] = useState(false);
  const [signup, setSignup] = useState(false);
  const [contact, setContact] = useState(false);

  const handleSignup = () => {
    setSignedup(true);
  };

  const handleContact = () => {
    setContacted(true);
  };

  const handleCloseSignupSuccess = () => {
    setSignedup(false);
    setSignup(false);
  };

  const handleCloseContactSuccess = () => {
    setContacted(false);
    setContact(false);
  };

  const openSignup = () => {
    setContact(false);
    setSignup(true);
  };

  const openContact = () => {
    setContact(true);
    setSignup(false);
  };

  const closeSignup = () => {
    setSignup(false);
  };

  const closeContact = () => {
    setContact(false);
  };

  const closeAll = () => {
    closeSignup();
    closeContact();
  };

  return (
    <Layout>
      <div className="content-div">
        <div className="content-left">
          <LeftTouch signup={openSignup} contact={openContact} />
        </div>

        <div className="content-right">
          <span onClick={() => closeAll()} className="close-x-hover">
            X
          </span>
          {signup &&
            (!signedup ? (
              <RightForm
                closeSignup={closeSignup}
                handleSignup={handleSignup}
              />
            ) : (
              <SignedUp
                closeSignup={closeSignup}
                handleClose={handleCloseSignupSuccess}
              />
            ))}

          {contact &&
            (!contacted ? (
              <Contact
                closeContact={closeContact}
                handleContact={handleContact}
              />
            ) : (
              <SignedUp
                icon=""
                message="Message Sent"
                subtitle="Consectetur in eiusmod et non velit labore"
                closeSignup={closeContact}
                handleClose={handleCloseContactSuccess}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default App;
