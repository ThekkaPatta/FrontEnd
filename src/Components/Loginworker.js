import { Component } from "react";
import axios from 'axios';
import '../assets/css/Login.css'

class Loginworker extends Component {
    state = {
        Username: "",
        Password: "",
    }
    sendUserData2 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:500/worker/login", this.state)
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('_id', response.data._id)
                console.log(response)
                localStorage.setItem('userType', 'worker')
                window.location.href = "#";
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
            <div class="lw">
                <div class="wrapper">
                    <div class="circle circle1"></div>
                    <div class="circle circle2"></div>
                    <div class="form">
                        <h1>Login As A Worker</h1>
                        <form>
                           <h2> <input type="text" placeholder="xyz@mail.com" alue={this.state.WUsername} placeholder="Username"
                                onChange={(event) => { this.setState({ WUsername: event.target.value }) }} /></h2>
                           <h2> <input type="password" placeholder="password" value={this.state.WPassword} placeholder="Password"
                                onChange={(event) => { this.setState({ WPassword: event.target.value }) }} /></h2>
                           <h2> <button type="submit" id="login" onClick={this.sendUserData2}>Login</button></h2>
                            <div class="forgot-signup">
                            <h3> <a class="btn btn-danger" href="#">Forgot password?</a></h3>
                      <h3>  <a class="btn btn-info" href="/registerworker">Sign Up</a></h3>

                            </div>
                        </form>
                    </div>
                </div>

                <div class="background"></div>
            </div>



        )
    }
}
export default Loginworker