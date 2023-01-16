import Link from "next/link";
import React from "react";

const ServiceCard = (props) => {
  const { title, text, image, link } = props;
  return (
    <div className="service_card">
      <div className="service_img">
        <img src={image} />
      </div>
      <div className="service_data">
        <h6 className="heading">{title}</h6>
        <p className="body_text">{text}</p>
        <Link href={link} className="blue_text underline body_text">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
