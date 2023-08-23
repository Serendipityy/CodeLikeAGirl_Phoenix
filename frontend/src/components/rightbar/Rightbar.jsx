import React from 'react'
import './rightbar.css'
import avt from '../../assets/images/animal-02.jpg'
import img from '../../assets/images/helping-hands-volunteer-support-community-service-graphic.jpg'
const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbar__wrapper'>
        <div className='rightbar__activity'>
          <ul className='rightbar__activity__list'>
          <p className='mb-3'>ACTIVITES AROUND US</p>
          
          <li className='rightbar__activity__item'>
            <img src={avt} alt='' />
            <span>Green Clean-Up Day</span>
          </li>

          <li className='rightbar__activity__item'>
            <img src={avt} alt='' />
            <span>Climate Action Seminar</span>
          </li>

          <li className='rightbar__activity__item'>
            <img src={avt} alt='' />
            <span>Ocean Guardians Cleanup</span>
          </li>
          </ul>
        </div>

        <img src={img} alt='' className='rightbar__img'/>

        <hr />

        <div className='rightbar__rank'>
          <ul className='rightbar__rank__list'>
            <p className='mb-3'>RANKS</p>
            
            <li className='rightbar__rank__item'>
              <img src={avt} alt='' />
              <span>user name</span>
            </li>

            <li className='rightbar__rank__item'>
              <img src={avt} alt='' />
              <span>user name</span>
            </li>

            <li className='rightbar__rank__item'>
              <img src={avt} alt='' />
              <span>user name</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Rightbar