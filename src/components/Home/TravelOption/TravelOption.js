import React from 'react';
import image1 from '../../../images/Image/sundorbon.png'
import image2 from '../../../images/Image/Sreemongol.png'
import image3 from '../../../images/Image/Sajek.png'
import './TravelOption.css'
const TravelOption = () => {

    

    // function noneBlock (){
    //     let first =  document.getElementsByClassName(first)
    //     first[0].style.display ='none';
    // let second = document.getElementsByClassName(second)
    // second[0].style.display ='none';
    // const third = document.getElementById(third).style.display ='block';
    
    // const fourth = document.getElementById(fourth).style.display ='block'
    
    // }

   function imageClick() {
    let cardTitle =  document.getElementsByClassName('card-title')
    cardTitle[0].style.display ='none';
    let cardText = document.getElementsByClassName('card-text')
    cardText[0].style.display ='none';
    const idTitle = document.getElementById('idTitle')
    idTitle.style.display ='block'
    let textItem =  document.getElementById('textItem')
    textItem.style.display ='block'
    // noneBlock('card-title','card-text','idTitle','textItem')
    idTitle.innerHTML = `<h3 class="cardTitle[0]">SREEMANGAL</h3>`
    textItem.innerHTML = `<p class="card-text information">It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor..</p>`
    }

    function imageClick2() {
        let cardTitle =  document.getElementsByClassName('card-title')
        cardTitle[0].style.display ='none';
        let cardText = document.getElementsByClassName('card-text')
        cardText[0].style.display ='none';
        const idTitle = document.getElementById('idTitle')
        idTitle.style.display ='block'
        let textItem =  document.getElementById('textItem')
        textItem.style.display ='block'
        textItem.innerHTML = `<h3 class="cardTitle[0]">SUNDARBANS</h3>`
        textItem.innerHTML = `<p class="card-text information">The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal...</p>`
      }

      function imageClick3() {
        let cardTitle =  document.getElementsByClassName('card-title')
        cardTitle[0].style.display ='none';
        let cardText = document.getElementsByClassName('card-text')
        cardText[0].style.display ='none';
        const idTitle = document.getElementById('idTitle')
        idTitle.style.display ='block'
        let textItem =  document.getElementById('textItem')
        textItem.style.display ='block'
        idTitle.innerHTML = `<h3 class="cardTitle[0]">MOUNT EVEREST</h3>`
        textItem.innerHTML = `<p class="card-text information">Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas and other hill...</p>`
      }
        return (
        
            <div class='for-travel '>
                   <div class="card card-description bg-none">
                   <div class="card-body ">
                       <div id="tex-body">
                       <h3 class="card-title " id="idTitle">MOUNT EVEREST</h3>
                       <p class="card-text information" id="textItem">Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas and other hill...</p><br/>
                       <button class="btn btn-warning">Booking ➜</button>
                       </div>

                       {/* <div id="tex-body2">
                       <h3 class="card-title" id="idTitle2">SREEMANGAL</h3>
                       <p class="card-text information">It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor..</p><br/>
                       </div>
                       

                       <div id="tex-body3">
                       <h3 class="card-title" id="idTitle2">SUNDARBANS</h3>
                       <p class="card-text information">The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal...</p><br/>
                       </div> */}
                   </div>
                   </div>
       
              <div class="card-deck full-card">
                           <div onClick={imageClick3} class="card-image card ">
                             <img src={image3} class="card-img" id="image" alt="..." />
                               <div class="card-body card-img-overlay">
                               <h3 class="down-text bg-transparent">MOUNT EVEREST</h3>
                               </div>
                           </div>
                           <div onClick={imageClick} class=" card card-image">
                               <img src={image2} class="card-img" alt="..."/>
                               <div class="card-img-overlay card-body">
                               <h3 class="down-text bg-transparent">SREEMANGAL</h3>
                               </div>
                           </div>
                           <div onClick={imageClick2} class="card card-image">
                               <img src={image1} class="card-img" alt="..."/>
                               <div class="card-img-overlay card-body">
                               <h3 class="down-text bg-transparent">SUNDARBANS</h3>
                               </div>
                           </div>
                            {/* Create image display */}
                       

                      
              </div>
           

       </div> 
             
           );
       };
   
  


export default TravelOption;