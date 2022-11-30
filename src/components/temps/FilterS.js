import React from 'react';

//form page
const FilterS = (props) => {
   function filter() {
    const val = document.getElementById("filt").value
    const e =  document.getElementsByClassName("scroll")[1].childNodes;
for (const elm of e) {
    if (val === "0") {
    const view = document.getElementsByClassName("linkDiv")
    for (const el of view) {
        el.style.display = 'inline-block'
        if (el.getAttribute('objid') > 3000) {
            el.style.display = 'none'
          }
    }
    break;
}else if (Number(val) >= 9) {
        console.log(9)
         if (elm.getAttribute('value') === val) {

            elm.style.display = 'inline-block'
            if (elm.getAttribute('objid') > 3000) {
                elm.style.display = 'none'
              }
        } else {
            elm.style.display = 'none'
        }
    } else if (val === elm.getAttribute('value2')) {
        console.log(val)
        elm.style.display = 'inline-block'
        if (elm.getAttribute('objid') > 3000) {
            elm.style.display = 'none'
          }
    } else {
        console.log(val)
        console.log(elm.getAttribute('value'))
        console.log('none')
        elm.style.display = 'none'
    }

}
console.log(e)
    }

    function filterSearch(event) {
        const view = document.getElementsByClassName("linkDiv")
        const val = document.getElementById("filt").value
        const searchWord = document.getElementById("searchBar").value;
        if (searchWord === "") {
filter()
        } 
        else {
            for (const el of view) {
                console.log(el.childNodes[2].textContent)

            if(el.childNodes[2].textContent.toLowerCase().includes(searchWord.toLowerCase())){
                if (val === "0") {
                        el.style.display = 'inline-block'
                        if (el.getAttribute('objid') > 3000) {
                            el.style.display = 'none'
                          }
                    } 
                    else if (Number(val) >= 9) {
                        console.log(9)
                         if (el.getAttribute('value') === val) {
                
                            el.style.display = 'inline-block'
                            if (el.getAttribute('objid') > 3000) {
                                el.style.display = 'none'
                              }
                        } else {
                            el.style.display = 'none'
                        }
                    } else if (val === el.getAttribute('value2')) {
                        console.log(val)
                        el.style.display = 'inline-block'
                        if (el.getAttribute('objid') > 3000) {
                            el.style.display = 'none'
                          }
                    } else {
                        console.log('none')
                        el.style.display = 'none'
                    }

        }else {
            console.log('none')
            el.style.display = 'none'
        }
    }
}
}
    return (
        <div
        className="sho rounded-pill d-grid justify-content-center align-items-center grid-wrap"
        style={{
          width: "76vw",
          height: "13vh",
          backgroundColor: "rgb(35 52 72)",
        }}
      >
        <div
          className="sho rounded-pill d-flex justify-content-center align-items-center grid-wrap"
          style={{
            position: "relative",
            width: "74vw",
            backgroundColor: "rgb(76 104 133)",
            height: "10vh",
            bottom: 3,
          }}
        >

          <input className="sho rounded-pill" id='searchBar' onChange={filterSearch} style={{color: '#f2ebeb',backgroundColor:'#797d99',border:'none', width: '30vw', position: 'relative', right: '14vw', top: '-.25vh'}}></input> 
<select id='filt' onInput={filterSearch} style={{color: '#f2ebeb',backgroundColor:'#797d99',border:'none', width: 'auto', position: 'relative'}} className="sho rounded-pill">
    <option value='0'>All Items</option>
    <option value='One Piece'>One Piece</option>
    <option value="Naruto">Naruto</option>
    <option value="Bleach">Bleach</option>
    <option value="DemonSlayer">Demon Slayer</option>
    <option value="My Hero Academia">My Hero Academia</option>
    <option value="Chainsaw Man">Chainsaw Man</option>
    <option value="9">Braclets</option>
    <option value="10">Key Chains</option>
    <option value="11">Necklace</option>
    <option value="12">Lanyard</option>
    <option value="13">Stickers</option>
    <option value="14">Plushies</option>
    <option value="15">Cosplay</option>
</select>
      </div>
      </div>
    );
}

 export default FilterS