import MainBanner from '@/components/banner/mainBanner/MainBanner'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
        <MainBanner 
            bg_image="png/page_banner_bg.png"
            title="Our Portfolio"
            text="We help our clients grow with cutting-edging technologies, extravagant designs, and innovative software solutions."
            align="center"
        />
    </div>
  )
}

export default Portfolio