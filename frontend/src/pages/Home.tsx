import React, { useEffect, useRef, useState } from "react"
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import signUp from "./pages/signUp";

const Home:React.FC = () => {
   
   const[selectedMenu, setSelectedMenu] = useState<string | null>(null);
   const innerRightPannelRef = useRef<HTMLDivElement | null>(null)
   
   const handleMenu = (menu: string) => {
      setSelectedMenu(menu)
      console.log(`you selected ${menu}`)
   }
  

   useEffect(() => {
      if(innerRightPannelRef.current){
         if(selectedMenu === 'contacts'){
            innerRightPannelRef.current.classList.add('active')
             console.log("hi")
         }
         else if(selectedMenu === 'settings'){
            innerRightPannelRef.current.classList.add('active')
         }
         else {
            innerRightPannelRef.current.classList.remove('active')
         }
      }
   }, [selectedMenu])

   return (
      <>
        <div id= "wrapper"> 
            <div id="left_pannel">
               <img src="src/assets/images/blank_dp.jpg" id="profile-img" alt= "Profile image"/>
               <p>Kelly Hartman
                  <br />
                  kellyhartman@gmail.com
               </p>
               <nav id="labels">
                  <ul>
                     <li 
                       
                        onClick={()=> handleMenu('chat')}
                     >
                        <img src ="src/assets/icons/chat.png"/>
                     </li>
                     <li 
                      
                        onClick={()=> handleMenu('contacts')}
                     >
                        <img src ="src/assets/icons/contacts.png" alt="Contacts"/>
                     </li>
                     <li 
                        
                        onClick={()=> handleMenu('settings')}
                     >
                        <img src ="src/assets/icons/settings.png" alt="Settings"/>  
                     </li>
                  </ul>
                  {/* <label id = "label_chat" htmlFor="radio_chat"><img src ="src/assets/icons/chat.png"/></label>
                  <label id = "label_contacts" htmlFor="radio_contacts"><img src ="src/assets/icons/contacts.png" alt="Contacts"/></label>
                  <label id = "label_settings" htmlFor="radio_settings"><img src ="src/assets/icons/settings.png" alt="Settings"/></label> */}
               </nav>
            </div>

            <div id="right_pannel">
               <div id="header">
                  <h2>Chat App</h2>

               </div>
               
               <div id="container"> 
                  <div id="inner_left_pannel">
                  </div>
                  {/* <div> 
                     <input  type="radio" id="radio_chat" name="select"></input>
                     <input  type="radio" id="radio_contacts" name="select"></input>
                     <input  type="radio" id="radio_settings" name="select"></input>
                  </div> */}
                 
                  <div id="inner_right_pannel" ref={innerRightPannelRef}></div>
                  
               </div>
            </div>  
         </div> 
         
      </>
  )
}

export default Home
