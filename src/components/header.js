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
                <p>Asia Region global site</p>
              </div>
            </div>
          </div>
          <div className="block-right">
            <div>
              <div className="block-table">
                <div className="block-bars"><span></span></div>
                <div className="block-menu">
                  <nav>
                    <ul className="level-1">
                      <li className="xxx home"><a href="/" target="_self" className="home">Home</a></li>
                      <li className="xxx company">
                        <a href="/company/" target="_self" className="company">Company</a>
                        <ul className="sub-menu level-2">
                          <li className="xxx history"><a href="/company/history/" target="_self" className="history">History</a></li>
                          <li className="xxx philosophy"><a href="/company/philosophy/" target="_self" className="philosophy">Philosophy</a></li>
                          <li className="xxx glimpse"><a href="/company/glimpse/" target="_self" className="glimpse">Glimpse</a></li>
                          <li className="xxx research"><a href="/company/research/" target="_self" className="research">Research</a></li>
                          <li className="xxx footprint"><a href="/company/footprint/" target="_self" className="footprint">Footprint</a></li>
                        </ul>
                      </li>
                      {/* <li className="xxx services">
                        <a href="/services/" target="_self" className="services">Services</a>
                        <ul className="sub-menu level-2">
                          <li className="xxx design"><a href="/services/design-demo/" target="_self" className="design">Design</a></li>
                          <li className="xxx design-build"><a href="/services/design-build-demo/" target="_self" className="design-build">Design-Build</a></li>
                          <li className="xxx project,_program_and_construction_management_(pmcm)">
                            <a href="/services/project-program-and-construction-management-pmcm/" target="_self" className="project,_program_and_construction_management_(pmcm)">Project, Program and Construction Management (PMCM)</a>
                          </li>
                          <li className="xxx special_engineering"><a href="/services/special-engineering/" target="_self" className="special_engineering">Special Engineering</a></li>
                          <li className="xxx interior_fitting-out_works"><a href="/services/interior-fitting-out-works/" target="_self" className="interior_fitting-out_works">Interior Fitting-out Works</a></li>
                        </ul>
                      </li>
                      <li className="exclude-sub projects">
                        <a href="/projects/" target="_self" className="projects">Projects</a>
                        <ul className="sub-menu level-2">
                          <li className="xxx st_3rd_factory"><a href="/projects/st-3rd-factory/" target="_self" className="st_3rd_factory">ST 3rd Factory</a></li>
                          <li className="xxx btmu_yangon_branch"><a href="/projects/btmu-yangon-branch/" target="_self" className="btmu_yangon_branch">BTMU YANGON Branch</a></li>
                          <li className="xxx aeon_mall_jgc_project"><a href="/projects/aeon-mall-jgc-project/" target="_self" className="aeon_mall_jgc_project">AEON Mall JGC Project</a></li>
                          <li className="xxx bsin-k_new_headquarters"><a href="/projects/bsin-k-new-headquarter/" target="_self" className="bsin-k_new_headquarters">BSIN-K New Headquarters</a></li>
                          <li className="xxx ceres_garuda_factory"><a href="/projects/ceres-garuda-project/" target="_self" className="ceres_garuda_factory">CERES GARUDA Factory</a></li>
                          <li className="xxx cikarang_hotel_residences_phase_2"><a href="/projects/chr-phase-2/" target="_self" className="cikarang_hotel_residences_phase_2">Cikarang Hotel Residences Phase 2</a></li>
                          <li className="xxx eci_new_factory"><a href="/projects/eci-new-factory/" target="_self" className="eci_new_factory">ECI New Factory</a></li>
                          <li className="xxx mli_new_warehouse"><a href="/projects/mli-new-warehouse/" target="_self" className="mli_new_warehouse">MLI New Warehouse</a></li>
                          <li className="xxx mmki_new_factory"><a href="/projects/mmki-new-factory/" target="_self" className="mmki_new_factory">MMKI New Factory</a></li>
                          <li className="xxx mitsui_soko_new_warehouse"><a href="/projects/mitsui-soko-new-warehouse/" target="_self" className="mitsui_soko_new_warehouse">MITSUI SOKO New Warehouse</a></li>
                          <li className="xxx toyo_ink_myanmar_thilawa_factory"><a href="/projects/toyo-ink-myanmar-thilawa/" target="_self" className="toyo_ink_myanmar_thilawa_factory">TOYO INK MYANMAR THILAWA Factory</a></li>
                          <li className="xxx nakashima_vietnam_factory_(phase_2)"><a href="/projects/nakashima-vietnam-factory-phase-2/" target="_self" className="nakashima_vietnam_factory_(phase_2)">NAKASHIMA VIETNAM Factory (Phase 2)</a></li>
                          <li className="xxx ikea_distribution_centre_port_klang"><a href="/projects/ikea-distribution-centre-port-klang/" target="_self" className="ikea_distribution_centre_port_klang">IKEA DISTRIBUTION CENTRE PORT KLANG</a></li>
                          <li className="xxx changi_international_airport_terminal_1_fixed_gangways">
                            <a href="/projects/changi-international-airport-terminal-1-fixed-gangways/" target="_self" className="changi_international_airport_terminal_1_fixed_gangways">Changi International Airport Terminal 1 Fixed Gangways</a>
                          </li>
                          <li className="xxx changi_international_airport_terminal_1_fixed_gangways">
                            <a href="/projects/changi-international-airport-terminal-1-fixed-gangways1/" target="_self" className="changi_international_airport_terminal_1_fixed_gangways">Changi International Airport Terminal 1 Fixed Gangways</a>
                          </li>
                          <li className="xxx changi_international_airport_terminal_1_west_lounge">
                            <a href="/projects/changi-international-airport-terminal-1-west-lounge/" target="_self" className="changi_international_airport_terminal_1_west_lounge">Changi International Airport Terminal 1 West Lounge</a>
                          </li>
                          <li className="xxx continental_tires_thailand_new_plant"><a href="/projects/continental-tires-thailand-new-plant/" target="_self" className="continental_tires_thailand_new_plant">Continental Tires Thailand New Plant</a></li>
                        </ul>
                      </li>
                      <li className="xxx news">
                        <a href="/news/" target="_self" className="news">News</a>
                        <ul className="sub-menu level-2">
                          <li className="xxx cot-lab™_singapore_opening_ceremony"><a href="/news/cot-lab-singapore-opening-ceremony/" target="_self" className="cot-lab™_singapore_opening_ceremony">COT-Lab™ Singapore Opening Ceremony</a></li>
                        </ul>
                      </li>
                      <li className="xxx contact"><a href="/contact/" target="_self" className="contact">Contact</a></li> */}
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
