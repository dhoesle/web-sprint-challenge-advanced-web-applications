import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // const { location } = useHistory();

  // fetch your colors data from the server when the component mounts
  const getColors = () => {
    axiosWithAuth()
      .get('/api/colors')
      .then(res => setColorList(res.data))
      .catch(err => console.log(err.response))
  }
  
  // set that data to the colorList state property
  useEffect(() => {
    getColors();
  }, [])
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
