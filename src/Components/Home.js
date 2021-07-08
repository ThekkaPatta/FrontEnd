// import axios from "axios";
import { Component } from "react";

class Home extends Component{

    Postwork=(e)=>{
        e.preventDefault()
        window.location.href='/workpost'

    }
    render(){
        return(
            <div>
                <input type="submit" value="Post Work" onClick={this.Postwork} />
            </div>

        )
    }

}
export default Home