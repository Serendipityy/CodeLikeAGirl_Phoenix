import React, {useState}from "react";

import '../styles/redeem.css';

import Map from "./map/handle_map.js";
import {Container, Row, Col} from 'reactstrap'

import SearchBox from "./map/handle_searchbar.js"
    

const RedeemPoint = () => {
    const {selectPosition, setSelectPosition} = useState('NULL');

    return (
        <>
        <div className="RedeemPoint">
        <h1>Congrats. Here we have a special gift for you!</h1>
        <Container>
            <Row className="redeem__row">
                <Col lg='4'>
                <Map/>
                </Col>
                <Col lg='4'>
                <div className="information">
                    <div className = "input-box">
                        <label>Choose Your Tree/Flower</label>
                        <input type="text">
                        </input>
                    </div>
                    <div className = "input-box">
                        <label>Location</label>
                        <input type="text">

                        </input>
                        
                    </div>
                    <button  className="btn primary__btn mt-3 redeem__btn">Submit</button>
            </div>
                </Col>
            </Row>
            {/* <div className = 'map'>
            </div> */}

           
        </Container>
        </div>

        </>
      
    )
  }
  
  export default RedeemPoint
