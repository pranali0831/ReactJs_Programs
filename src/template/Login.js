import React, { useState } from 'react'
import '../styles.Common.css'

function Login() {
    const [credentials,setCredentials]=useState({username:'',password:''});
    function handleChange(event)
    {
        if(event.target.name==="username")
            {
                setCredentials(event.target.value)
                setCredentials(preState=>({
                    username:event.target.value,
                    password:event.target.password
                }))
            }
        if(event.target.name==="password")
            {
                setCredentials(event.target.value)
                setCredentials(preState=>({
                    username:event.target.username,
                    password:event.target.value
                }))
            }
    }
    function HandleSumbit(event)
    {
        event.preventDefault();
    }
  return (
    <div className='container login-box'>Login
    <form className='form' onSubmit={e=>HandleSumbit(e)}>
        <input type='text' name='username' className='form-field' placeholder='Enter USername'/>
        <input type='text' name='password' className='form-field' placeholder='Enter password'/>
        <button className='submit'>Login</button>
    </form>
    </div>
  )
}

export default Login