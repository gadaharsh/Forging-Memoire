import './Register.scss'
import React,{useState} from 'react'
import { Form, Alert, FormInput } from 'react-bootstrap';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

function Register(){
    let navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')
    const [error, setError] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        console.log({ email, password ,username})
        Axios({
            method: "POST",
            data: {
                email: email,
                password: password,
                username:username,
            },
            withCredentials: true,
            url: "http://localhost:3001/register",
        }).then((data) => {
            navigate('/home');
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
        <div className="registerpage">
        <Form onSubmit={submit}>
          <div class="title">Register</div>
          <input type="email" placeholder="Email" value={email} onChange={event=> setEmail(event.target.value)} className="user-input"/>
          <input type="text" placeholder="Username" value={username} onChange={event=> setUsername(event.target.value)} className="user-input"/>
          <input type="password" placeholder="Password" value={password} onChange={event=> setPassword(event.target.value)} className="user-input"/>
          <button type="submit" className="submit-button">Register</button>
          <a className="pt-5 login m-0" href="/login">Already have an account?Login Here!</a>
        </Form>
        </div>
        </>
    )
}
export default Register