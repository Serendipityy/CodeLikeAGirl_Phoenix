import React from 'react'
import './post.css'
import avt from '../../assets/images/3459610.jpg'
import img from '../../assets/images/360_F_275123335_ShJzqjiUhkmgWaZrb1Dmlyebriv1x4SF.jpg'
import {FiMoreHorizontal} from 'react-icons/fi'
import {FcLike} from 'react-icons/fc'
import {AiFillLike} from 'react-icons/ai'

const Post = () => {
  return (
    <div className='post'>
        <div className='post__wrapper'>
            <div className='post__top'>
                <div className='post__top__left'>
                    <img src={avt} alt=''/>
                    <span className='post__username'>Helen</span>
                    <span className='post__date'>5 mins ago</span>
                </div>

                <div className='post__top__right'>
                    <FiMoreHorizontal />
                </div>
            </div>

            <div className='post__center'>
                <span className='post__text'>
                    🌱 Planting trees isn't just about leaves and branches, it's about giving life to the lungs of our planet. 
                    <br />
                    <span>#PlantATree #GreenEarth</span>
                </span>

                <img src={img} alt='' />
            </div>

            <div className='post__bottom'>
                <div className='post__bottom__left'>
                    <FcLike className='like'/>
                    <AiFillLike className='like' />
                    <span className='post__bottom__like'>
                        32 people like it
                    </span>
                </div>

                <div className='post__bottom__right'>
                    <span className='post__bottom__comment'>9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post