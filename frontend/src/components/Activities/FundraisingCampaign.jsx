import React from 'react'
import ActivitiesCard from '../../shared/ActivitiesCard'
import activitiesData from '../../assets/data/activities'
import { Col } from 'reactstrap'

const FundraisingCampaign = () => {
  return (
    <>
    {
      
        activitiesData?.map(activities => (
            <Col lg='4' className='campaign mb-4' key={activities.id}>
                <ActivitiesCard activities={activities} />
            </Col>

        ))
    }
    </>
  )
}

export default FundraisingCampaign