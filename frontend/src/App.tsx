import React, { useEffect, useRef, useState } from "react"

function App() {

   const [openMenu, setOpenMenu] = useState<boolean>(false)
   const innerRightPannelRef = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
      if(innerRightPannelRef.current && openMenu){
        
         console.log("hi")
         if(openMenu){
            console.log("hi")
            innerRightPannelRef.current.classList.add('showMenu')
         }
         else {
            innerRightPannelRef.current.classList.remove('showMenu')
         } 
      }  
 
   }, [openMenu])

   const toggleMenu = () => {
      setOpenMenu(prev => !prev)
   
      // const innerRightPannel = document.getElementById('inner_left_pannel') as HTMLElement | null

      // if(innerRightPannel && openMenu){
      //    console.log("hi")
      //    innerRightPannel.classList.add('showMenu')
      // }
   }


   //When we click the buttons it has to open up //
   // document.addEventListener('DOMContentLoaded', ()=>{
   //    const radioChat = document.getElementById('radio_chat') as HTMLInputElement | null
   //    const innerRightPannel = document.getElementById('inner_right_pannel') as HTMLElement | null;

   //    if(radioChat && innerRightPannel){ //Checks if both elements are present in the DOM before adding the event listener
   //       radioChat.addEventListener('change', () =>{
   //          if(radioChat.checked){
   //             innerRightPannel.classList.add('showMenu')

   //          }else{
   //             innerRightPannel.classList.remove('showMenu')
   //          }
   //       })
   //    }
   // })

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
                     <li onClick={toggleMenu}><img src ="src/assets/icons/chat.png"/></li>
                     <li><img src ="src/assets/icons/contacts.png" alt="Contacts"/></li>
                     <li><img src ="src/assets/icons/settings.png" alt="Settings"/></li>

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
                  <div> 
                     <input  type="radio" id="radio_chat" name="select"></input>
                     <input  type="radio" id="radio_contacts" name="select"></input>
                     <input  type="radio" id="radio_settings" name="select"></input>
                  </div>
                 
                  <div id="inner_right_pannel" ref={innerRightPannelRef}>
                     
                  </div>
                  
               </div>
            </div>  


         </div> 
      {/* Hello, World! */}
      </>
  )
}

export default App
