import React, { useState } from 'react'
import './Modal.css'
import { GiShoppingCart } from "react-icons/gi";

const Modal = ({Modal ,setModal,id}) => {
  
  const [counter,setCounter] = useState(0)
  
  const handledecrement = () => {
    if(counter > 0 )
    setCounter(counter - 1)
  }
  
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
                <img  className='bari' src={id.images[0]} alt="" />
              </div>
              <div className="chotiImg">
                <img className='choti'  src={id.images[1]} alt="" />
                <img className='choti'  src={id.images[2]} alt="" />
                <img className='choti'  src={id.images[3]} alt="" />
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
