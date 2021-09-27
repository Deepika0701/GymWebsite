
import React from 'react'
=======
import React,{useState} from 'react'

import './style.css'
import { SiGooglemaps } from 'react-icons/si'
import { BiPhone } from 'react-icons/bi'
import { GiCoinsPile } from 'react-icons/gi'
import { AiOutlineMail,AiFillInstagram,AiFillFacebook,AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/ai'
import emailjs from "emailjs-com"

=======
import {Button} from '@material-ui/core'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const initialState={
    user_name:"",
    user_email:"",
    user_phone:"",
    message:""

}
const Contact = () => {

    // Send email function 
    function sendEmail(e){
        e.preventDefault();


        emailjs.sendForm('service_883g33h',
        'template_210jt9o',
        e.target,
        'user_Vi2c3oQ1nq2BAoqskMpm3').then(res=>{
            console.log(res);

        }).catch(err=>GiCoinsPile.log(err));
    }

=======
        }).catch((err)=>
        {
            
            GiCoinsPile.log(err)
        });
        toast.success("Form Submitted Succesfully",{
            position:'top-center'
        })
        
        setcontactData({
            user_name:"",
            user_email:"",
            user_phone:"",
            message:""
        })
         
    }

    const [contactData, setcontactData] = useState(initialState)
    const change=(e)=>{
        setcontactData({...contactData,[e.target.name]:e.target.value})
    }

   

    return (
        <section className="contact">
            <div className="content">

                {/* Gym contact details */}

                <h2>Contact Us</h2>
               <div className="socialTab">
                   <a href="" className="socialColor"><AiFillInstagram/></a>
                   <a href="" className="socialColor"><AiFillFacebook/></a>
                   <a href="" className="socialColor"><AiFillLinkedin/></a>
                   <a href="" className="socialColor"><AiFillTwitterCircle/></a>
                   </div>

            </div>

            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><SiGooglemaps /></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>402 kali pahadi</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><BiPhone /></div>
                        <div className="text"> 
                            <h3>Phone</h3>
                            <p>+11 00444 5555</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">< AiOutlineMail /></div>
                        <div className="text">
                               <h3>Email</h3>
                            <p>lorem123@mail.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}

                <div className="contactForm">
                <h2>Send Message</h2>
                <form onSubmit={sendEmail}>
                    <div className="inputBox">

                        <input type="text" name="user_name" required="required" placeholder="Name"  />
                    </div>

                    <div className="inputBox">
                        <input type="text" name="user_email" required="required" placeholder="Email" />
                    </div>

                    <div className="inputBox">
                        <input type="text" name="user_phone" required="required" placeholder="Phone" />
                    </div>
                    <div className="inputBox">
                        <label for="programs"><b>Please select which program interest you:</b></label><br />
=======
                        <input type="text" name="user_name" required={true} placeholder="Name" value={contactData.user_name}  onChange={change} />
                    </div>

                    <div className="inputBox">
                        <input type="email" name="user_email" required={true} placeholder="Email" value={contactData.user_email}  onChange={change}/>
                    </div>

                    <div className="inputBox">
                        <input type="text" name="user_phone" required={true} placeholder="Phone" value={contactData.user_phone}  onChange={change}/>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="programs"><b>Please select which program interest you:</b></label><br />

                        <select name="programs" id="programs">
                            <option value="program1">program1</option>
                            <option value="program2">program2</option>
                            <option value="program3">program3</option>
                            <option value="program4">program4</option>
                            <option value="program5">program5</option>
                        </select>
                    </div>
                    <div className="inputBox">

                        <textarea name="message"  placeholder="Type your message..."></textarea>
                    </div>
=======
                        <textarea name="message"  placeholder="Type your message..." value={contactData.message} onChange={change}></textarea>
                    </div>


                    <div className="inputBox">
                        <input type="submit"  value="SUBMIT" />
                    </div>
                </form>



                    <ToastContainer/>

            </div>
            </div>



        </section>

    )
}


export default Contact;

