import React from 'react'
import './Login.css'

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn  = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const loginLink = document.querySelector("form .login-link a");

loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});

signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});

signupLink.onclick = (()=>{
  signupBtn.click(true);
  return false;
});

loginLink.onclick = (()=>{
  loginBtn.click(true);
  return false;
});
    
    

function Login() {
  
  


  return (

    

    <div className="body">
    <div class="wrapper">
    <div class="title-text">
       <div class="title login">
          Login with your Existing Account
       </div>
       <div class="title signup">
            Welcome to the Pharmacy Management System
       </div>
    </div>
    <div class="form-container">
       <div class="slide-controls">
          <input type="radio" name="slide" id="login" checked />
          <input type="radio" name="slide" id="signup" />
          <label for="login" class="slide login">Login</label>
          <label for="signup" class="slide signup">Signup</label>
          <div class="slider-tab"></div>
       </div>
       <div class="form-inner">
          <form action="#" class="login">
             <div class="field">
                <input type="text" placeholder="Email Address" required />
             </div>
             <div class="field">
                <input type="password" placeholder="Password" required />
             </div>
             <div class="pass-link">
                <a href="#">Forgot password?</a>
             </div>
             <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Login" />
             </div>
             <div class="signup-link">
                Not a member? <a href="">Signup now</a>
             </div>
          </form>
          <form action="#" class="signup">
             
             <div class="field">
                <input type="text" placeholder="First Name" required />
             </div>
             <div class="field">
                <input type="text" placeholder="Last Name" required />
             </div>
             <div class="field">
                <input type="text" placeholder="Email Address" required />
             </div>
             <div class="field">
                <input type="password" placeholder="Password" required />
             </div>
             <div class="field">
                <input type="password" placeholder="Confirm password" required />
             </div>
             <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Signup" />
             </div>
             <div class="login-link">
                Already have an Account <a href="">Login here</a>
             </div>
          </form>
       </div>
    </div>
 </div>
 </div>    

 )
    


}




   

/* function active(){
    if(input.type === "password"){
    input.type = "text";
    show.style.color = "#1DA1F2";
    show.textContent = "HIDE";
  }else{
    input.type = "password";
    show.textContent = "SHOW";
    show.style.color = "#111";
  }
}*/



export default Login
