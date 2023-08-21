import React, {useState}from "react";

import '../styles/redeem.css';

import Map from "./map/handle_map.js";

import SearchBox from "./map/handle_searchbar.js"
    

const RedeemPoint = () => {
    const {selectPosition, setSelectPosition} = useState('NULL');

    return (
        <>

        <div className="RedeemPoint">
        <h1>Redeem Your Point</h1>


        <div className = 'map'>
            <Map/>
        </div>

        <section className="information">
            <div className = "input-box">
                <input type="text"></input>
                <label>Choose Your Tree/Flower</label>
            </div>
            <div className = "input-box">
                <input type="text"></input>
                <label>Location</label>
                
            </div>
            <button  className="btn primary__btn">Submit</button>
        </section>
        </div>
        </>
      
    )
  }
  
  export default RedeemPoint
