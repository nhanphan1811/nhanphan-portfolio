/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  FaDownload,
  FaUser,
  FaLocationArrow,
  FaMobile,
  FaEnvelope
} from "react-icons/fa";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>
                    <FaUser />&emsp; Tran Minh Dat
                  </span>
                  <br />
                  <span>
                    <FaLocationArrow />&emsp; 39 Cao Lo, Phuong 4, Quan 8, TPHCM
                  </span>
                  <br />
                  <span>
                    <FaMobile />&emsp; 079 5550 300
                  </span>
                  <br />
                  <span>
                    <FaEnvelope />&emsp; minhdat.tran97@gmail.com
                  </span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href="https://www.dropbox.com/s/y9hlnmvc8nwfxct/CV_TranMinhDat_SE.pdf?dl=1"
                    className="button"
                  >
                    <FaDownload /> Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
