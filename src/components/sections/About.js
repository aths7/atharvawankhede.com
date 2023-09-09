import React from "react";
import Pagetitle from "../elements/Pagetitle";
import { aboutContent } from "../../conf/vars";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  <p>{aboutContent.content}</p>
                  <p>{aboutContent.line2}</p>
                  <div className="mx-auto">
                    <span className="m-3">
                      <Link to="/essays" className="btn btn-default">
                        Essays
                      </Link>
                    </span>
                    {/* <span className="m-3">
                      <a
                        href="https://atharvawankhede.substack.com/"
                        className="btn btn-default"
                      >
                        NewsLetter
                      </a>
                    </span> */}
                  </div>

                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-12"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
      </div>
    </section>
  );
}

export default About;
