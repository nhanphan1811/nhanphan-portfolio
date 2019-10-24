/* eslint-disable no-useless-concat */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">My Project</h2>
        </div>
        <div className="row">
          {/* <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map(item => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div> */}
          {resumeData.portfolio1 &&
            resumeData.portfolio1.map((item, key) => {
              return (
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div
                        className={
                          "card__picture card__picture--" + `${key + 1}`
                        }
                      >
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span">{item.name}</span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          {item.tech.map((element, key) => {
                            console.log(element, key);
                            return <li key={key}>{element}</li>;
                          })}
                          <li></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back">
                      <div className="card__cta">
                        <div className="card__projects-box">
                          <p className="card__projects-header">
                            {item.backHeader}
                          </p>
                          <p className="card__projects-text">{item.backText}</p>
                        </div>
                        <a
                          href={`${item.link}`}
                          className="btn btn--white"
                          target="_blank"
                        >
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}
