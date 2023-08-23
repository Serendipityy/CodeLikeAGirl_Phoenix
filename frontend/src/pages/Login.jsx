import React, { useState } from 'react'
import {Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/login.css'

import loginImg from '../assets/images/loginImg.png'
import logo from '../assets/images/logo.png'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {MdOutlineFacebook} from 'react-icons/md'
import {AiFillTwitterCircle, AiFillGoogleCircle} from 'react-icons/ai'

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = e => {
    e.preventDefault();
  }

  return (
    <>
    <section className='login__section'>

      
      <Container>
        <Row>
          {/* margin: auto để tự căn giữa */}
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex
            align-items-center justify-content-between'>
              <div className='login__img'>
                <img src={loginImg} alt='' />
              </div>

              <div className='login__form'>

                <div className='login__header d-flex flex-column
                align-items-center '>
                  <div className='logo'>
                    <img src={logo} alt='' />
                  </div>
                  <h2>Login</h2>
                </div>
                
                <Form onSubmit={handleClick}>
                  <label htmlFor='username'>Username</label>
                  <FormGroup className='login__content d-flex align-items-center gap-2'>
                    <div className='login__icon'>
                      <FaUserShield />
                    </div>
                    <input 
                      type='text' 
                      placeholder='Enter Username' 
                      required 
                      id='username'
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <label htmlFor='password'>Password</label>
                  <FormGroup className='login__content d-flex align-items-center gap-2'>
                    <div className='login__icon'>
                      <BsFillShieldLockFill />
                    </div>
                    <input 
                      type='password' 
                      placeholder='Enter Password'
                      required 
                      id='password'
                      onChange={handleChange}
                    />                  
                  </FormGroup>

                  <Link to='#' className='forgotPassword'>
                    Forgot password?
                  </Link>

                  <Link to='/login/:id'>
                    <Button type='submit' className='btn primary__btn auth__btn mt-2'>
                      Login
                    </Button>
                  </Link>
                  
                </Form>

                <div className='login__with d-flex flex-column gap-0.5
                align-items-center'>
                    <span>Or Login with</span>
                    <div className='login__list d-flex flex-row gap-2'>
                        <Link to='#'><MdOutlineFacebook /></Link>
                        <Link to='#'><AiFillTwitterCircle /></Link>
                        <Link to='#'><AiFillGoogleCircle /></Link>                 
                    </div>
                </div>
                   
                <div className='createAccount d-flex align-items-center 
                gap-3'>
                    <span>Don't have an account?</span>
                    <Link to='/register'>
                      <button className='btn secondary__btn createBtn'>Create new</button>
                    </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Login
