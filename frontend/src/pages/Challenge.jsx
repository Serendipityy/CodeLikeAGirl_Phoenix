import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import img from '../assets/images/3459610.jpg'
import '../styles/challenge.css'
import ChallengesList from '../components/Challenges/ChallengesList'

const Challenge = () => {

  return (
    <>
      {/* ============ intro section =========== */}
    <section className='challenge__wrapper'>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='challenge__img-box'>
            <img src={img} alt='' />
          </div>
        </Col>

        <Col lg='6'>
          <div className='challenge__content'>
            <h1>
              Challenge
            </h1>
            <p>
              Welcome to the "Challenge" page! Here, you can attempt quizzes or take on challenges to earn points. Each activity has a unique point value. As you accumulate points, you'll have the opportunity to redeem them to plant a tree. Simply choose your preferred location, fill in the form to notify our admin, and contribute to making our planet greener. Dive in, earn points, and help us plant more trees!
            </p>          
          </div>
        </Col>
      </Row>
    </Container>
    </section>


    {/* ======quiz & pratice======= */}
    <section className='challenge__details'>
      <Container>
        <Row>
          <Col lg='4'>
            <h1 className='challenge__type'>Quiz</h1>
            <div className='quiz__wrapper'>
              <ul className='quiz__list'>
                <li>
                  <Link to='#'>Quiz 1</Link>
                </li>
                <li>
                  <Link to='#'>Quiz 2</Link>
                </li>
                <li>
                  <Link to='#'>Quiz 3</Link>
                </li>
                <li>
                  <Link to='#'>Quiz 4</Link>
                </li>
              </ul>

            </div>
          </Col>


          <Col lg='8'>
              <h1 className='challenge__type'>Practical Challenge</h1>
              <div className='challenge__list'>
                <ChallengesList />

              </div>
          </Col>

        </Row>
      </Container>
    </section>
    </>
    
  )
}

export default Challenge