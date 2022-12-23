import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Link } from 'react-router-dom';
//form page
const ListBuild = (props) => {
  const { fullArr} = props;
  const results = [];

  for (const arr of fullArr) {
  for (const obj of arr) {
      results.push(
        <a className="btn rounded-5 hoverLink linkDiv" objid={obj.id} value={obj.val} value2={obj.val2} href={`/marketplace/${obj.id}`} style={{backgroundColor: "rgb(255 255 255)"}}>
            <img
            className="rounded-3 img2"
            alt="merchandise"
            src={obj.img}

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
{results.sort(() => (Math.random() > .5) ? 1 : -1)}
  </div>
  );
};

//styles
const styles = {};

export default ListBuild;