import React from 'react'
import './sharefeed.css'
import img from '../../assets/images/3459610.jpg'
import {MdPermMedia, MdLocationOn} from 'react-icons/md'
import {AiFillTags} from 'react-icons/ai'
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

                
            <div className='share__bottom d-flex justify-content-between'>
                <div className='share__options'>
                    <div className='share__option'>
                        <MdPermMedia />
                        <span>Photo/Video</span>
                    </div>

                    <div className='share__option'>
                        <AiFillTags />
                        <span>Tag</span>
                    </div>

                    <div className='share__option'>
                        <MdLocationOn />
                        <span>Location</span>
                    </div>
                </div>

                <div className='share__buttons'>
                    <Button className='btn primary__btn report__btn d-flex gap-1'>
                        <i className="ri-alert-line"></i>
                        Report
                    </Button>
                    <Button className='btn primary__btn share__btn'>Share</Button>
                </div>
                   
            </div>
        </div>
    </div>
  )
}

export default Sharefeed