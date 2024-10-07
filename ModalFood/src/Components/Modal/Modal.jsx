import React, { useState } from 'react'
import './Modal.css'
import { GiShoppingCart } from "react-icons/gi";

const Modal = ({Modal ,setModal,id}) => {
  
  const [counter,setCounter] = useState(0)
  const [bariImg , setbariImg] = useState(id.images[0])
  
  const handledecrement = () => {
    if(counter > 0 )
    setCounter(counter - 1)
  }
  // const handleImageClick = (imgSrc) => {
  //   setbariImg(imgSrc);
  // };

  const handleImageSwap = (clickedImage, index) => {
   
    const newImages = [...id.images];
    newImages[0] = clickedImage;
    newImages[index] = bariImg; 
    setbariImg(clickedImage);
    id.images = newImages; 
  };
  
  return (
    <div>
      <div className="modal">
        <div className="modalParent">
          <div className="close" onClick={() => setModal(false)}>
            &times;
          </div>
          <div className="modalContent">
            <div className="ModalSec1">
              <div className="bariimg">
                <img  className='bari' src={bariImg} alt="" />
              </div>
              <div className="chotiImg">
              {id.images.slice(1).map((img, index) => (
                  <img
                    key={index}
                    className='choti'
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleImageSwap(img, index + 1)}
                  />
                ))}
                
              </div>

            </div>
            <div className="ModalSec2">
              <h2>{id.name}</h2>
              <p>{id.description}</p>
              <h3>Price: ${id.price}</h3>
              <div className="counter">
                <button disabled={counter === 0} onClick={handledecrement} className="minus counterbtn">-</button>
                <p>{counter}</p>
                <button  onClick={()=>setCounter(counter+1)}  className="plus counterbtn">+</button>
              </div>
              <div className='btnCardDiv'>
              <GiShoppingCart className='cardlogo' />
              <button className="addtobutton">
              Add To Card</button>
                
                </div>
           </div>
            
            
          </div>
          
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Modal
