  import { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <a href="/loginuser" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Login As User</a>
                <a href="/loginworker" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Login As Worker</a>


            </div>

        )
    }
}
export default Home