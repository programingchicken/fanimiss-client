
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import EmailForm from './EmailForm'

// import CheckOutForm from "../temps/CheckOutForm"
//form page
const CartDropDown = (props) => {
   const [truth,setTruth]= useState(false)
   const [errors,setErrors]= useState([])
    const {clNav,opNav} = props
    const fullArr = JSON.parse(localStorage.getItem(('cart')))
    console.log(fullArr)
    const results=[];
  const [result,setResults] = useState([])
  console.log(results)
  console.log(result)
  function testCart(FA) {
    for (const obj of FA) {
        console.log(obj)
        console.log(obj.token)
            if (obj.token === false) {
                return setTruth(true)
            }
    }
    return setTruth(false)
  }

  function removeItem(event){
        const e = event.target.parentNode.childNodes[2]
        const arr = fullArr.filter((obj) => obj.name !== e.textContent )
    
         console.log(e)
         console.log(arr)
         localStorage.setItem('cart', JSON.stringify(arr||[]));
         setResults(arr)
         console.log(JSON.parse(localStorage.getItem(('cart')|| [])))
         testCart(arr)
  }
  //Opens Side Bar
  function openNav() {
    testCart(fullArr)
      document.getElementById("mySideBuy").style.width = "100%";
    const dropDownLinks = document.getElementById("scrolls");
    
 dropDownLinks.style.display = "block";
 const buy = document.getElementById("buy");
 buy.style.display = "block";
 opNav()
  }
  //closes Side Bar
  function closeNav() {
    document.getElementById("mySideBuy").style.width = "0%";
    const dropDownLinks = document.getElementById("scrolls");
 dropDownLinks.style.display = "none";
 const buy = document.getElementById("buy");
 buy.style.display = "none";
 clNav()
    }

    for (const obj of fullArr) {
     results.push(
        <span
          className="btn rounded-5 hoverLink newLinkDiv"
          style={{ backgroundColor: "rgb(255 255 255)" }}
        >
          <img
            alt="merchandise"
            src={obj.img}
            style={{ position:'relative',height: "9.5vw", width: "7.5vw", right: '17vw' }}
          />
          <h3 className="price">{obj.price}</h3>
          <h1 className=" nameTitle">{obj.name}</h1>
          <button className="btn btn-outline-secondary rounded-circle" style={{width: "4.5vw", height: "4.5vw", position: 'relative', left:'12vw',bottom: '8vw',color: "#374e66", borderColor: "#374e66"}} onClick={removeItem}>X</button>
        </span>
      )
  }

  console.log(fullArr);

  //the div and form of buttons
  return (
    <nav style={styles.but}>
      {/* {authUser ? ( */}
      <React.Fragment>
        <button
          type="button"
          class="hoverLink btn btn-light rounded-circle"
          style={{
            position: "absolute",
            textAlign: "center",
            left: "89vw",
            bottom: "28.5vw",
            color: "rgb(192 192 192)",
            cursor: "pointer",
            width: "3.5vw",
            height: "3.5vw",
          }}
          onClick={openNav}
        >
          <FontAwesomeIcon style={{width: "1.5vw", height: "1.5vw"}} icon={solid("cart-shopping")}>
            {" "}
            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                1
              <span class="visually-hidden">New alerts</span>
            </span>
          </FontAwesomeIcon>
        </button>
        <div id="mySideBuy" className="sideBuy">
          
          <div id="scrolls" className="scroll">{results}</div>
          <div id="buy" className="buy">{truth ? <EmailForm                           
                            errors={errors}
                            elements={() => (
                                <React.Fragment>
                                    <div style={{display: 'inline-grid',width: "70%", textAlign: 'center'}}>   
                                        <input type="text"  name="name" placeholder="Name..." style={styles.emailText} required className='bg-dark text-warning'/>
                                        <input type="hidden" name="_next" value="http://localhost:3000/buypage" />
                                        <input type="address"  name="address" placeholder="Street Address..." style={styles.emailBox} className='bg-dark text-warning' required/>
                                        <input type="house"  name="house" placeholder="apt./Unit..." style={styles.emailBox} className='bg-dark text-warning' required/> 
                                        <input type="postal"  name="postal" placeholder="Postal/Zip" style={styles.emailBox} className='bg-dark text-warning' required/>
                                        <input type="email"  name="email" placeholder="Email Adress..." style={styles.emailBox} className='bg-dark text-warning' required/> 
                                        <input type="phone"  name="phone" placeholder="Phone Number..." style={styles.emailBox} className='bg-dark text-warning' required/> 
                                    </div>
                                </React.Fragment>
                                 )}
                                /> : <EmailForm                           
                                errors={errors}
                                elements={() => (
                                    <React.Fragment>
                                        <div style={{display: 'inline-grid',width: "70%", textAlign: 'center'}}>   
                                            <input type="text"  name="name" placeholder="Name..." style={styles.emailText} required className='bg-dark text-warning'/>
                                            <input type="hidden" name="_next" value="http://localhost:3000/buypage" />
                                            <input type="email"  name="email" placeholder="Email Adress..." style={styles.emailBox} className='bg-dark text-warning' required/> 
                                            <input type="phone"  name="phone" placeholder="Phone Number..." style={styles.emailBox} className='bg-dark text-warning' required/> 
                                        </div>
                                    </React.Fragment>
                                     )}
                                    />}</div>
          <span
            style={{ cursor: "pointer" }}
            className="closebtn"
            onClick={closeNav}
          >
            &times;
          </span>
        </div>
      </React.Fragment>
    </nav>
  );
};

//styles
const styles = {
  but: {
    display: "inline-flex",
    alignItems: "center",
    position: "absolute",
    left: "3%",
    height: "40%",
    width: "auto",
  },
};

export default CartDropDown;
