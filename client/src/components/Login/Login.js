import './Login.scss'
import React,{useState} from 'react'
import { Form, Alert, FormInput } from 'react-bootstrap';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login(){
    let navigate = useNavigate();
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState("");

    const submit=(e)=>{
        
        e.preventDefault();
        Axios({
            method: "POST",
            data: {
                username: username,
                password: password,
            },
            withCredentials: true,
            url: "http://localhost:3001/login",
            }).then((data) => {
                if(data.data=="Successfully Authenticated"){
            navigate("/home")
            console.log(data)
        }else{
            setError("Incorrect username or password");
            setTimeout(() => {
                setError("")
            }, 5000)
        }
        })
            .catch((error) => {
                setError("Incorrect username or password");
                setTimeout(() => {
                    setError("")
                }, 5000)
            });
    }

    return(
        <>
        <div className="loginpage">
        <Form onSubmit={submit}>
          <div className="title">Login</div>
          <input type="text" placeholder="Username" value={username} onChange={(event)=> setUsername(event.target.value)} className="user-input"/>
          <input type="password" placeholder="Password" value={password} onChange={(event)=> setPassword(event.target.value)} className="user-input"/>
          <button type="submit" className="submit-button">Login</button>
          <a className="pt-5 register" href="/register">New Here?Register with us!</a>
        </Form>
        </div>
        </>
    )
}
export default Login