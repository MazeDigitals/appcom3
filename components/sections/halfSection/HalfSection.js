import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

const HalfSection = (props) => {
    const {className,type, image_align, image,points, heading,description, children, link} = props
  return (
    <div className={`section ${className}`}>
        {type == "image" ? 
            <div className={`image_half flex flex_between gap-20 ${image_align}`}>
                <div>
                    <img src={image} alt="half"/>
                </div>
                <div className='half_description'>
                    <h2>{heading}</h2>
                    <p className='large_text'>{description}</p>
                    <div className='points'>
                        <ul>
                            {points.map((point, index)=> (
                                <li key={index} className="medium_text bold">{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div> 
            :
            <div className='flex flex_between gap-20'>
                <div className='half_div'>
                    <h2 className='main_heading'>{heading}</h2>
                    <p className='large_text'>{description}</p>
                    <Link href={link}>
                        <Button className="button green_btn mt-2">
                        View Services
                        </Button>
                    </Link>
                </div>
                <div className='divs'>
                    {children?.map((item, index)=> (
                        <div className='dark_bg flex align-top gap-20' key={index}>
                            <h2 className='green_text'>{item?.num}</h2>
                            <div className='subcontent'>
                                <h3>{item?.title}</h3>
                                <h4>{item?.data}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        }
    </div>
  )
}

export default HalfSection