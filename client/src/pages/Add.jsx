
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Add = () => {
  const [book, setbook] = useState({
    name:"",
    title:"",
    des:""
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    setbook(prev => ({...prev, [e.target.name]: e.target.value}))
  };

  const handleClick =async(e) => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8801/books",book)
      navigate("/")
    }catch(err){
      console.log(err);
      
    }
  }

  console.log(book);

  return (
    <div className="form">
      <h1>Add Product</h1>
      <input type="title" placeholder='title' onChange={handleChange} name='title'/>
      <input type="desc" placeholder='desc' onChange={handleChange} name='desc'/>
      <input type="cover" placeholder='cover' onChange={handleChange} name='cover'/>
      <button onClick={handleClick}>Home</button>
    
    </div>
    
  )
};


export default Add; 