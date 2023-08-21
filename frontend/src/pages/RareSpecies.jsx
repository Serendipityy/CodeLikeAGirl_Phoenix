import React from 'react'
import FeaturedSpeciesList from '../components/Featured-species/FeaturedSpeciesList'
import {Container, Row, Col} from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import CommonSection from '../shared/CommonSection'
import '../styles/rarespecies.css'
import img1 from '../assets/images/5545819.jpg'
import img2 from '../assets/images/adorable-red-panda-animal-cute.jpg'
import img3 from "../assets/images/Bartram_stonecrop_Graptopetalum_bartramii-copyr.original.jpg"
import img4 from '../assets/images/are-sea-turtles-endangered.jpg'


const RareSpecies = () => {
  return (
    <>
      <div className='rarespecies__wallpaper'>
        <CommonSection title={"Endangered Species"} />
      </div>
      
      <section className='rare__intro'>
      <Container>
          <Row>
            <Col lg='6'>
              <div className='rare__content'>
                  <h2 className='rare__title mb-4'>
                    Endangered Species
                  </h2>

                  <p className='=rare__description'>
                        
                    Earth's intricate web of life is home to a plethora of species, many of which are teetering on the edge of oblivion. These rare species, while lesser known to the world, play indispensable roles in the ecological balance and have stories that deserve to be heard.
                    <br />
                    <br />
                    Consider the Snow Leopard. This majestic cat, cloaked in its dappled fur, roams the high mountains of Central Asia. Known as the 'Ghosts of the Mountains', these elusive creatures are key indicators of the health of their high-altitude homes, which provide water for millions of people. Their dwindling numbers, sadly, are a result of habitat loss, human-wildlife conflict, and poaching.
                    <br />
                    <br />
                    Then there's the Hawksbill Sea Turtle, a marine masterpiece that graces our tropical oceans. With its beautifully patterned shell, this turtle plays a crucial role in maintaining healthy coral reefs by feeding on sponges. Yet, their numbers are plummeting due to threats like illegal trade, bycatch, and coastal development.

                  </p>
              </div>            
            </Col>

            <Col lg='6'>
              {/* <div className='hero__img-box'> */}
              <div className='rare__img-box'>
                <img src={img1} alt='' className='rare__img w-100'/>
                <img src={img2} alt='' className='rare__img w-100'/>
                <img src={img3} alt='' className='rare__img w-100'/>
                <img src={img4} alt='' className='rare__img w-100'/>
              </div>      
              {/* </div> */}
            </Col>

            <Col lg='12' className='mt-4'>
              <div className='extra__intro'>
                <p>
                This page is a testament to these and other endangered wonders, shedding light on their unique stories. Our aim is to captivate your heart and mind, foster a deeper connection with these creatures, and rally collective efforts toward their conservation.
               <br/>
                Join us in this endeavor, for by safeguarding these rare species, we're not just conserving individual lives but preserving the rich tapestry of life on Earth. 
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============= rare species section ============ */}
      <section className='rare__list'>
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