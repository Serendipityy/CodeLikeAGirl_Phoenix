import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import CommonSection from '../shared/CommonSection'
import '../styles/activities.css'
import '../shared/ActivitiesCard'
import CurrentCampaignList from '../components/Activities/CurrentCampaignList'
import FundraisingCampaign from '../components/Activities/FundraisingCampaign'
// import activities from '../assets/data/activities'
import MasonryImagesGallery from '../components/Activities/ImageGallery/MasonryImagesGallery'
import img from '../assets/images/concept-plant-glass-bulb.jpg'

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
            <div className='activities__intro-gallery'>

              <MasonryImagesGallery />
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
      <section className='currentCampaign__wrapper'>
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
        <Container>
          <Row>
          <Col lg='4' className='fundraisings__subtitle'>
              <Subtitle subtitle={'Our fundraising campaigns'} />
          </Col>

          <Col lg='8'>
          <FundraisingCampaign />
          </Col>
          </Row>
          
        </Container>
    </section>
      {/* ================================================ */}
    
    <section className='extra'>
        <div className='extra__info'>
          <Container>
            <Row>
            <h1 className='mb-4'>We Take Action. To Make Better Changes</h1>
            <p>Join us at Phoenix as we strive to rise from the ashes of environmental degradation and build a sustainable future.  
              <br />
              Together, we can protect our home.</p>
            </Row>
          </Container>
            
        </div>  

        <div className='extra__img'>
              <img src={img} alt='extra-img' />
        </div>
    </section>
    </>
      
  )
}

export default Activities