import MainBanner from "@/components/banner/mainBanner/MainBanner";
import MainSections from "@/components/sections/mainSection/MainSections";
import PageSection from "@/components/sections/pageSection/PageSection";
import React from "react";

const About = () => {
  return (
    <div>
      <MainBanner
        bg_image="png/about_banner.png"
        title="About Us"
        text="appcom3 is a software and mobile app development company
        with a world-class team of talented data scientists, developers,
        designers, mathematicians, engineers, and creative artists.
        We are motivated to build elegant and functional digital
        products that solve complex problems."
        link="#"
      />
      <PageSection
        className="green_left spacing"
        type="case"
        case_image_location="left"
        case_image="/png/about_section.png"
        case_type="Work with the Tech Leader."
        case_heading="Appcom3 brings ideas to life, leveraging modern technologies."
        case_text="Appcom3 started its journey in 2008 with a team of seven. Today, it has grown into a full-cycle, mobile-first software development company, with the highest team satisfaction in the industry, independent analyst recognition, and an ever-growing list of delighted clients who work with us again and again. We are proud to have worked with Estee Lauder, Clinique, Engro, Swatch Group, Politico, and OOMCO. We have helped dozens of startups with modern technologies."
        children={[
          {
            heading: "2008",
            text: "Founded in"
          },
          {
            heading: "600+",
            text: "Completed projects"
          },
          {
            heading: "200+",
            text: "Talented Cubixians"
          },
          {
            heading: "500+",
            text: "Clients"
          }
        ]}
      />
      <PageSection
        className="dark_grey_section spacing"
        type="text"
        children={[
          {
            heading: "Startup Partner Program™",
            text: "We have created Startup Partner Program™ for funding early stage startups. We make small investments in return for small stakes in the startups we build."
          },
          {
            heading: "Rapid Strategy Workshop™",
            text: "Building a successful product is an art. The dozens of clients have used our Rapid Strategy Workshop™ model to get multi-million dollar revenue and valuations."
          },
          {
            heading: "Rapid MVP Development™",
            text: "Do you want to test the idea with minimum investment and time? – Build Minimum Viable Product through our Rapid MVP Development™."
          }
        ]}
      />
      <PageSection 
        className={"green_top_left_right spacing"}
        heading={"Our creative heads build beautiful digital products."}
        subhead={"Software and mobile app development for businesses from across the globe."}
        type={"big_layout"}
        children={{
          main_image:"/png/main_image.png", image_first: "/png/image_first.png", image_second:"/png/image_second.png", 
          main_text:"We are proud to have the best team of creative thinkers and fantastic clients from across the world, trusting our developing, designing, and branding.", 
          mission:"To help businesses become competitive with the power of digital innovation, outstanding design, and emerging technologies via building intelligent digital products.", 
          approach:"To be the number one choice for businesses when it comes to digital product development, design, quality, and innovation."
        }}
      />
      <PageSection
        className="dark_grey_section spacing"
        heading="Media Mentions"
        subhead="We stay in the news for our incredible tech achievements."
        type="image_text"
        subclass="white_bg"
        children={[
          {
            img: "/svg/yahoo.svg",
            text: "There's Finally a Dating App for People With Disabilities."
          },
          {
            img: "/svg/buzzfeed.svg",
            text: "A New App Just Launched To Make Online Dating More Inclusive."
          },
          {
            img: "/svg/mashable.svg",
            text: "This startup helps you donate to charity when you see an infuriating tweet."
          }
        ]}
      />
      <PageSection 
        className="green_bottom_left_top_right spacing"
        heading="Some of our Tech Experts"
        subhead="Talent wins games, but teamwork and intelligence win championships."
        type="image_text"
        subclass="avatar"
        children={[
          {
            img: "/svg/avatar.svg",
            text: "Austin Lovvorn",
            subhead:"AVP - North America"
          },
          {
            img: "/svg/avatar.svg",
            text: "Austin Lovvorn",
            subhead:"AVP - North America"
          },
          {
            img: "/svg/avatar.svg",
            text: "Austin Lovvorn",
            subhead:"AVP - North America"
          },
          {
            img: "/svg/avatar.svg",
            text: "Austin Lovvorn",
            subhead:"AVP - North America"
          },
          {
            img: "/svg/avatar.svg",
            text: "Austin Lovvorn",
            subhead:"AVP - North America"
          }
        ]}
      />
      <PageSection
        className="dark_grey_section spacing"
        heading="Headquartered in West Palm Beach, Florida"
        subhead="Appcom3 has maintained an unbroken record of successful custom software architecture and development since 2008, across startups, enterprises, and Fortune 500 Companies, including PayPal, Tissot, Estee Lauder, Politico, Walmart, Sapient, and Canon."
        type="image_text"
        children={[
          {
            img: "/svg/politico.svg"
          },
          {
            img: "/svg/bigfish.svg"
          },
          {
            img: "/svg/walmart.svg"
          },
          {
            img: "/svg/tissot.svg"
          },
          {
            img: "/svg/sapient.svg"
          },
          {
            img: "/svg/dreamworks.svg"
          },
          {
            img: "/svg/canon.svg"
          },
          {
            img: "/svg/datastream.svg"
          },
          {
            img: "/svg/artizone.svg"
          },
          {
            img: "/svg/whitecastle.svg"
          }
        ]}
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
  );
};

export default About;
