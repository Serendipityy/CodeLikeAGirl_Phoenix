import React from 'react'
import '../styles/instruction-details.css'
import { Container, Col } from 'reactstrap'
import blogImg from '../assets/images/img-08.jpg'
import userImg from '../assets/images/loginImg.png'

// Ảnh edit vs delete
import Edit from '../assets/images/3459610.jpg'
import Delete from '../assets/images/8431377.jpg'
import { Link } from 'react-router-dom'
import Menu from '../components/menu/Menu'

const InstructionDetails = () => {
  return (
    <section>
        <Container>
            <div className='single'>
                <Col lg='9' className='content'>
                    <img src={blogImg} alt=''/>
                    <div className='user'>
                        <img src={userImg} alt='' />
                        <div className='info'>
                            <span>Helen</span>
                            <p>Posted 2 days ago</p>
                        </div>

                        <div className='edit'>
                            <Link to='#'>
                                <img src={Edit} alt='' />
                            </Link> 
                                <img src={Delete} alt='' />
                        </div>
                    </div>

                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus sapien, nec pellentesque quam vehicula ac. Duis euismod, mi vitae dapibus tincidunt, orci dui malesuada dolor, in sollicitudin lorem mauris vel est. Praesent egestas convallis cursus. Curabitur nec urna leo. Donec interdum nulla justo, eget tempus lorem venenatis a. Phasellus lectus diam, laoreet interdum consequat ut, mollis placerat metus. Praesent venenatis lobortis ligula placerat imperdiet. Donec id enim felis. Curabitur a sodales est, sed tempus elit. Phasellus at volutpat massa. Nullam pellentesque et ex vitae ornare. Quisque sollicitudin elit vel diam hendrerit dapibus. Mauris interdum nunc ac quam viverra, ut suscipit urna bibendum. Aenean eget mi et quam viverra tempus egestas ac diam. Vestibulum vitae ultricies ipsum.

                        <br />
                        <br />
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ornare porta rutrum. Duis ullamcorper mauris eget consequat iaculis. Donec fringilla, nisi vitae faucibus commodo, leo augue elementum nulla, nec viverra urna libero eget diam. Nullam vehicula consequat nibh, ac tincidunt neque rutrum id. Maecenas volutpat felis ac tristique lacinia. In consequat orci et feugiat semper. Vivamus a varius nunc. Praesent in nunc id lacus sagittis convallis sit amet at justo. Nulla vel iaculis dolor. Proin ullamcorper sodales sem, eu fringilla erat venenatis et. Praesent et laoreet enim. Sed sagittis elit at turpis sodales, et consequat justo cursus. Mauris pharetra, sem ut egestas euismod, ipsum nisi hendrerit tellus, vitae convallis libero enim nec neque. Maecenas semper et justo in congue. Nam bibendum massa urna, at maximus mauris vestibulum non.
                        Fusce vestibulum elit at condimentum convallis. Sed consectetur quis ligula at placerat. Proin elementum lacus turpis, nec pretium eros rutrum vel. Maecenas molestie vel sapien vulputate facilisis. Etiam egestas tincidunt bibendum. Aliquam ultrices eros sed vestibulum dignissim. Nam rutrum turpis at lectus fermentum, sit amet faucibus lacus sollicitudin.
                        Praesent quis suscipit diam, sit amet tempor nisi. Nunc nisi metus, congue id lacinia sed, convallis eget orci. Curabitur commodo, turpis at vestibulum tincidunt, eros augue facilisis justo, sit amet rutrum ante tellus quis sapien. Aliquam varius, lectus in maximus cursus, odio lacus condimentum nisi, vitae lacinia velit lorem non tortor. Duis risus elit, efficitur id hendrerit et, volutpat a ante. Aenean sagittis, nisi varius fermentum facilisis, orci dolor porttitor felis, id lacinia erat quam eget sem. Fusce tristique mauris ac dolor rutrum posuere.
                        <br />
                        <br />
                        Integer gravida vehicula tellus, blandit egestas dui accumsan sit amet. Integer iaculis, velit eu bibendum varius, velit sapien dictum mi, vel hendrerit lectus mi id risus. Ut sit amet arcu eu justo sodales pulvinar. Aenean eu lobortis diam. Cras vestibulum, leo sit amet fermentum interdum, sapien dolor molestie neque, sit amet convallis risus elit ut metus. Duis laoreet ornare nunc in ultrices. Sed sit amet interdum sapien. Proin maximus ultrices mi, non semper mauris commodo in. Etiam et magna vitae nisl consectetur semper. Quisque semper erat id sapien sagittis lobortis in ornare nunc. Cras mollis, dui vel fringilla euismod, tortor elit pellentesque metus, in eleifend nunc massa quis ligula. Praesent pellentesque eget mi eget condimentum. Pellentesque eleifend sit amet nunc a dictum. Morbi sit amet eros vel mauris hendrerit dignissim eu at eros.
                    </p>
                </Col>
                
                <Col lg='3'>
                    <Menu />
                </Col>
            </div>
        </Container>
    </section>
   
    
  )
}

export default InstructionDetails