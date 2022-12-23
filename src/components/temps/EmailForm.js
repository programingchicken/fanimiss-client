import React from 'react';
// import Reviews from './ReviewTemp.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

//form page
const EmailForm = (props) => {
  const {
    elements,
    errors
  } = props;  


    //submit
    function handleSubmit(event) {
      event.preventDefault();
    }





  //the div and form of buttons
  return (
    <div style={{    marginTop: '10%'}}>
      <ErrorsDisplay errors={errors} />
      <form className="emailForm" action="https://formsubmit.co/aquacrazz.gp@gmail.com" method="POST">

        {/* <div className="pad-top">
          <Reviews></Reviews>
        </div> */}
        
        <div className="pad-top addressBar"  >
        {elements()}
        <button className="rounded-3 chBut" type="submit" onSubmit={handleSubmit}>Check Out</button>
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
    display: 'grid',
    position: 'absolute',
  }

}

export default EmailForm