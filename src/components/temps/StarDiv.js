import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Link } from "react-router-dom";
//form page
const ListBuild = (props) => {
  const { stars } = props;
  const results = [];

  if (stars <= 5) {
    results.push(
      <>
        <FontAwesomeIcon
          icon={solid("star")}
                    className="text-warning"
          style={{
            fontSize: "10vw",
          }}
        />
        <FontAwesomeIcon
          icon={solid("star")}
                    className="text-warning"
          style={{
            fontSize: "10vw",
          }}
        />
        <FontAwesomeIcon
          icon={solid("star")}
                    className="text-warning"
          style={{
            fontSize: "10vw",
          }}
        />
        <FontAwesomeIcon
          icon={solid("star")}
                    className="text-warning"
          style={{
            fontSize: "10vw",
          }}
        />
        <FontAwesomeIcon
          icon={solid("star")}
                    className="text-warning"
          style={{
            fontSize: "10vw",
          }}
        />
      </>
    );
  }
  console.log(results);
  console.log(stars);

  //the div and form of buttons
  return (
    <div
      className="starS d-flex justify-content-center align-items-center flex-wrap"
      style={{marginTop: '5%'}}
    >
      {results}
    </div>
  );
};

//styles
const styles = {};

export default ListBuild;
