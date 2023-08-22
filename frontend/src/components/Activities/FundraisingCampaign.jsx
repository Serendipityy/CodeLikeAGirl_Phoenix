// import React from 'react'
// import ActivitiesCard from '../../shared/ActivitiesCard'
// import activitiesData from '../../assets/data/activities'
// import { Col } from 'reactstrap'

// const FundraisingCampaign = () => {
//   return (
//     <>
//     {
      
//         activitiesData?.map(activities => (
//             <Col lg='4' className='campaign mb-4' key={activities.id}>
//                 <ActivitiesCard activities={activities} />
//             </Col>

//         ))
//     }
//     </>
//   )
// }

// export default FundraisingCampaign


import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/3459610.jpg'
import './fundraisingcampaign.css'

const FundraisingCampaign = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }

  return (
    <Slider {...settings}>
        <div className='fundraising py-4 px-3'>
            <h5>
                Eco System for Global Warmings
            </h5>

            <div className='d-flex flex-column align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-100 h-25 rounded-2' alt='' />
                <div>
                    <button className='btn primary__btn'>Donate Us</button>
                </div>
            </div>
        </div>

        <div className='fundraising py-4 px-3'>
              <h5>
                Let's Fight for Save Animals
            </h5>

            <div className='d-flex flex-column align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-100 h-25 rounded-2' alt='' />
                <div>
                    <button className='btn primary__btn'>Donate Us</button>
                </div>
            </div>
        </div>

        <div className='fundraising py-4 px-3'>
                        <h5>
                        Let's Fight for Global Warming
            </h5>

            <div className='d-flex flex-column align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-100 h-25 rounded-2' alt='' />
                <div>
                    <button className='btn primary__btn'>Donate Us</button>
                </div>
            </div>
        </div>

        <div className='fundraising py-4 px-3'>
            <h5>
                Eco System for Global Warmings
            </h5>

            <div className='d-flex flex-column align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-100 h-25 rounded-2' alt='' />
                <div>
                    <button className='btn primary__btn'>Donate Us</button>
                </div>
            </div>
        </div>



    </Slider>
  )
}

export default FundraisingCampaign