import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Login.css'

const Login = () => {
    return (
        <div>
          
          <NavBar/>

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
  </div>
  <input type="submit" class="btn btn-lg btn-warning"/>
</form>
      </div>
    </div>
  </div>

</form>
        </div>
    );
};

export default Login;