import axios from "axios";
import { Component } from "react";
import '../assets/css/workpost.css'

class Workpost extends Component {
    state={
        Username:"",
        PhoneNo:"",
        // Tags:"",
        Workdescription:"",
    }

    componentDidMount(){
        var u_id = localStorage.getItem('u_id');
        alert(u_id)
        axios.get("http://localhost:500/user/single/" +u_id)
            .then((response)=>{
                console.log(response)
                this.setState({
                    Username : response.data.UUsername,
                    PhoneNo : response.data.UPhoneNo,
                })
            })
            .catch((err)=>{
                console.log(err.response)
        })
    }

    Workpost=(e)=>{
        e.preventDefault();

    //     const data ={
    //         Username:this.state.Username,
    //         phoneNo:this.state.PhoneNo,
    //         Tags:this.state.Tags,
    //         Workdescription:this.state.Workdescription
    // }
    axios.post("http://localhost:500/work/post",this.state)
    .then((response)=>{
        console.log(response)
        alert("Posted work")
        window.location.href='#';
    })

    }
    render() {
        return (
            <div>
                <section id="contact">
                    <div class="section-content">
                        <h1 class="section-header"><span class="content-header wow fadeIn " data-wow-delay="0.2s"
                            data-wow-duration="2s">POST the WORK that needs to be done</span></h1>
                    </div>
                    <div class="contact-section">
                        <div class="container">
                            <form>
                                <div class="col-md-6 form-line">
                                    <div class="form-group">
                                        <label for="exampleInputUsername">Your name</label>
                                        <input type="text" class="form-control" id="" placeholder=" Enter Name" value={this.state.Username}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail">Email Address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail"
                                            placeholder=" Enter Email id" value={this.state.PhoneNo}/>
                                    </div>
                                    {/* <div class="form-group">
                                        <label for="picture">Picture</label>
                                        <input type="file" class="form-control" id="picture"
                                            placeholder=" Upload the picture" />
                                    </div> */}
                                    {/* <div class="form-group">
                                        <label for="exampleInputtext">Tags</label>
                                        <select name="tags" id="tags" value={this.state.Tags} 
                                        onChange={(event) => { this.setState({ Tags: event.target.value }) }}>
                                            <option value="plumber">Plumber</option>
                                            <option value="mechanic">Mechanic</option>
                                            <option value="Construction">Construction</option>
                                        </select>
                                    </div> */}
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="description"> Work Description</label>
                                        <textarea class="form-control" id="description" placeholder="Enter Your Message" 
                                        value={this.state.Workdescription} onChange={(event) => { this.setState({ Workdescription: event.target.value }) }}></textarea>
                                    </div>
                                    <div>

                                    <input type="submit" value="Update" onClick={this.Workpost} />
                                    </div>

                                </div>
                            </form>
                        </div>
                        </div>
	            </section>
            </div>
        )
    }
}
export default Workpost
