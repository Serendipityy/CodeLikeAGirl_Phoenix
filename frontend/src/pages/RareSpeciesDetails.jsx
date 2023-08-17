import React from 'react'
import '../styles/rarespecies-details.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { useParams } from 'react-router-dom'
import rarespeciesData from '../assets/data/rarespecies'

const RareSpeciesDetails = () => {

  const {id} = useParams()

  // this is an static data later we will call our API 
  // and load out data from database
  const rarespecies=rarespeciesData.find(rarespecies => rarespecies.id ===id)
  
  // destructure properties from rarespecies object

  const {photo, title, desc, number, characteristics, habitat, native, status} = rarespecies



  return (
    <>
    <section className='rarespecies__wrapper'>
      <Container>
        <Row>
          <Col lg='6'>
            <img  className='rarespecies__img' src={photo} alt='' />
          </Col>
          <Col lg='6'>
            <div className='rarespecies__content'>

              <div className='rarespecies__info'>
                <h2>{title}</h2>

                <span>
                  <i className='ri-map-pin-fill'></i>
                  {habitat}
                </span>

                <hr />
                <div className='rarespecies__extra-details'>
                  <span>
                    <i className='ri-map-pin-2-line'></i>
                    Native: {native}
                  </span>

                  <span><i className='ri-money-dollar-circle-line'></i>Populations: {number}</span>
                  <span><i className='ri-group-line'></i>Status: {status}</span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>

            </div>
          </Col>


          <Col lg='6'>
            <div className='rarespecies__characteristics mt-4'>
                <h4> Characteristics </h4>
                <ListGroup className='characteristics___list'>
                  {/* <ul>
                    {characteristics.map((charac, index) => (
                      <li key={index}>{charac.feature}</li>
                    ))}
                  </ul> */}
                  {
                    characteristics?.map((charac, index) => (
                      <div className='characteristic__item d-flex' key={index}>
                      
                        <i className='ri-map-pin-fill'></i>

                        <div className='w-100'>
                          <li key={index}>{charac.feature}</li>
                        </div>
                      </div>
                  ))}
                </ListGroup>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default RareSpeciesDetails