import React from 'react';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import './challenges-card.css';

const ChallengesCard = ({ challenges }) => {
  const { hashtag, title, desc} = challenges;

  return (
    <div className='challenges__card'>
      <Card>
        <h5 className='challenges__title'>
          <Link to={`/challenge/${hashtag}`}>{title}</Link>
        </h5>
        <hr />
        <div className='challenges__content mt-3'>
          <p className='challenges__desc'>{desc}</p>
          <button className='btn primary__btn mt-3'>
            <Link to={`/challenge/${hashtag}`}>Get Involved</Link>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ChallengesCard;

