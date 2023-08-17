import React from 'react'
import RareSpeciesCard from '../../shared/RareSpeciesCard'
import rarespeciesData from '../../assets/data/rarespecies'
import { Col } from 'reactstrap'

const FeaturedSpeciesList = () => {
  return (
    <>
    {
        rarespeciesData?.map(rarespecies => (
            <Col lg='3' className='mb-4' key={rarespecies.id}>
                <RareSpeciesCard rarespecies={rarespecies} />
            </Col>
        ))
    }
    </>
  )
}

export default FeaturedSpeciesList
