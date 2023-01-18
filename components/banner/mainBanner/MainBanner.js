import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import QuoteForm from "@/components/form/quoteForm/QuoteForm";

const MainBanner = (props) => {
  const { bg_image, title, text, link } = props;

  const [showQuote, setShowQuote] = useState("hide");
  const openQuote = () => {
    setShowQuote("show");
  };
  const closeQuote = () => {
    setShowQuote("hide");
  };
  return (
    <div className="banner">
      <div className="container">
        <img src={bg_image} className="banner_img" />
        {showQuote === "hide" ? (
          <div className="quote_btn" onClick={openQuote}>
            <p className="medium_text full_bold">GET QUOTE</p>
          </div>
        ) : (
          <div className="quote_data">
            <h6 className="small_heading">Get a free quote!</h6>
            <QuoteForm />
            <div
              className="close_quote_div flex flex_center"
              onClick={closeQuote}
            >
              <img src="/svg/close_icon.svg" />
            </div>
          </div>
        )}
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
