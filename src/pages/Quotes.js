import React, { useState, useEffect } from "react";
import Header3 from "../components/layouts/Header3";
import "../sass/quotes.scss";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function QuoteDetails(props) {
  const [quotes, setQuotes] = useState([]);
  const quoteId = parseInt(props.match.params.id, 10);

  useEffect(() => {
    import(`../quotes/quotesList.json`)
      .then((res) => res.default)
      .then((data) => {
        setQuotes(data);
      });
  }, []);

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

  const shuffledQuotes = shuffleArray([...quotes]);

  return (
    <>
      <Header3
        logoSource="/images/logo.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={"open"}>
        <div className="spacer" data-height="96"></div>
        <div className="quote-page-section">
          <div className="container">
            <div className="container">
              {shuffledQuotes.map((quote, index) => (
                <div key={index} className="quote-single shadow-dark p-30">
                  <blockquote>{quote}</blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default QuoteDetails;
