import MainBanner from '@/components/banner/mainBanner/MainBanner'
import HalfSection from '@/components/sections/halfSection/HalfSection'
import MainSections from '@/components/sections/mainSection/MainSections'
import React from 'react'

const Services = () => {
  return (
    <div>
        <MainBanner 
          bg_image="png/page_banner_bg.png"
          title="Our Services"
          text="appcom3 is a software and mobile app development company
          with a world-class team of talented data scientists, developers,
          designers, mathematicians, engineers, and creative artists.
          We are motivated to build elegant and functional digital
          products that solve complex problems."
          link="#"
          side_img="png/banner_img.png"
        />
        <MainSections
          className="dark_black_section spacing"
          width="75%"
          miniHeading="DISCOVERY . DESIGN . DEVELOPMENT . TESTING"
          heading="Digital demand thrives in our hands"
          type="child"
          subheading="We bring to you award-winning products, excellent UI/UX, and a world-class tech talent of web and mobile arena that bridges the gap between the creative and technology world. At Cubix, our solutions become a technology brand that others take inspiration from."
          children={[
            {
              heading: "23",
              text: "Increased response time"
            },{
              heading: "88",
              text: "Faster delivery time"
            },{
              heading: "97",
              text: "Client satisfaction index"
            },{
              heading: "70",
              text: "Client retention rate"
            },
          ]}
        />
        <HalfSection 
          className="green_top_left_opacity spacing"
          type="image"
          image_align="right"
          heading="Website Application"
          image="/png/web_application.png"
          description="We leverage modern technologies and innovative minds to develop dynamic software solutions for multiple platforms, helping clients introduce a one-of-a-kind solution to the audience."
          points={["Rapid Strategy Workshop™","Define project value proposition","Identify development and deployment requirements + constraints.","Perform market research - comparative applications/products.","Identify key opportunities for the feature set.","Growth Hacking"]}
        />
        <HalfSection 
          className="green_right_bottom spacing"
          type="image"
          image_align="left"
          heading="Mobile Application"
          image="/png/mobile.png"
          description="Our products undergo vigorous analysis to craft user-centric, result-driven, and industry-specific designs. We design to enhance user engagement and improve user experience, with intriguing concepts."
          points={["Conceptualization exercise with project stakeholders.","Developing user experience wireframes for key page types.","User interface mockups based on approved wireframes.","Building Clickable rapid prototyping.","Creating user experience"]}
        />
        <HalfSection 
          className="green_top_left_opacity spacing"
          type="image"
          image_align="right"
          heading="Blockchain"
          image="/svg/blockchain.svg"
          description="We leverage modern technologies and innovative minds to develop dynamic software solutions for multiple platforms, helping clients introduce a one-of-a-kind solution to the audience."
          points={["MOBILE APPs (iOS & Android)","Game Development","Web Development","Business Intelligence","Big Data","Artificial Intelligence and Machine Learning","Virtual Reality","Augmented Reality","SaaS Platforms Development"]}
        />
        <HalfSection 
          className="green_right_bottom spacing"
          type="image"
          image_align="left"
          heading="MVP Minimum Viable Product"
          image="/png/web_application.png"
          description="We take Quality Assurance very seriously. Each project we take on goes through numerous iterations of testing to ensure smooth performance, user-friendliness, and bulletproof security."
          points={["Application Testing","Load Testing","API Testing","Version Control","Test Automation","Security Testing","Usability Testing"]}
        />
        <HalfSection 
          className="green_left_dark spacing"
          heading="Shaping a Vision. Delivering Digital Products. Creating World-Class Experiences."
          description="Our focus is on innovating and executing at an unmatched pace. We help businesses launch their digital solutions at just the right time."
          children={[
            {
              num: "01",
              title:"Project Kickoff",
              data: "We understand your project requirements, explore industry dynamics, and analyze current infrastructure to craft a new product or revamp your existing digital presence."
            },
            {
              num: "02",
              title:"Ideation and Evaluation",
              data: "Our creative heads discuss the project with your teams to evaluate the key features of the product and give it a real shape, aligning the product with business goals."
            },
            {
              num: "03",
              title:"Design Process",
              data: "We build products with the highest user engagement, solving real problems, and infusing business growth. Our products are designed to stimulate desired user behaviors."
            },
            {
              num: "04",
              title:"Development Process",
              data: "We build products with the highest user engagement, solving real problems, and infusing business growth. Our products are designed to stimulate desired user behaviors."
            },
          ]}
          link="#"
        />
        <MainSections
          className="bottom_dark_section spacing"
          heading="Our Clients Simply Love Our Work"
          subheading="Rated 4.9/5.0 by 300+ clients for IOS and Android development services on various platforms"
          type="slider"
          children={[
            {
              comment:
                "Willing to accommodate nonprofit budgets, Cubix brought their robust experience to the project. They checked in consistently, and were communicative, easy to reach, and responsive. The Android app shows over 500 downloads to date.",
              name: "Melissa Steward",
              designation: "VP of Marketing",
              type: "National Fatherhood Initiative",
              review: "4.54",
              total_reviews: "6"
            },{
              comment:
                "Willing to accommodate nonprofit budgets, Cubix brought their robust experience to the project. They checked in consistently, and were communicative, easy to reach, and responsive. The Android app shows over 500 downloads to date.",
              name: "Melissa Steward",
              designation: "VP of Marketing",
              type: "National Fatherhood Initiative",
              review: "4.54",
              total_reviews: "6"
            },
          ]}
        />
    </div>
  )
}

export default Services