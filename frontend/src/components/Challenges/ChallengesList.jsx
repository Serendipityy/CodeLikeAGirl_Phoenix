
// import React from 'react'
// import ChallengesCard from '../../shared/ChallengesCard'
// import challengesData from '../../assets/data/challenges'
// import { Col } from 'reactstrap'

// const ChallengesList = () => {
//   return (
//     <>
//       {challengesData.length > 0 && (
//         <Col lg="12" className="challenge mb-4" key={challengesData[0].id}>
//           <ChallengesCard challenges={challengesData[0]} />
//         </Col>
//       )}

//         {challengesData.slice(1).map(challenges => (
//           <Col lg="4" className="challenge" key={challenges.id}>
//             <ChallengesCard challenges={challenges} />
//           </Col>
//         ))}
//     </>
//   )
// }

// export default ChallengesList



import React from 'react';
import ChallengesCard from '../../shared/ChallengesCard';
import challengesData from '../../assets/data/challenges';
import { Col } from 'reactstrap';
import './challenges-list.css'

const ChallengesList = () => {
  return (
    <>
       {challengesData?.map(challenges => (
          <Col lg='12' key={challenges.hashtag}>
            <ChallengesCard challenges={challenges} />
          </Col>
       
      ))}
    </>
     
  );
};

export default ChallengesList;

