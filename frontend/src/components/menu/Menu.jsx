import React from 'react'
import blogImg1 from '../../assets/images/img-01.jpg' 
import blogImg2 from '../../assets/images/img-02.jpg' 
import blogImg3 from '../../assets/images/img-03.jpg' 
import blogImg4 from '../../assets/images/img-04.jpg' 
import blogImg5 from '../../assets/images/img-05.jpg' 
import './menu.css'

const Menu = () => {

    const posts = [
        {
          id:1,
          title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac. Duis euismod, mi vitae dapibus tincidunt, orci dui malesuada dolor, in sollicitudin lorem mauris vel est. Praesent egestas convallis cursus. Curabitur nec urna leo. Donec interdum nulla justo, eget tempus lorem venenatis a. Phasellus lectus diam, laoreet interdum consequat ut, mollis placerat metus.",
          img: blogImg1,
        },
        {
          id:2,
          title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac. Duis euismod, mi vitae dapibus tincidunt, orci dui malesuada dolor, in sollicitudin lorem mauris vel est. Praesent egestas convallis cursus. Curabitur nec urna leo. Donec interdum nulla justo, eget tempus lorem venenatis a. Phasellus lectus diam, laoreet interdum consequat ut, mollis placerat metus.",
          img: blogImg2,
        },
        {
          id:3,
          title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac. Duis euismod, mi vitae dapibus tincidunt, orci dui malesuada dolor, in sollicitudin lorem mauris vel est. Praesent egestas convallis cursus. Curabitur nec urna leo. Donec interdum nulla justo, eget tempus lorem venenatis a. Phasellus lectus diam, laoreet interdum consequat ut, mollis placerat metus.",
          img: blogImg3,
        },
        {
          id:4,
          title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac",
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
    <div className='category'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className='instruction__post' key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu