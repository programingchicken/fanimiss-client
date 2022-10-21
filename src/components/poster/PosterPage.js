import React, { Component } from "react";
import { cat } from "../Data/staticMarkData.json";
//got this from stack over flow Couldnt get text
import ReactMarkdown from "react-markdown";
import FormDetailPosters from '../temps/formDetailPosters';
import StarDiv from '../temps/StarDiv';
import CartDropDown from '../temps/CartDropDown';
import {SideNav} from "../temps/SideNav";
import ButtonBuild  from "../temps/buttonBuild";

class PosterPage extends Component {
  //org state
  state = {
    id: "",
    img: "",
    name: "",
    stars: 4,
    price: 0,
    token: false,
    userId: "",
    courseUserId: "",
    user: "",
    hashPass: "",
    errors: [],
    quantity: 1,
    nameArr: [{nameC:'',quantityC:''}],
    full: [[...cat.small]],
    size: `One Piece Wanted Poster - 30x21cm`,
  };

  //mounts after
  async componentDidMount() {
    const { full } = this.state;
    document.getElementById("filter").style.display = "none";
    //var
    const { context } = this.props;
    const auth = context.authenticatedUser;
    const hashPass = context.hashPass;
    const id = window.location.pathname.split("/");
    console.log(id.length);
    console.log(Number(id[2]));
    for (const arr of full) {
      for (const obj of arr) {
        if (obj.id === Number(id[2])) {
            console.log(obj)
          this.setState({
            id: obj.id,
            img: obj.img,
            name: obj.name,
            stars: obj.star,
            price: obj.price,
          });

        }
      }
    }
  }

  //cancel


  //page
  render() {
    const { name, stars,img, price, userId, courseUserId, errors,size} = this.state;
    //fix button switch may need use state


    console.log(stars);

    return (
      <div style={{ backgroundColor: "#001220"}} className="d-flex justify-content-center align-items-center flex-wrap">

        <div
          className="spacer layer3 d-grid justify-content-center align-items-center grid-wrap"
        >

          <span
            className="sho rounded-pill"
            style={{
              width: "35vw",
              backgroundColor: "#001220",
              position: "relative",
              right: ".8%",
              top: "-45.5%",
            }}
          >
                        <div style={{position: 'relative', right: '25vw'}}>
            <SideNav />
                </div>
            <h1 style={styles.title}>FANIMISS</h1>
          </span>
          <CartDropDown clNav={this.clNav} opNav={this.opNav}/>
        </div>
        <div className="sho cont rounded-5 d-flex justify-content-center align-items-center flex-wrap">

             <div className="sho inn rounded-5 d-flex justify-content-left align-items-top flex-wrap">
                <div style={{position: 'relative', top:'10vw', width:"50%"}}>
                    <img className="imgS"src={img} style={{marginBottom: '4%'}}/>
                </div>
                <div className="titles">
                <span className="titleName">{size}</span>
                <span className="titlePrice" >{price}</span>
                
             <FormDetailPosters
                        style={styles.forms}
                        errors={errors}
                        user={userId}
                        courseUserId={courseUserId}
                        addCart={this.addCart}
                        handelReviews={this.handelReviews}
                        size={size}
                        />  

                </div>
                <StarDiv stars={stars} />
                <ButtonBuild back={this.back}/>
            </div> 
        </div>
        
        <div className="spacer layer1"></div>

        </div>
    );
  }

  //cancel to route
  back = () => {

    this.props.history.push("/posters/small");
  };


  handelReviews = (size) => {
    const {name} = this.state
    document.getElementsByClassName('titleName')[0].innerHTML = `${name} -${size ? ' 30x21cm' : ' 42x30cm'}`
document.getElementsByClassName('titlePrice')[0].innerHTML = size ? '$8.99' : '$11.99'
console.log(document.getElementsByClassName('titlePrice'))
  };
  addCart = (size,newName, newAName) => {
    // localStorage.removeItem('cart')
    const {name,stars,price,id,img,token, quantity,nameArr} = this.state
    console.log(size)
    if (size === 1000) {
      let item = {name: `${name} ${newName}`,stars: stars,price:'$11.99',id:id+size,img: img,token: token, quantity: quantity, nameArr: [{nameC: newAName, quantityC: 1 }] }
      const newNameArr = new Map()
      let other = []
      const arr = [...JSON.parse(localStorage.getItem('cart'))]
      const newarr = []
      console.log(arr)
      if (arr.length !== 0) {

        for (let i = 0; i < arr.length; i++) {

          if (arr[i].id === item.id) {

            // console.log(arr[i].nameArr.nameC)
            // newNameArr.set(arr[i].nameArr.nameC, {nameC: arr[i].nameArr.nameC, quantityC: arr[i].nameArr.quantityC})
            // console.log(newNameArr)
            item.quantity += arr[i].quantity 
            const newA = arr.filter((obj) => obj.id === item.id)
            console.log(newA)
            for (let j = 0; j < arr[i].nameArr.length; j++) {
              newNameArr.set(arr[i].nameArr[j].nameC, {nameC: arr[i].nameArr[j].nameC, quantityC:arr[i].nameArr[j].quantityC})
              console.log(newNameArr)
              // if (newNameArr.has(item.nameArr[0].nameC)) {
              if ( arr[i].nameArr[j].nameC === item.nameArr[0].nameC) {
                item.nameArr[0].quantityC += arr[i].nameArr[j].quantityC
console.log('add', item.nameArr[0].quantityC)

if ( arr[i].nameArr[j].nameC !== item.nameArr[0].nameC) {
  other.push(arr[i].nameArr[j])
}
newNameArr.set(item.nameArr[0].nameC, {nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
  console.log(newNameArr)
  item.nameArr = [...other,item.nameArr[0]]
  console.log(item.nameArr)
                // newNameArr.delete(item.nameArr.nameC)
                // newNameArr.set(item.nameArr.nameC,{nameC:item.nameArr.nameC, quantityC: item.nameArr.quantityC})
              }else {
                if ( arr[i].nameArr[j].nameC !== item.nameArr[0].nameC) {
                  other.push(arr[i].nameArr[j])
                }
                newNameArr.set(item.nameArr[0].nameC,{nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
                  console.log(newNameArr)
                  console.log('push')
              }
            }

            newNameArr.set(item.nameArr[0].nameC,{nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
            console.log(newNameArr.get(newAName))
            console.log(other)
            item.nameArr = [...other, newNameArr.get(newAName)]
            console.log(item.nameArr)
            console.log(newNameArr)

            newarr.push(item,...newA)
          }else if (arr.length === i ) {
            newNameArr.set(item.nameArr[0].nameC,{nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
            item.nameArr = newNameArr.get(item.nameArr[0].nameC)
            newarr.push(item)
          } else {
            newarr.push(arr[i])
          }
        }
      } else {
        newNameArr.set(item.nameArr[0].nameC,{nameC: item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
        console.log(newNameArr)
        item.nameArr = newNameArr.get(item.nameArr[0].nameC)
        console.log(item)
  newarr.push(item)
      }
  
      console.log(newarr)
      // localStorage.setItem('cart',JSON.stringify([item,...JSON.parse(localStorage.getItem(('cart')|| []))]));
  
      localStorage.setItem('cart',JSON.stringify([...newarr.filter((obj) => obj.id !== item.id),item]));
    
  
  
      console.log(JSON.parse(localStorage.getItem('cart')))
          this.props.history.push("/posters/small");
    }else {
      let item = {name: `${name} ${newName}`,stars,price,"id":id+size,img,token, quantity, nameArr: [{nameC: newAName, quantityC: 1 } ]}


      const arr = [...JSON.parse(localStorage.getItem('cart'))]
      const newNameArr = new Map()
      let other = []
      console.log(newNameArr)
      const newarr = []
      console.log(arr)
  if (arr.length !== 0) {

        for (let i = 0; i < arr.length; i++) {

          if (arr[i].id === item.id) {

            // console.log(arr[i].nameArr.nameC)
            // newNameArr.set(arr[i].nameArr.nameC, {nameC: arr[i].nameArr.nameC, quantityC: arr[i].nameArr.quantityC})
            // console.log(newNameArr)
            item.quantity += arr[i].quantity 
            const newA = arr.filter((obj) => obj.id === item.id)
            console.log(newA)
            for (let j = 0; j < arr[i].nameArr.length; j++) {
              newNameArr.set(arr[i].nameArr[j].nameC, {nameC: arr[i].nameArr[j].nameC, quantityC:arr[i].nameArr[j].quantityC})
              console.log(newNameArr)
              // if (newNameArr.has(item.nameArr[0].nameC)) {
              if ( arr[i].nameArr[j].nameC === item.nameArr[0].nameC) {
                item.nameArr[0].quantityC += arr[i].nameArr[j].quantityC
console.log('add', item.nameArr[0].quantityC)

if ( arr[i].nameArr[j].nameC !== item.nameArr[0].nameC) {
  other.push(arr[i].nameArr[j])
}
newNameArr.set(item.nameArr[0].nameC, {nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
  console.log(newNameArr)
  item.nameArr = [...other,item.nameArr[0]]
  console.log(item.nameArr)
                // newNameArr.delete(item.nameArr.nameC)
                // newNameArr.set(item.nameArr.nameC,{nameC:item.nameArr.nameC, quantityC: item.nameArr.quantityC})
              }else {
                if ( arr[i].nameArr[j].nameC !== item.nameArr[0].nameC) {
                  other.push(arr[i].nameArr[j])
                }
                newNameArr.set(item.nameArr[0].nameC,{nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
                  console.log(newNameArr)
                  console.log('push')
              }
            }

            newNameArr.set(item.nameArr[0].nameC,{nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
            console.log(newNameArr.get(newAName))
            console.log(other)
            item.nameArr = [...other, newNameArr.get(newAName)]
            console.log(item.nameArr)
            console.log(newNameArr)

            newarr.push(item,...newA)
          }else if (arr.length === i ) {
            newNameArr.set(item.nameArr[0].nameC,{nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
            item.nameArr = newNameArr.get(item.nameArr[0].nameC)
            newarr.push(item)
          } else {
            newarr.push(arr[i])
          }
        }
      } else {
        newNameArr.set(item.nameArr[0].nameC,{nameC: item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
        console.log(newNameArr)
        item.nameArr = newNameArr.get(item.nameArr[0].nameC)
        console.log(item)
  newarr.push(item)
      }

      console.log(newarr)
      // localStorage.setItem('cart',JSON.stringify([item,...JSON.parse(localStorage.getItem(('cart')|| []))]));
  
      localStorage.setItem('cart',JSON.stringify([...newarr.filter((obj) => obj.id !== item.id),item]));
    
  
  
      console.log(JSON.parse(localStorage.getItem('cart')))
          this.props.history.push("/posters/small");
    }


  };

  opNav = () => {
    const filter = document.getElementById("filter");
    filter.style.display = "none";
  }
  clNav = () => {
    const filter = document.getElementById("filter");
    filter.style.display = "none";
  }
}

//styles

const styles = {
    title: {
      backgroundImage:
        " url('https://media1.giphy.com/media/VOCwBp4kcegJ2rfCF7/giphy.gif?cid=790b7611802d3e1186bf825d92f34d30607f723a038efaee&rid=giphy.gif&ct=g')",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "'Arimo', sans-serif",
      fontSize: "5vw",
      color: "white",
      textAlign: "center",
      position: "relative",
      top: "1.5vh",
    }
  };

export default PosterPage;



// let item = {name: `${name} ${newName}`,stars,price,"id":id+size,img,token, quantity, nameArr: [{nameC: newAName, quantityC: 1 } ]}


// const arr = [...JSON.parse(localStorage.getItem('cart'))]
// const newNameArr = new Map()
// let other = []
// console.log(newNameArr)
// const newarr = []
// console.log(arr)
// if (arr.length !== 0) {

//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i].id === item.id) {

//       // console.log(arr[i].nameArr.nameC)
//       // newNameArr.set(arr[i].nameArr.nameC, {nameC: arr[i].nameArr.nameC, quantityC: arr[i].nameArr.quantityC})
//       // console.log(newNameArr)
//       item.quantity += arr[i].quantity 
//       const newA = arr.filter((obj) => obj.id === item.id)
//       console.log(newA)
//       for (let j = 0; j < arr[i].nameArr.length; j++) {
//         newNameArr.set(arr[i].nameArr[j].nameC, {nameC: arr[i].nameArr[j].nameC, quantityC:arr[i].nameArr[j].quantityC})
//         console.log(newNameArr)
//         // if (newNameArr.has(item.nameArr[0].nameC)) {
//         if ( arr[i].nameArr[j].nameC === item.nameArr[0].nameC) {
//           item.nameArr[0].quantityC += arr[i].nameArr[j].quantityC
// console.log('add', item.nameArr[0].quantityC)

// if ( arr[i].nameArr[j].nameC !== item.nameArr[0].nameC) {
// other.push(arr[i].nameArr[j])
// }
// newNameArr.set(item.nameArr[0].nameC, {nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
// console.log(newNameArr)
// item.nameArr = [...other,item.nameArr[0]]
// console.log(item.nameArr)
//           // newNameArr.delete(item.nameArr.nameC)
//           // newNameArr.set(item.nameArr.nameC,{nameC:item.nameArr.nameC, quantityC: item.nameArr.quantityC})
//         }else {
//           if ( arr[i].nameArr[j].nameC !== item.nameArr[0].nameC) {
//             other.push(arr[i].nameArr[j])
//           }
//           newNameArr.set(item.nameArr[0].nameC,{nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
//             console.log(newNameArr)
//             console.log('push')
//         }
//       }

//       newNameArr.set(item.nameArr[0].nameC,{nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
//       console.log(newNameArr.get(newAName))
//       console.log(other)
//       item.nameArr = [...other, newNameArr.get(newAName)]
//       console.log(item.nameArr)
//       console.log(newNameArr)

//       newarr.push(item,...newA)
//     }else if (arr.length === i ) {
//       newNameArr.set(item.nameArr[0].nameC,{nameC:item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
//       item.nameArr = newNameArr.get(item.nameArr[0].nameC)
//       newarr.push(item)
//     } else {
//       newarr.push(arr[i])
//     }
//   }
// } else {
//   newNameArr.set(item.nameArr[0].nameC,{nameC: item.nameArr[0].nameC, quantityC: item.nameArr[0].quantityC})
//   console.log(newNameArr)
//   item.nameArr = newNameArr.get(item.nameArr[0].nameC)
//   console.log(item)
// newarr.push(item)
// }

// console.log(newarr)
// // localStorage.setItem('cart',JSON.stringify([item,...JSON.parse(localStorage.getItem(('cart')|| []))]));

// localStorage.setItem('cart',JSON.stringify([...newarr.filter((obj) => obj.id !== item.id),item]));
