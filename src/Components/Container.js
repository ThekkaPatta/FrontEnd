import { Component } from "react";
import Workpost from './Workpost'

import { Route } from 'react-router-dom';

class Container extends Component{
    render(){
        return(
            <div>
                <Route path="" component={Workpost} />
            </div>

        )
    }

}
export default Container