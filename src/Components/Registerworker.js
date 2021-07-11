import { Component } from "react";
import '../assets/css/register.css';
import axios from 'axios';

class Registerworker extends Component{
    state ={
        Wimage: "",
        WFullName : "",
        WAddress : "",
        WPhoneNo : "",
        WSkills : "",
        WUsername : "",
        WPassword : ""
    }
    sendUserData=(e)=>{
        e.preventDefault();
        const data= new FormData() 

        data.append ('Wimage', this.state.Wimage)
        data.append ('WFullName', this.state.WFullName)
        data.append ('WAddress', this.state.WAddress)
        data.append ('WPhoneNo', this.state.WSkills)
        data.append ('WSkills', this.state.WSkills)
        data.append ('WUsername', this.state.WUsername)
        data.append ('WPassword', this.state.WPassword)
        
        axios.post("http://localhost:500/worker/insert", data)
        .then(
            alert('posted')
        )
        .catch(err=>{
            console.log(err)
        })
    }
    imageHandler=(e)=>{
        this.setState({
            Wimage:e.target.files[0]
        })
    };
    render(){
        return(
            <section id="contact">
            <div class="main-w3layouts wrapper">
            <h1> Register As A Worker</h1>
            <div class="main-agileinfo">
                <div class="agileits-top">
                    <form>
                    <h2>Full Name:<input type="text" value={this.state.WFullName} 
    onChange={(event)=>{this.setState({WFullName:event.target.value})}}/></h2>
                    <h2>Address:<input type="text" value={this.state.WAddress} 
    onChange={(event)=>{this.setState({WAddress:event.target.value})}}/></h2>
                    <h2> Phone Number:<input type="text" value={this.state.WPhoneNo} 
    onChange={(event)=>{this.setState({WPhoneNo:event.target.value})}}/></h2>
                    <h2> Skills:<input type="text" value={this.state.WSkills} 
    onChange={(event)=>{this.setState({WSkills:event.target.value})}}/></h2>
                    <h2>Username:<input type="text" value={this.state.WUsername} 
    onChange={(event)=>{this.setState({WUsername:event.target.value})}}/></h2>
                    <h2>Password:<input type="Password" value={this.state.WPassword} 
    onChange={(event)=>{this.setState({WPassword:event.target.value})}}/></h2>
    <h2>Upload Photo:<input type="file" placeholder="Upload photo" name="Wimage" 
     onChange={this.imageHandler}/></h2>
                        <h2><input type="submit" onClick={this.sendUserData}/>  </h2>

                    </form>
                    <h2>Already have an account? <a href="/loginworker"> Login </a></h2>
                </div>
            </div>
        </div> 
        </section>
        )
    }
}
export default Registerworker