import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Card from '../Components/cards/Card'
import './Home.css'
import { foodItems } from '../utils/Constant'
import Modal from '../Components/Modal/Modal'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [id,setId] = useState();
  return (
    <div>
        <Navbar/>
        <div className="cardHome">
          {
              foodItems.map((item, index) => (
                <Card id={id} setid={setId} Modal={showModal} setModal={setShowModal} key={index} item={item} />
              ))
          }
          {showModal && 
          <div className="ModalDiv">
             
        <Modal id={id} Modal={showModal} setModal={setShowModal}/>
          </div> }
        </div>
        
    </div>
  )
}

export default Home
