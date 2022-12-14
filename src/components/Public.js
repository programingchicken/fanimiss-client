"use-strict";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import {SideNav} from "./temps/SideNav"

export default class Public extends Component {
  render() {
    return (
      <div className="bounds" style={{height: '100%', width: '100%'}}>
        <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ width: '100%', height: '100%', backgroundColor: '#cccccc', position: "absolute"}} >

          <img src="https://i.imgur.com/yDdqo0N.jpg" style={{ width: '100%', height: '100%',position: "absolute"}} alt="background"/>
          <div className="rounded-5 d-flex justify-content-center align-items-center flex-wrap bg-dark" style={{position: "absolute", width: '81%', height: '78%', border: 'solid 2px #C0C0C0'}} >
            <div className="Fix"> <SideNav/></div>
         
            <div className="rounded-5 AnName">
                <h1 className="AnName2">FANIMISS</h1>
                {/* <Link to="/menu"><button style={{width: '10vw', height: '10vw',position: 'relative',
    bottom: '15.4vw', fontSize: '1.5vw', fontFamily: "'Press Start 2P', cursive"}} className="btn btn-outline-light rounded-circle">MENU</button></Link> */}
              {/* <p style={{fontFamily: "'Press Start 2P', cursive", fontSize: '1.2vw' ,color: 'white', textAlign: 'center',marginTop: '-3vh', position: 'relative', right: '0%'}}>FANIMISS</p> */}
            </div>

          </div>
        </div>                   
      </div>
      
    );
  }
}
