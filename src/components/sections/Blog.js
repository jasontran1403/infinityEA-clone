import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-1.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">Tạo tài khoản</span>
                <span className="title">
                  Hướng dẫn tạo tài khoản Exness.
                </span>
                <p>
                  Stay informed with the latest Forex news updates, enabling you to make more accurate investment decisions.
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>9 Apr 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>17 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}

        
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post2" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-2.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">Standard Cent</span>
                <span className="title">
                  Hướng dẫn mở tài khoản trade Exness - Standard Cent
                </span>
                <p>
                  Exness is one of the leading and reputable forex brokers in the industry. Established in 2008
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>18 Jan 2023</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>34 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post3" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-3.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">PassView</span>
                <span className="title">
                  Hướng dẫn thiết lập quyền chỉ xem cho tài khoản Trade
                </span>
                <p>
                  Why Infinity EA - Exploring the Significance of Our Name. When our started, and goal ?
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>1 Jan 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>10 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}

        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post4" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-1.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">Nạp tiền</span>
                <span className="title">
                  Hướng dẫn nạp tiền vào tài khoản Exness
                </span>
                <p>
                  Stay informed with the latest Forex news updates, enabling you to make more accurate investment decisions.
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>9 Apr 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>17 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}


      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
