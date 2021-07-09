import { Button } from "bootstrap";
import { Component } from "react";
import '../assets/css/workpost.css'

class Home extends Component {
    render() {
        return (
            <div>
                <section id="contact">
                    <div class="section-content">
                        <h1 class="section-header"><span class="content-header wow fadeIn " data-wow-delay="0.2s"
                            data-wow-duration="2s">Lets Begin With Login</span></h1>
                    </div>
                    <div class="contact-section">
                        <div class="container">
                            <form>
                                <Button href="/login">Login As User</Button>
                                <Button href="/login">Login As Worker</Button>
                            </form>
                        </div>
                        </div>
	            </section>
            </div>
        )
    }
}
export default Home

