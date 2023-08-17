
import React from 'react'
import './leftbar.css'
import {MdRssFeed} from 'react-icons/md'
import avt from '../../assets/images/3459610.jpg'
const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className='leftbar__wrapper'>
        <div className='leftbar__user'>
          <img 
            src={avt}
            alt='user avatar'
          />
          <span>user name</span>
        </div>

        <hr className='leftbar__hr' />

        <ul className='leftbar__menu__list'>
          <li className='leftbar__menu__item'>
            <MdRssFeed className='leftbar__menu__icon' />
            <span className='leftbar__menu__text'>Home</span>
          </li>

          <li className='leftbar__menu__item'>
            <MdRssFeed className='leftbar__menu__icon' />
            <span className='leftbar__menu__text'>Feeds</span>
          </li>

          <li className='leftbar__menu__item'>
            <MdRssFeed className='leftbar__menu__icon' />
            <span className='leftbar__menu__text'>People</span>
          </li>

          <li className='leftbar__menu__item'>
            <MdRssFeed className='leftbar__menu__icon' />
            <span className='leftbar__menu__text'>Event</span>
          </li>

          <li className='leftbar__menu__item'>
            <MdRssFeed className='leftbar__menu__icon' />
            <span className='leftbar__menu__text'>Group</span>
          </li>
        </ul>

        {/* Dấu gạch ngang dưới */}
        <hr className='leftbar__hr' />
        
        <ul className='leftbar__group__list'>
          <p className='mb-3'>YOUR FAVORITE GROUPS</p>
          
          <li className='leftbar__group__item'>
            <img src={avt} alt='' />
            <span>group name</span>
          </li>

          <li className='leftbar__group__item'>
            <img src={avt} alt='' />
            <span>group name</span>
          </li>

          <li className='leftbar__group__item'>
            <img src={avt} alt='' />
            <span>group name</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Leftbar