import RatingCard from "../components/cards/ratingCard/RatingCard";
import ServiceCard from "../components/cards/serviceCard/ServiceCard";
import { Button, Col, Row } from "antd";
import React from "react";
import MainBanner from "@/components/banner/mainBanner/MainBanner";
import MainSections from "@/components/sections/mainSection/MainSections";

const Home = () => {
  return (
    <div>
      <MainBanner
        bg_image="png/main_banner.png"
        title="Build beautiful <br> website & mobile apps."
        text="appcom3 is a software and mobile app development company with a
                world-class team of talented data scientists, developers,
                designers, mathematicians."
        link="#"
      />
      <MainSections
        className="blur_green_section spacing"
        heading="Services we can help you with"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem <br>
            ipsum dolor sit amet, consectetur adipiscing"
        children={
          <div className="services flex flex_center">
            <ServiceCard
              title="Web App"
              image="/png/web_app_service.png"
              link="#"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor s Lorem ipsum dolor sit amet"
            />
            <ServiceCard
              title="Mobile App"
              image="/png/mobile_app_service.png"
              link="#"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor s Lorem ipsum dolor sit amet"
            />
            <ServiceCard
              title="Blockchain"
              image="/png/blockchain_service.png"
              link="#"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor s Lorem ipsum dolor sit amet"
            />
            <ServiceCard
              title="MVP"
              image="/png/web_app_service.png"
              link="#"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor s Lorem ipsum dolor sit amet"
            />
          </div>
        }
      />
      <MainSections
        className="black_green_section"
        heading="Achievements"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem <br>
        ipsum dolor sit amet, consectetur adipiscing"
        children={
          <div className="ratings flex flex_center gap-20">
            <RatingCard
              title="Maze Digital is rated Excellent"
              stars="5"
              stars_color="green"
              number_of_reviews="456"
              review_type="trustpilot"
            />
            <RatingCard
              title="Maze Digital is rated with 4.8 Stars"
              stars="4"
              stars_color="yellow"
              number_of_reviews="152"
              review_type="google"
            />
          </div>
        }
      />
      <MainSections
        className="white_section spacing"
        heading="Stop Running Behind Readymade Solution & Get Custom Software <br>
          To Boost Efficiency By 2X"
        link="#"
        type="line"
      />
      <MainSections
        className="dark_section spacing"
        heading="Case Studies"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem <br>
        ipsum dolor sit amet, consectetur adipiscing"
      />
      <MainSections
        className="green_top_left_bottom_right spacing"
        type="case"
        case_image_location="right"
        case_image="/png/hictic.png"
        case_image_logo="/png/hictic_logo.png"
        case_type="MOBILE APP"
        case_heading="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, dolor sit amet, consectetur"
        case_text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,"
        case_link="#"
      />
      <MainSections
        className="dark_top_section spacing"
        type="case"
        case_image_location="left"
        case_image="/png/hictic.png"
        case_image_logo="/png/hictic_logo.png"
        case_type="MOBILE APP"
        case_heading="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, dolor sit amet, consectetur"
        case_text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,"
        case_link="#"
      />
      <MainSections
        className="green_top_left spacing"
        type="case"
        case_image_location="right"
        case_image="/png/hictic.png"
        case_image_logo="/png/hictic_logo.png"
        case_type="MOBILE APP"
        case_heading="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, dolor sit amet, consectetur"
        case_text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,"
        case_link="#"
      />
      <MainSections
        className="white_section spacing"
        heading="Stop Running Behind Readymade Solution & Get Custom Software <br>
          To Boost Efficiency By 2X"
        link="#"
        type="line"
      />
      <MainSections
        className="semi_dark_section spacing"
        heading="Technologies we work with"
        tabs={[
          {
            name: "Mobile",
            images: [
              { name: "IOS", img: "/svg/apple_silver.svg" },
              { name: "Honda", img: "/svg/honda_silver.svg" },
              { name: "Google", img: "/svg/google_silver.svg" },
            ],
          },
          {
            name: "Frontend",
            images: [
              { name: "IOS", img: "/svg/apple_silver.svg" },
              { name: "Google", img: "/svg/google_silver.svg" },
            ],
          },
          {
            name: "Database",
            images: [
              { name: "IOS", img: "/svg/apple_silver.svg" },
              { name: "Honda", img: "/svg/honda_silver.svg" },
            ],
          },
          {
            name: "Backend",
            images: [{ name: "IOS", img: "/svg/apple_silver.svg" }],
          },
          {
            name: "CMS",
            images: [{ name: "Honda", img: "/svg/honda_silver.svg" }],
          },
          {
            name: "Infra and devops",
            images: [{ name: "Google", img: "/svg/google_silver.svg" }],
          },
        ]}
      />
      <MainSections
        className="dark_grey_section spacing"
        heading="We partner with the world’s technology leaders."
        type="image_text"
        children={[
          {
            text: "Google Developer Certified Agency",
            image: "/svg/google_developer.svg",
          },
          {
            text: "Adobe Solution Partner Program",
            image: "/svg/adobe.svg",
          },
          {
            text: "Microsoft Certified Consulting Partner",
            image: "/svg/microsoft.svg",
          },
          {
            text: "Amazon Web Services Partner",
            image: "/svg/amazon.svg",
          },
        ]}
      />
      <MainSections
        className="bottom_dark_section spacing"
        heading="We develop enterprise-grade software solutions for businesses."
        type="slider"
      />
    </div>
  );
};

export default Home;
