import { Component } from "react";
import Workpost from './Workpost';
import Register from './Register';

import { Route } from 'react-router-dom';

class Container extends Component{
    render(){
        return(
            <div>
                <Route path="/workpost" component={Workpost} />
                <Route path="/register" component={Register} />
            </div>

        )
    }

}
export default Container