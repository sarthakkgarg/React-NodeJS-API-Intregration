import React from 'react';
import { useState } from "react";
import {NavLink} from 'react-router-dom';


function Login() {
    const [user, setUser] = useState({
        Username: "",
        Password: "",
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        console.log(e.target.value);
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const GetData = async (e) => {
        e.preventDefault();
        const { Username, Password } = user;
        console.log(Username, Password)

        if (Username === '' || Password === ''){
            window.alert("Please fill all fields.")
        }


        const res = await fetch("http://localhost:5000/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                Username,
                Password,
            }),

        }).then((res) => res.json());
        console.log("Data Sent")
        console.log(res)
        if(res.Message === "Success"){
            window.alert ("Success")
        }
        else {
            window.alert ("Invalid Data, Try Again")
        }

    };
    
    return (
        <>
            <div style={{ width: "100%", height: "100vh", backgroundImage: "linear-gradient(#bdc3c7, #2c3e50)" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <input style={{ cursor:"pointer", width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}}name="Username" type="Name" onChange={handleInputs} placeholder="Username" />
                    <input style={{ cursor:"pointer", marginTop:"10px",width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}}name="Password" type="Password" onChange={handleInputs} placeholder="Password" />
                    <button style={{ cursor:"pointer", marginTop:"10px",width:"150px" ,height: "25px",    border: "none",    borderRadius: "6px",}} type="Submit" onClick={GetData} >Login</button>
                    <NavLink exact to ='./'> <button style={{ cursor:"pointer", marginTop:"10px",width: "150px",height: "25px",    border: "none",    borderRadius: "6px"}}>Back to Home</button></NavLink>
                </div>
            </div>


        </>
    )
}

export default Login