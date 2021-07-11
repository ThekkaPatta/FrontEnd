import { Component } from "react";
import axios from 'axios';
import '../assets/css/Login.css';

class Loginuser extends Component {
    state = {
        Username: "",
        Password: ""

    }
    sendUserData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:500/user/login", this.state)
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('_id', response.data._id)
                localStorage.setItem('userType', 'user')
                window.location.href = "/workpost";
                this.setState({
                    loginChk: true
                })
                alert("You Are Logged In !!")

            })
            .catch((err) => {
                console.log(err.response)
                alert("Invalid Credential")
            })
    }

    render() {
        return ( <div class="lw">
        <div class="wrapper">
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
            <div class="form">
                <h1>Login as User</h1>
                <form>
                   <h2> <input type="text" placeholder="xyz@mail.com" alue={this.state.UUsername} placeholder="Username"
                        onChange={(event) => { this.setState({ UUsername: event.target.value }) }} /></h2>
                   <h2> <input type="password" placeholder="password" value={this.state.UPassword} placeholder="Password"
                        onChange={(event) => { this.setState({ UPassword: event.target.value }) }} /></h2>
                    <h2><button type="submit" id="login" onClick={this.sendUserData}>Login</button></h2>
                    <div class="forgot-signup">
                       <h3> <a class="btn btn-danger" href="#">Forgot password?</a></h3>
                      <h3>  <a class="btn btn-info" href="/registeruser">Sign Up</a></h3>

                    </div>
                </form>
            </div>
        </div>

        <div class="background"></div>
    </div>





            // <div class="container login-container">
            //     <div class="row">
            //         <div class="col-md-6 login-form-1">
            //             <h1>!!! Login As User !!!</h1>
            //             <form>
            //                 <div class="form-group">
            //                     <h2><input type="text" value={this.state.UUsername} placeholder="Username"
            //                         onChange={(event) => { this.setState({ UUsername: event.target.value }) }} /></h2>
            //                 </div>
            //                 <div class="form-group">
            //                     <h2><input type="password" value={this.state.UPassword} placeholder="Password"
            //                         onChange={(event) => { this.setState({ UPassword: event.target.value }) }} /></h2>
            //                 </div>
            //                 <div class="form-group">
            //                     <h3><button onClick={this.sendUserData} href="/notice">
            //                         Login</button>
            //                     </h3>
            //                 </div>
            //                 <div class="form-group">
            //                     <p>Do not have  an account? <a href="/registeruser"> SignUp </a></p>
            //                     <a href="#" class="ForgetPwd">Forget Password?</a>
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </div>



        )
    }
}
export default Loginuser