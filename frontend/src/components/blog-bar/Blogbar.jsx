import React from 'react'
import './blogbar.css'
import exploreImg from '../../assets/images/explorect.png'

const Blogbar = () => {
    return (
        <div className='blogbar'>
            <div className='blogbarItem'>
                <span className='blogbarTitle'>EXPLORE</span>
                <img
                    src={exploreImg}
                    alt=""
                />
                <p>
                    Let's dive deep into the pulse of the environment with us. Uncover the latest <span>'News'</span> insights or journey with <span>'Rare Species'</span> to meet unique animals, understanding their habitats and vital roles. <span>Embark on this adventure and embrace the wonders of our planet!</span>

                </p>
            </div>
    
            <div className='blogbarItem'>
                <span className='blogbarTitle'>CATEGORIES</span>
                <ul className='blogbarList'>
                    <li className='blogbarListItem'>Air</li>
                    <li className='blogbarListItem'>Water</li>
                    <li className='blogbarListItem'>Soil</li>
                    <li className='blogbarListItem'>Biodiversity</li>
                    <li className='blogbarListItem'>Others</li>
                </ul>
            </div>
    
            <div className='blogbarItem'>
                <span className='blogbarTitle'>FOLLOW US</span>
                <div className='blogbarSocial'>
                    <i className="blogbarIcon fa-brands fa-square-facebook"></i>
                    <i className="blogbarIcon fa-brands fa-square-twitter"></i>
                    <i className="blogbarIcon fa-brands fa-square-pinterest"></i>
                    <i className="blogbarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
      )
}
export default Blogbar
