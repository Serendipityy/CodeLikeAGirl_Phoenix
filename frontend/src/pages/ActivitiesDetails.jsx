import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import { useParams } from 'react-router-dom'
import activitiesData from '../assets/data/activities'
import '../styles/activities-details.css'

const ActivitiesDetails = () => {

  const {id} = useParams()

  const activities=activitiesData.find(activities => activities.id ===id)
  

  const {photo, title, desc, city, people, reward} = activities



  return (
    <>
    <section className='activities__wrapper'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='activities__introduction'>
              <img  className='activities__img' src={photo} alt='' />
              <button className='btn primary__btn'>Get Involve</button>
            </div>           
          </Col>
          <Col lg='6'>
            <div className='activities__content'>
              <div className='activities__details'>
                <h2>{title}</h2>
                <span>
                  <i className='ri-map-pin-fill'></i>
                  {city}
                </span>

                <hr />
                <div className='activities__extra-details'>
                  <span>
                    <i className='ri-map-pin-2-line'></i>
                    Needed: {people} participant
                  </span>

                </div>

                <div>
                  <h5>Description</h5>
                  <p>{desc}</p>

                  <h5 className='mt-4'>Reward</h5>
                  <p>{reward}</p>
                </div>
                
              </div>

            </div>
          </Col>

{/* 
          <Col lg='6'>
            <div className='activities__characteristics mt-4'>
                <h4> Characteristics </h4>
                <ListGroup className='characteristics___list'>
                  {
                    characteristics?.map((charac, index) => (
                      <div className='characteristic__item d-flex'>
                      
                        <i className='ri-map-pin-fill'></i>

                        <div className='w-100'>
                          <li key={index}>{charac.feature}</li>
                        </div>
                      </div>
                  ))}
                </ListGroup>
              </div>
          </Col> */}
        </Row>
      </Container>
    </section>
    </>
  )
}

export default ActivitiesDetails