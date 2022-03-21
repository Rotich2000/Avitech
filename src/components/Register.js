import React from 'react'
import UseForm from './UseForm'
import validate from './validateInfo'
import './Register.css'

const Register = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors} = UseForm(submitForm,validate);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
          <h1>Get started with us today</h1>
          <div className="form-inputs">
              <label htmlFor="username" className="form-label">Username: </label>
              <input type="text" id="username" name="username" 
              className="form-input" 
              value = {values.username}
              onChange={handleChange}
              placeholder="Enter your username"/>     
              {errors.username && <p>{errors.username}</p>}
          </div>

          <div className="form-inputs">
              <label htmlFor="email" className="form-label">Email: </label>
              <input type="email" id="email" name="email" 
              className="form-input"
              value = {values.email}
              onChange={handleChange}
              placeholder="Enter your email"/>
              {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="form-inputs">
              <label htmlFor="password" className="form-label">Password: </label>
              <input type="password" id="password" name="password" 
              className="form-input"
              value = {values.password}
              onChange={handleChange}
              placeholder="Enter your password"/>
              {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="form-inputs">
              <label htmlFor="password2" className="form-label">Confirm Password: </label>
              <input type="password" id="password2" 
              name="password2" className="form-input"
              value = {values.password2}
              onChange={handleChange}
              placeholder="Enter your password"/>
              {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className="form-input-btn" type="submit">Sign Up</button>

          <span className="form-input-login">
              Already have an account? Login <a href="#">Here</a>
          </span>
      </form>
    </div>
  )
}

export default Register

