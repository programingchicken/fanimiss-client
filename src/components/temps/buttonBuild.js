import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
//form page
const buttonBuild = (props) => {
  const { back, elements, buildN, buildM, buildAT, buildA } = props;

  console.log(elements);

  function handleBack(event) {
    event.preventDefault();
    back();
  }

  function nutritonBuild(event) {
    event.preventDefault();
    const miscE = document.getElementById("miscId");
    const nutritionE = document.getElementById("nutritionId");
    const allE = document.getElementById("allId");
    const athleticsE = document.getElementById("athleticsId");
    nutritionE.className = "btn btn-warning";
    miscE.className = "btn btn-outline-warning";
    athleticsE.className = "btn btn-outline-warning";
    allE.className = "btn btn-outline-warning";
    buildN();
  }

  function allBuild(event) {
    event.preventDefault();
    const miscE = document.getElementById("miscId");
    const nutritionE = document.getElementById("nutritionId");
    const allE = document.getElementById("allId");
    const athleticsE = document.getElementById("athleticsId");
    allE.className = "btn btn-warning";
    miscE.className = "btn btn-outline-warning";
    athleticsE.className = "btn btn-outline-warning";
    nutritionE.className = "btn btn-outline-warning";
    buildA();
  }
  function athleticBuild(event) {
    event.preventDefault();
    const miscE = document.getElementById("miscId");
    const nutritionE = document.getElementById("nutritionId");
    const allE = document.getElementById("allId");
    const athleticsE = document.getElementById("athleticsId");
    athleticsE.className = "btn btn-warning";
    miscE.className = "btn btn-outline-warning";
    allE.className = "btn btn-outline-warning";
    nutritionE.className = "btn btn-outline-warning";
    buildAT();
  }
  function miscBuild(event) {
    const miscE = document.getElementById("miscId");
    const nutritionE = document.getElementById("nutritionId");
    const allE = document.getElementById("allId");
    const athleticsE = document.getElementById("athleticsId");
    miscE.className = "btn btn-warning";
    allE.className = "btn btn-outline-warning";
    athleticsE.className = "btn btn-outline-warning";
    nutritionE.className = "btn btn-outline-warning";
    event.preventDefault();
    buildM();
  }

  //the div and form of buttons
  return (
    <div>
      <div>
        <details
          style={{
            position: "relative",
          left: "14vw",
            display: "inline-grid",
            zIndex: 5,
          }}
        >
          <summary
            id="filter"
            className="sho btn rounded-pill"
            style={{
              backgroundColor: "rgb(121 125 153)",
              color: "rgb(242 235 235)",
              zIndex: -1,
            }}
          >
            Filters
          </summary>
          <button
          style={{
            marginTop:'.5vh'
          }}
            id="allId"
            className="btn btn-warning"
            onClick={allBuild}

          >
            All Items
          </button>
          <button
            id="nutritionId"
            className="btn btn-outline-warning"
            onClick={nutritonBuild}

          >
            Nutrition
          </button>
          <button
            id="athleticsId"
            className="btn btn-outline-warning"
            onClick={athleticBuild}

          >
            Athletics
          </button>
          <button
            id="miscId"
            className="btn btn-outline-warning"
            onClick={miscBuild}

          >
            Misc
          </button>
        </details>
        <div>
          <button
            className="hoverLink next btn rounded-pill"
            style={styles.next}
            onClick={handleBack}
          >
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              style={{
                fontSize: '3.5vh',
                color: "rgb(242 235 235)",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

//styles
const styles = {
  next: {
    backgroundColor: '#797d99'
  }
};

export default buttonBuild;
