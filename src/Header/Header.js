import { Component } from "react";
import '../assets/css/Header.css'

class Header extends Component {
    render() {
        return (
                <header>
                    <div class="container">
                        <div class="logo-box">
                            <a href="/">
                                <img class="logo" height="50px"/>
                            </a>
                        </div>
                            <nav>
                                <ul>
                                    <li><a href="">home</a></li>
                                    <li><a href="">work</a></li>
                                    <li><a href="">product</a></li>
                                    <li><a href="">about</a></li>
                                    <li><a href="">contact</a></li>
                                </ul>
                            </nav>
                        </div>
</header>
                )
    }
}
export default Header
