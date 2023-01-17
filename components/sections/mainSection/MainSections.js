import Tab from "@/components/tabs/Tab";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const MainSections = (props) => {
  const {
    className,
    heading,
    subheading,
    children,
    type,
    link,
    case_image_location,
    case_image,
    case_image_logo,
    case_type,
    case_heading,
    case_text,
    case_link,
    tabs,
  } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`section ${className}`}>
      {type == "line" ? (
        <div className="line flex flex_between">
          <h5 className="heading">
            <div dangerouslySetInnerHTML={{ __html: heading }} />
          </h5>
          <Link href={link}>
            <button className="button green_btn shadow_btn">Let's Talk</button>
          </Link>
        </div>
      ) : type == "case" ? (
        <div className="case">
          <div className={`case_flex flex flex_start ${case_image_location}`}>
            <div className="case_image">
              <img src={case_image} />
            </div>
            <div className="case_data flex">
              <img src={case_image_logo} />
              <h6 className="subhead">{case_type}</h6>
              <h3>{case_heading}</h3>
              <h6 className="subhead">{case_text}</h6>
              <Link href={case_link}>
                <Button className="button green_btn">view case study</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : type == "image_text" ? (
        <div className="text-center image_text">
          <h2>{heading}</h2>
          <div className="technologies flex flex_center gap-20">
            {children?.map((item, index) => (
              <div className="technology">
                <img src={item?.image} />
                <p className="subhead">{item?.text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : type == "slider" ? (
        <div className="text-center">
          <h2>{heading}</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
          </Slider>
        </div>
      ) : tabs ? (
        <div className="text-center">
          <h2>{heading}</h2>
          <div className="tabs">
            <Tab tabs={tabs} defaultKey={1} />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2>{heading}</h2>
          <h5 className="subhead">
            <div dangerouslySetInnerHTML={{ __html: subheading }} />
          </h5>
          {children}
        </div>
      )}
    </div>
  );
};

export default MainSections;
