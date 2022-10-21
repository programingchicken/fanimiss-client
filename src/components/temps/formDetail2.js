import React, { useState,useEffect } from 'react';
import { cat } from "../Data/staticMarkFavData.json";


//form for details
const FormDetail2 = (props) => {
  const {
price,
    id,
      errors,
      addCart,
      handelReviews,
      handelSelects,
    } = props; 
    const [size, setSize] = useState(true)
    const [newSize, setNewSize] = useState(0)
    const [fullArr, setFullArr] = useState([[...cat.onePiece], [...cat.naruto], [...cat.bleach]])
  const [newName, setNewName] = useState('')
  const [newCName, setNewCName] = useState('')
  const [imgC, setImgC] = useState('')
  const [fullList, setFullList] = useState('')
const listArr=[]

  //figure a way to set the name of newCName to its original first name on the list when joining page
  useEffect(() => {
    for (const arr of fullArr) {
      for (const obj of arr) {
        if (id === obj.id) {
          console.log(obj.list[0])
          setNewName(obj.name)
         setNewCName(obj.list[0].nameC)
         setImgC(obj.list[0].imgC)
         setFullArr([[...cat.onePiece], [...cat.naruto], [...cat.bleach]])
        }
      }
  
  }
  }, []);
  for (const arr of fullArr) {
    for (const obj of arr) {
      if (id === obj.id) {
  for (const opt of obj.list) {
    listArr.push(<option value={opt.nameC}>{opt.nameC}</option>)
    console.log(listArr)
  }
}
    }
  }



  //submit
  function handleAddCart(event) {
    event.preventDefault();


console.log(id, newName, newCName,price)
          addCart(id, newName, newCName,price,imgC);

  }



//cancel
  function handelReview(event) {
    event.preventDefault();
    setSize(size ? false : true)

    if (!size) {
      setNewSize(3000)
      setNewName('42x30cm')

    } else {
      setNewSize(0)
      setNewName('30x21cm')
    }
    handelReviews(size)
  }
  function handelSelect(event) {
    
    const e = event.target.value
    for (const arr of fullArr) {
      for (const obj of arr) {
        if (id === obj.id) {
    for (const opt of obj.list) {
      if (opt.nameC === e) {
        setImgC(opt.imgC)
        handelSelects(opt.imgC)
        setNewCName(e)
        break;
      }

    }
  }
      }
    }


}
 //the div and form of buttons if user is auth user show update and delete button
    return (
     
     <div>
       <ErrorsDisplay errors={errors} />
       <form onSubmit={handleAddCart}>
         <button className="btn btn-outline-dark rounded-pill" type="submit" style={{marginLeft: '.5vw'}}>Add To Cart +</button>
         <select style={{width:'12vw'}} onInput={handelSelect} className="btn btn-outline-dark rounded-pill sell">
         {listArr}
         </select>
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

export default FormDetail2