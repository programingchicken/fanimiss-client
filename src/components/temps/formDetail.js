import React, { useState, useEffect } from 'react';
import { cat } from "../Data/staticMarkFavData.json";


//form for details
const FormDetail = (props) => {


    const {
switchs,
      id,
        errors,
        addCart,
        handelReviews,
      } = props; 
      const [size, setSize] = useState(true)
      const [newSize, setNewSize] = useState(0)
      const [fullArr, setFullArr] = useState([[...cat.onePiece], [...cat.naruto], [...cat.bleach],[...cat.myHeroAcademia], [...cat.chainsawMan], [...cat.demonSlayer] ])


      useEffect(() => {
        for (const arr of fullArr) {
          for (const obj of arr) {
          if (id+newSize === obj.id) {
            handelReviews(size, obj.size, obj.price)
          }
        }
      }
      },[])
  //submit
  function handleAddCart(event) {
    for (const arr of fullArr) {
      for (const obj of arr) {
      if (id+newSize === obj.id) {
        addCart(obj.id,`${obj.name} ${obj.size}`, obj.name, obj.price );
      }
    }
  }

  }






//cancel
  function handelReview(event) {
    event.preventDefault();
    setSize(size ? false : true)

    if (size) {

      setNewSize(3000)
      console.log(id + 3000)


    } else {
      setNewSize(0)
      console.log(id + 0)
    } 
    for (const arr of fullArr) {
      for (const obj of arr) {
      if (id+newSize === obj.id) {
        handelReviews(size, obj.size, obj.price)
      }
    }
  }

  }


 //the div and form of buttons if user is auth user show update and delete button
    return (
     
     <div>
       <ErrorsDisplay errors={errors} />
       <form onSubmit={handleAddCart}>
       <button className="btn btn-outline-dark rounded-pill size" onClick={handelReview}>{size ? switchs[0] : switchs[1]}</button>
         <button className="btn btn-outline-dark rounded-pill" type="submit" style={{marginLeft: '.5vw'}}>Add To Cart +</button>
       </form>
     </div>
    )
}


//display errors
function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div>
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

}

export default FormDetail