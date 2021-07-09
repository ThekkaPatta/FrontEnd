import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
// import '../CSS/style.css';
// import '../CSS/login.css';
import '../assets/css/workpost.css'

class Login extends Component {
    state = {
        Username: "",
        Password: "",
        Username2:"",
        Password2:""

    }
    sendUserData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:500/user/login", this.state)
            .then((response) => {
                console.log(response);
                localStorage.setItem('utoken', response.data.token)
                localStorage.setItem('u_id', response.data._id)
                localStorage.setItem('userType','User')
                window.location.href = "/home";
                
            })
            .catch((err) => {
                console.log(err.response)
                alert("Invalid Credential")
            })
    }
    sendUserData2 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:350/teacher/login", this.state)
            .then((response) => {
                console.log(response);
                localStorage.setItem('wtoken', response.data.token)
                localStorage.setItem('w_id', response.data._id)
                window.location.href = "/notice";
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
        return (
            <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h1>!!! Login As User !!!</h1>
                    <form>
                        <div class="form-group">
                        <h2><input type="text" value={this.state.UUsername} placeholder="Username"
                            onChange={(event) => { this.setState({ UUsername: event.target.value }) }} /></h2>
                        </div>
                        <div class="form-group">
                      <h2><input type="password" value={this.state.UPassword} placeholder="Password"
                            onChange={(event) => { this.setState({ UPassword: event.target.value }) }} /></h2>
                        </div>
                        <div class="form-group">
                        <h3><button onClick={this.sendUserData} href="/notice">
                        Login</button>
                     </h3>
                        </div>
                        <div class="form-group">
                            <a href="#" class="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>
                <div class="col-md-6 login-form-2">
                    <h1>!!! Login As Teacher !!!</h1>
                    <form>
                        <div class="form-group">
                        <h2><input type="text" value={this.state.Username2} placeholder="Username "
                            onChange={(event) => { this.setState({ Username2: event.target.value }) }} /></h2>
                        </div>
                        <div class="form-group">
                        <h2><input type="password" value={this.state.Password2} placeholder="Passwword "
                            onChange={(event) => { this.setState({ Password2: event.target.value }) }} /></h2> 
                        </div>
                        <div class="form-group">
                        <h3><button onClick={this.sendUserData2} href="/notice">
                         Login</button>
                     </h3>
                        </div>
                        <div class="form-group">

                            <a href="#" class="ForgetPwd" value="Login">Forget Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>



        )
    }
}
export default Login