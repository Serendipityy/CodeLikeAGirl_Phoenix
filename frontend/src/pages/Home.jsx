import React from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import { Link } from 'react-router-dom'
import introImg from '../assets/images/homeImg.png'
// import Shapes from '../shared/Shapes'
import aboutImg01 from '../assets/images/Environmental-Values-in-Islam.jpg'
import aboutImg02 from '../assets/images/aboutImg02.jpg'
import aboutImg03 from '../assets/images/aboutImg03.png'

import {features} from '../assets/data/features'

const Home = () => {
  return (
    <>

    {/* ============ intro section =========== */}
      <section className='intro__wrapper'>
        <Container>
          <Row>
            <Col lg='6' md='12'>
              <div className='intro__content'>
                <div className='intro__subtitle'>
                  <Subtitle subtitle={'Welcome To'} />
                </div>

                <h1>
                  <span className='highlight'>Guardians</span> of Nature
                </h1>

                <p>
                In the face of escalating environmental concerns, our website stands as a beacon of collective action. We are dedicated to creating a sustainable world and empowering you to make a difference. Our platform allows you to report ecological incidents and contribute to community initiatives. Together, we make change happen.
                </p>
              </div>

              <div className='intro__button d-flex gap-5'>
                <button className='intro__btn'>
                  <Link to='/about'>About Us</Link>
                </button>

                <button className='intro__btn btn-join'>
                  <Link to='/register'>Join Us</Link>
                </button>
              </div>
            </Col>

            <Col lg='6' md='12'>
              <div className='intro__img-box'>
                <img src={introImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>

        {/* <Shapes /> */}

      </section>


    {/* ============ about section ============ */}
    <section className='about__wrapper'>
        <Container>
            <Row>
                {/* <Col lg='6' >
                    <img src={aboutImg} alt='' className='about__img' />
                </Col> */}

                <Col lg='6'>
                  {/* <div className='hero__img-box'> */}
                  <div className='about__img-box d-flex'>
                    <img src={aboutImg01} alt='' className='about__img'/>
                    <img src={aboutImg03} alt='' className='about__img about__img-middle'/>         
                    <img src={aboutImg02} alt='' className='about__img'/>
                  </div>      
                  {/* </div> */}
                </Col>

                <Col lg='6'>
                    <div className='about__content'>
                        <h2 className='about__title'>
                            About Us
                        </h2>

                        <p className='about__description'>
                          We are <span>Phoenix</span> , an alliance of dedicated environmental enthusiasts, technologists, and forward-thinkers united by a common purpose: <span className='highlight'>protecting our planet.</span> Established in May 2023, our diverse team includes Nguyen Huy Hoang (leader), Hoang Thi Khon, Nguyen Thi Kieu Ngan, and Tran Thi Kim Trinh, each contributing their unique skills and perspectives towards this critical mission.
                          <br />
                          <br />
                          At <span>Phoenix</span> , we are committed to harnessing the power of technology to encourage active participation in environmental conservation. We've designed an innovative platform where anyone, regardless of their background or expertise, can engage in meaningful actions to preserve our Earth.
                        </p>

                        {/* <div className='about__details grid'>
                            <p className='about__details-description'>
                                At vero eos et accusamus et iusto odio
                            </p>

                            <p className='about__details-description'>
                                Established fact that a reader will be distracted
                            </p>

                            <p className='about__details-description'>
                                Sed ut perspiciatis unde omnis iste natus sit
                            </p>
                        </div> */}

                        <button className='btn primary__btn'>Contact Now</button>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </section>



    {/* ========= features section ============ */}
    <section className='features__wrapper'>
        <Container>
          <div className='features__subtitle'>
              <Subtitle subtitle={'Our main features'} />
          </div>

          <div className='features__content'>
              {features.map(({img, title, description}, index) => {
                  return (
                      <div className='features__item' key={index}>
                          <img src={img} className='feature__img' alt='' />

                          <h4 className='feature__title'>{title}</h4>
                          <p className='feature__description'>{description}</p>

                      </div>
                  )
              })}
          </div>
        </Container>
    </section>
    </>
  )
}

export default Home