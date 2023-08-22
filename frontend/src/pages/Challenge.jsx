import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import img from '../assets/images/3710677.png'
import '../styles/challenge.css'
import ChallengesList from '../components/Challenges/ChallengesList'
import leftImg from '../assets/images/5497386.jpg'

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

        <Col lg='12'>
          <div className='challenge__instruction'>
            <h3>How to Get Recognized for Participating in the Challenge:</h3>
          
            <ul className='challenge__instruction-list'>
              <li className='challenge__instruction-item'>
                <span>Post & Proof Photo: </span>To show us your participation, snap a photo as evidence of the activity you’ve undertaken. 
                <br />
                For example, if you’re taking on “Day 1: Reusable Bags”, capture a shot of you using a reusable bag during shopping. It could be a picture of the reusable bag filled with items, or with store shelves, or any other backdrop that helps us discern that you’re shopping.
              </li>

              <li className='challenge__instruction-item'>
                <span>Upload on Your Wall: </span>After securing your proof photo, upload the image along with a post to your wall. 
              </li>

              <li className='challenge__instruction-item'>
                <span>Include Hashtags: </span>Within your post, incorporate the hashtags #[NAME-OF-CHALLENGE] and #[DAY] (replace [NAME-OF-CHALLENGE] with the actual challenge name and [DAY] with the day of participation), enabling us to easily track and verify your involvement.
              </li>

              <li className='challenge__instruction-item'>
                <span>Verification Process: </span>Please note that the verification process will be carried out within 24 to 48 hours. If you receive an undesired verification outcome, please get in touch with us for further discussion.
              </li>

            </ul>
            
            <hr />
            <p>Please ensure adherence to all these steps, allowing us to duly recognize your contribution. Best of luck, and enjoy the process of the challenge! </p>
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
            <div className='left'>
              <div className='quiz__wrapper'>
                <ul className='quiz__list'>
                  <li className='quiz__item'>
                    <Link to='#'>Quiz 1</Link>
                  </li>
                  <li className='quiz__item'>
                    <Link to='#'>Quiz 2</Link>
                  </li>
                  <li className='quiz__item'>
                    <Link to='#'>Quiz 3</Link>
                  </li>
                  <li className='quiz__item'>
                    <Link to='#'>Quiz 4</Link>
                  </li>
                </ul>

              </div>

              <div className='img__wrapper'>
                  <img src={leftImg} alt='' />
              </div>

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