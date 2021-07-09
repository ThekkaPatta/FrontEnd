import { Component } from "react";
import Workpost from '../Components/Workpost'
import { Route } from 'react-router-dom';
import Loginuser from "../Components/Loginuser";
import Loginworker from "../Components/Loginworker";
import Home from "../Components/Home";

class Container extends Component{
    render(){
        return(
            <div>
                <Route path="/workpost" component={Workpost} />
                <Route path="/loginuser" component={Loginuser} />
                <Route path="/loginworker" component={Loginworker} />
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
            </div>

        )
    }

}
export default Container