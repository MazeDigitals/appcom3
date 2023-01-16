import Link from "next/link";
import React from "react";
import { Button, Col, Row } from "antd";

const MainBanner = (props) => {
  const { bg_image, title, text, link } = props;
  return (
    <div className="banner">
      <div className="container">
        <img src={bg_image} className="banner_img" />
        <Col md={12}>
          <div className="banner_content">
            <div>
              <h1>
                <div dangerouslySetInnerHTML={{ __html: title }} />
              </h1>
              <h5 className="large_text">{text}</h5>
            </div>
            <Link href={link}>
              <Button className="button green_btn mt-2">
                Let's Get Started
              </Button>
            </Link>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default MainBanner;
