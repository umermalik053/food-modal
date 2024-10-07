import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Card from '../Components/cards/Card'
import './Home.css'
import { foodItems } from '../utils/Constant'
import Modal from '../Components/Modal/Modal'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [id,setId] = useState();
  const [searchInput, setSearchInput] = useState('')
  const [searchFilter, setSearchFilter] = useState(foodItems);
  const filterFood = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const searchFood = foodItems.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
    setSearchInput(searchValue);
    if (searchValue === "") {
      setSearchFilter(foodItems);
    } else {
      const filteredFood = foodItems.filter(item =>
        item.name.toLowerCase().includes(searchValue)
      );
      setSearchFilter(filteredFood)
    }
  }
  return (

    <div>
        <Navbar filterFood={filterFood}/>
        <div className="cardHome">
          {
              searchFilter.map((item, index) => (
                <Card id={id} setid={setId} Modal={showModal} setModal={setShowModal} key={index} item={item} />
              ))
          }
          {showModal && 
          <div className="ModalDiv">
             
        <Modal id={id} Modal={showModal} setModal={setShowModal}/>
          </div> }
          
        </div>
        <Footer/>
    </div>
  )
}

export default Home
