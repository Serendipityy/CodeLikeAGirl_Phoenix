import React from 'react'
import FeaturedSpeciesList from '../components/Featured-species/FeaturedSpeciesList'
import {Container, Row, Col} from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import CommonSection from '../shared/CommonSection'
import '../styles/rarespecies.css'
import img from '../assets/images/5545819.jpg'

const RareSpecies = () => {
  return (
    <>
      <div className='rarespecies__wallpaper'>
        <CommonSection title={"Endangered Species"} />
      </div>
      
      <section>
      <Container>
          <Row>
            <Col lg='6'>
              <div className='=rare__content'>
                  <h2 className='=rare__title mb-4'>
                    Endangered Species
                  </h2>

                  <p className='=rare__description'>
                    
                Earth's intricate web of life is home to a plethora of species, many of which are teetering on the edge of oblivion. These rare species, while lesser known to the world, play indispensable roles in the ecological balance and have stories that deserve to be heard.
                <br />
                <br />
                Consider the Snow Leopard. This majestic cat, cloaked in its dappled fur, roams the high mountains of Central Asia. Known as the 'Ghosts of the Mountains', these elusive creatures are key indicators of the health of their high-altitude homes, which provide water for millions of people. Their dwindling numbers, sadly, are a result of habitat loss, human-wildlife conflict, and poaching.

                  </p>
              </div>            
            </Col>

            <Col lg='6'>
              {/* <div className='hero__img-box'> */}
              <div className='rare__img-box d-flex'>
                <img src={img} alt='' className='rare__img w-100'/>
              </div>      
              {/* </div> */}
            </Col>

          </Row>
        </Container>
      </section>

      {/* ============= rare species section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className='featured__species-title'>
                Featured Endagered Species
              </h2>
            </Col>

            <FeaturedSpeciesList />
          </Row>
        </Container>
      </section>
      {/* ================================================ */}
    </>
      
  )
}

export default RareSpecies