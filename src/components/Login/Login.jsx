import React, { useEffect, useState } from 'react'
import './login.css'
import { emailSignUphandle, googleSignInHandle, signInWithPasswordAndEmail } from './loginManager'
import Googlelogo from '../../images/google.png'
import {useForm} from "react-hook-form";
import Navigationbar from '../Home/Navbar/Navigationbar';
import { CartState } from '../../Context/Context';
import { useLocation,useNavigate } from 'react-router-dom';


const Login = () => {
    const history = useNavigate()
    const location = useLocation()
    let {from} = location.state || {
        from: {
            pathname: "/dashboard/appointsments"
        }
    };
     
    const {loggedInUser,setLoggedInUser}=CartState()
    const [newUser,setNewUser]=useState(false)
    const [user,setUser]=useState({
        isLoggedIn:false,
        name:'',
        email:'',
        password:'',
        photo:''

    })
    const googleSignin=()=>{
        googleSignInHandle()
        .then(res=>{
            setLoggedInUser(res)
            setUser(res)
            history(from)
            
        }).catch(err=>console.log(err))
    }
    console.log("from context",loggedInUser)
    const onSubmit=(e)=>{
        
        if(!newUser && user.email && user.password){
            signInWithPasswordAndEmail(user.email,user.password)
            .then(res=>{
                setLoggedInUser(res)
                setUser(res)
               history(from)
            })
            .catch(err=>{
                console.log(err)
            })
        }

        if(newUser && user.name  && user.email && user.password){
            emailSignUphandle(user.name,user.email,user.password)
            .then(res=>{
                setLoggedInUser(res)
                setUser(res)
                history(from)
            })
            .catch(err=>{console.log(err)})
        }
        

    }
    const handleChange=(e)=>{
       let isFromValidate=true
       if(e.target.name==="email"){
        isFromValidate=/\S+@\S+\.\S+/.test(e.target.value)
       }
       if(e.target.name==="password"){
         const  isPasswordValidate=e.target.value.length>6
         const passwordNumber=/\d{1}/.test(e.target.value)
         isFromValidate=isPasswordValidate && passwordNumber
       }

       if(isFromValidate){
           const NewUserInfo={
                 ...user
           }
           NewUserInfo[e.target.name]=e.target.value
           setUser(NewUserInfo)
       }
    }

    const {register, handleSubmit, formState: {
        errors
    }} = useForm();
// const onSubmit = data => {
    
//     console.log(data)
//    closeModal()
// };
  
    return (
        <section className='loginsection container h-100'>
            <Navigationbar />
             
            <div className="row mt-5 pt-5">
                <div className="col-md-6">
                    <div style={{height:"600px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}} className="loginwraper">
                   
                 
                    <form className='w-50 mt-5' onSubmit={handleSubmit(onSubmit)}>
                        { 
                           newUser && <>
                            <div className="form-group mb-5">
                            
                            <input
                            required
                            style={{
                                height: "55px",
                                boxShadow: "none",
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid #8B8B8B",
                                borderRadius: "0px"
                            }}
                            onBlur={handleChange}
                            type="text" className="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Name..." />
                           
                        </div>
                           
                           </>

                        }
                        <div className="form-group mb-5">
                            
                            <input
                            {...register("email", { required: true })}
                           
                            style={{
                                height: "55px",
                                boxShadow: "none",
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid #8B8B8B",
                                borderRadius: "0px"
                            }}
                            onBlur={handleChange}
                            type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email..." />
                            {errors.email && <span className='text-danger'>Email is required</span>}
                           
                        </div>
                        <div className="form-group  mb-5">
                            
                            <input
                            {...register("password", { required: true })}
                           
                            style={{
                                height: "55px",
                                boxShadow: "none",
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid #8B8B8B",
                                borderRadius: "0px"
                            }}

                            onBlur={handleChange}
                            name="password"
                            type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password"/>
                            {errors.password && <span className='text-danger'>Password is required</span>}


                            
                        </div>
                        
                        <button style={{background:"#18D3B2",border:"none",borderRadius:"0px",fotnWeight:"bold"}} type="submit" className="btn btn-primary w-100 mb-3">{newUser?"Sign Up":"Sign In"}</button>
                     <hr />
                     <p className='text-center'><small className='text-secondary'>{newUser? "Have an account? ":"Don't have an account?"}<span onClick={()=>setNewUser(!newUser)} style={{color:"#18E3B2",fontWeight:"bolder",cursor:"pointer",marginLeft:"5px"}}>{newUser?"Sign In":"Create One"}</span></small></p>
                      <p onClick={googleSignin} style={{cursor:"pointer",lineHeight:"40px",border:"1px solid #18D3B2",borderRadius:"50px",fontWeight:"1000"}}  className='text-center'><img style={{height:"20px",marginRight:"10px"}} className='img-fluid' src={Googlelogo} alt="" /> Google Sign In</p>
                     
                   </form>

                    </div>
                </div>
            </div>
            
            
        </section>
    )
}

export default Login
