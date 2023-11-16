import React from "react";
import "./header.scss";
import { StaticImage } from "gatsby-plugin-image"

const HomeIndex = () => {
  return (
    <div className="block-content">
      <div className="content">
        <div className="desc">
          <div className="topic">
            <div className="left-block">
              <h2>MACHINERY WAREHOUSE DEPARTEMENT</h2>
            </div>
          </div>
          <div className="detail">
            <div className="two-col-content">
              <div className="img">
                <StaticImage
                  src="../gallerys/mwd-1.jpeg"
                  width="1034"
                  height="687"
                  alt="mwd-1"
              />
              </div>
              <div className="text">
                <h2>TAKENAKA'S MACHINERY WAREHOUSE DEPARTEMENT</h2>
                <p>
                  What is Lorem Ipsum?
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
            <div className="two-col-content">
              <div className="text">
                <h4>OBJECTIVE</h4>
                <ul>
                  <li>All facilities and mock-ups will reflect the present problems of Thai Takenaka International Ltd.</li>
                  <li>The same standard of training will be applied to Thai and Japanese staff.</li>
                  <li>Continuous training will be conducted and managed by Thai staff.</li>
                  <li>Increase the understanding of newly-allocated Japanese staff.</li>
                </ul>
                <h4>
                  <br />
                  <br />
                  CONCEPT
                </h4>
                <p>To offer experienced-based training specifically by “Looking, Touching and Realizing”</p>
                <table border="0">
                  <tbody>
                    <tr>
                      <td><strong>"By Looking"</strong></td>
                      <td>Learn visually through full-size models, displays and panels</td>
                    </tr>
                    <tr>
                      <td><strong>"By Touching"</strong></td>
                      <td>Learn the importance of quality control by touching examples of actual defects</td>
                    </tr>
                    <tr>
                      <td><strong>"By Realizing"</strong></td>
                      <td>Think, judge and instruct independently through practical training using RC mock-ups</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div className="img">
                <img src={`/files/1815/2179/8722/TrainingCenter140126-058.jpeg`} width="1037" height="692" alt="" />
              </div> */}
            </div>
          </div>
          <div className="mblock-title">
            <h2>Passing TAKENAKA knowledge &amp; Technical know-how to the next generation</h2>
            <p>&nbsp;</p>
          </div>
          <div className="mblock">
            {/* <div className="img-link-block">
              <div className="block" style={`background-image: url('/files/1015/2870/8457/taksa-img.jpg');`}>
                <img src={`/files/1015/2870/8457/taksa-img.jpg`} width="800" height="600" alt="" />
                <div className="text">
                  PRACTICAL TRAINING<br />
                  (HIGH WORKPLACE FOR OUR STAFF &amp; SUB-CONTRACTORS)
                </div>
              </div>
            </div> */}

            {/* <div className="img-link-block">
              <div className="block" style={`background-image: url('/files/2115/2179/8925/Taksa_Basic_Training_for_new_staffs.JPG')`}>
                <img src={`/files/2115/2179/8925/Taksa_Basic_Training_for_new_staffs.JPG`} width="2592" height="1944" alt="" />
                <div className="text">Taksa Basic Training for new staff</div>
              </div>
            </div>

            <div className="img-link-block">
              <div className="block" style={`background-image: url('/files/9615/2179/8759/Taksa_Training_by_Expert_Senior_Engineer.JPG');`}>
                <img src={`/files/9615/2179/8759/Taksa_Training_by_Expert_Senior_Engineer.JPG`} width="2592" height="1944" alt="" />
                <div className="text">Taksa Training by Expert Senior Engineer</div>
              </div>
            </div> */}
          </div>
          <div className="facility">
            <h2>
              Training Facility<br />
              <br />
            </h2>

            {/* <ul className="gallery loaded" id="image-gallery">
              <li style={`background-image: url('/files/7815/2179/9078/Training_Facility_1.JPG'); min-height: 247px;`}>
                <div className="image-wrap">
                  <img src="/files/7815/2179/9078/Training_Facility_1.JPG" />
                </div>
              </li>

              <li style={`background-image: url('/files/9515/2179/9078/Training_Facility_2.JPG'); min-height: 247px;`}>
                <div className="image-wrap">
                  <img src={`/files/9515/2179/9078/Training_Facility_2.JPG`} />
                </div>
              </li>

              <li style={`background-image: url('/files/4615/2179/9079/Training_Facility_3.JPG'); min-height: 247px;`}>
                <div className="image-wrap">
                  <img src={`/files/4615/2179/9079/Training_Facility_3.JPG`} />
                </div>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;
