import React from 'react';
import { useParams } from 'react-router-dom';
import challengesData from '../assets/data/challenges';
import { Container, Row, Col} from 'reactstrap'
import '../styles/challenge-details.css'

const ChallengeDetails = () => {
  const { hashtag } = useParams();
  console.log('hashtag:', hashtag);

  const challenges = challengesData.find(
    challenges => challenges.hashtag === hashtag
  );

  console.log('challenges:', challenges);
  const {title, desc, days} = challenges



  return (
    <>
    <section className='challenge__wrapper'>
      <Container>
        <Row>
          <Col lg='12'>
            <h1 className='challenge__title'>{title}</h1>
            <p className='challenge__desc'>{desc}</p>
            <hr />
          </Col>

          <Col lg='12'>
            <div className='challenge__days'>
              {days?.map((day, index) => (
                <div className='challenge__day' key={index}>
                  <h3>{day.day}</h3>
                  <h2>{day.title}</h2>
                  <hr />

                  <div className='challenge__todo'>
                    <h5>Your task</h5>
                    <ul className='challenge__todolist'>
                      {day.desc?.map((step, stepIndex) => (
                      <li key={stepIndex}>{step.detail}</li>
                      ))}
                    </ul>
                  </div>
                  <hr/>
                  <p>{day.purpose}</p>

                </div>
              ))}
              </div>
            
            
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default ChallengeDetails;
