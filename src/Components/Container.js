import { Component } from "react";
import { Route } from 'react-router-dom';


import Workpost from './Workpost'
import Login from "../Body/Login";
import Home from './Home'

class Container extends Component{
    render(){
        return(
            <div>
                <Route path="/workpost" component={Workpost} />
                <Route path="/login" component={Login} />
                <Route path="/home"  component={Home}/>
            </div>

        )
    }

}
export default Container