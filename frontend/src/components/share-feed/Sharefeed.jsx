import React from 'react'
import './sharefeed.css'
import img from '../../assets/images/animal-01.jpg'
import {MdPermMedia} from 'react-icons/md'
import { Button } from 'reactstrap'


const Sharefeed = () => {
  return (
    <div className='share'>
        <div className='share__wrapper'>
            <div className='share__top'>
                <img 
                    className='share__profile__img'
                    src={img} 
                    alt=''
                />

                <textarea
                    placeholder='Write something...'
                    className='share__input' 
                />
            </div>

            <hr className='share__hr' />

                
            <div className='share__bottom'>
                <div className='share__options'>
                    <div className='share__option'>
                        <MdPermMedia />
                        <span>Photo/Video</span>
                    </div>

                    <div className='share__option'>
                        <MdPermMedia />
                        <span>Tag</span>
                    </div>

                    <div className='share__option'>
                        <MdPermMedia />
                        <span>Location</span>
                    </div>
                </div>

                <Button className='btn primary__btn share__btn'>Share</Button>
            </div>
        </div>
    </div>
  )
}

export default Sharefeed