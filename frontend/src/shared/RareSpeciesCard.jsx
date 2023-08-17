import React from 'react'
import {Card, CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
import './rare-species-card.css'
// https://remixicon.com/

const RareSpeciesCard = ({rarespecies}) => {

    const {id, title, habitat, photo, status, 
        featured} = rarespecies


    return (
    <div className='species__card'>
        <Card>
            <div className='species__img'>
                <img src={photo} alt='species-img' />
                {featured && <span>Featured</span>}               
            </div>

            <CardBody className='card__body'>
                <div className='card__top d-flex align-items-center
                justify-content-between'>
                    <span className='species__location d-flex align-items-center gap-1'>
                        <i className='ri-map-pin-line'></i> 
                        {habitat}                 
                    </span>
                </div>

                <h5 className='species__title'>
                    <Link to={`/explore/rare-species/${id}`}>{title}</Link>
                </h5>

                <div className='card__bottom d-flex align-items-center
                justify-content-between mt-3'>
                    <h5>
                        {status}
                    </h5>
                    
                    <button className='btn booking__btn'>
                        <Link to={`/explore/rare-species/${id}`}>More Detail</Link>
                    </button>
                </div>
               
            </CardBody>
        </Card>
    </div>
  )
}

export default RareSpeciesCard