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
          heading="Website Application"
          image="/png/web_application.png"
          description="We leverage modern technologies and innovative minds to develop dynamic software solutions for multiple platforms, helping clients introduce a one-of-a-kind solution to the audience."
          points={["Rapid Strategy Workshop™","Define project value proposition","Identify development and deployment requirements + constraints.","Perform market research - comparative applications/products.","Identify key opportunities for the feature set.","Growth Hacking"]}
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
          heading="Website Application"
          image="/png/web_application.png"
          description="We leverage modern technologies and innovative minds to develop dynamic software solutions for multiple platforms, helping clients introduce a one-of-a-kind solution to the audience."
          points={["Rapid Strategy Workshop™","Define project value proposition","Identify development and deployment requirements + constraints.","Perform market research - comparative applications/products.","Identify key opportunities for the feature set.","Growth Hacking"]}
        />
    </div>
  )
}

export default Services