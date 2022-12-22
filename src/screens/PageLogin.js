
import React, { useState, useEffect } from "react";
import {HiArrowLongRight} from 'react-icons/hi2'
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import {
      loginRequest
    } from "../store/actions";
import { connect } from "react-redux";
    

function PageLogin(props){
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")
    const responseGoogle = (response) => {
        console.log(response);
    }
    const loginCallBack = (response) => {
        setEmail("")
        setError("")
        setPassword("")
        navigate_path('/home')
    }
    const loginRequest = (e) => {
        e.preventDefault()
        console.log(email);
        if(!email || !password){
            setError("Emal And Password Is required!")
            return
        }
        props.loginRequest({email: email, password: password},loginCallBack)
    }
    useEffect(()=>{
        if(props.error)setError(props.error)
    },[props.error])
const navigate_path = useNavigate();
    return(
        <div className="h-screen relative flex items-center flex-wrap">
            <div className="h-full relative flex justify-center items-start md:items-center w-full md:basis-96 z-1">
                <img src="images/site-logo.png" className="mt-10 md:mt-0" />
                <div className="absolute top-0 left-0 w-full h-full -z-1">
                    <img src="images/login-bg.png" className="block w-full h-full object-cover" />
                </div>
            </div>
            {/* login form */}
            <div className="flex h-full justify-center items-center w-full md:w-[calc(100%-384px)] px-5 absolute top-0 md:static z-1">
                <div className="w-full max-w-3xl p-5 md:p-8 shadow-ctm_shadow rounded-20px bg-white">
                    <form>
                        {error && (
                            <p style={{"color":"red"}} >{error}</p>
                        )}
                        <div className="mb-5">
                            <label className="block text-xl mb-2 font-medium text-black/40">Email</label>
                            <input type="email" value = {email} name="email" onChange={(e) =>{setError(""); setEmail(e.target.value)} } placeholder="Enter your email" className="outline-none block w-full p-2 rounded-md border border-solid border-black/10"  required />
                        </div>
                        <div className="mb-5">
                            <label className="block text-xl mb-2 font-medium text-black/40">Password</label>
                            <input type="password" value = {password} onChange={(e) =>{setError(""); setPassword(e.target.value) }} name="password" placeholder="Enter your password" className="outline-none block w-full p-2 rounded-md border border-solid border-black/10"  required />
                            <p className="text-right"><span className="cursor-pointer inline-block mt-1 font-medium">Forgot Password ?</span></p>
                        </div>
                        <div>
                            <button 
                            onClick={(e)=>loginRequest(e)}
                            className="text-white w-full py-3 px-4 border-none bg-primary rounded-30px font-bold uppercase flex items-center justify-center gap-2"
                            >Log in <span className="inline-flex text-3xl"><HiArrowLongRight /></span></button>

                            <p className="text-xs font-medium sm:font-normal sm:text-base text-center mt-2">Don't have Account? <span className="cursor-pointer text-primary" onClick={()=>navigate_path('/signup')}>Register Now</span></p>
                            <p className="flex items-center gap-5 text-xl justify-center uppercase my-5">
                                <span className="w-1/4 h-px bg-black/20"></span>
                                <span>or</span>
                                <span className="w-1/4 h-px bg-black/20"></span>
                            </p>
                            <GoogleLogin
                                clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
                                buttonText="Sign in with google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                className="w-full text- sm:!text-xl opacity-100 !font-bold flex items-center justify-center !border-1 !border-solid !border-black/10 !rounded-30px !shadow-none"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ Home }) => ({
    login: Home.login,
    error: Home.error,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    loginRequest: (data,callback) => dispatch(loginRequest(data,callback)),
  });
  export default connect(mapStateToProps, mapDispatchToProps)((PageLogin));