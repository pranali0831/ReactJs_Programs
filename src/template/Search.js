import React from 'react'
import '../styles/Common.css'
import { useState } from 'react'

function Search() {
    const [productName,setProductName]=useState('');
    function handleChange(event)
    {
       setProductName(event.target.value)
    }
    function handlesubmit(event)
    {
        event.preventDefault();
        alert("form submitted")
    }
  return (
    <div className='container'>
    <form  onSubmit={e=>handlesubmit(e)}>
           <input  className='form-field' type='text' placeholder='Search here.......!' name='productName'
           onChange={(event=>handleChange(event))}/>
           <button className='submit' type='submit'>Search</button>
    </form>
    
    </div>
  )
}

export default Search