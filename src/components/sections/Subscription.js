import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
import { aboutContent } from "../../conf/vars";

function Subcription() {
  return (
    <section id="subscribe">
      <div className="container">
        <Pagetitle title="NewsLetter" />
        <div className="row">
          {/* <div className="mx-auto"> */}
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="rounded bg-white shadow-dark padding-30">
              {/* <div className="row"> */}
              {/* <div className="col-md-6">
                  <p>Every Friday morning, I’ll send you an email with:</p>
                  <ul>
                    <li>My favourite quote of the week!</li>
                    <li>
                      An organised chatter about what’s cooking in my mind in
                      less than 500 words
                    </li>
                    <li>
                      Things I found interesting in the week: Articles, Videos,
                      Podcasts, Books
                    </li>
                    <li>An idea that I find valuable</li>
                    <li>Updates on new essays</li>
                  </ul>
                </div> */}

              {/* <div className="col-md-12"> */}
              <div className="mx-auto">
                <span>
                  <iframe
                    src="https://atharvawankhede.substack.com/embed"
                    width={"auto"}
                    height="320"
                    frameborder="0"
                    scrolling="no"
                  ></iframe>
                </span>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subcription;
