import React from "react";
import "./header.scss";
import { StaticImage } from "gatsby-plugin-image"

const Headers = () => {
  return (
    <header>
      <div className="top-header">
        <div className="container-page block-table">
          <div className="block-left">
            <div className="block-table">
              <div className="block-logo">
                <a href="/">
                  <StaticImage
                    layout="fixed"
                    src="../images/logo.png"
                    width={236}
                    height={36}
                    quality={95}
                    alt="brand"
                    loading="lazy"
                  >
                  </StaticImage>
                </a>
              </div>
              <div className="block-slogan">
                <p>MWD</p>
              </div>
            </div>
          </div>
          <div className="block-right">
            <div>
              <div className="block-table">
                <div className="block-menu">
                  <nav>
                    <ul className="level-1">
                      <li className=""><a href="/">HOME</a></li>
                      <li className=""><a href="/about/">About</a>
                        <ul className="sub-menu level-2">
                          <li className=""><a href="/contact/">MWD -  WH Pustaka Cikiwul</a></li>
                          <li className=""><a href="/contact/">MWD - WH Kalijati Subang</a></li>
                        </ul>
                      </li>
                      <li className=""><a href="/services/">Services</a>
                        <ul className="sub-menu level-2">
                          <li className=""><a href="/">Sample 1</a></li>
                          <li className=""><a href="/">Sample 2</a></li>
                          <li className=""><a href="/">Sample 3</a></li>
                        </ul>
                      </li>
                      <li className="active"><a href="/training-center/">Pustaka - MWD</a></li>
                      <li className=""><a href="/head-study/">Pusat Studi</a></li>
                      <li className=""><a href="/contact/">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="block-lang">
                  {/* <select className="cs-select" name="country">
                    <option>Country</option>
                    <option data-link="/thailand" selected>Thailand</option>
                    <option data-link="/myanmar">Myanmar</option>
                    <option data-link="/indonesia">Indonesia</option>
                    <option data-link="/malaysia">Malaysia</option>
                    <option data-link="/singapore">Singapore</option>
                    <option data-link="/india">India</option>
                    <option data-link="/vietnam">Vietnam</option>
                  </select> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
