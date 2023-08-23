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
        autoplay:false,
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

            <div className='d-flex flex-column gap-4 mt-3'>
                <img src={ava01} className='w-100 h-25 rounded-2' alt='' />
                {/* <div>
                    <button className='btn primary__btn'>Donate Us</button>
                </div> */}
                <div className='d-flex flex-column gap-2'>   
                    <div className='raised__data'>
                        <div className='raised__titles'>
                            <div className='raised__name'>Raised</div>
                            <div className='raised__percent'>26%</div>
                        </div>

                        <div className='raised__bar'>
                            <span className='raised__percentage eco'></span>
                        </div>
                    </div>

                    <p className='goal ecoGoal'>Goal: <span>3000 USD</span></p>      

                </div>

            </div>
        </div>

        <div className='fundraising py-4 px-3'>
              <h5>
                Let's Fight for Save Animals
            </h5>

            <div className='d-flex flex-column gap-4 mt-3'>
                <img src={ava01} className='w-100 h-25 rounded-2' alt='' />
                <div className='d-flex flex-column gap-2'>   
                    <div className='raised__data'>
                        <div className='raised__titles'>
                            <div className='raised__name'>Raised</div>
                            <div className='raised__percent'>26%</div>
                        </div>

                        <div className='raised__bar'>
                            <span className='raised__percentage animal'></span>
                        </div>
                    </div>

                    <p className='goal'>Goal: <span>3000 USD</span></p>      

                </div>
            </div>
        </div>

        <div className='fundraising py-4 px-3'>
                        <h5>
                        Let's Fight for Global Warming
            </h5>

            <div className='d-flex flex-column gap-4 mt-3'>
                <img src={ava01} className='w-100 h-25 rounded-2' alt='' />
                <div className='d-flex flex-column gap-2'>   
                    <div className='raised__data'>
                        <div className='raised__titles'>
                            <div className='raised__name'>Raised</div>
                            <div className='raised__percent'>60%</div>
                        </div>

                        <div className='raised__bar'>
                            <span className='raised__percentage animal'></span>
                        </div>
                    </div>

                    <p className='goal animalGoal'>Goal: <span>4500 USD</span></p>      

                </div>
            </div>
        </div>

        <div className='fundraising py-4 px-3'>
            <h5>
                Eco System for Global Warmings
            </h5>

            <div className='d-flex flex-column gap-4 mt-3'>
                <img src={ava01} className='w-100 h-25 rounded-2' alt='' />
                <div className='d-flex flex-column gap-2'>   
                    <div className='raised__data'>
                        <div className='raised__titles'>
                            <div className='raised__name'>Raised</div>
                            <div className='raised__percent'>26%</div>
                        </div>

                        <div className='raised__bar'>
                            <span className='raised__percentage eco'></span>
                        </div>
                    </div>

                    <p className='goal'>Goal: <span>1500 USD</span></p>      

                </div>
            </div>
        </div>



    </Slider>
  )
}

export default FundraisingCampaign