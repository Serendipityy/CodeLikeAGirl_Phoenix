import React from 'react'
import './blogbar.css'

const Blogbar = () => {
    return (
        <div className='blogbar'>
            <div className='blogbarItem'>
                <span className='blogbarTitle'>EXPLORE</span>
                <img
                    src="https://e1.pxfuel.com/desktop-wallpaper/620/732/desktop-wallpaper-aesthetic-iphone-minimal-beige-aesthetic-phone-beige-thumbnail.jpg"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.              
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
