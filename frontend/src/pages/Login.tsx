import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login:React.FC = () => {
   const[email, setEmail] = useState<string>('')
   const[password, setPassword] = useState<string>('')

   return (
         <div id ="login-wrapper">
            <h2>Login</h2>
            <form>
               <div>
                  <label htmlFor="email">
                     Email:
                  </label>
                  <input 
                     type="email"
                     id="email"
                     value={email}
                     onChange={(event)=> setEmail(event.target.value)} 
                  />
               </div>
               <div>
                  <label htmlFor="password">
                     Password:
                  </label>
                  <input 
                     type="password"
                     id="password"
                     value={password}
                     onChange={(event) => setPassword(event.target.value)}
                  />
               </div>
               <button type="submit">Login</button>
            </form>
            <p>Do not have an account? <Link to='Signup'>Create one now.</Link> </p>
         </div>
   )
}

export default Login
