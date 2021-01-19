import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import { FaChevronLeft } from "react-icons/fa";
import "./privacy.css";
const Privacy = () => {
  return (
    <div className="privacy-div">
      <Header />
      <div className="privacy-div-content">
        <div className="back-div">
          <FaChevronLeft />{" "}
          <a href="/" className="link-agree">
            <span className="back-btn">Back to previous page</span>
          </a>
        </div>
        <span className="pp-text">Privacy Policy</span>
        <span className="header-tag">BACKGROUND</span>
        <p className="paragraph">
          We understand that your privacy is important to you and that you care
          about how your personal data is used and shared online. We respect and
          value the privacy of everyone who visits our website,
        </p>
        <p className="paragraph">
          exceptionalsalescareer.com (“Our Site”) and will only collect and use
          personal data in ways that are described here, and in a manner that is
          consistent with Our obligations and your rights under the law.
        </p>
        <p className="paragraph">
          {" "}
          Please read this Privacy Policy carefully and ensure that you
          understand it. Your acceptance of Our Privacy Policy is deemed to
          occur upon your first use of Our Site. If you do not accept and agree
          with this Privacy Policy, you must stop using Our Site immediately.
        </p>
        <span className="header-tag">Definitions and Interpretation</span>
        <p className="paragraph">
          In this Policy the following terms shall have the following meanings:
        </p>
        <ul>
          {"“Account” means an account required to access and/or use certain areas and features of Our Site; “Cookie” means a small text file placed on your computer or device by Our Site when you visit certain parts of Our Site and/or when you use certain features of Our Site. Details of the Cookies used by Our Site are set out in section 13, below; “Cookie Law” means the relevant parts of the Privacy and Electronic Communications (EC Directive) Regulations 2003; “personal data” means any and all data that relates to an identifiable person who can be directly or indirectly identified from that data. In this case, it means personal data that you give to Us via Our Site. This definition shall, where applicable, incorporate the definitions provided in the EU Regulation 2016/679 – the General Data Protection Regulation (“GDPR”) and;“We/Us/Our” means Exceptional Sales Ltd, a limited company registered in England under company number 12845201 whose registered address is 9 Great Chesterford Court, London Road, Great Chesterford, Essex CB10 1PF."
            .split(";")
            .map((k, i) => {
              return (
                <li>
                  <p className="list-text">{k}</p>
                </li>
              );
            })}
        </ul>
        <span className="header-tag">INFORMATION ABOUT US</span>
        <p className="paragraph">
          Our Site are owned by Exceptional Sales Ltd, a limited company
          registered in England under company number 12845201, whose registered
          address Leeming Building, Vicar Lane, Leeds, England, LS2 7JF.<p></p>{" "}
          Our Data Protection Officer is Jamie Hamer and can be contacted by
          email at sales@exceptionalsalescareer.com.
        </p>
        <span className="header-tag">What Does This Policy Cover?</span>
        <p className="paragraph">
          This Privacy Policy applies only to your use of Our Site. Our Site may
          contain links to other websites. Please note that We have no control
          over how your data is collected, stored, or used by other website and
          We advise you to check the privacy policies of any such website before
          providing any data to them.
        </p>
        <span className="header-tag">BACKGROUND</span>
        <p className="paragraph">
          We understand that your privacy is important to you and that you care
          about how your personal data is used and shared online. We respect and
          value the privacy of everyone who visits our website,
        </p>
        <p className="paragraph">
          exceptionalsalescareer.com (“Our Site”) and will only collect and use
          personal data in ways that are described here, and in a manner that is
          consistent with Our obligations and your rights under the law.
        </p>
        <p className="paragraph">
          {" "}
          Please read this Privacy Policy carefully and ensure that you
          understand it. Your acceptance of Our Privacy Policy is deemed to
          occur upon your first use of Our Site. If you do not accept and agree
          with this Privacy Policy, you must stop using Our Site immediately.
        </p>
        <span className="header-tag">Definitions and Interpretation</span>
        <p className="paragraph">
          In this Policy the following terms shall have the following meanings:
        </p>
        <ul>
          {"“Account” means an account required to access and/or use certain areas and features of Our Site; “Cookie” means a small text file placed on your computer or device by Our Site when you visit certain parts of Our Site and/or when you use certain features of Our Site. Details of the Cookies used by Our Site are set out in section 13, below; “Cookie Law” means the relevant parts of the Privacy and Electronic Communications (EC Directive) Regulations 2003; “personal data” means any and all data that relates to an identifiable person who can be directly or indirectly identified from that data. In this case, it means personal data that you give to Us via Our Site. This definition shall, where applicable, incorporate the definitions provided in the EU Regulation 2016/679 – the General Data Protection Regulation (“GDPR”) and;“We/Us/Our” means Exceptional Sales Ltd, a limited company registered in England under company number 12845201 whose registered address is 9 Great Chesterford Court, London Road, Great Chesterford, Essex CB10 1PF."
            .split(";")
            .map((k, i) => {
              return (
                <li>
                  <p className="list-text">{k}</p>
                </li>
              );
            })}
        </ul>
        <span className="header-tag">INFORMATION ABOUT US</span>
        <p className="paragraph">
          Our Site are owned by Exceptional Sales Ltd, a limited company
          registered in England under company number 12845201, whose registered
          address Leeming Building, Vicar Lane, Leeds, England, LS2 7JF.<p></p>{" "}
          Our Data Protection Officer is Jamie Hamer and can be contacted by
          email at sales@exceptionalsalescareer.com.
        </p>
        <span className="header-tag">What Does This Policy Cover?</span>
        <p className="paragraph">
          This Privacy Policy applies only to your use of Our Site. Our Site may
          contain links to other websites. Please note that We have no control
          over how your data is collected, stored, or used by other website and
          We advise you to check the privacy policies of any such website before
          providing any data to them.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Privacy;
