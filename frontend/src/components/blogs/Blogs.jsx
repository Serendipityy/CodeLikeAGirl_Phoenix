// import React from 'react'
// import Blog from '../blog/Blog'
// import './blogs.css'

// const Blogs = () => {
//     return (
//         <div className='blogs'>
//             <Blog />
//             <Blog />
//             <Blog />
//             <Blog />
            
//         </div>
//       )
// }

// export default Blogs

import React from 'react'
import ExploreCard from '../../shared/ExploreCard'
import exploreData from '../../assets/data/explores'
import { Col } from 'reactstrap'

const Blogs = () => {
  return (
    <>
    {
        exploreData?.map(explore => (
            <Col lg='12' className='mb-4' key={explore.id}>
                <ExploreCard explore={explore} />
            </Col>
                
        ))
    }
    </>
  )
}

export default Blogs
