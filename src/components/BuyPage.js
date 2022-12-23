import React from 'react';
// import Reviews from './ReviewTemp.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';

//form page

 const BuyPage = () => {

    //submit
    function run() {
        fetch("http://localhost:7399/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: JSON.parse(localStorage.getItem(('cart')))
          })
        })
        .then(res => {
          if(res.ok) return res.json()
          return res.json().then(json => Promise.reject(json))
        })
        .then(({url}) => {
          window.location = url
        })
      }

      run()



  //the div and form of buttons
  return (
       
        <div>
        Loading...
    </div>
  );
  }


  export default BuyPage