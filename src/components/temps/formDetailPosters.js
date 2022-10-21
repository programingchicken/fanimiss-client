import React, { useState } from 'react';



//form for details
const FormDetail = (props) => {

  const [size, setSize] = useState(false)
  const [newSize, setNewSize] = useState(0)
  const [newName, setNewName] = useState('30x21cm')
  const [newCName, setNewCName] = useState('Luffy')
    const {
        user,
        courseUserId,
        errors,
        addCart,
        handelReviews,
        name,
        price,
      } = props; 

 




  //submit
  function handleAddCart(event) {
    event.preventDefault();
    addCart(newSize, newName, newCName);
  }



//cancel
  function handelReview(event) {
    event.preventDefault();
    setSize(size ? false : true)

    if (!size) {
      setNewSize(1000)
      setNewName('42x30cm')

    } else {
      setNewSize(0)
      setNewName('30x21cm')
    }
    handelReviews(size)
  }
  function handelSelect(event) {
    const e = event.target.value
    console.log(e)
    setNewCName(e)

}

console.log(`${user}   ${courseUserId}`)

 //the div and form of buttons if user is auth user show update and delete button
    return (
     
     <div>
       <ErrorsDisplay errors={errors} />
       <form onSubmit={handleAddCart}>
         <button className="btn btn-outline-dark rounded-pill size" onClick={handelReview}>{size ? '42x30cm' : '30x21cm'}</button>
         <button className="btn btn-outline-dark rounded-pill" type="submit" style={{marginLeft: '.5vw'}}>Add To Cart +</button>
         <select style={{width:'12vw'}} onInput={handelSelect} className="btn btn-outline-dark rounded-pill sell">
         <option value='Luffy'>Luffy</option> 
         <option value='Zoro'>Zoro</option>  
         <option value='Robin'>Robin</option> 
         <option value='Sanjie'>Sanjie</option>
         <option value='Zoro2'>Zoro2</option>
         <option value='Chopper'>Chopper</option>
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

export default FormDetail