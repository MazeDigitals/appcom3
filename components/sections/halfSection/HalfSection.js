import React from 'react'

const HalfSection = (props) => {
    const {className,type, image_align, image,points, heading,description} = props
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
            <div className='flex flex_between gap-20'></div>
        }
    </div>
  )
}

export default HalfSection