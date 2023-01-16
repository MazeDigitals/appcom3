import { Button } from "antd";
import Link from "next/link";
import React from "react";

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
  } = props;
  return (
    <div className={`section ${className}`}>
      {type == "line" ? (
        <div className="flex flex_between">
          <h5 className="heading">
            <div dangerouslySetInnerHTML={{ __html: heading }} />
          </h5>
          <Link href={link}>
            <button className="button green_btn shadow_btn">Let's Talk</button>
          </Link>
        </div>
      ) : type == "case" ? (
        <div className="case">
          <div className={`flex flex_start ${case_image_location}`}>
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
