import React from 'react'
import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {MdOutlineLocationOn} from 'react-icons/md'
import {FaCaretRight, FaRegEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'


const quick__links = [
  {
      path:'/news',
      display:'News'
  },
  {
      path:'/instruction',
      display:'Instruction'
  },
  {
      path:'/activities',
      display:'Activities'
  },
]


const RESCOURCES = [
  {
      display: 'Help Center',
      url: '#'
  },
  {
      display: 'Partner',
      url: '#'
  },
  {
      display: 'Community',
      url: '#'
  },
  {
    display: 'Help Center',
    url: '#'
  },
  {
    display: 'Partner',
    url: '#'
  },
  {
    display: 'Community',
    url: '#'
  },
]

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='9' sm='12' className='firstCol'>
            <div className='logo d-flex align-items-center gap-3'>
              <img src={logo} alt='' />
              <h1>Phoenix</h1>
            </div>
            <p className='mb-4'>
            Join Guardians of Nature in our mission to create a united community dedicated to safeguarding a sustainable environment.
            Together, let's harness geolocation technology and innovative solutions to protect our planet for future generations.
            </p>

            <ul className='footer__contact-list mb-3'>
              <li className='footer__contact-item d-flex flex-row gap-3 
              align-items-center mb-2'>
                <MdOutlineLocationOn className='icon' /> 
                Linh Trung, Thu Duc, Ho Chi Minh City
              </li>

              <li className='footer__contact-item d-flex flex-row gap-3
              align-items-center'>
                  <FaRegEnvelope className='icon' /> 
                  phoenix@gmail.com
              </li>
            </ul>
          </Col>

          <Col lg='2' md='3' sm='12' className='mb-5'>
            <h4 className='footer__link-title'>Quick Links</h4>

            <ListGroup className='footer__quick-links'>
              
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='item'>
                    <FaCaretRight className='icon' />
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='12' className='mb-5'>
            <h4 className='footer__link-title'>Resources</h4>
            <ListGroup className='footer__quick-links'>
              {
                  RESCOURCES.map((item, index) => (
                      <ListGroupItem key={index} className='item'>
                          <Link to={item.url}>{item.display}</Link>
                      </ListGroupItem>
                  ))
              }
            </ListGroup>
          </Col>



          <Col lg='3' md='8' sm='12'>
            <h4 className='footer__link-title'>Newsletter</h4>

            <p className='footer__link-description'>
                Subscribe Our Newsletter To Get Latest Update And News
            </p>

            <form action='' className='subscribe__form'>
                <input 
                    type='text'
                    placeholder='Your Email'
                    className='form__input subscribe__input' 
                />
                
                <button className='intro__btn subscribe__btn'>
                    <FaRegEnvelope /> Subscribe Now
                </button>
            </form>

            <div className='footer__socials'>
                <h3 className='footer__social-follow'>Follow Us:</h3>

                <div className='footer__social-links'>
                    <a href='/' className='footer__social-link'>
                        <FaFacebookF />
                    </a>

                    <a href='/' className='footer__social-link'>
                        <FaTwitter />
                    </a>

                    <a href='/' className='footer__social-link'>
                        <FaLinkedinIn />
                    </a>

                    <a href='/' className='footer__social-link'>
                        <FaYoutube />
                    </a>
                </div>
            
            </div>
          </Col>
        
          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>
              Copyright {year}, design and develop by <span>Phoenix</span> 
              . All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
