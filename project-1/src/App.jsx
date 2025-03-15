// Project - Image carousel 

import React from 'react'
import { useState } from 'react'

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];


function Btn(props){
  return <button className='px-4 py-2 bg-gray-500 text-2xl' onClick={props.type}>{props.type.name}</button>
}

export default function App() {
  const [current,setCurrent] = useState(0)

  const prev = () => {
    setCurrent(current === 0?images.length-1:current-1)
  }

  const next = () => {
    setCurrent(current === images.length-1?0:current+1)
  }


  return (
    <div className='text-5xl text-white font-bold bg-gray-700 flex justify-around items-center h-screen'>
      <Btn type = {prev} />
      <img src={images[current]} alt="img" className='w-1/2 h-1/2'/>
      <Btn type = {next} />
    </div>
  )
}
