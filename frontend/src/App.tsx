import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import signUp from "./pages/signUp";


const App:React.FC = () => {

   return (
      <Router>
         <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/home' element={<HomePage />} />
            <Route path='/signup' element={<SignUp />} />
         </Routes>
      </Router>
  )
}

export default App
