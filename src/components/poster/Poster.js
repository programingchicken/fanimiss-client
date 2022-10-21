import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { cat } from "../Data/staticMarkData.json";
import ButtonBuild from "../temps/buttonBuild";
import TokBuild from "../temps/TokBuild";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartDropDown from '../temps/CartDropDown';
import {SideNav} from "../temps/SideNav";


const getData=()=>{
    fetch('staticAnimeData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }


export default class Posters extends Component {

  //org state
  state = {
    userId: "",
    user: "",
    rows: 3,
    hashPass: "",
    errors: [],
    fullArr: [[...cat.tok]],
  };
  

  //mounts after
  componentDidMount() {
    const { context } = this.props;
    const auth = context.authenticatedUser;
    const hashPass = context.hashPass;
    console.log(hashPass);
    document.getElementById("filter").style.display = "none";
    if (auth) {
      console.log(auth);
      this.setState({
        userId: auth.id,
        user: auth,
        hashPass: hashPass,
        rows:this.rowCount(),
      });
    }
  }
  rowCount(){

  }

  //page
  render() {
    const { fullArr} = this.state;

    return (
      <div style={{ backgroundColor: "#001220" }} className="text-center">
        <div
          className="spacer layer3 d-grid justify-content-center align-items-center grid-wrap"
          style={{ margintop: "3em" }}
        >
          <span
            className="sho rounded-pill"
            style={{
              width: "35vw",
              backgroundColor: "#001220",
              position: "relative",
              right: ".8%",
              top: "-45.5%",
            }}
          >
                                    <div style={{position: 'relative', right: '25vw'}}>
            <SideNav />
                </div>
            <h1 style={styles.title}>FANIMISS</h1>
          </span>
          <CartDropDown clNav={this.clNav} opNav={this.opNav}/>
        </div>
        <div
          className="d-grid justify-content-center align-items-center grid-wrap"
          style={{ position: "relative", bottom: "18vw" }}
        >

            
              <ButtonBuild
                              buildN={this.buildN}
                              buildAT={this.buildAT}
                              buildA={this.buildA}
                              buildM={this.buildM}
                              back={this.back}/>
          <div
            className="sho rounded-5 d-grid justify-content-center align-items-center grid-wrap"
            style={{
              width: "76vw",
              height: "80vh",
              backgroundColor: "rgb(35 52 72)",
              marginTop: "5vh",
            }}
          >
            <div
              className="sho rounded-5 d-flex justify-content-center align-items-center flex-wrap"
              style={{
                backgroundImage:
                " url('https://i.imgur.com/dgjR6bB.png')",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "25vw",
                position: "relative",
                width: "74vw",
                backgroundColor: "rgb(76 104 133)",
                height: "77vh",
                bottom: 3,
              }}
            >

            <TokBuild fullArr={fullArr}/>
            
            </div>
          </div>
        </div>
        <div className="spacer layer1"></div>
      </div>
    );
  }

  buildN = () => {
    const nutritionR = document.getElementById('nutritionR')
    document.getElementById('span').style.height = "634.5em"
    const miscR = document.getElementById('miscR')
    const athleticsR = document.getElementById('athleticR')
    const allR = document.getElementById('allR')
    nutritionR.className = 'active-content'
    athleticsR.className = 'not-content'
    allR.className = 'not-content'
    miscR.className = 'not-content'
  };

  buildM = () => {
    const nutritionR = document.getElementById('nutritionR')
    document.getElementById('span').style.height = "134.5em"
    const miscR = document.getElementById('miscR')
    const athleticsR = document.getElementById('athleticR')
    const allR = document.getElementById('allR')
    miscR.className = 'active-content'
    athleticsR.className = 'not-content'
    allR.className = 'not-content'
    nutritionR.className = 'not-content'
  };

  buildAT = () => {
    const nutritionR = document.getElementById('nutritionR')
    document.getElementById('span').style.height = "634.5em"
    const miscR = document.getElementById('miscR')
    const athleticsR = document.getElementById('athleticR')
    const allR = document.getElementById('allR')
    athleticsR.className = 'active-content'
    miscR.className = 'not-content'
    allR.className = 'not-content'
    nutritionR.className = 'not-content'
  };

  buildA = () => {
    const nutritionR = document.getElementById('nutritionR')
    document.getElementById('span').style.height = "1384.6em"
    const miscR = document.getElementById('miscR')
    const athleticsR = document.getElementById('athleticR')
    const allR = document.getElementById('allR')
    allR.className = 'active-content'
    miscR.className = 'not-content'
    athleticsR.className = 'not-content'
    nutritionR.className = 'not-content'
  };

  back = () => {
    this.props.history.push("/menu");
  };

  opNav = () => {
    const filter = document.getElementById("filter");
    filter.style.display = "none";
  }
  clNav = () => {
    const filter = document.getElementById("filter");
    filter.style.display = "none";
  }
}

const styles = {
  title: {
    backgroundImage:
      " url('https://media1.giphy.com/media/VOCwBp4kcegJ2rfCF7/giphy.gif?cid=790b7611802d3e1186bf825d92f34d30607f723a038efaee&rid=giphy.gif&ct=g')",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "'Arimo', sans-serif",
    fontSize: "5vw",
    color: "white",
    textAlign: "center",

    position: "relative",
    top: "1.5vh",
  },
};
