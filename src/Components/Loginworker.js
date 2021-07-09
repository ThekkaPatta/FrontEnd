import { Component } from "react";
import axios from 'axios';
class Loginworker extends Component {
    state = {
        Username: "",
        Password: ""
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
            <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h1>!!! Login As Worker !!!</h1>
                    <form>
                        <div class="form-group">
                        <h2><input type="text" value={this.state.WUsername} placeholder="Username"
                            onChange={(event) => { this.setState({ WUsername: event.target.value }) }} /></h2>
                        </div>
                        <div class="form-group">
                      <h2><input type="password" value={this.state.WPassword} placeholder="Password"
                            onChange={(event) => { this.setState({ WPassword: event.target.value }) }} /></h2>
                        </div>
                        <div class="form-group">
                        <h3><button onClick={this.sendUserData2} href="#">
                        Login</button>
                     </h3>
                        </div>
                        <div class="form-group">
                        <p>Do not have  an account? <a href="/registerworker"> SignUp </a></p>
                        </div>
                    </form>
            
                </div>
            </div>
        </div>



        )
    }
}
export default Loginworker