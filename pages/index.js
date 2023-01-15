import { Button, Col, Row } from "antd";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <img src="png/main_banner.png" className="banner_img" />
          <Col md={12}>
            <div className="banner_content">
              <div>
                <h1>
                  Build beautiful <br></br> website & mobile apps.
                </h1>
                <h5 className="large_text">
                  appcom3 is a software and mobile app development company with
                  a world-class team of talented data scientists, developers,
                  designers, mathematicians.
                </h5>
              </div>
              <Button className="button green_btn mt-2">
                Let's Get Started
              </Button>
            </div>
          </Col>
        </div>
      </div>
      <div className="blur_green_section">
        <div className="text-center">
          <h2>Services we can help you with</h2>
          <h5 className="subhead">
            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem <br></br>{" "}
            ipsum dolor sit amet, consectetur adipiscing{" "}
          </h5>
          <div className="services flex flex_center">
            <div className="service_card">
              <div className="service_img">
                <img src="/png/web_app_service.png" />
              </div>
              <div className="service_data">
                <h6 className="heading">Web App</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
                  dolor s Lorem ipsum dolor sit amet Read more
                </p>
              </div>
            </div>
            <div className="service_card">
              <div className="service_img">
                <img src="/png/mobile_app_service.png" />
              </div>
              <div className="service_data">
                <h6 className="heading">Mobile App</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
                  dolor s Lorem ipsum dolor sit amet Read more
                </p>
              </div>
            </div>
            <div className="service_card">
              <div className="service_img">
                <img src="/png/blockchain_service.png" />
              </div>
              <div className="service_data">
                <h6 className="heading">Blockchain</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
                  dolor s Lorem ipsum dolor sit amet Read more
                </p>
              </div>
            </div>
            <div className="service_card">
              <div className="service_img">
                <img src="/png/web_app_service.png" />
              </div>
              <div className="service_data">
                <h6 className="heading">MVP</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
                  dolor s Lorem ipsum dolor sit amet Read more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="black_green_section">
        <div className="text-center">
          <h2>Achievements</h2>
          <h5 className="subhead">
            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem <br></br>{" "}
            ipsum dolor sit amet, consectetur adipiscing{" "}
          </h5>
        </div>
      </div>
      <div className="white_section">
        <div className="flex flex_between">
          <h5 className="heading">
            Stop Running Behind Readymade Solution & Get Custom Software{" "}
            <br></br> To Boost Efficiency By 2X
          </h5>
          <a className="button green_btn shadow_btn">Let's Talk</a>
        </div>
      </div>
      <div className="dark_section">
        <div className="text-center">
          <h2>Case Studies</h2>
          <h5 className="subhead">
            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem <br></br>{" "}
            ipsum dolor sit amet, consectetur adipiscing{" "}
          </h5>
        </div>
      </div>
      <div className="blur_green_section" style={{ height: "400px" }}>
        <Row>
          <Col md={12}>
            <div>sasd</div>
          </Col>
          <Col md={12}>
            <div className="text-center">sadad</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
