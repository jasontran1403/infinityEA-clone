import React from "react";
import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Axios from "axios";
import { normalAlert } from "../Swal";

const About = () => {
  const [networks, setNetworks] = React.useState([]);
  const [startIndex, setStartIndex] = React.useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + itemsPerPage);
  };

  const handlePrev = () => {
    setStartIndex((prevStartIndex) => prevStartIndex - itemsPerPage);
  };

  const visibleItems = networks?.F1?.slice(startIndex, startIndex + itemsPerPage);

  React.useEffect(() => {
    if (localStorage.getItem("email")) {
      let config = {
        method: 'get',
        url: `http://localhost:8080/api/v1/auth/test/${localStorage.getItem("email")}`
      };

      Axios.request(config)
        .then((response) => {
          setNetworks(response.data);
        })
        .catch((error) => {
          normalAlert("Lỗi, xin vui lòng đăng nhập lại!", "error");
        });
    } else {
      return;
    }
  }, []);

  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Our Network
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <ul>Danh sách F1
              {Array.isArray(networks.F1) && networks.F1.length > 0 ? (
                <>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {visibleItems.map((item, id) => (
                      <li key={id} style={{ paddingLeft: "20px" }}>{startIndex + id + 1} - {item}</li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    {startIndex > 0 && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handlePrev}
                      >
                        Previous
                      </li>
                    )}
                    {startIndex + itemsPerPage < networks.F1.length && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handleNext}
                      >
                        Next
                      </li>
                    )}
                  </div>
                </>
              ) : (
                <li>Không có dữ liệu F1</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content ">
            <ul>Danh sách F2
              {Array.isArray(networks.F2) && networks.F2.length > 0 ? networks.F2.length > 6 ? <>
                {networks.F2.slice(0, 6).map((item, id) => (
                  <li key={id} style={{ paddingLeft: "50px" }}>{item}</li>
                ))}
                <li style={{ paddingLeft: "50px", color: "blue", cursor: "pointer" }}>Next</li>
              </> : (
                networks.F1.map((item, id) => (
                  <li key={id} style={{ paddingLeft: "50px" }}>{item}</li>
                ))
              ) : (
                <li>Không có dữ liệu F2</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}

        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <ul>Danh sách F3
              {Array.isArray(networks.F3) && networks.F3.length > 0 ? networks.F3.length > 6 ? <>
                {networks.F3.slice(0, 6).map((item, id) => (
                  <li key={id} style={{ paddingLeft: "50px" }}>{item}</li>
                ))}
                <li style={{ paddingLeft: "50px", color: "blue", cursor: "pointer" }}>Load more</li>
              </> : (
                networks.F3.map((item, id) => (
                  <li key={id} style={{ paddingLeft: "50px" }}>{item}</li>
                ))
              ) : (
                <li>Không có dữ liệu F3</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}

        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <ul>Danh sách F4
              {Array.isArray(networks.F4) && networks.F4.length > 0 ? networks.F4.length > 6 ? <>
                {networks.F4.slice(0, 6).map((item, id) => (
                  <li key={id} style={{ paddingLeft: "50px" }}>{item}</li>
                ))}
                <li style={{ paddingLeft: "50px", color: "blue", cursor: "pointer" }}>Load more</li>
              </> : (
                networks.F4.map((item, id) => (
                  <li key={id} style={{ paddingLeft: "50px" }}>{item}</li>
                ))
              ) : (
                <li>Không có dữ liệu F4</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}

        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <ul>Danh sách F5
              {Array.isArray(networks.F5) && networks.F5.length > 0 ? networks.F5.length > 6 ? <>
                {networks.F5.slice(0, 6).map((item, id) => (
                  <li key={id} style={{ paddingLeft: "50px" }}>{item}</li>
                ))}
                <li style={{ paddingLeft: "50px", color: "blue", cursor: "pointer" }}>Load more</li>
              </> : (
                networks.F5.map((item, id) => (
                  <li key={id} style={{ paddingLeft: "50px" }}>{item}</li>
                ))
              ) : (
                <li>Không có dữ liệu F5</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
