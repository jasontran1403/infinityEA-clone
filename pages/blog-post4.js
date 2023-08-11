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
        <h1>About us</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>13 June 2023</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Aboutus, Brand</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>100 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Infinity EA - aiming for infinity of Trading Market. </h3>
          <iframe width="100%" height="50%" src="https://www.youtube.com/embed/yoxrePKUllw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="post-content">
            <p>
              In the dynamic world of trading, where opportunities seem limitless yet uncertainties abound, the quest for a reliable and profitable solution remains ever-present. 
              Enter Infinity EA - a trading companion crafted with a vision to transcend boundaries and strive for unending possibilities in the financial markets.
              At its core, Infinity EA represents a commitment to continuous growth and adaptability, much like the infinite nature of the cosmos. 
              This sophisticated trading algorithm leverages cutting-edge technology and years of experience to navigate the complexities of the market with precision and finesse.
            </p>
            <p>
              The name "Infinity EA" embodies a belief in unbounded potential, urging traders to think beyond conventional limitations and explore the uncharted territories of trading success. 
              Like the vast expanse of the universe, the Forex market offers an infinite array of currency pairs, investment opportunities, and ever-changing trends. 
              Infinity EA is poised to seize these possibilities and harness them to our advantage.
              Guided by a team of industry experts, Infinity EA is constantly evolving and learning from market dynamics, adapting to shifts and challenges. 
              It operates 24/5, tirelessly scanning the financial landscape for opportunities that others might overlook.
            </p>
            <p>
              Embracing the concept of infinity, this AI-powered trading companion aspires to unlock untapped potential for traders, empowering them with insightful analysis, real-time data, and automated execution. 
              The goal is simple yet profound - to achieve consistent profitability and growth, allowing traders to transcend conventional boundaries and venture fearlessly into the realm of infinite possibilities.
              In conclusion, Infinity EA stands as a symbol of resilience, innovation, and ceaseless pursuit of success in the trading arena. Its name embodies the unending drive to explore, adapt, and prosper, unlocking the door to a realm where limits are but a distant memory. 
              With Infinity EA by your side, the journey to financial success becomes an expedition into the boundless world of trading possibilities.
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
