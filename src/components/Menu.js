"use-strict";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import {SideNav} from "./temps/SideNav"

export default class Menu extends Component {
  render() {
    return (
      <div className="bounds" style={{height: '100%', width: '100%'}}>
        <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ width: '100%', height: '100%', backgroundColor: '#cccccc', position: "absolute"}} >

          <img src="https://i.imgur.com/yDdqo0N.jpg" style={{ width: '100%', height: '100%',position: "absolute"}} alt="background"/>
          <div className="rounded-5 d-flex justify-content-center align-items-center flex-wrap bg-dark" style={{position: "absolute", width: '81%', height: '78%', border: 'solid 2px #C0C0C0'}} >
          <div className="diver"> <SideNav/></div>
            <div className="rounded-5" style={{textAlign:'center',position: "absolute", width: '90%', height: '81.5%', backgroundColor:"#010a01", display: 'inline-grid'}} >
                <Link to="/marketplace" class="neonText" style={{fontFamily: "'Orbitron', sans-serif", textDecoration: 'none', top: '6vh', fontSize: '4vw'}}>MarketPlace</Link>
                <Link to="/posters" class="neonText" style={{fontFamily: "'Orbitron', sans-serif", textDecoration: 'none', top: '6vh', fontSize: '4vw'}}>Posters</Link>
                <Link to="/about" class="neonText" style={{fontFamily: "'Orbitron', sans-serif", textDecoration: 'none', top: '6vh', fontSize: '4vw'}}>About</Link>
            </div>
          </div>
        </div>                   
      </div>
      
    );
  }
}

const styles = {
  };