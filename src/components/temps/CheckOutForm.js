import React from 'react';
// import Reviews from './ReviewTemp.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used


//form page
const CheckOutForm = (props) => {
    const {
      next,
      elements,
      errors
    } = props;  
  
  //cancel
    function handleBack(event) {
      event.preventDefault();
      next();
    }
  
  
  
  
  
    //the div and form of buttons
    return (
      <div>
        <ErrorsDisplay errors={errors} />
        <form action="https://formsubmit.co/aquacrazz.gp@gmail.com" method="POST">
  
          {/* <div className="pad-top">
            <Reviews></Reviews>
          </div> */}
          <div className="pad-top" style={styles.top} >
          {elements()}
          </div>
          <div className="pad-bottom" >
            <button className="back btn rounded-pill text-warning" onClick={handleBack}>
  
              <FontAwesomeIcon
                    className="text-warning"
                    icon={solid("arrow-right-from-bracket")}
                    style={{transform: 'rotate(180deg)', fontSize: 35, marginLeft: '50%'}}
                  /></button>
            <button type="submit" className="next btn rounded-pill text-warning">            
            <FontAwesomeIcon
                    className="text-warning"
                    icon={solid("envelope")}
                    style={{ fontSize: 35, marginRight: '50%'}}
                  /></button>
  
          </div>
          </form>
          
      </div>
    );
  }
  
  
  //errors val
  function ErrorsDisplay({ errors }) {
    let errorsDisplay = null;
  
    if (errors.length) {
      errorsDisplay = (
        <div style={styles.err}>
          <h2 className="validation--errors--label">Validation errors</h2>
          <div className="validation-errors">
            <ul>
              {errors.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
          </div>
        </div>
      );
    }
  
    return errorsDisplay;
  }
  
  
  //styles
  const styles = {
    back: {
      backgroundColor: "#3D3D3D",
      position: "fixed",
      left: "-10%",
      bottom: "0%",
      height: "7.5em",
      width: "18.5em",
    },
    next: {
      backgroundColor: "#3D3D3D",
      position: "fixed",
      right: "-10%",
      bottom: "0%",
      height: "7.5em",
      width: "19.5em",
    },
    top: {
      width: '75%',
      textAlign: 'center',
      left: '12.5%',
      position: 'absolute',
    }
  
  }
  
  export default CheckOutForm