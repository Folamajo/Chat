import React from 'react'
import { Link } from 'react-router-dom'

const SignUp:React.FC = () => {
   return (
    <div id="signup-wrapper">
      <h2>Sign Up</h2>
      <form>
         <div className= "form-group">
            <label htmlFor="firstname">First Name:</label>
            <input 
               type="text"
               id="firstname"
               required
            />
         </div>
         <div className= "form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input 
               type="text"
               id="lastname"
               required
            />
         </div>
         <div className= "form-group">
            <label htmlFor="email">Email:</label>
            <input 
               type="email"
               id="email"
               required
            />
         </div>
         <div className= "form-group">
            <label htmlFor="password">Password:</label>
            <input 
               type="password"
               id="password"
               required
            />
         </div>
         <div className= "form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input 
               type="password"
               id="confirm-password"
               required
            />
         </div>
      </form>
      <p>Already have an account? <Link to='Login'>Log in.</Link></p>
    </div>
  )
}

export default SignUp
