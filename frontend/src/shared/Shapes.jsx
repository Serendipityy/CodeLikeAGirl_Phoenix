import React from 'react'
import shape1 from '../assets/images/shape01.png'
import shape2 from '../assets/images/shape02.png'
import shape3 from '../assets/images/shape03.png'
import shape4 from '../assets/images/shape04.png'

const Shapes = () => {
  return (
    <div className='shapes'>
        <img className='shape s1' src={shape1} alt='' />
        <img className='shape s2' src={shape2} alt='' />
        <img className='shape s3' src={shape3} alt='' />
        <img className='shape s4' src={shape4} alt='' />
    </div>

  )
}

export default Shapes