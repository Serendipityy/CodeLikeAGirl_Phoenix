
import React from 'react'
import './blog.css'
import {Container, Row, Col} from 'reactstrap'
import Subtitle from '../../shared/Subtitle'
import Blogs from '../blogs/Blogs'

const Blog = () => {
    return (
        // <div className='blog'>
        //     <img 
        //         className='blogImg'
        //         src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
        //         alt='' 
        //     />
    
        //     <div className='blogInfo'>
        //         <div className='blogCats'>
        //             <span className='blogCat'>Music</span>
        //             <span className='blogCat'>Life</span>
        //         </div>
    
        //         <span className='blogTitle'>
        //             Lorem ipsum dolor sit amet
        //         </span>
    
        //         <hr />
        //         <span className='blogDate'>1 hour ago</span>
        //     </div>
    
        //     <p className='blogDesc'>
        //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        //         officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        //         fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        //         atque, exercitationem quibusdam, reiciendis odio laboriosam?
        //     </p>
        // </div>


        <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"} />
            </Col>

            <Blogs />
          </Row>
        </Container>
      </section>
      )

    
}

export default Blog
