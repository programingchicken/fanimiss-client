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
            <div style={{ marginBottom: '45vh'}}> <SideNav/></div>
         
            <div className="rounded-5" style={{textAlign:'center',position: "absolute", width: '90%', height: '81.5%', backgroundColor:"#010a01"}} >
                <h1 style={styles.title}>FANIMISS</h1>
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
const styles = {
  title: {
    backgroundImage: " url('https://media1.giphy.com/media/VOCwBp4kcegJ2rfCF7/giphy.gif?cid=790b7611802d3e1186bf825d92f34d30607f723a038efaee&rid=giphy.gif&ct=g')",
    backgroundPosition: 'center center',
    backgroundRepeat: "no-repeat",
    backgroundSize: '100%',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "'Arimo', sans-serif",
    fontSize: '16.5vw' ,
    color: 'white',
    textAlign: 'center',
    letterSpacing: '-.9vw',
    marginTop: '12.5vh', 
    position: 'relative',
    right: '.8%',
}
};
