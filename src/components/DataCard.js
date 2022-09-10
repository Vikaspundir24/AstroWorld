import axios from 'axios'
import React , {useEffect , useState} from 'react'
import { useSelector } from 'react-redux'
import './DataCard.css'




import Datainput from './store/inputStore'

function DataCard() {

const inputData = useSelector(state => state.inputData)
const [data ,  setData] = useState({})



useEffect(() => {
       const axios = require("axios");

       const options = {
                           method: 'POST',
                           url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
                           params: {sign: inputData.Sign , day: inputData.Day},
                           headers: {
                                      'X-RapidAPI-Key': '00b9e8b4e8msha01832e151a40fbp19aeddjsn714563214832',
                                      'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
                                    }
                        };

        axios.request(options).then(function (response) {
          setData(response.data);
        
         
     
        }).catch(function (error) {
        console.error(error);
        });
    },[])

    return (
      <>
      <div className="container wrapper">
        <h1>{data.current_date}</h1>
        <div className="sides">
        <div className="left-side">
          <h2>Color : <span>{data.color}</span></h2>
          <h2>Compatibilty : <span>{data.compatibility}</span></h2>
          <h2>Lucky Number : <span>{data.lucky_number}</span></h2>
          <h2>lucky Time : <span>{data.lucky_time}</span> </h2>
          <h2>Mood : <span>{data.mood}</span></h2>
        </div>
        <div className="right-side">
          <h2 className='desc'>Description : <span>{data.description}</span>
          </h2>
       
        </div>
        </div>
     
     
      </div>
      </>
      )



}

export default DataCard