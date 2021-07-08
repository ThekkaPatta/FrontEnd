import { Component } from "react";
// import '../CSS/style.css';
import '../assets/css/workpost.css'

class Head extends Component {
  logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location.href = '/'
  }
  render() {
    if (localStorage.getItem('token') && localStorage.getItem('userType') === 'admin') {
      var menu =
        <>
          <div class="main_nav_container ml-auto col d-flex flex-row">
            <ul>
              <li><a href="/home" class="active">Home</a></li>

              <li><a href="/about"><span>About</span> </a>

              </li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/notice">Notice</a></li>
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/results">Results</a></li>
              <li><a href="/adminnotice">Notices</a></li>
              <li><a href="/studentregister">Student Register</a></li>
              <li><a href="/teacherregister">Teacher Register</a></li>
              <li class="main_nav_item"><a href="/" onClick={this.logout}>Log Out</a></li>

            </ul>
          </div>
        </>
    }
    else if (localStorage.getItem('token') && localStorage.getItem('userType') === 'student') {
      var menu =
        <>
          <div class="main_nav_container ml-auto col d-flex flex-row">
            <ul>
              <li><a href="/notice" class="active">Notice</a></li>

              <li><a href="/blog">Blogs</a></li>
              <li><a href="/result">My Results</a></li>
              <li><a href="/studentprofile">My Profile</a></li>

              <li class="main_nav_item"><a href="/" onClick={this.logout}>Log Out</a></li>
            </ul>
          </div>
        </>
    }
    else if (localStorage.getItem('token') && localStorage.getItem('userType') === 'teacher') {
      var menu =
        <>
          <div class="main_nav_container ml-auto col d-flex flex-row">
            <ul>

              <li><a href="/notice" class="active">Notice</a></li>
              <li><a href="/adminblogs" class="active">My Blogs</a></li>

              <li><a href="/addblog">Add Blogs</a></li>
              <li><a href="/teacherprofile">My Profile</a></li>
              <li class="main_nav_item"><a href="/" onClick={this.logout}>Log Out</a></li>

            </ul>
          </div>


        </>
    }
    else {
      var menu =
        <>
          <div class="main_nav_container ml-auto col d-flex flex-row">
            <ul>
              <li><a href="/workpost" class="active">Home</a></li>

              <li><a href="/about"><span>About</span> </a>

              </li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/login">Login</a></li>

            </ul>
          </div>

        </>
    }
    return (
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">


          <h1 href="/home" class="logo me-auto">
            <img  className="logomain img-fluid rounded-circle hoverable"
              style={{ height: "50px", width: "50px", objectFit: "cover" }}
              alt=""
            />

            ThekkaPatta</h1>


          <nav id="navbar" class="navbar">
            {menu}



            <i class="bi bi-list mobile-nav-toggle"></i>

          </nav>

        </div>
      </header>

    )
  }
}
export default Head


