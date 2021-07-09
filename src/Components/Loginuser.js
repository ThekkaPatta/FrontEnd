import { Component } from "react";
import axios from 'axios';
import '../assets/css/workpost.css'

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
                console.log(response)
                localStorage.setItem('userType', 'user')
                window.location.href = "/workpost";
                this.setState({
                    loginChk: true
                })
                
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
            </div>
        </div>



        )
    }
}
export default Loginuser