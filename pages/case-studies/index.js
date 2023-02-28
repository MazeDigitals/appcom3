import MainBanner from '@/components/banner/mainBanner/MainBanner'
import MainSections from '@/components/sections/mainSection/MainSections'
import React from 'react'

const CaseStudies = () => {
  return (
    <div>
        <MainBanner 
          bg_image="png/page_banner_bg.png"
          title="Case Studies"
          text="We help our clients grow with cutting-edging technologies, extravagant designs, and innovative software solutions."
          align="center"
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
        case_image="/svg/klean.svg"
        case_image_logo="/svg/klean_logo.svg"
        case_type="MOBILE APP"
        case_heading="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, dolor sit amet, consectetur"
        case_text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,"
        case_link="#"
      />
      <MainSections
        className="green_top_left spacing"
        type="case"
        case_image_location="right"
        case_image="/svg/game.svg"
        case_image_logo="/svg/game_logo.svg"
        case_type="MOBILE APP"
        case_heading="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, dolor sit amet, consectetur"
        case_text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,"
        case_link="#"
      />
      <MainSections
        className="dark_top_section spacing"
        type="case"
        case_image_location="left"
        case_image="/svg/klean.svg"
        case_image_logo="/svg/klean_logo.svg"
        case_type="MOBILE APP"
        case_heading="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, dolor sit amet, consectetur"
        case_text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,"
        case_link="#"
      />
    </div>
  )
}

export default CaseStudies