import React from 'react';
import { Link } from 'react-router-dom';
import NavbarBlack from '../NavbarB/NavbarBlack';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';



const Login = () => {
  firebase.initializeApp(firebaseConfig);
const handelGoogleSignIn =() => {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    const {displayName, email} = result.user;
    const signedInUser = {name : displayName, email}
    console.log(signedInUser)
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}
    return (
        <div>
          
          <NavbarBlack/>

            <form>
  <div class="row">
  <div class="col-sm-5">
   
      <div class="card-body" id='cardBody'>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" require/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
    <p class="forget yellowText">forget password</p>
  </div>
  <input type="submit" class="btn btn-lg btn-warning"/>
  <div>
    <p className="createANew">Don't have an account? <span className="yellowText"><Link className="yellowText" to="/create-new">Create a new account</Link></span></p>
  </div>
</form>
<div>
  
  <span class="border-bottom border-warning" id="dag"><p id="or"><legend>Or</legend></p></span>
  
  
</div>
      </div>
    </div>
  </div>

</form>
     <div className="frameIcon" >
       <img className='image2' src="/src/images/Icon/fb.png" alt=""/><p className='iconText'>Continue With Facebook</p>
       </div>
       <div className="frameIcon2" onClick={handelGoogleSignIn}>
      <img className='image' src="/src/images/Icon/google.png" alt=""/> <p className='iconText2'>Continue With Google</p>
       </div>
       
     
        </div>
    );
};

export default Login;