import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col lg={9}>
            <div className="flex flex_start flex_column footer_gap">
              <Link href="/">
                <div className="logo">
                  <img src="svg/logo.svg" />
                </div>
              </Link>
              <p className="medium_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
              <div className="social_links flex flex_Start gap-20">
                <div className="social">
                  <a>
                    <img src="/svg/Linkedin.svg" />
                  </a>
                </div>
                <div className="social">
                  <a>
                    <img src="/svg/Facebook.svg" />
                  </a>
                </div>
                <div className="social">
                  <a>
                    <img src="/svg/Instagram.svg" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 4 }}>
            <div className="footer_links">
              <p className="footer_heading green_text">Services</p>
              <div className="flex flex_start flex_column gap-20">
                <Link href="#">
                  <p className="footer_link medium_text">Mobile Application</p>
                </Link>
                <Link href="#">
                  <p className="footer_link medium_text">Website Design</p>
                </Link>
                <Link href="#">
                  <p className="footer_link medium_text">Blockchain</p>
                </Link>
                <Link href="#">
                  <p className="footer_link medium_text">Ecommerce</p>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 4 }}>
            <div className="footer_links">
              <p className="footer_heading green_text">Get in Touch</p>
              <div className="flex flex_start flex_column gap-20">
                <div className="flex flex_start gap-20 align-items-center">
                  <img src="/svg/email.svg" />
                  <div>
                    <p className="medium_text">sales@appcom3.com</p>
                    <p className="medium_text">info@appcom3.com</p>
                  </div>
                </div>
                <div className="flex flex_start gap-20 align-items-center">
                  <img src="/svg/call.svg" />
                  <p className="medium_text">+1 330-999-8028</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 6, offset: 1 }}>
            <div className="footer_links">
              <p className="footer_heading green_text">Locations</p>
              <div className="flex flex_start flex_column gap-20">
                <p className="medium_text">
                  7901, 4th st N STE 5217, St.Peterburg FL, USA 33702
                </p>
                <p className="medium_text">
                  Unit 13 1940 Ironstone Drive, Burlington, ON, Canada L5A3L7
                </p>
                <p className="medium_text">
                  Office # 216, Tehseen Tower, PECHS Block 7/8
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
          className="bottom_footer"
        >
          <Col lg={16}>
            <div className="flex flex_start gap-20">
              <p className="medium_text">© 2023 appcom3 All rights reserved </p>
              <Link href={"#"}>
                <p className="footer_link medium_text">Terms and Condition</p>
              </Link>
              <Link href={"#"}>
                <p className="footer_link medium_text">Privacy Policy</p>
              </Link>
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="text-align-right">
            <p className="medium_text">Powered by mazedigitals.com</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
