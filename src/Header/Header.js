// import { Component } from "react";
// import '../assets/css/header.scss';

// class Head extends Component {
//   logout = () => {
//     localStorage.removeItem('token')
//     localStorage.removeItem('id')
//     window.location.href = '/'
//   }
//   render() {
//     if (localStorage.getItem('token') && localStorage.getItem('userType') === 'User') {
//       var menu =
//         <>
//           <div class="container-fluid">
//             <nav class="navbar navbar-inverse">
//               <div class="container-fluid">
//                 <ul class="nav navbar-nav">
//                   <li><a id="len1" class="hoverable" href="#">Home</a></li>
//                   <li><a id="len2" class="hoverable" href="#">About</a></li>
//                   <li><a id="len3" class="hoverable" href="#">Portfolio</a></li>
//                   <li><a id="len4" class="hoverable" href="#">Contact</a></li>
//                 </ul>
//               </div>
//             </nav>
//             <div id="what-the-hell-is-this">
//               <div class="page-title">
//                 <h2>Simple Navigation</h2>
//                 <p class="lead">
//                   Based on Hover.css, the goal of this pen
//                   is to create a simple navigation bar <br />
//                   that can be easily reused in both mobile and native displays. Mouse over the nav text for animation!
//                 </p>
//               </div>
//             </div>
//           </div>

//           Resources
//         </>
//     }
//     else if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Worker') {
//       menu =
//         <>
//           <div class="main_nav_container ml-auto col d-flex flex-row">
//             <ul>
//               <li><a href="/notice" class="active">Notice</a></li>

//               {/* <li><a href="/blog">Blogs</a></li>
//               <li><a href="/result">My Results</a></li>
//               <li><a href="/studentprofile">My Profile</a></li> */}

//               <li class="main_nav_item"><a href="/" onClick={this.logout}>Log Out</a></li>
//             </ul>
//           </div>
//         </>
//     }
//     else if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin') {
//       menu =
//         <>
//           <div class="main_nav_container ml-auto col d-flex flex-row">
//             <ul>

//               <li><a href="/notice" class="active">Notice</a></li>
//               <li><a href="/adminblogs" class="active">My Blogs</a></li>
//               <li><a href="/addblog">Add Blogs</a></li>
//               <li><a href="/teacherprofile">My Profile</a></li>
//               <li class="main_nav_item"><a href="/" onClick={this.logout}>Log Out</a></li>

//             </ul>
//           </div>


//         </>
//     }
//     else {
//       menu =
//         <>
//           <header class="site-header">
//             <div class="wrapper site-header__wrapper">
//               <a href="#" class="brand">Brand</a>
//               <nav class="nav">
//                 <button class="nav__toggle" aria-expanded="false" type="button">
//                   menu
//                 </button>
//                 <ul class="nav__wrapper">
//                   <li class="nav__item"><a href="#">Home</a></li>
//                   <li class="nav__item"><a href="#">About</a></li>
//                   <li class="nav__item"><a href="#">Services</a></li>
//                   <li class="nav__item"><a href="#">Hire us</a></li>
//                   <li class="nav__item"><a href="#">Contact</a></li>
//                 </ul>
//               </nav>
//             </div>
//           </header>

//         </>
//     }
//     return (
//       <header id="header" class="fixed-top d-flex align-items-center">
//         <div class="container d-flex align-items-center">


//           <h1 href="/home" class="logo me-auto">
//             <img className="logomain img-fluid rounded-circle hoverable"
//               style={{ height: "50px", width: "50px", objectFit: "cover" }}
//               alt=""
//             />

//             ThekkaPatta</h1>


//           <nav id="navbar" class="navbar">
//             {menu}



//             <i class="bi bi-list mobile-nav-toggle"></i>

//           </nav>

//         </div>
//       </header>

//     )
//   }
// }
// export default Head


