import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container-page">
          <div className="wr-footer">
            <div className="copy">
              <p className="text">© Copyright 2023 TAKENAKA MWD</p>
            </div>
            <div className="menu-ft">
              <nav>
                <ul className="level-1">
                  <li className=" xxx home">
                    <a href="/" target="_self" className=" home">
                      Home
                    </a>
                  </li>
                  <li className=" xxx company">
                    <a href="/company/" target="_self" className=" company">
                      Company
                    </a>
                  </li>
                  <li className=" xxx services">
                    <a href="/services/" target="_self" className=" services">
                      Services
                    </a>
                  </li>
                  <li className=" exclude-sub projects">
                    <a href="/projects/" target="_self" className=" projects">
                      Projects
                    </a>
                  </li>
                  <li className=" xxx news">
                    <a href="/news/" target="_self" className=" news">
                      News
                    </a>
                  </li>
                  <li className=" xxx contact">
                    <a href="/contact/" target="_self" className=" contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
