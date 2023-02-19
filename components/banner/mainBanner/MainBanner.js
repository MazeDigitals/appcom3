import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import QuoteForm from "@/components/form/quoteForm/QuoteForm";

const MainBanner = (props) => {
  const { bg_image, title, text, link, side_img, align } = props;

  const [showQuote, setShowQuote] = useState("hide");
  const openQuote = () => {
    setShowQuote("show");
  };
  const closeQuote = () => {
    setShowQuote("hide");
  };
  return (
    <div className={`banner ${align == "center" && "center_text"}`}>
      <div className="container">
        <img src={bg_image} className="banner_img" />
        <Row>
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
        {align == "center" ? 
        <Col md={24}>
          <div className="banner_content center">
            <div>
              <h1>
                <div dangerouslySetInnerHTML={{ __html: title }} />
              </h1>
              <h5 className="large_text">{text}</h5>
            </div>
            {link && <Link href={link}>
              <Button className="button green_btn mt-2">
                Let's Get Started
              </Button>
            </Link>}
          </div>
        </Col>
        :
        <>
          <Col md={10}>
            <div className="banner_content">
              <div>
                <h1>
                  <div dangerouslySetInnerHTML={{ __html: title }} />
                </h1>
                <h5 className="large_text">{text}</h5>
              </div>
              {link && <Link href={link}>
                <Button className="button green_btn mt-2">
                  Let's Get Started
                </Button>
              </Link>}
            </div>
          </Col>
          {side_img && 
            <Col md={{span: 12, offset:2}}>
              <img className="banner_side_img" src={side_img}/>
            </Col>
          }
        </>
        }
        </Row>
      </div>
    </div>
  );
};

export default MainBanner;
