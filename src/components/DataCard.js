import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./DataCard.css";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function DataCard() {
  const Sign = useSelector((state) => state.inputData.Sign);
  const Day = useSelector((state) => state.inputData.Day);
  const [data, setData] = useState("");

  useEffect(() => {
    const axios = require("axios");
<<<<<<< HEAD

    const options = {
      method: "POST",
      url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
      params: { sign: Sign, day: Day },
      headers: {
        "X-RapidAPI-Key": "9429ff74ebmsh08296bc91ea008ep1aa301jsn08981431fc71",
        "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
      },
    };
  
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        console.error(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [Sign, Day]);

  return (
    <>
      {!data ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div className="container wrapper">
          <h1>{data.current_date}</h1>
          <h1>{Sign}</h1>
          <div className="sides">
            <div className="left-side">
              <h2>
                Color : <span>{data.color}</span>
              </h2>
              <h2>
                Compatibilty : <span>{data.compatibility}</span>
              </h2>
              <h2>
                Lucky Number : <span>{data.lucky_number}</span>
              </h2>
              <h2>
                lucky Time : <span>{data.lucky_time}</span>{" "}
              </h2>
              <h2>
                Mood : <span>{data.mood}</span>
              </h2>
            </div>
            <div className="right-side">
              <h2 className="desc">
                Description : <span>{data.description}</span>
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DataCard;
