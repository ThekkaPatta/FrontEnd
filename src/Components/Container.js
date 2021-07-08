import { Component } from "react";
import Workpost from './Workpost'

import { Route } from 'react-router-dom';
import Login from "../Body/LoginUser";

class Container extends Component{
    render(){
        return(
            <div>
                <Route path="/workpost" component={Workpost} />
                <Route path="/login" component={Login} />
            </div>

        )
    }

}
export default Container