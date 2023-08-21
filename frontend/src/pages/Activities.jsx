import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import CommonSection from '../shared/CommonSection'
import '../styles/activities.css'
import '../shared/ActivitiesCard'
import CurrentCampaignList from '../components/Activities/CurrentCampaignList'
// import FundraisingCampaign from '../components/Activities/FundraisingCampaign'
// import activities from '../assets/data/activities'
import activitiesImg01 from '../assets/images/group-volunteers-nature.jpg'
import activitiesImg02 from '../assets/images/environment-volunteer-concept.jpg'
import activitiesImg03 from '../assets/images/kids-saving-environment.jpg'

import img from '../assets/images/3459610.jpg'
const Activities = () => {
  return (
    <>
      <div className='activities__wallpaper'>
        <CommonSection title={"Our Current Campaigns"} />
      </div>
    
      <section className='activities__intro'>
        <Container>
          <Row>
          <Col lg='6'>
        <div className='activities__img-box d-flex'>
          <img src={activitiesImg01} alt='' />
          <img src={activitiesImg03} alt='' />         
          <img src={activitiesImg02} alt='' />
        </div>      
        </Col>

        <Col lg='6'>
          <div className='activities__intro-content'>
              <h2 className='activities__intro-title mb-4'>
                  Welcome to visit our Activities
              </h2>
              <p className='activities__intro-description'>
              Join us in exploring local eco-activities and connecting with like-minded, passionate individuals. Discover events with detailed descriptions, participant counts, and enticing rewards. 
              <br />
              <span> Dive in with us, let's nurture our planet and community together! </span>
              </p>
          </div>
        </Col>
          </Row>
        </Container>
        
      </section>
      
      {/* ============= activities section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className='featured__species-title'>
                Our Current Campaigns
              </h2>
            </Col>   
            <CurrentCampaignList />
          </Row>
        </Container>
      </section>

    {/* <section>
        <Container className='fundraising d-flex align-items-center'>
            <h2 className='featured__species-title'>
            Our Fundraising Campaigns
            </h2>
            <FundraisingCampaign />
        </Container>
    </section> */}

    <section className='fundraisings__wrapper'>
        <Container className='d-flex align-items-center'>
          <div className='fundraisings__subtitle'>
              <Subtitle subtitle={'Our fundraising campaigns'} />
          </div>

          {/* <div className='fundraisings__content'>
              {activities.map(({photo, title, desc}, index) => {
                  return (
                    <div className='fundraisings__item' key={index}>
                        <img src={photo} className='fundraising__img' alt='' />

                        <h3 className='fundraising__title'>{title}</h3>
                        <p className='fundraising__description'>{desc}</p>

                    </div>
                  )
              })}
          </div> */}
        </Container>
    </section>
      {/* ================================================ */}
    
    <section className='extra'>
        <div className='extra__info'>
            <h2>We Take Action. To Make Better Changes</h2>
            <p>This is description</p>
            <div className='extra__icon'>

            </div>
        </div>  

        <div className='extra__img'>
              <img src={img} alt='extra-img' />
        </div>
    </section>
    </>
      
  )
}

export default Activities