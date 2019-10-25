/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
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
                  <span>Jonathan Doe</span>
                  <br />
                  <span>
                    1600 Amphitheatre Parkway
                    <br /> Mountain View, CA 94043 US
                  </span>
                  <br />
                  <span>(123)456-7890</span>
                  <br />
                  <span>anyone@website.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button">
                    Download Resume
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
