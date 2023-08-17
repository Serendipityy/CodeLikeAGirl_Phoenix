import React from 'react'
import {Link} from 'react-router-dom'
// https://remixicon.com/
import './explore-card.css'

const ExploreCard = ({explore}) => {

    const {id, title, desc, photo, date } = explore

    return (
    <div className='explore__card'>

        <div className='explore__img'>
            <img src={photo} alt='explore-img' />
        </div>

        <div className='explore__body'>
            <h5 className='explore__title'>
                <Link to={`/explore/${id}`}>{title}</Link>
            </h5>

            <div className='explore__content mt-3'>
                <p className='explore__desc'>{desc}</p>
                <p className='explore__date'>Published on {date}</p>

                <button className='btn primary__btn'>
                    <Link to={`/explore/${id}`}>Read More</Link>
                </button>
            </div>

        </div>
    </div>

  )

  
}

export default ExploreCard

