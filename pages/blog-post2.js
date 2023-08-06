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
        <h1>Exness</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>18 Jan 2023</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Exness, platform</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>34 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Why Choose Exness: Exceptional Trading Experience and Unmatched Reliability</h3>
          <img src="assets/blog/blog-post-2.jpg" alt="Blog image" />
          <div className="post-content">
            <p>
              In our quest to find a reliable and efficient Forex broker, the search led us to Exness - a true standout in the industry. 
              With over 15 years of experience, Exness has proven to be a trustworthy platform, providing an exceptional trading experience. 
              The diverse range of account options offered by Exness allows us to tailor our trading strategy to match our unique investment goals and risk appetite.
            </p>
            <p>
              One of the significant factors that attracted us to Exness is its cutting-edge technology, ensuring swift and seamless trade executions. 
              Their competitive trading costs, featuring low spreads and reasonable commissions, appealed to us, offering an advantage in optimizing our trading performance.
              Furthermore, Exness' dedication to providing professional customer support made us feel valued and reassured. Whenever we have encountered queries or concerns, 
              their responsive team of experts has promptly assisted us, enhancing our overall trading experience.
            </p>
            <p>
              By selecting Exness, we gain access to a comprehensive suite of integrated tools and services, including market analysis, trading signals, and other valuable resources. 
              This has empowered us to make well-informed decisions and stay ahead in the ever-changing Forex market.
              In conclusion, our decision to choose Exness was grounded in the trustworthiness, advanced technology, competitive costs, and exceptional support that they consistently deliver. 
              With Exness, we confidently navigate the Forex market, knowing we have a reliable partner supporting our trading journey.
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
