import React, {useState, useRef, useEffect} from 'react'
import {Container, Row, Button} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import './header.css'

const nav__links=[
    {
        path:'./home',
        display:'Home'
    },
    {
        // Trong này sẽ có bài báo về môi trường
        // và thông tin về động thực vật quý hiếm
        path:'./explore',
        display:'Explore',
        subNav: [
            {
                path: './explore/news',
                display: 'News',
            },
            {
                path: './explore/rare-species',
                display: 'Rare Species',
            }
        ]
    },
    // {
    //     path:'./rarespecies',
    //     display:'Explore'
    // },
    {
        path:'./instruction',
        display:'Instruction'
    },
    {
        path:'./challenge',
        display:'Challenge'
    },
    {
        path:'./activities',
        display:'Activities'
    },
    
]

const Header = () => {

    const headerRef=useRef(null)

    // Nếu cuộn xuống 80px trở xuống thì cho header sticky
    const stickyHeaderFunc=() =>{
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop >80
                || document.documentElement.scrollTop>80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return window.removeEventListener('scroll',stickyHeaderFunc)
    })


    const [showSubnav, setShowSubnav] = useState(false);

    const handleExploreClick = () => {
        setShowSubnav(!showSubnav);
      };
      

    //   ----------------------
    const handleClickOutsideSubnav = (event) => {
        if (
          showSubnav &&
          headerRef.current &&
          !headerRef.current.contains(event.target)
        ) {
          setShowSubnav(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('click', handleClickOutsideSubnav);
    
        return () =>
          document.removeEventListener('click', handleClickOutsideSubnav);
      }, [showSubnav]);


    //   menu


      
  return (

    <header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className='nav__wrapper d-flex align-items-center 
                justify-content-between'>
                    {/* ======= logo ========= */}
                    <div className='logo'>
                        <img src={logo} alt='' />
                    </div>
                    {/* ====================== */}

                    {/* ========= menu ========  */}
                    <div className='navigation'>
                        <ul className='menu d-flex align-items-center
                        gap-5'>
                            {
                                nav__links.map((item, index)=> (
                                    <li className='nav__item' key={index}>
                                        {/* Khi hover vào item nào trên navbar
                                        thì active màu cho item đó */}
                                        <NavLink 
                                            to={item.path} 
                                            className={navClass=>
                                            navClass.isActive?"active__link" : ""
                                        }

                                            onClick={item.subNav ? handleExploreClick : null} // Thêm sự kiện onClick
                                        >
                                            {item.display}
                                        </NavLink>


                                         {/* Hiển thị subnav */}
                                        {showSubnav && item.subNav && (
                                            <ul className='subnav d-flex flex-column'>
                                            {item.subNav.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                <NavLink to={subItem.path}>{subItem.display}</NavLink>
                                                </li>
                                            ))}
                                            </ul>
                                        )}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* ======================= */}

                {/* ========================= */}
                    <div className='nav__right d-flex align-items-center
                    gap-4'>
                        <div className='nav__btns d-flex align-items-center
                        gap-4'>
                            <Button className='btn secondary__btn'>
                                <Link to='/login'>Login</Link>
                            </Button>

                            <Button className='btn primary__btn'>
                                <Link to='/register'>Register</Link>
                            </Button>
                        </div>

                        {/* Trên mobile */}
                        <span className='mobile__menu'>
                            <i className='ri-menu-line'></i>
                        </span>
                        
                        
                    </div>
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header