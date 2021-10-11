import React from 'react'
import {NavLink} from 'react-router-dom';


export default function RegisterUser() {

    const [data, setData] = React.useState({
        Username: "",
        Email: "",
        Phone: "",
        Password: "",
        ConfirmPassword: "",
    })
    console.log(data)

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setData({ ...data, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { Username,
            Email,
            Phone,
            Password,
            ConfirmPassword } = data;
        console.log(Username, Email, Phone, Password, ConfirmPassword)

        if (Username === '' || Email === '' || Phone === '' || Password === '' || ConfirmPassword === '') {
            window.alert("Please fill all fields.")
            return

        }

        const res = await fetch("http://localhost:5000/Register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Username,
                Email,
                Phone,
                Password,
                ConfirmPassword
            }),
        }).then((res) => {
            res.json();
            window.alert("Successfully Saved ")
        });
    };

 
    



    return (
        <>
            <div style={{ width: "100%", height: "100vh", backgroundImage: "linear-gradient(#bdc3c7, #2c3e50)" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", height:"100vh" }}>
                    <input style={{ cursor:"pointer", width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}}  name="Username" type="text" placeholder="Username" onChange={handleInputs} />
                    <input  style={{ cursor:"pointer", marginTop:"10px",width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}}  name="Email" type="email" placeholder="Email" onChange={handleInputs} />
                    <input  style={{ cursor:"pointer", marginTop:"10px",width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}} name="Phone" type="number" placeholder="Phone" onChange={handleInputs} />
                    <input  style={{ cursor:"pointer", marginTop:"10px",width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}} name="Password" type="password" placeholder="Password" onChange={handleInputs} />
                    <input  style={{ cursor:"pointer", marginTop:"10px",width: "250px",height: "25px",    border: "none",    borderRadius: "6px",    padding: "5px 0px 5px 20px"}} name="ConfirmPassword" type="password" placeholder="Confirm Password" onChange={handleInputs} />
                    <button style={{ cursor:"pointer", marginTop:"10px",width: "150px",height: "25px",    border: "none",    borderRadius: "6px"}} onClick={PostData}>Submit</button>
                <NavLink exact to ='./'> <button style={{ cursor:"pointer", marginTop:"10px",width: "150px",height: "25px",    border: "none",    borderRadius: "6px"}}>Back to Home</button></NavLink>
                </div>
            </div>

        </>
    )
}
