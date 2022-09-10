import axios from 'axios'
import React , {useEffect} from 'react'
import { useSelector } from 'react-redux'




import Datainput from './store/inputStore'

function DataCard() {

const inputData = useSelector(state => state.inputData)
let recievedData = '';


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
          recievedData = response.data;
          console.log(recievedData);
     
        }).catch(function (error) {
        console.error(error);
        });
    })

    return (
      <>
      </>
      )



}

export default DataCard