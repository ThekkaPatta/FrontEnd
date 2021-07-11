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
            <h1> Register as User</h1>
            <div class="main-agileinfo">
                <div class="agileits-top">
                    <form>
                    <h2>Full Name:<input type="text" value={this.state.UFullName} 
    onChange={(event)=>{this.setState({UFullName:event.target.value})}}/></h2>
                    <h2>Address:<input type="text" value={this.state.UAddress} 
    onChange={(event)=>{this.setState({UAddress:event.target.value})}}/></h2>
                    <h2> Phone Number:<input type="text" value={this.state.UPhoneNo} 
    onChange={(event)=>{this.setState({UPhoneNo:event.target.value})}}/></h2>
                    <h2>Username:<input type="text" value={this.state.UUsername} 
    onChange={(event)=>{this.setState({UUsername:event.target.value})}}/></h2>
                    <h2>Password:<input type="Password" value={this.state.UPassword} 
   onChange={(event)=>{this.setState({UPassword:event.target.value})}}/></h2>
   <h2>Upload Photo:<input type="file" placeholder="Upload photo" name="Uimage" 
    onChange={this.imageHandler}/></h2>
                       <h2><input type="submit" onClick={this.sendUserData}/>  </h2>

                   </form>
                   <h2>Already have an account? <a href="/loginuser"> Login </a></h2>
               </div>
           </div>
       </div> 
       </section >
       )
    }
}
export default Registeruser