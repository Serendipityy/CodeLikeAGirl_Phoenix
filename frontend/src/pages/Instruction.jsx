import React from 'react'
import blogImg1 from '../assets/images/1-Figure1-1.png' 
import blogImg2 from '../assets/images/ecdc4f6258e9248574024d97dba2fd4e.jpg' 
import blogImg3 from '../assets/images/resource ef-1300x731.jpg' 
import blogImg4 from '../assets/images/img-04.jpg' 
import blogImg5 from '../assets/images/img-05.jpg' 
import {Link} from 'react-router-dom'
import '../styles/instruction.css'
import { Container, Row, Col } from 'reactstrap'
import img from '../assets/images/3459610.jpg'
import Subtitle from '../shared/Subtitle'

const Instruction = () => {

  const posts = [
    {
      id:1,
      title:"How To Duel With Waste?",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac. Duis euismod, mi vitae dapibus tincidunt, orci dui malesuada dolor, in sollicitudin lorem mauris vel est. Praesent egestas convallis cursus. Curabitur nec urna leo. Donec interdum nulla justo, eget tempus lorem venenatis a. Phasellus lectus diam, laoreet interdum consequat ut, mollis placerat metus.",
      img: blogImg1,
    },
    {
      id:2,
      title:"The Power of the 3Rs: Mastering Reduce, Reuse, and Recycle",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac. Duis euismod, mi vitae dapibus tincidunt, orci dui malesuada dolor, in sollicitudin lorem mauris vel est. Praesent egestas convallis cursus. Curabitur nec urna leo. Donec interdum nulla justo, eget tempus lorem venenatis a. Phasellus lectus diam, laoreet interdum consequat ut, mollis placerat metus.",
      img: blogImg2,
    },
    {
      id:3,
      title:"How Can We Use Resources More Efficiently?",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac. Duis euismod, mi vitae dapibus tincidunt, orci dui malesuada dolor, in sollicitudin lorem mauris vel est. Praesent egestas convallis cursus. Curabitur nec urna leo. Donec interdum nulla justo, eget tempus lorem venenatis a. Phasellus lectus diam, laoreet interdum consequat ut, mollis placerat metus.",
      img: blogImg3,
    },
    {
      id:4,
      title:"Embarking on a Green Journey: Steps to an Eco-Friendly Lifestyle",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac. Duis euismod, mi vitae dapibus tincidunt, orci dui malesuada dolor, in sollicitudin lorem mauris vel est. Praesent egestas convallis cursus. Curabitur nec urna leo. Donec interdum nulla justo, eget tempus lorem venenatis a. Phasellus lectus diam, laoreet interdum consequat ut, mollis placerat metus.",
      img: blogImg4,
    },
    {
      id:5,
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac. Duis euismod, mi vitae dapibus tincidunt, orci dui malesuada dolor, in sollicitudin lorem mauris vel est. Praesent egestas convallis cursus. Curabitur nec urna leo. Donec interdum nulla justo, eget tempus lorem venenatis a. Phasellus lectus diam, laoreet interdum consequat ut, mollis placerat metus.",
      img: blogImg5,
    },
  ]
  return (
    <>
      <section className='instruction__intro'>
        <Container>
            <Row>
                <Col lg='6' >
                  <div  className='instruction__img'>
                    <img src={img} alt='' />
                  </div>
                </Col>

                <Col lg='6'>
                    <div className='instruction__content'>
                        <Subtitle subtitle={'Our instruction'}  />

                        <p className='instruction__description'>
                        A beacon for responsible environmental actions. In our pursuit to foster a healthier planet, we understand that every positive step counts. This page is designed to provide you with clear, actionable instructions on managing and minimizing waste, understanding the 3Rs (Reduce, Reuse, Recycle), optimizing resource usage, and embracing a greener lifestyle. Whether you're a novice seeking basic guidelines or someone deeply embedded in the cause, our comprehensive instructions serve as a roadmap to make an impactful difference. Let's come together and sow the seeds for a brighter, more sustainable future!
                        </p>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </section>



      <section className='instruction__wrapper'>
      <Container>
          <div className='instruction'>
          {posts.map(post=> (
            <div className='instruction__post' key={post.id}>
              <div className='img'>
                <img src={post.img} alt='' />
              </div>
              
              <div className='content'>
                <Link className='link' to={`/instruction/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button className='btn primary__btn'>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
    </>
   
    
  )
}

export default Instruction