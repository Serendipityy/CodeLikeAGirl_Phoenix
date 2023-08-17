// import React from 'react'
// import ActivitiesCard from '../../shared/ActivitiesCard'
// import activitiesData from '../../assets/data/activities'
// import { Col } from 'reactstrap'
// import './currentcampaignlist.css'

// const CurrentCampaignList = () => {
//   return (
//     <>
//     {
      
//         activitiesData?.map(activities => (
//             <Col lg='4' className='campaign mb-4' key={activities.id}>
//                 <ActivitiesCard activities={activities} />
//             </Col>

//         ))
//     }
//     </>
//   )
// }

// export default CurrentCampaignList



import React from 'react'
import ActivitiesCard from '../../shared/ActivitiesCard'
import activitiesData from '../../assets/data/activities'
import { Col } from 'reactstrap'
import activities from '../../assets/data/activities'

const CurrentCampaignList = () => {
  return (
    <>
      {/* Render the first card with full width */}
      {activitiesData.length > 0 && (
        <Col lg="12" className="campaign mb-4" key={activitiesData[0].id}>
          <ActivitiesCard activities={activitiesData[0]} />
        </Col>
      )}

      {/* Render the rest of the cards with flex layout */}
        {activitiesData.slice(1).map(activities => (
          <Col lg="4" className="campaign mb-4" key={activities.id}>
            <ActivitiesCard activities={activities} />
          </Col>
        ))}

        {/* {activitiesData?.map(activities => (
          
          <Col lg='4' className='campaign mb-4' key={activities.id}>
            <ActivitiesCard activities={activities} />      
          </Col>
        ))} */}

    </>
  )
}

export default CurrentCampaignList
