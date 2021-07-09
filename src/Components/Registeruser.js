import { Component } from "react";
import '../assets/css/register.css';
import axios from 'axios';

class Registeruser extends Component{
    state ={
        Uimage: "",
        UFullName : "",
        UAddress : "",
        UPhoneNo : "",
        UUsername : "",
        UPassword : ""
    }
    sendUserData=()=>{
        const data= new FormData() 

        data.append ('Uimage', this.state.Uimage)
        data.append ('UFullName', this.state.UFullName)
        data.append ('UAddress', this.state.UAddress)
        data.append ('UPhoneNo', this.state.UPhoneNo)
        data.append ('UUsername', this.state.UUsername)
        data.append ('UPassword', this.state.UPassword)
        
        axios.post("http://localhost:500/register/insert", data)
        .then()
        .catch(err=>{
            console.log(err)
        })
    }
    imageHandler=(e)=>{
        this.setState({
            Uimage:e.target.files[0]
        })
    };
    render(){
        return(
            <section id="contact">
            <div class="main-w3layouts wrapper">
            <h1> Sign Up</h1>
            <div class="main-agileinfo">
                <div class="agileits-top">
                    <form>
                    <p>Full Name:<input type="text" value={this.state.UFullName} 
    onChange={(event)=>{this.setState({fname:event.target.value})}}/></p>
                    <p>Address:<input type="text" value={this.state.UAddress} 
    onChange={(event)=>{this.setState({country:event.target.value})}}/></p>
                    <p> Phone Number:<input type="text" value={this.state.UPhoneNo} 
    onChange={(event)=>{this.setState({passnumber:event.target.value})}}/></p>
                    <p>Username:<input type="text" value={this.state.username} 
    onChange={(event)=>{this.setState({username:event.target.value})}}/></p>
                    <p>Password:<input type="Password" value={this.state.password} 
    onChange={(event)=>{this.setState({password:event.target.value})}}/></p>
    <p>Upload Photo:<input type="file" placeholder="Upload photo" name="photo" 
     onChange={this.imageHandler}/></p>
                        <p><input type="submit" onClick={this.sendUserData}/>  </p>

                    </form>
                    <p>Already have an account? <a href="/login"> Login </a></p>
                </div>
            </div>
        </div> 
        </section>
        )
    }
}
export default Registeruser