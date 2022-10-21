import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 


export const SideView = () => {


      //closes Side Bar
      function closeNav() {
        document.getElementById("mySideView").style.width = "0vw";
        const dropDownLinks = document.getElementById("mySideView").childNodes;
        for (let a in dropDownLinks) {
          if (a >= 1)
          dropDownLinks[a].style.fontSize = "0vw";
        }
      }

      return (
        <div id="mySideView" className="SideView">
            {/* {authUser ? ( */}
              <React.Fragment>

                  <span style={{cursor: 'pointer'}} className="closebtn" onClick={closeNav}>&times;</span>
                  <Link className="nav" onClick={closeNav} to="/">Home</Link>
                  <Link className="nav" onClick={closeNav} to="/menu">Menu</Link>
                  <Link className="nav" onClick={closeNav} to="/marketplace">Marketplace</Link>
                  <Link className="nav" onClick={closeNav} to="/reviews">Reviews</Link>
                  <Link className="nav" onClick={closeNav} to="/about">About Us</Link>
                  {/* <Link className="nav" onClick={closeNav} to="/signout" >Sign Out</Link> */}
               

              </React.Fragment>
              </div>
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

