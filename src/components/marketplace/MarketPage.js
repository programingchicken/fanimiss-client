import React, { Component } from "react";
import { cat } from "../Data/staticMarkFavData.json";
//got this from stack over flow Couldnt get text
import ReactMarkdown from "react-markdown";
import FormDetail from '../temps/formDetail';
import FormDetail2 from '../temps/formDetail2';
import StarDiv from '../temps/StarDiv';
import CartDropDown from '../temps/CartDropDown';
import {SideNav} from "../temps/SideNav";
import ButtonBuild  from "../temps/buttonBuild";

class MarketPlace extends Component {
  //org state
  state = {
    imgs: "",
    switchs: "",
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
    size:"",
    quantity: 1,
    errors: [],
    full: [[...cat.onePiece], [...cat.naruto], [...cat.bleach]],
    cato: '',
    display: 1,
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
            cato: obj.val2,
            id: obj.id,
            img: obj.img,
            name: obj.name,
            stars: obj.star,
            price: obj.price,
            token: obj.token,
            size: obj.size,
            display: obj.display,
            switchs: [obj.list[0].name,obj.list[1].name],
            imgs: [obj.list[0].imgs,obj.list[1].imgs]
          });

        }
      }
    }
  }

  //page
  render() {
    const { name, stars,img, price, userId, courseUserId, errors,size, cato,id,display, switchs} = this.state;
const itemName = {name, stars,img, price, userId, courseUserId, errors,size, cato,id} 
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
                    <img className="imgS rounded-5" id="pageImg" src={img}/>
                </div>
                <div className="titles">
                <span className="titleName">{size} {name}</span>
                <span className="titlePrice" >{price}</span>
             {display === 1 ?
<FormDetail
switchs={switchs}
cato={cato}
newSizeO={size}
itemName={name}
style={styles.forms}
errors={errors}
id={id}
price={itemName.price}
addCart={this.addCart}
handelReviews={this.handelReviews}
/>  :
<FormDetail2
cato={cato}
newSizeO={size}
itemName={name}
style={styles.forms}
errors={errors}
id={id}
handelSelects={this.handelSelects}
price={itemName.price}
addCart={this.addCart}
handelReviews={this.handelReviews}
/> 
             }

                </div>
                <StarDiv stars={stars}/>
                <ButtonBuild back={this.back}/>
            </div> 
        </div>
        
        <div className="spacer layer1"></div>

        </div>
    );
  }

  //cancel to route
  back = () => {

    this.props.history.push("/marketplace");
  };




  // add size true or false from formDetails
  addCart = (id2, newName, newAName, price) => {
    const {display} = this.state
    // localStorage.removeItem('cart')
    if (display === 1) {
      const {name,stars,id,img,token, quantity,size} = this.state
      const item = {name: `${newName}`, quantity: quantity,stars:stars,price: price,id: id2,img,token}
      const arr = [...JSON.parse(localStorage.getItem('cart'))]
      const newarr = []
      console.log(arr)
  if (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === item.id) {
            item.quantity += arr[i].quantity 
            const newA = arr.filter((obj) => obj.id === item.id)
            console.log(newA)
            newarr.push(item,...newA)
          }else if (arr.length === i ) {
            newarr.push(item)
          } else {
            newarr.push(arr[i])
          }
        }
      } else {
  newarr.push(item)
      }
  
      console.log(newarr)
      // localStorage.setItem('cart',JSON.stringify([item,...JSON.parse(localStorage.getItem(('cart')|| []))]));
  
      localStorage.setItem('cart',JSON.stringify([...newarr.filter((obj) => obj.id !== item.id),item]));
    
  
  
      console.log(JSON.parse(localStorage.getItem('cart')))
          this.props.history.push("/marketplace");
    } else if (display === 2) {
      const {name,stars,id,img,token, quantity,size} = this.state
let item = {name: `${newName}`,stars:stars,price: price,id: id2,img,token, quantity, nameArr: [{nameC: newAName, quantityC: 1 } ]}


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
  item.nameArr = [newNameArr.get(item.nameArr[0].nameC)]
  console.log(item)
newarr.push(item)
}

console.log(newarr)
// localStorage.setItem('cart',JSON.stringify([item,...JSON.parse(localStorage.getItem(('cart')|| []))]));

localStorage.setItem('cart',JSON.stringify([...newarr.filter((obj) => obj.id !== item.id),item]));
this.props.history.push("/marketplace");
    }

  };
  handelReviews = (size, size2, price) => {
    const {name, switchs, imgs} = this.state
    document.getElementById('pageImg').src = size ? imgs[1] : imgs[0]
    document.getElementsByClassName('titleName')[0].innerHTML = `${size ? switchs[1] : switchs[0]} ${name}`
document.getElementsByClassName('titlePrice')[0].innerHTML = price
console.log(document.getElementsByClassName('titlePrice'))
  };

  handelSelects(imgC) {
    console.log(imgC)
    document.getElementById('pageImg').src = imgC
  }
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

export default MarketPlace;
