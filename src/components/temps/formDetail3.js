import React, { useState,useEffect } from 'react';
import { cat } from "../Data/staticMarkFavData.json";


//form for details
const FormDetail3 = (props) => {
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
    const [fullArr, setFullArr] = useState([[...cat.onePiece], [...cat.naruto], [...cat.bleach],[...cat.myHeroAcademia],[...cat.chainsawMan],[...cat.demonSlayer]])
  const [newName, setNewName] = useState('')
  const [newCName, setNewCName] = useState('')
  const [newDName, setNewDName] = useState('')
  const [newDSize, setNewDSize] = useState('')
  const [newDPrice, setNewDPrice] = useState('')
  const [imgC, setImgC] = useState('')
  const [fullList, setFullList] = useState('')
const listArr=[]
const listArr2=[]

  //figure a way to set the name of newCName to its original first name on the list when joining page
  useEffect(() => {
    for (const arr of fullArr) {
      for (const obj of arr) {
        if (id === obj.id) {
          console.log(obj.listA[0])
          setNewName(obj.name)
          setNewSize(0)
         setNewCName(obj.listA[0].nameC)
         setNewDName(obj.listB[0].nameD)
         setNewDPrice(obj.listB[0].priceD)
         setNewDSize(obj.listB[0].sizeD)
         setImgC(obj.listA[0].imgC)
         setFullArr([[...cat.onePiece], [...cat.naruto], [...cat.bleach],[...cat.myHeroAcademia], [...cat.chainsawMan],[...cat.demonSlayer]])
        }
      }
  
  }
  }, []);
  for (const arr of fullArr) {
    for (const obj of arr) {
      if (id === obj.id) {
  for (const opt of obj.listA) {
    listArr.push(<option value={opt.nameC}>{opt.nameC}</option>)
    console.log(listArr)
  }
}
    }
  }

  for (const arr of fullArr) {
    for (const obj of arr) {
      if (id === obj.id) {
  for (const opt of obj.listB) {
    listArr2.push(<option value={opt.nameD}>{opt.nameD}</option>)
    console.log(listArr2)
  }
}
    }
  }



  //submit
  function handleAddCart(event) {
    event.preventDefault();


console.log(id, newName, newCName,price)
          addCart(id+newSize, `${newName} ${newDSize}`, newCName,newDPrice,imgC,newDName,newDSize,newDPrice);

  }



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
    for (const opt of obj.listA) {
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

function handelSelect2(event) {
    
  const e = event.target.value
  for (const arr of fullArr) {
    for (const obj of arr) {
      if (id === obj.id) {
  for (const opt of obj.listB) {
    if (opt.nameD === e) {
      // document.querySelector(".titleName").innerHTML[0] = `${opt.name} ${opt.sizeD}`
      document.querySelector(".titleName").innerHTML = `${obj.name} ${opt.sizeD}`
      document.querySelector(".titlePrice").innerHTML = `${opt.priceD}`
      console.log(opt.id+ id,opt.sizeD,opt.priceD)
      setNewDName(e)
      setNewSize(opt.id)
      setNewDSize(opt.sizeD)
      setNewDPrice(opt.priceD)
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
         <select style={{width:'12vw'}} onInput={handelSelect2} className="btn btn-outline-dark rounded-pill sell">
         {listArr2}
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

export default FormDetail3