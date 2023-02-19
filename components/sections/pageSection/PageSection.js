import { Col, Row } from 'antd';
import React from 'react'

const PageSection = (props) => {
    const {
        className,
        type,
        case_image_location,
        case_image,
        case_image_logo,
        case_type,
        case_heading,
        case_text,
        case_link,
        heading,
        subhead,
        subclass,
        children
    } = props;
    console.log(children)
    return (
        <div className={`section ${className}`}>
            {type == 'case' ?
            <>
                <div className="case">
                    <div className={`case_flex flex flex_start ${case_image_location}`}>
                        <div className="case_image">
                            <img src={case_image} />
                        </div>
                        <div className="case_data flex">
                            {case_image_logo && <img src={case_image_logo} />}
                            <h6 className="subhead green_text">{case_type}</h6>
                            <h3>{case_heading}</h3>
                            <h6 className="subhead">{case_text}</h6>
                            {case_link&& <Link href={case_link}>
                                <Button className="button green_btn">view case study</Button>
                            </Link>}
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='flex flex_center flex_between side_top_spacing'>
                    {children?.map((item,index)=> (
                        <div className='text-align-center' key={index}>
                            <h2 className='green_text'>{item?.heading}</h2>
                            <p className='medium_text letter_spacing'>{item?.text}</p>
                        </div>
                    ))}
                </div>
            </>
            :
            type == "big_layout" ? 
            <div className='text-center'>
                <h2>{heading}</h2>
                <p className='large_text'>{subhead}</p>
                <div className='image_layout'>
                    <Row gutter={[20,20]}>
                        <Col span={16}>
                            <img src={children?.main_image} />
                        </Col>
                        <Col span={8}>
                            <div className='flex flex_column gap-20'>
                                <img src={children?.image_first} />
                                <img src={children?.image_second} />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[20,20]}>
                        <Col span={16}>
                            <div className='flex flex_between gap-20 text-left'>
                                <h4 className='small_heading'>{children?.main_text}</h4>
                                <div>
                                    <h4 className='small_heading'>Our Approach</h4>
                                    <p>{children?.approach}</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='text-left'>
                                <h4 className='small_heading'>Our Mission</h4>
                                <p>{children?.mission}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            :
            <div className="text-center">
                {heading && <h2>{heading}</h2> }
                {subhead && <h5 className="large_text">{subhead}</h5> }
                {type == "image_text" ? 
                <div className={`flex ${subclass == "avatar" ? 'avatars flex_center gap-30' : subclass == "ratings" 
                ? 'ratings flex_between gap-20' : subclass == "white_bg" ? 'ratings flex_center gap-20' : 'flex_center gap-20 flex_wrap'}`}>
                    {children?.map((item, index) => (
                        <div className={`partner ${subclass}`} key={index}>
                            <img src={item?.img} />
                            {item?.text && <p className="subhead">{item?.text}</p>}
                            {item?.subhead && <p className='small_text'>{item?.subhead}</p>}
                        </div>
                    ))}
                </div> 
                :
                <div className="flex flex_between gap-20">
                    {children?.map((item, index) => (
                        <div className="partner" key={index}>
                            <h5 className='heading'>{item?.heading}</h5>
                            <p className="large_text">{item?.text}</p>
                        </div>
                    ))}
                </div>
                }
            </div>
        }
        </div>
    )
}

export default PageSection