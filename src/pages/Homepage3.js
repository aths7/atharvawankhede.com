import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import About from "../components/sections/About";
import Blogs from "../components/sections/Blogs";
import Herosection from "../components/sections/Herosection";

function Homepage() {
  return (
    <>
      <Header3 logoSource="/images/logo.svg" />
      <main className="content-3">
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection colour={false} />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-blogs">
          <Blogs />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
