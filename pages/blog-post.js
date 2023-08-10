import { Fragment, useEffect } from "react";

const BlogPost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>Forex Overview</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>9 Apr 2022</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Forex, Currency</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>17 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>The meaning of currency pairs in Forex</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/59c5UUu1C4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="post-content">
            <p>
              In Forex trading, currency pairs hold significant importance as they represent the relative value of one currency against another.
              Each pair consists of a base currency and a quote currency,
              and their exchange rate determines how much of the quote currency is needed to purchase one unit of the base currency.
            </p>
            <p>
              Understanding the meaning of currency pairs is crucial for traders as it provides insights into the global economic landscape and market dynamics.
              For example, major currency pairs like EUR/USD, USD/JPY, and GBP/USD are closely monitored as they involve currencies of major economies,
              reflecting broader market trends and investor sentiment.

              Exotic currency pairs, on the other hand, involve currencies of smaller or emerging economies and are characterized by lower liquidity and higher volatility.
              Trading these pairs requires careful analysis and risk management.
            </p>
            <p>
              In essence, the significance of currency pairs lies in their ability to reveal the underlying economic conditions and geopolitical factors influencing the global financial markets.
              By grasping these intricacies, traders can make informed decisions and capitalize on market opportunities, 
              thus enhancing their chances of success in the Forex arena.
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};
export default BlogPost;
