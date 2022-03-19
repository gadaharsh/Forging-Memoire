import './Login.scss'
import React,{useState} from 'react'
import { Form, Alert, FormInput } from 'react-bootstrap';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login(){
    let navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState("");

    const submit=(e)=>{
        // fetch('http://localhost:3001/login', {
        //     method: "POST",
        //     headers: {
        //       'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(email,password)
        //   })
        //   .then((response) => response.json())
        //   .then((result) => {
        //     console.log(result)
        //   })
        e.preventDefault();
        // Axios.post("http://localhost:3001/login",{email,password}).then(user=>{
        //     console.log(user)
        // }).catch(error=>{
        //     console.log(error)
        // })
        Axios({
            method: "POST",
            data: {
                email: email,
                password: password,
            },
            withCredentials: true,
            url: "http://localhost:3001/login",
            }).then((data) => {
            navigate("/")
            console.log(data)
        })
            .catch((error) => {
                setError("Incorrect emailId or password");
                setTimeout(() => {
                    setError("")
                }, 5000)
            });
    }

    return(
        <>
        <div className="loginpage">
        <Form onSubmit={submit}>
          <div class="title">Login</div>
          <input type="email" placeholder="Email" value={email} onChange={(event)=> setEmail(event.target.value)} className="user-input"/>
          <input type="password" placeholder="Password" value={password} onChange={(event)=> setPassword(event.target.value)} className="user-input"/>
          <button type="submit" className="submit-button">Login</button>
          <a className="pt-5 register" href="/register">New Here?Register with us!</a>
        </Form>
        </div>
        </>
    )
}
export default Login