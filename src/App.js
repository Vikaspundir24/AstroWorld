import React from "react";
import {useSelector} from 'react-redux'


import Header from "./components/Header";
import './App.css'
import Body from "./components/Body";
import Modal from "./components/Modal";
import ModalTwo from "./components/ModalTwo";
import DataCard from "./components/DataCard";


function App() {

  const modalShown =  useSelector(state => state.modal.ismodalShown)
  const modaltwoShown =  useSelector(state => state.modalTwo.ismodalTwoShown)
  return (
    <div className="contents">
    <Header/>
    <Body/>
    {modalShown && <Modal/>}  
    {modaltwoShown && <ModalTwo/>}   
    <DataCard/>
    </div>
  );
}

export default App;
