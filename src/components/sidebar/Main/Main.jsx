import React from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/context'

const Main = () => {
    const { onsent,recentPrompt,showResult,loading,resultData,setInput,input} =useContext(Context)
    
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}alt=""/>

        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello,Dev</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="card">
                <div className="card">
                    <p>suggest beautiful place to see on an upcoming road trips</p>
                    <img src={assets.compass_icon}alt=""/>

                </div>
                <div className="card">
                    <p>suggest summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon}alt=""/>
                </div>
                <div className="card">

                    <p>brainstrom team bonding activities for our work retreat</p>
                    <img src={assets.message_icon}alt=""/>
       
                </div>
                <div className="card">

                    <p>improve the readability of the following code</p>
                    <img src={assets.code_icon} alt=""/>
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)}value={input} type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt=""/>
                        <img src={assets.mic_icon} alt=""/>
                        <img on onClick={()=>onSent} src={assets.send_icon} alt=""/>
                    </div>
                </div>
                <p className="bottom-info">
                    gemini may display inaccurate info, including about people,so double_check its response, your privacy and Gemini App
                </p>


            </div>
        </div>
        
    </div>
  )
}

export default Main
