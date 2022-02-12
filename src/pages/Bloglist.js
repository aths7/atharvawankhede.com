import React, { useState, useEffect } from "react";
import Header3 from "../components/layouts/Header3";
import Blog from "../components/elements/Blog";
import Pagination from "../components/elements/Pagination";
import { allEssays } from "../conf/vars";

function Bloglist() {
  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    setPosts(allEssays);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header3
        logoSource="/images/logo.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      {/* toggleMenu ? "content open" : */}
      <main className={"conten open"}>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="row blog-wrapper fix-spacing">
              {currentPosts.map((blogItem) => (
                <div className="col-md-4" key={blogItem.id}>
                  <Blog blogData={blogItem} />
                </div>
              ))}
            </div>
            <div className="spacer" data-height="50"></div>
            {!(posts.length > postsPerPage) ? null : (
              <Pagination
                itemsPerPage={postsPerPage}
                totalItems={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Bloglist;
