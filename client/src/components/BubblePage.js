import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../axiosWithAuth'
import {fetchApi} from './fetchApi'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { AddColorForm } from "./addColor";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts ✅ 
  // set that data to the colorList state property ✅

  useEffect(() => {
    // axiosWithAuth()
    // .get('/colors')
    fetchApi()
    .then((res)=> {
      setColorList(res.data)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <AddColorForm/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
