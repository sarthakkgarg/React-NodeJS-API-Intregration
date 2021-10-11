import React from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom';


export default function Home() {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column",height:"100vh", backgroundImage: "linear-gradient(#bdc3c7, #2c3e50)"}}>
        <NavLink exact to ="/Login"> <button style={{ cursor:"pointer",width: "200px",height: "25px",    border: "none",    borderRadius: "6px",    }}> Login </button></NavLink>
        <NavLink exact to ="/Register"> <button style={{ cursor:"pointer",marginTop:"10px",width: "200px",height: "25px",    border: "none",    borderRadius: "6px",    }}>New User ? Register </button></NavLink>
          </div>
    )
}
