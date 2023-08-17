import React from 'react'
// import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../shared/CommonSection'
import '../styles/explore.css'
import Blogs from '../components/blogs/Blogs'
import { Container, Row, Col } from 'reactstrap'
import Blogbar from '../components/blog-bar/Blogbar'

const Explore = () => {
  return (
    <>
      <div className='explore__wallpaper'>
        <CommonSection title={"Explore"} />
      </div>

      <section className='explore__wrapper'>
        <Container>
          <Row>
            <Col lg='9' className='explore__blogs'>
              <Blogs />
            </Col>

            <Col lg='3' className='explore__blogbar'>
              <Blogbar />
            </Col>
          </Row>
        </Container>
      </section>
    </>
    
  

  )
}

export default Explore