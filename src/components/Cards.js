import React from 'react'
import {useState} from 'react'
import Card from './Card'


function Cards() {

    const [items, setItems] = useState([
        {id: 1, img: '/img/adana.jpg', stat: ""},
        {id: 1, img: '/img/adana.jpg', stat: ""},
        {id: 2, img: '/img/balcan.jpg', stat: ""},
        {id: 2, img: '/img/balcan.jpg', stat: ""},
        {id: 3, img: '/img/beyti.jpg', stat: ""},
        {id: 3, img: '/img/beyti.jpg', stat: ""},
        {id: 4, img: '/img/cızbız.jpg', stat: ""},
        {id: 4, img: '/img/cızbız.jpg', stat: ""},
        {id: 5, img: '/img/inegöl.jpg', stat: ""},
        {id: 5, img: '/img/inegöl.jpg', stat: ""},
        {id: 6, img: '/img/iskender.jpg', stat: ""},
        {id: 6, img: '/img/iskender.jpg', stat: ""},
        {id: 7, img: '/img/tavuk.jpg', stat: ""},
        {id: 7, img: '/img/tavuk.jpg', stat: ""},
        {id: 8, img: '/img/tavukdöner.jpg', stat: ""},
        {id: 8, img: '/img/tavukdöner.jpg', stat: ""}
    ].sort(() => Math.random() - 0.5))

  return (
    <div className='container'>
        {items.map((item, index) => (
           <Card key={index} item={item} /> 
        ))}
    </div>
  )
}

export default Cards