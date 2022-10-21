import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Link } from 'react-router-dom';
//form page
 const TokBuildPage = (props) => {
  const { fullArr} = props;
  const results = [];

  for (const arr of fullArr) {
  for (const obj of arr) {
      results.push(
        <a className="btn rounded-5 hoverLink linkDiv" value={obj.id} href={`/posters/${obj.id}`} style={{backgroundColor: "rgb(255 255 255)"}}>
            <img
            className=""
            alt="merchandise"
            src={obj.img}
            style={{ height: "9.5vw", width: "7.5vw" }}
          />
          <h3 className="price2" >
            {obj.price}
          </h3>
          <h1 className=" nameTitle2">
            {obj.name}
          </h1>
          </a>
      );
    }
  }
  console.log(results)
console.log(fullArr)


  //the div and form of buttons
  return (
    <div className="scroll">
{results}
  </div>
  );
};

//styles
const styles = {};

export default TokBuildPage;