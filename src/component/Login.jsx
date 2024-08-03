import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = formData

    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    setError('')
    // Proceed to the dashboard or any other action
    // For example, you can redirect the user or send data to the server
    navigate('/dashboard')
  }

  return (
    <>
      <div className='form-box'>
        <form className='form' onSubmit={handleSubmit}>
          <span className='title'>Login</span>
          <div className='form-container'>
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
          <button type='submit' className='btn'><NavLink to='/dashboard'>Login</NavLink></button>
        </form>
        <div className='form-section'>
          <p>I have already an account </p>
        </div>
      </div>
    </>
  )
}

export default Login
