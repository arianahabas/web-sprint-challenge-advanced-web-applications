import React, { useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth'
import { useHistory } from 'react-router-dom'



const initialValues = {
  username: 'Lambda School',
  password: 'i<3Lambd4'
}

const Login = () => {
  // make a post request to retrieve a token from the api ✅
  // when you have handled the token, navigate to the BubblePage route ✅
  const [values, setValues]  = useState(initialValues)
  const history = useHistory()

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('/login', values) //the (route, the data you want to send in)
    .then((res) => {
      // console.log(res)
       localStorage.setItem('token', res.data.payload) 
       history.push('./colors')
    })
    .catch((err) => console.log(err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={handleSubmit}>                 
        <label className='label'>Username</label>
        <div>
            <input
            type='username'
            placeholder='e.g. bobMarley'
            class='input'
            onChange={handleChange}
            name='username'
            value={values.username}
            required
            />
        </div>
  
        <label for='' className='label'>Password</label>
            <input 
            type='password'
            placeholder='********'
            class='input'
            onChange={handleChange}
            name='password'
            value={values.password}
            required
            />  
        <button type='submit' className='button is-success'>Login</button>
    </form>
    </>
  );
};

export default Login;
