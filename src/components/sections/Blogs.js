import React from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";
import { allBlogs } from "../../conf/vars";

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/essays" className="btn btn-default">
            Show all Essays
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
