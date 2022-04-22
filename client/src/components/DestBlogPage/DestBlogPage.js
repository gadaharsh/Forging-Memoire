import './DestBlogPage.scss'
import React,{useState} from 'react'
import { Form, Alert, FormInput } from 'react-bootstrap';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


function DestBlogPage(){
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
          <Navbar />
        <div className="destpage">
        <div className="flex-container">
                <div id="blog-image">

                </div>
        </div>
        <div className="container info-div">
        {/* <div class="pageOverview_bg-block__i2CPt lg:-mt-28"></div> */}
        <nav class="pt-5 mt-2 w-full pr-11 lg:pr-0" aria-label="Breadcrumbs"><ol className="p-1" itemscope="" itemtype="http://schema.org/BreadcrumbList"><li class="font-semibold d-inline" data-testid="breadcrumb" itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a href="/north-america" class="link-underline transition-colors ease-out cursor-pointer text-black hover:text-blue" itemprop="item" id="north-america" aria-hidden="true"><span itemprop="name">North America</span></a><meta itemprop="position" content="1"/><span class="px-2" aria-hidden="true">/</span></li><li class="font-semibold d-inline" data-testid="breadcrumb" itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a href="/usa" class="link-underline transition-colors ease-out cursor-pointer text-black hover:text-blue" itemprop="item" id="usa" aria-hidden="true"><span itemprop="name">USA</span></a><meta itemprop="position" content="2"/><span class="px-2" aria-hidden="true">/</span></li><li class="font-semibold d-inline" data-testid="breadcrumb" itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a href="/usa/new-york-state" class="link-underline transition-colors ease-out cursor-pointer text-black hover:text-blue" itemprop="item" id="usa/new-york-state" aria-hidden="true"><span itemprop="name">New York</span></a><meta itemprop="position" content="3"/></li></ol></nav>
            <h1 className="py-1 info-title text-3xl font-display md:text-6xl leading-tighter font-semibold font-bold text-blue mb-6 lg:mb-8" >City Name</h1>
            <p className="py-2 info-intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2 className='info-subheading'>Subheading</h2>
            <p className='mt-3 info-para'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
        </div>
        {/* <script>
            document.getElementById('the_body').style.backgroundImage = "something.gif"
        </script> */}
        </>
    )
}
export default DestBlogPage