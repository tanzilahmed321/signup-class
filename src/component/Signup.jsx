import React, { useState } from 'react'
import '../component/SignupLogin.css'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { fullName, email, password } = formData

    if (!fullName || !email || !password) {
      setError('Please fill in all fields.')
      return
    }

    setError('')

    // Save form data to local storage
    localStorage.setItem('user', JSON.stringify(formData))

    // Proceed to the dashboard or any other action
    // For example, you can redirect the user or send data to the server
  }

  return (
    <>
      <div className='form-box'>
        <form className='form' onSubmit={handleSubmit}>
          <span className='title'>Sign up</span>
          <span className='subtitle'>Create a free account with your email.</span>
          <div className='form-container'>
            <input
              type='text'
              name='fullName'
              className='input'
              placeholder='Full Name'
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type='password'
              name='password'
              className='input'
              placeholder='Password'
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {error && <p className='error'>{error}</p>}
          <button type='submit'><NavLink to='/login'>Signup</NavLink></button>
        </form>
        <div className='form-section'>
        
        </div>
      </div>
    </>
  )
}

export default Signup
