import React from 'react'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { Container, Row, Col } from 'reactstrap'
import './homepage.css'
const Homepage = () => {
  return (
    <>
      <div className='homepage__container' >
        <Container>
          <Row>
            <Col lg='3' className='mt-3'>
              <Leftbar />          
            </Col>

            <Col lg='6' className='mt-3'>
              <Feed />
            </Col>

            <Col lg='3' className='mt-3'>
              <Rightbar />
            </Col>
          </Row>
        </Container>
      </div>
       
    </>
  )
}

export default Homepage