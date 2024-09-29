import React, { useState } from "react";
import { foodItems } from "../../utils/Constant";
import './Card.css'


const Card = ({item,setModal,setid}) => {
 
  return (
    <div>
      <div className="CardParent">
        <div className="section1">
          <div className="bariImg">
            <img width={250} height={200} src={item.images[0]} alt="" />
          </div>
          
          
        </div>
        <div className="section2">
            <h2>{item.name}</h2>
            <h2> <span>Price:</span> ${item.price}</h2>
            <button onClick={()=>{
              setid(item);
              setModal(true)}}>View Detail</button>
          </div>
      </div>
    </div>
  );
};

export default Card;
