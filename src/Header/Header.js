import { Component } from "react";
import '../assets/css/Header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <div class="container">
                    <div class="logo-box">
                        <a href="/">
                            <img src="https://html5book.ru/wp-content/uploads/2015/01/logo-header.png" />
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/loginuser">Login as User</a></li>
                            <li><a href="/loginworker">Login as worker</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header
