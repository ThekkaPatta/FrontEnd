import { Component } from "react";
import '../assets/css/register.css';
import axios from 'axios';

class Registeruser extends Component {
    state = {
        Uimage: "",
        UFullName: "",
        UAddress: "",
        UPhoneNo: "",
        UUsername: "",
        UPassword: ""
    }
    sendUserData = (e) => {
        e.preventDefault();
        const data = new FormData()

        data.append('Uimage', this.state.Uimage)
        data.append('UFullName', this.state.UFullName)
        data.append('UAddress', this.state.UAddress)
        data.append('UPhoneNo', this.state.UPhoneNo)
        data.append('UUsername', this.state.UUsername)
        data.append('UPassword', this.state.UPassword)

        axios.post("http://localhost:500/user/insert", data)
            .then(
                alert('posted')
            )
            .catch(err => {
                console.log(err)
            })
    }
    imageHandler = (e) => {
        this.setState({
            Uimage: e.target.files[0]
        })
    };

    render() {
        return (
            <section id="contact">
            <div class="main-w3layouts wrapper">
            <h1> Sign Up</h1>
            <div class="main-agileinfo">
                <div class="agileits-top">
                    <form>
                    <p>Full Name:<input type="text" value={this.state.UFullName} 
    onChange={(event)=>{this.setState({UFullName:event.target.value})}}/></p>
                    <p>Address:<input type="text" value={this.state.UAddress} 
    onChange={(event)=>{this.setState({UAddress:event.target.value})}}/></p>
                    <p> Phone Number:<input type="text" value={this.state.UPhoneNo} 
    onChange={(event)=>{this.setState({UPhoneNo:event.target.value})}}/></p>
                    <p>Username:<input type="text" value={this.state.UUsername} 
    onChange={(event)=>{this.setState({UUsername:event.target.value})}}/></p>
                    <p>Password:<input type="Password" value={this.state.UPassword} 
   onChange={(event)=>{this.setState({UPassword:event.target.value})}}/></p>
   <p>Upload Photo:<input type="file" placeholder="Upload photo" name="Uimage" 
    onChange={this.imageHandler}/></p>
                       <p><input type="submit" onClick={this.sendUserData}/>  </p>

                   </form>
                   <p>Already have an account? <a href="/login"> Login </a></p>
               </div>
           </div>
       </div> 
       </section >
       )
    }
}
export default Registeruser