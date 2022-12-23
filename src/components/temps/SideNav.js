import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 


export const SideNav = () => {

    //Opens Side Bar
    function openNav() {

        if (window.innerWidth <= 751) {
          document.getElementById("mySidenav").style.width = "100%"; 
        } else {
          document.getElementById("mySidenav").style.width = "25%";   
        } 
        const dropDownLinks = document.getElementById("mySidenav").childNodes;
        for (let a in dropDownLinks) {
          if (a >= 1)
          dropDownLinks[a].style.fontSize = "25px";
        }
      }
      

      //closes Side Bar
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0%";
        const dropDownLinks = document.getElementById("mySidenav").childNodes;
        for (let a in dropDownLinks) {
          if (a >= 1)
          dropDownLinks[a].style.fontSize = "0px";
        }
      }

      return (
        <nav style={styles.but}>
            {/* {authUser ? ( */}
              <React.Fragment>
                <button className='hoverLink btn btn-light rounded-circle ham' onClick={openNav}><FontAwesomeIcon style={{width: "1em", height: "1em"}}  icon={solid('navicon')} /></button>
                <div id="mySidenav" className="sidenav">
                  <span style={{cursor: 'pointer'}} className="closebtn" onClick={closeNav}>&times;</span>
                  <Link className="nav" onClick={closeNav} to="/">Home</Link>
                  <Link className="nav" onClick={closeNav} to="/menu">Menu</Link>
                  <Link className="nav" onClick={closeNav} to="/marketplace">Marketplace</Link>
                  <Link className="nav" onClick={closeNav} to="/posters">Posters</Link>
                  <Link className="nav" onClick={closeNav} to="/about">About Us</Link>
                  {/* <Link className="nav" onClick={closeNav} to="/signout" >Sign Out</Link> */}
                </div>

              </React.Fragment>
          </nav>
      )
}

const styles = {
    but: {
        display: 'inline-flex',
        alignItems: "center",
        position: 'absolute',
        left: '3%',
        height: '40%',
        width: 'auto',
      },
}

