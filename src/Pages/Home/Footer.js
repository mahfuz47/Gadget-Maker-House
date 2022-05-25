import React from "react";

const Footer = () => {
  return (
    <div className=" mt-10 pt-10 py-4">
      <p className="text-center">
        <small className="text-xs font-weight: 100">
          ©2022 Automobiles Motor Sales, U.S.A., Inc. All information applies to
          U.S. vehicles only.
          <br />
          The use of Olympic Marks, Terminology and Imagery is authorized by the
          U.S. Olympic & Paralympic Committee pursuant to Title 36 U.S. Code
          Section 220506.
        </small>
      </p>
      <div className="text-xs font-weight: 100 text-center my-4">
        <a href="https://en.wikipedia.org/wiki/Privacy_policy#:~:text=A%20privacy%20policy%20is%20a,a%20customer%20or%20client's%20data.">
          Privacy Policy
        </a>{" "}
        ||{" "}
        <a href="https://www.privacypolicies.com/blog/global-privacy-laws-explained/#:~:text=The%20General%20Data%20Protection%20Regulation,the%2025th%20of%20May%2C%202018.">
          International Privacy
        </a>{" "}
        || <a href="https://www.uscourts.gov/glossary">Legal Terms</a> ||{" "}
        <a href="https://www.google.com/maps/search/BMW/@23.893734,90.3768302,13z/data=!3m1!4b1">
          Branch in Map
        </a>
      </div>
    </div>
  );
};

export default Footer;
