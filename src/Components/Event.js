import React from 'react'

function Event() {
  return <>
  	{/* <body class="default-header-p">




		

<div id="thetop" class="thetop"></div>
<div class='backtotop'>
    <a href="#thetop" class='scroll'>
        <i class="fas fa-angle-double-up"></i>
    </a>
</div>



<div id="preloader"></div>





<header id="header-section" class="header-section default-header-section auto-hide-header clearfix">


    <div class="header-top">
        <div class="container">
            <div class="row">

            
                <div class="col-lg-6">
                    <div class="basic-contact">
                        <ul>
                            <li>
                                <a href="#!">
                                    <i class="fas fa-envelope"></i>
                                    info@harmoni.com
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i class="fas fa-phone"></i>
                                    100-2222-9999
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
    
                <div class="col-lg-6">
                    <div class="register-login-group">
                        <ul>
                            <li>
                                <a href="#register-modal" class="register-modal-btn">
                                    <i class="fas fa-user"></i>
                                    Register
                                </a>
                                <div id="register-modal" class="reglog-modal-wrapper register-modal mfp-hide clearfix" style={{"background-image": "url('assets/images/login-modal-bg.jpg')"}}>
                                    <div class="overlay-black clearfix">

                                        <div class="leftside-content">
                                            <div class="site-logo-wrapper mb-80">
                                                <a href="#!" class="logo">
                                                    <img src="assets/images/2.site-logo.png" alt="logo_not_found"/>
                                                </a>
                                            </div>
                                            <div class="register-login-link mb-80">
                                                <ul>
                                                    <li><a href="#!">Login</a></li>
                                                    <li class="active"><a href="#!">Register</a></li>
                                                </ul>
                                            </div>
                                            <div class="copyright-text">
                                                <p class="m-0">©2018 <a href="#!" class="yellow-color">Harmoni.com</a> all right reserved, made with <i class="fas fa-heart"></i> by jThemes Studio </p>
                                            </div>
                                        </div>
                      
                                        <div class="rightside-content text-center">

                                            <div class="mb-30">
                                                <h2 class="form-title title-large white-color">Account <strong>Register</strong></h2>
                                                <span class="form-subtitle white-color">Have an account? <strong>LOGIN NOW</strong></span>
                                            </div>

                                            <div class="login-form text-center mb-50">
                                                <form action="#!">
                                                    <div class="form-item">
                                                        <input type="email" placeholder="User Name"/>
                                                    </div>
                                                    <div class="form-item">
                                                        <input type="password" placeholder="Password"/>
                                                    </div>
                                                    <div class="form-item">
                                                        <input type="email" placeholder="Repeat Password"/>
                                                    </div>
                                                    <div class="form-item">
                                                        <input type="password" placeholder="Email Address"/>
                                                    </div>
                                                    <div class="human-verification text-left">
                                                        <input type="checkbox" id="imnotarobot"/>
                                                        <label for="imnotarobot">I'm not a robot</label>
                                                        <span class="verification-image">
                                                            <img src="assets/images/iamnotrobot.png" alt="Image_not_found"/>
                                                        </span>
                                                    </div>
                                                    <button type="submit" class="login-btn">login now</button>
                                                </form>
                                            </div>

                                            <div class="bottom-text white-color">
                                                <p class="m-0">
                                                    * Denotes mandatory field.
                                                </p>
                                                <p class="m-0">** At least one telephone number is required.</p>
                                            </div>

                                        </div>
                               

                                        <a class="popup-modal-dismiss" href="#!">
                                            <i class="fas fa-times"></i>
                                        </a>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#login-modal" class="login-modal-btn">
                                    <i class="fas fa-lock"></i>
                                    Login
                                </a>
                                <div id="login-modal" class="reglog-modal-wrapper mfp-hide clearfix" style={{"background-image": "url(assets/images/login-modal-bg.jpg)"}}>
                                    <div class="overlay-black clearfix">

                                    
                                        <div class="leftside-content">
                                            <div class="site-logo-wrapper mb-80">
                                                <a href="#!" class="logo">
                                                    <img src="assets/images/2.site-logo.png" alt="logo_not_found"/>
                                                </a>
                                            </div>
                                            <div class="register-login-link mb-80">
                                                <ul>
                                                    <li class="active"><a href="#!">Login</a></li>
                                                    <li><a href="#!">Register</a></li>
                                                </ul>
                                            </div>
                                            <div class="copyright-text">
                                                <p class="m-0">©2018 <a href="#!" class="yellow-color">Harmoni.com</a> all right reserved, made with <i class="fas fa-heart"></i> by jThemes Studio </p>
                                            </div>
                                        </div>
                                     
                                        <div class="rightside-content text-center">

                                            <div class="mb-30">
                                                <h2 class="form-title title-large white-color">Account <strong>Login</strong></h2>
                                                <span class="form-subtitle white-color">Login to our website, or <strong>REGISTER</strong></span>
                                            </div>

                                            <div class="fb-login-btn mb-30">
                                                <a href="#!">
                                                    <span class="icon">
                                                        <i class="fab fa-facebook-f"></i>
                                                    </span>
                                                    login with facebook
                                                </a>
                                            </div>

                                            <div class="or-text mb-30">
                                                <span>or sign in</span>
                                            </div>

                                            <div class="login-form text-center mb-50">
                                                <form action="#!">
                                                    <div class="form-item">
                                                        <input type="email" placeholder="example@gmail.com"/>
                                                    </div>
                                                    <div class="form-item">
                                                        <input type="password" placeholder="Password"/>
                                                    </div>
                                                    <button type="submit" class="login-btn">login now</button>
                                                </form>
                                            </div>

                                            <div class="bottom-text white-color">
                                                <p class="m-0">
                                                    * Denotes mandatory field.
                                                </p>
                                                <p class="m-0">** At least one telephone number is required.</p>
                                            </div>

                                        </div>
                                
                                        <a class="popup-modal-dismiss" href="#!">
                                            <i class="fas fa-times"></i>
                                        </a>

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  
    <div class="header-bottom">
        <div class="container">
            <div class="row">

       
                <div class="col-lg-3">
                    <div class="site-logo-wrapper">
                        <a href="index-1.html" class="logo">
                            <img src="assets/images/0.site-logo.png" alt="logo_not_found"/>
                        </a>
                    </div>
                </div>
              
                <div class="col-lg-9">
                    <div class="mainmenu-wrapper">
                        <div class="row">

                      
                            <div class="col-lg-10">
                                <div class="menu-item-list ul-li clearfix">
                                    <ul>
                                        <li class="menu-item-has-children">
                                            <a href="#!">home</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item-has-children">
                                                    <a href='index-1.html'>home v.1</a>
                                                    <ul class="sub-menu">
                                                        <li>
                                                            <a href='#'>example v.1.1</a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>example v.1.2</a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>example v.1.3</a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>example v.1.4</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href='index-2.html'>home v.2</a>
                                                    <ul class="sub-menu">
                                                        <li>
                                                            <a href='#'>example v.2.1</a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>example v.2.2</a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>example v.2.3</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href='index-3.html'>home v.3</a>
                                                    <ul class="sub-menu">
                                                        <li>
                                                            <a href='#'>example v.3.1</a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>example v.3.2</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href='index-4.html'>home v.4</a>
                                                    <ul class="sub-menu">
                                                        <li>
                                                            <a href='#'>example v.4.1</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children active">
                                            <a href="#!">about</a>
                                            <ul class="sub-menu">
                                                <li><a href="about.html">about us</a></li>
                                                <li><a href='service.html' class="active">service</a></li>
                                                <li><a href='faq.html'>FAQ</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="#!">events</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item-has-children">
                                                    <a href='event-1.html'>event List</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="event-1-without-sidebar.html">list without sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href='event-2.html'>event Grid</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="event-2-without-sidebar.html">grid without sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href='event-details.html'>event details</a></li>
                                                <li><a href='booking.html'>event booking</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="#!">blogs</a>
                                            <ul class="sub-menu">
                                                <li><a href='blog.html'>blog</a></li>
                                                <li><a href='blog-details.html'>blog details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="gallery.html">gallery</a>
                                        </li>
                                        <li>
                                            <a href="speaker.html">speaker</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="#!">contact</a>
                                            <ul class="sub-menu">
                                                <li><a href="contact.html">contact us</a></li>
                                                <li><a href='404-error.html'>404 Error</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                     
                            <div class="col-lg-2">
                                <div class="user-search-btn-group ul-li clearfix">
                                    <ul>
                                        <li>
                                            <a href="#!">
                                                <i class="fas fa-user"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <button type="button" class="toggle-overlay search-btn">
                                                <i class="fas fa-search"></i>
                                            </button>
                                     
                                            <div class="search-body">
                                                <div class="search-form">
                                                    <form action="#">
                                                        <input class="search-input" type="search" placeholder="Search Here"/>
                                                        <div class="outer-close toggle-overlay">
                                                            <button type="button" class="search-close">
                                                                <i class="fas fa-times"></i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                 
                                        </li>
                                    </ul>
                                </div>
                            </div>
             
                        </div>
                    </div>
                </div>
       

            </div>
        </div>
    </div>
  

</header>

<div class="header-altranative">
    <div class="container">
        <div class="logo-area float-left">
            <a href="index-1.html">
                <img src="assets/images/1.site-logo.png" alt="logo_not_found"/>
            </a>
        </div>

        <button type="button" id="sidebarCollapse" class="alt-menu-btn float-right">
            <i class="fas fa-bars"></i>
        </button>
    </div>


    <div class="sidebar-menu-wrapper">
        <div id="sidebar" class="sidebar">
            <span id="sidebar-dismiss" class="sidebar-dismiss">
                <i class="fas fa-arrow-left"></i>
            </span>

            <div class="sidebar-header">
                <a href="#!">
                    <img src="assets/images/2.site-logo.png" alt="logo_not_found"/>
                </a>
            </div>

           
            <div class="sidebar-form">
                <form action="#">
                    <input id="altmenu-sidebar-search" type="search" placeholder="Search"/>
                    <label for="altmenu-sidebar-search"><i class="fas fa-search"></i></label>
                </form>
            </div>
     
            <div class="menu-link-list main-pages-links">
                <h2 class="menu-title">all home pages</h2>
                <ul>
                    <li>
                        <a href="index-1.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            Home V.1
                        </a>
                    </li>
                    <li>
                        <a href="index-2.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            Home V.2
                        </a>
                    </li>
                    <li>
                        <a href="index-3.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            Home v.3
                        </a>
                    </li>
                    <li>
                        <a href="index-4.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            Home v.4
                        </a>
                    </li>
                </ul>
            </div>

            <div class="menu-link-list other-pages-links">
                <h2 class="menu-title">all single pages</h2>
                <ul>
                    <li>
                        <a href="about.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            About Us
                        </a>
                    </li>
                    <li class="active">
                        <a href="service.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            our Services
                        </a>
                    </li>
                    <li>
                        <a href="event-1.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            event list
                        </a>
                    </li>
                    <li>
                        <a href="event-2.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            event grid
                        </a>
                    </li>
                    <li>
                        <a href="event-1-without-sidebar.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            list without sidebar
                        </a>
                    </li>
                    <li>
                        <a href="event-2-without-sidebar.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            grid without sidebar
                        </a>
                    </li>
                    <li>
                        <a href="blog.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            Latest blogs
                        </a>
                    </li>
                    <li>
                        <a href="gallery.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            our gallery
                        </a>
                    </li>
                    <li>
                        <a href="speaker.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            event speakers
                        </a>
                    </li>
                    <li>
                        <a href="contact.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            contact us
                        </a>
                    </li>
                </ul>
            </div>
      
            <div class="menu-link-list inner-pages-links">
                <h2 class="menu-title">all inner pages</h2>
                <ul>
                    <li>
                        <a href="booking.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            event booking
                        </a>
                    </li>
                    <li>
                        <a href="event-details.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            event details
                        </a>
                    </li>
                    <li>
                        <a href='blog-details.html'>
                            <span class="icon"><i class="fas fa-home"></i></span>
                            blog details
                        </a>
                    </li>
                    <li>
                        <a href="faq.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            Frequently Ask Qusetion
                        </a>
                    </li>
                    <li>
                        <a href="404-error.html">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            404 error
                        </a>
                    </li>
                </ul>
            </div>
     
            <div class="login-btn-group">
                <ul>

                    <li>
                        <a href="#alt-register-modal" class="register-modal-btn">
                            Register
                        </a>
                        <div id="alt-register-modal" class="reglog-modal-wrapper register-modal mfp-hide clearfix" style={{"background-image": "url('assets/images/login-modal-bg.jpg')"}}>
                            <div class="overlay-black clearfix">

                          
                                <div class="leftside-content">
                                    <div class="site-logo-wrapper mb-80">
                                        <a href="#!" class="logo">
                                            <img src="assets/images/2.site-logo.png" alt="logo_not_found"/>
                                        </a>
                                    </div>
                                    <div class="register-login-link mb-80">
                                        <ul>
                                            <li><a href="#!">Login</a></li>
                                            <li class="active"><a href="#!">Register</a></li>
                                        </ul>
                                    </div>
                                    <div class="copyright-text">
                                        <p class="m-0">©2018 <a href="#!" class="yellow-color">Harmoni.com</a> all right reserved, made with <i class="fas fa-heart"></i> by jThemes Studio </p>
                                    </div>
                                </div>
                            
                                <div class="rightside-content text-center">

                                    <div class="mb-30">
                                        <h2 class="form-title title-large white-color">Account <strong>Register</strong></h2>
                                        <span class="form-subtitle white-color">Have an account? <strong>LOGIN NOW</strong></span>
                                    </div>

                                    <div class="login-form text-center mb-50">
                                        <form action="#!">
                                            <div class="form-item">
                                                <input type="email" placeholder="User Name"/>
                                            </div>
                                            <div class="form-item">
                                                <input type="password" placeholder="Password"/>
                                            </div>
                                            <div class="form-item">
                                                <input type="email" placeholder="Repeat Password"/>
                                            </div>
                                            <div class="form-item">
                                                <input type="password" placeholder="Email Address"/>
                                            </div>
                                            <div class="human-verification text-left">
                                                <input type="checkbox" id="alt-imnotarobot"/>
                                                <label for="alt-imnotarobot">I'm not a robot</label>
                                                <span class="verification-image">
                                                    <img src="assets/images/iamnotrobot.png" alt="Image_not_found"/>
                                                </span>
                                            </div>
                                            <button type="submit" class="login-btn">login now</button>
                                        </form>
                                    </div>

                                    <div class="bottom-text white-color">
                                        <p class="m-0">
                                            * Denotes mandatory field.
                                        </p>
                                        <p class="m-0">** At least one telephone number is required.</p>
                                    </div>

                                </div>
                       

                                <a class="popup-modal-dismiss" href="#!">
                                    <i class="fas fa-times"></i>
                                </a>

                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#alt-login-modal" class="login-modal-btn">
                            Login
                        </a>
                        <div id="alt-login-modal" class="reglog-modal-wrapper mfp-hide clearfix" style={{"background-image": "url('assets/images/login-modal-bg.jpg')"}}>
                            <div class="overlay-black clearfix">

               
                                <div class="leftside-content">
                                    <div class="site-logo-wrapper mb-80">
                                        <a href="#!" class="logo">
                                            <img src="assets/images/2.site-logo.png" alt="logo_not_found"/>
                                        </a>
                                    </div>
                                    <div class="register-login-link mb-80">
                                        <ul>
                                            <li class="active"><a href="#!">Login</a></li>
                                            <li><a href="#!">Register</a></li>
                                        </ul>
                                    </div>
                                    <div class="copyright-text">
                                        <p class="m-0">©2018 <a href="#!" class="yellow-color">Harmoni.com</a> all right reserved, made with <i class="fas fa-heart"></i> by jThemes Studio </p>
                                    </div>
                                </div>
                              
                                <div class="rightside-content text-center">

                                    <div class="mb-30">
                                        <h2 class="form-title title-large white-color">Account <strong>Login</strong></h2>
                                        <span class="form-subtitle white-color">Login to our website, or <strong>REGISTER</strong></span>
                                    </div>

                                    <div class="fb-login-btn mb-30">
                                        <a href="#!">
                                            <span class="icon">
                                                <i class="fab fa-facebook-f"></i>
                                            </span>
                                            login with facebook
                                        </a>
                                    </div>

                                    <div class="or-text mb-30">
                                        <span>or sign in</span>
                                    </div>

                                    <div class="login-form text-center mb-50">
                                        <form action="#!">
                                            <div class="form-item">
                                                <input type="email" placeholder="example@gmail.com"/>
                                            </div>
                                            <div class="form-item">
                                                <input type="password" placeholder="Password"/>
                                            </div>
                                            <button type="submit" class="login-btn">login now</button>
                                        </form>
                                    </div>

                                    <div class="bottom-text white-color">
                                        <p class="m-0">
                                            * Denotes mandatory field.
                                        </p>
                                        <p class="m-0">** At least one telephone number is required.</p>
                                    </div>

                                </div>
                                

                                <a class="popup-modal-dismiss" href="#!">
                                    <i class="fas fa-times"></i>
                                </a>

                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
          
            <div class="social-links">
                <h2 class="menu-title">get in touch</h2>
                <div class="mb-15">
                    <h3 class="contact-info">
                        <i class="fas fa-phone"></i>
                        100-2222-9999
                    </h3>
                    <h3 class="contact-info">
                        <i class="fas fa-envelope"></i>
                        info@harmoni.com
                    </h3>
                </div>
                <ul>
                    <li>
                        <a href="#!"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#!"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#!"><i class="fab fa-twitch"></i></a>
                    </li>
                    <li>
                        <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                    <li>
                        <a href="#!"><i class="fab fa-instagram"></i></a>
                    </li>
                </ul>
                <a href="contact.html" class="contact-btn">contact us</a>
            </div>
       

            <div class="overlay"></div>
        </div>
    </div>

</div>

<section id="breadcrumb-section" class="breadcrumb-section clearfix">
    <div class="jarallax" style={{"background-image":"url('assets/images/breadcrumb/0.breadcrumb-bg.jpg')"}}>
        <div class="overlay-black">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-12 col-sm-12">

                        <div class="breadcrumb-title text-center mb-50">
                            <span class="sub-title">what we can do</span>
                            <h2 class="big-title">harmoni <strong>services</strong></h2>
                        </div>
                      
                        <div class="breadcrumb-list">
                            <ul>
                                <li class="breadcrumb-item"><a href="index-1.html" class="breadcrumb-link">Home</a></li>
                                <li class="breadcrumb-item"><a href="#!" class="breadcrumb-link">About</a></li>
                                <li class="breadcrumb-item active" aria-current="page">services</li>
                            </ul>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>







<section id="service-section" class="service-section sec-ptb-100 clearfix">
    <div class="container">

   
        <div class="service-wrapper">

         
            <div class="service-item clearfix">
                <div class="service-image float-left">
                    <div class="big-image">
                        <img src="assets/images/service/1.image.png" alt="Image_not_found"/>
                    </div>
                    <div class="small-image">
                        <img src="assets/images/service/1.1.image.png" alt="Image_not_found"/>
                    </div>
                </div>
                <div class="service-content float-right">
                    <div class="service-title mb-30">
                        <h2 class="title-text">business <strong>conference</strong></h2>
                        <span class="service-price">price start from $52.00</span>
                    </div>
                    <p class="service-description black-color mb-30">
                        Lorem ipsum dollor site amet the best  consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. 
                    </p>
                    <div class="service-type-list mb-50 clearfix">
                        <ul>

                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                wedsite development
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                online store
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                office meeting
                            </li>

                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                wedsite development
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                online store
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                office meeting
                            </li>

                        </ul>
                    </div>
                    <div class="text-left">
                        <a href="#!" class="custom-btn">make an event</a>
                        <a href="#!" class="conference-btn">conference event</a>
                    </div>
                </div>
            </div>
         
            <div class="service-item clearfix">
                <div class="service-image float-right">
                    <div class="big-image">
                        <img src="assets/images/service/2.image.png" alt="Image_not_found"/>
                    </div>
                    <div class="small-image">
                        <img src="assets/images/service/2.2.image.png" alt="Image_not_found"/>
                    </div>
                </div>
                <div class="service-content float-left">
                    <div class="service-title mb-30">
                        <h2 class="title-text">Festival <strong>Musical</strong></h2>
                        <span class="service-price">price start from $52.00</span>
                    </div>
                    <p class="service-description black-color mb-30">
                        Lorem ipsum dollor site amet the best  consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. 
                    </p>
                    <div class="service-type-list mb-50 clearfix">
                        <ul>

                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                traditional musical
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                personal consert
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                modern musical
                            </li>

                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                traditional musical
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                personal consert
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                modern musical
                            </li>

                        </ul>
                    </div>
                    <div class="text-left">
                        <a href="#!" class="custom-btn">make an event</a>
                        <a href="#!" class="conference-btn">musical event</a>
                    </div>
                </div>
            </div>

            <div class="service-item clearfix">
                <div class="service-image float-left">
                    <div class="big-image">
                        <img src="assets/images/service/3.image.png" alt="Image_not_found"/>
                    </div>
                    <div class="small-image">
                        <img src="assets/images/service/3.3.image.png" alt="Image_not_found"/>
                    </div>
                </div>
                <div class="service-content float-right">
                    <div class="service-title mb-30">
                        <h2 class="title-text">Kid’s <strong>Play Ground & Party</strong></h2>
                        <span class="service-price">price start from $52.00</span>
                    </div>
                    <p class="service-description black-color mb-30">
                        Lorem ipsum dollor site amet the best  consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. 
                    </p>
                    <div class="service-type-list mb-50 clearfix">
                        <ul>

                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                wedsite development
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                online store
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                office meeting
                            </li>

                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                wedsite development
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                online store
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                office meeting
                            </li>

                        </ul>
                    </div>
                    <div class="text-left">
                        <a href="#!" class="custom-btn">make an event</a>
                        <a href="#!" class="conference-btn">playground event</a>
                    </div>
                </div>
            </div>
   
            <div class="service-item clearfix">
                <div class="service-image float-right">
                    <div class="big-image">
                        <img src="assets/images/service/4.image.png" alt="Image_not_found"/>
                    </div>
                    <div class="small-image">
                        <img src="assets/images/service/4.4.image.png" alt="Image_not_found"/>
                    </div>
                </div>
                <div class="service-content float-left">
                    <div class="service-title mb-30">
                        <h2 class="title-text">Party <strong>Wedding & Birtday</strong></h2>
                        <span class="service-price">price start from $52.00</span>
                    </div>
                    <p class="service-description black-color mb-30">
                        Lorem ipsum dollor site amet the best  consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. 
                    </p>
                    <div class="service-type-list mb-50 clearfix">
                        <ul>

                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                traditional musical
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                personal consert
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                modern musical
                            </li>

                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                traditional musical
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                personal consert
                            </li>
                            <li>
                                <span class="icon">
                                    <i class="fas fa-arrow-circle-right"></i>
                                </span>
                                modern musical
                            </li>

                        </ul>
                    </div>
                    <div class="text-left">
                        <a href="#!" class="custom-btn">make an event</a>
                        <a href="#!" class="conference-btn">party event</a>
                    </div>
                </div>
            </div>
         

        </div>


    </div>
</section>







<section id="special-offer-section" class="special-offer-section clearfix" style={{"background-image": "url('assets/images/special-offer-bg.png')"}}>
    <div class="container">
        <div class="row">

  
            <div class="col-lg-9 col-md-12 col-sm-12">
                <div class="special-offer-content">
                    <h2><strong>30%</strong> Off in June~July for <span>Birthday Events</span></h2>
                    <p class="m-0">
                        Contact us now and we will make your event unique & unforgettable
                    </p>
                </div>
            </div>
      
            <div class="col-lg-3 col-md-12 col-sm-12">
                <div class="event-makeing-btn">
                    <a href="#!">make an event now</a>
                </div>
            </div>
           

        </div>
    </div>
</section>







<section id="map-section" class="map-section clearfix">
    <div class="address-wrapper">

       
        <div class="address-info-topbar mb-30 clearfix">
            <div class="address-info-left">
                <h3 class="title-text">harmoni event management</h3>
                <p class="m-0">
                    Apple Store, 112 Prince St New York,
                    NY 10012, United States 80361,
                    United States
                </p>
            </div>

            <div class="address-info-right">
                <ul>
                    <li>
                        <button type="button">
                            <span class="icon"><i class="fas fa-street-view"></i></span>
                            <small>Direction</small>
                        </button>
                    </li>
                    <li>
                        <button type="button">
                            <span class="icon"><i class="fas fa-rss"></i></span>
                            <small>Save</small>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
      
        <div class="address-info-bottombar clearfix">
            <div class="address-info-left">
                <div class="rating-star">
                    <span class="rating-point">4.5</span>
                    <ul>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star-half"></i></li>
                    </ul>
                </div>
                <p class="m-0">105 reviews</p>
            </div>

            <div class="address-info-right">
                <button type="button" class="map-larger-btn">
                    view larger map
                </button>
            </div>
        </div>
     
            
    </div>
    <div id="google-map">
        <div id="googleMaps" class="google-map-container"></div>
    </div>
</section>







<footer id="footer-section" class="footer-section default-footer-section clearfix">

 
    <div class="footer-top sec-ptb-100 clearfix">
        <div class="container">
            <div class="row">

             
                <div class="col-lg-12 col-md-12 col-md-12">
                    <div class="basic-info mb-50 clearfix">
                        <div class="row">

                        
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="basic-info-item">
                                    <span class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </span>
                                    <div class="info-content">
                                        <p>100 highland ave,</p>
                                        <h3>california, united state</h3>
                                    </div>
                                </div>
                            </div>
             
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="basic-info-item">
                                    <span class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                    <div class="info-content">
                                        <p><a href="#!">contact@pantero.com</a></p>
                                        <h3><a href="#!">info@harmoni.com</a></h3>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="basic-info-item">
                                    <span class="icon">
                                        <i class="fas fa-phone"></i>
                                    </span>
                                    <div class="info-content">
                                        <p><a href="#!">100 800 1234 5555</a></p>
                                        <h3><a href="#!">100 800 1234 5555</a></h3>
                                    </div>
                                </div>
                            </div>
                         
                            
                        </div>
                    </div>
                </div>
            
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="about-wrapper">

                        <div class="site-logo-wrapper mb-30">
                            <a href="index-1.html" class="logo">
                                <img src="assets/images/1.site-logo.png" alt="logo_not_found"/>
                            </a>
                        </div>
                     

                        <p class="mb-30">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
                        </p>

                 
                        <div class="social-links ul-li">
                            <h3 class="social-title">network</h3>
                            <ul>
                                <li>
                                    <a href="#!"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-twitch"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    
                        
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="usefullinks-wrapper ul-li-block">
                        <h3 class="footer-item-title">
                            useful <strong>links</strong>
                        </h3>
                        <ul>
                            <li><a href="#!">Birthday Party</a></li>
                            <li><a href="#!">Business meeting</a></li>
                            <li><a href="#!">Conference</a></li>
                            <li><a href="#!">Food Event</a></li>
                            <li><a href="#!">Musical Event</a></li>
                            <li><a href="#!">Wedding Party</a></li>
                        </ul>
                        
                    </div>
                </div>
 
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="usefullinks-wrapper ul-li-block">
                        <h3 class="footer-item-title">
                            useful <strong>links</strong>
                        </h3>
                        <ul>
                            <li><a href="#!">About Harmoni</a></li>
                            <li><a href="#!">Disclaimer</a></li>
                            <li><a href="#!">Contact us</a></li>
                            <li><a href="#!">Events Schedule</a></li>
                            <li><a href="#!">Sponsors</a></li>
                            <li><a href="#!">Venues</a></li>
                        </ul>
                        
                    </div>
                </div>
              
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="instagram-wrapper ul-li">
                        <h3 class="footer-item-title">
                            harmoni <strong>instagram</strong>
                        </h3>
                        <ul>
                            <li class="image-wrapper">
                                <img src="assets/images/footer/instagram/img1.png" alt="Image_not_found"/>
                                <a href="#!"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li class="image-wrapper">
                                <img src="assets/images/footer/instagram/img2.png" alt="Image_not_found"/>
                                <a href="#!"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li class="image-wrapper">
                                <img src="assets/images/footer/instagram/img3.png" alt="Image_not_found"/>
                                <a href="#!"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li class="image-wrapper">
                                <img src="assets/images/footer/instagram/img4.png" alt="Image_not_found"/>
                                <a href="#!"><i class="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                        <h4 class="followus-link">
                            Follow Our Instagram <a href="#!">#Harmoni</a>
                        </h4>
                    </div>
                </div>
        

            </div>
        </div>
    </div>


    <div class="footer-bottom">
        <div class="container">
            <div class="row">

         
                <div class="col-lg-7 col-md-12 col-sm-12">
                    <div class="copyright-text">
                        <p class="m-0">©2018 <a href="#!" class="site-link">Harmoni.com</a> all right reserved, made with <i class="fas fa-heart"></i> by <a href="#!" class="author-link"><strong>jThemes Studio</strong></a></p>
                    </div>
                </div>
          
                <div class="col-lg-5 col-md-12 col-sm-12">
                    <div class="footer-menu">
                        <ul>
                            <li><a href="contact.html">Contact us</a></li>
                            <li><a href="about.html">About us</a></li>
                            <li><a href="#!">Site map</a></li>
                            <li><a href="#!">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
           

            </div>
        </div>
    </div>

</footer>





</body> */}

<div class="page-wrapper">


<div class="preloader"></div>


<header class="main-header header-style-one">
	
		<div class="header-top">
			<div class="inner-container">
		
				<div class="top-left">
				
					<ul class="list-style-one">
						<li><i class="fa fa-envelope"></i> <a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
						<li><i class="fa fa-map-marker"></i> 88 Broklyn Golden Street. New York</li>
					</ul>
				</div>
		
				<div class="top-right">
					<ul class="useful-links">
						<li><a href="#">Help</a></li>
						<li><a href="#">Support</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
					<ul class="social-icon-one">
						<li><a href="#"><span class="fab fa-twitter"></span></a></li>
						<li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
						<li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
						<li><a href="#"><span class="fab fa-instagram"></span></a></li>
					</ul>
				</div>
			</div>
		</div>
		
		
		<div class="header-lower">
	
			<div class="main-box">
				<div class="logo-box">
					<div class="logo"><a href="index.html"><img src="/assets/images/logo.png" alt="" title="Tronis"/></a></div>
				</div>

				<div class="nav-outer">    
					<nav class="nav main-menu">
						<ul class="navigation">
							<li class="current"><a href="/">Home</a>
							</li>
							<li class=""><a href="/about">About</a>
				
							</li>
							<li class="dropdown"><a href="page-services.html">Services</a>
								<ul>
									<li><a href="page-service-details.html">Brand Building</a></li>
                                    <li><a href="page-services.html">SEM / SMM / SEO Services</a></li>
									<li><a href="page-service-details.html">Event Management</a></li>
									<li><a href="page-services.html">Web Development</a></li>
									<li><a href="/creative-design">Creative Designing</a></li>
									<li><a href="/video-production">Video Production</a></li>
								</ul>
							</li>
							<li class=""><a href="page-projects.html">Projects</a>
	
							</li>
				
							<li><a href="/contact-us">Contact</a></li>
						</ul>
					</nav>
				
				</div>

				<div class="outer-box">
				
					<button class="ui-btn ui-btn search-btn">
						<span class="icon lnr lnr-icon-search"></span>
					</button>
					
					<a href="tel:+92(8800)9806" class="info-btn">
						<i class="icon lnr-icon-phone-handset"></i>
						<small>Call Anytime</small>
						+92 (8800) - 9850
					</a>
				
					<div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
				</div>
			</div>
		</div>

	
		<div class="mobile-menu">
			<div class="menu-backdrop"></div>
		
			
			<nav class="menu-box">
				<div class="upper-box">
					<div class="nav-logo"><a href="index.html"><img src="/assets/images/logo.png" alt="" title=""/></a></div>
					<div class="close-btn"><i class="icon fa fa-times"></i></div>
				</div>
		
				<ul class="navigation clearfix">
					
				</ul>
				<ul class="contact-list-one">
					<li>
					
						<div class="contact-info-box">
							<i class="icon lnr-icon-phone-handset"></i>
							<span class="title">Call Now</span>
							<a href="tel:+92880098670">+92 (8800) - 98670</a>
						</div>
					</li>
					<li>
					
						<div class="contact-info-box">
							<span class="icon lnr-icon-envelope1"></span>
							<span class="title">Send Email</span>
							<a href="mailto:help@company.com">help@company.com</a>
						</div>
					</li>
					<li>
					
						<div class="contact-info-box">
							<span class="icon lnr-icon-clock"></span>
							<span class="title">Send Email</span>
							Mon - Sat 8:00 - 6:30, Sunday - CLOSED
						</div>
					</li>
				</ul>
		
		
				<ul class="social-links">
					<li><a href="#"><i class="fab fa-twitter"></i></a></li>
					<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
					<li><a href="#"><i class="fab fa-pinterest"></i></a></li>
					<li><a href="#"><i class="fab fa-instagram"></i></a></li>
				</ul>
			</nav>
		</div>
		<div class="search-popup">
			<span class="search-back-drop"></span>
			<button class="close-search"><span class="fa fa-times"></span></button>
		
			<div class="search-inner">
				<form method="post" action="https://kodesolution.com/html/2023/desix-html/index.html">
					<div class="form-group">
						<input type="search" name="search-field" value="" placeholder="Search..." required=""/>
						<button type="submit"><i class="fa fa-search"></i></button>
					</div>
				</form>
			</div>
		</div>
	
		<div class="sticky-header">
			<div class="auto-container">
				<div class="inner-container">
			
					<div class="logo">
						<a href="index.html" title=""><img src="/assets/images/logo-2.png" alt="" title=""/></a>
					</div>
		
				
					<div class="nav-outer">
					
						<nav class="main-menu">
							<div class="navbar-collapse show collapse clearfix">
								<ul class="navigation clearfix">
								
								</ul>
							</div>
						</nav>
						<div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
					</div>
				</div>
			</div>
		</div>
	</header>
<section class="page-title" style={{"backgroundImage":"url('/assets/images/background/page-title.jpg')"}}>
    <div class="auto-container">
        <div class="title-outer">
            <h1 class="title">About Us</h1>
            <ul class="page-breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li>About</li>
            </ul>
        </div>
    </div>
</section>





<footer class="main-footer">
    <div class="bg bg-pattern-6"></div>

    <div class="footer-upper">
        <div class="auto-container">
            <div class="row">
             
                <div class="contact-info-block col-lg-4 col-md-6">
                    <div class="inner">
                        <i class="icon fa fa-phone-square"></i>
                        <span class="sub-title">Call Anytime</span>
                        <div class="text"><a href="tel:+92(8800)48720">+92 (8800) -89 8630</a></div>
                    </div>
                </div>
           
                <div class="contact-info-block col-lg-4 col-md-6">
                    <div class="inner">
                        <i class="icon fa fa-envelope"></i>
                        <span class="sub-title">Send Email</span>
                        <div class="text"><a href="mailto:needhelp@company.com">needhelp@company.com</a></div>
                    </div>
                </div>
            
                <div class="contact-info-block col-lg-4 col-md-6">
                    <div class="inner">
                        <i class="icon fa fa-map-marker"></i>
                        <span class="sub-title">Addres</span>
                        <div class="text">30 Broklyn Golden Street. USA</div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="widgets-section">
        <div class="auto-container">
            <div class="row">
       
                <div class="footer-column col-xl-5 col-lg-4 col-md-12">
                    <div class="footer-widget about-widget">
                        <div class="widget-content">
                            <div class="logo"><a href="#"> <img src="/assets/images/logo.png" alt=""/></a></div>
                            <div class="text">Welcome to our digital agency. Lorem ipsum simply free text dolor sited amet cons cing elit.</div>
                            <ul class="social-icon-two">
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
      
                <div class="footer-column col-xl-4 col-lg-4 col-md-6">
                    <div class="widget links-widget">
                        <h5 class="widget-title">Explore</h5>
                        <div class="widget-content">
                            <ul class="user-links two-column">
                                <li><a href="#">Meet Our Team</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">What We Do</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Latest News</a></li>
                                <li><a href="#">New Projects</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Faqs</a></li>
                            </ul>                                
                        </div>
                    </div>
                </div>

       
                <div class="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="widget newsletter-widget">
                        <h5 class="widget-title">Newsletter</h5>
                        <div class="widget-content">
                            <div class="text">Subsrcibe for our latest resources</div>
                            <div class="subscribe-form">
                                <form method="post" action="#">
                                    <div class="form-group">
                                        <input type="email" name="email" class="email" value="" placeholder="Email Address" required=""/>
                                    </div>
                                    <div class="form-group">
                                        <button type="button" class="theme-btn btn-style-one hover-light"><span class="btn-title">Subscribe</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="auto-container">
            <div class="copyright-text">© Copyright 2023 by <a href="#">Company.com</a></div>
        </div>
    </div>
</footer>


</div>




























{/* <section class="about mega-section" id="about">
      <div class="container">
      
        <div class="content-block  ">
          <div class="row">
            <div class="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end  wow fadeInUp" data-wow-delay="0.6s" >
              <div class="text-area ">
                <div class="sec-heading  light-title ">
                  <div class="content-area"><span class="pre-title       wow fadeInUp" data-wow-delay=".2s" >about Us</span>
                    <h2 class="title    wow fadeInUp" data-wow-delay=".4s" ><span class="hollow-text">trusted</span> by worldwide clients  since<span class="featured-text">  1980. <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path></svg></span></h2>
                  </div>
                </div>
                <p class=" about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</p>
                <div class="info-items-list ">
                  <div class="row ">
                    <div class="col-9 col-xl-6">
                      <div class="info-item"><i class="flaticon-medal  info-icon"></i>
                        <div class="info-content">
                          <h5 class="info-title">first on field </h5>
                          <p class="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-9 col-xl-6">
                      <div class="info-item"><i class="flaticon-game-console info-icon"></i>
                        <div class="info-content">
                          <h5 class="info-title">easy to reach </h5>
                          <p class="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-9 col-xl-6">
                      <div class="info-item"><i class="flaticon-map info-icon"></i>
                        <div class="info-content">
                          <h5 class="info-title">worldwide services  </h5>
                          <p class="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-9 col-xl-6">
                      <div class="info-item"><i class="flaticon-technical-support-1  info-icon"></i>
                        <div class="info-content">
                          <h5 class="info-title">24/7 support  </h5>
                          <p class="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cta-area"><a class=" btn-solid reveal-start" href="about-us.html">Get in touch</a>
                  <div class="signature ">
                    <div class="signature-img"></div>
                    <div class="signature-name">CEO &amp; Founder </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col  wow fadeInUp" data-wow-delay="0.2s" >
              <div class="img-area  " data-tilt="" >
                <div class="image   "><img class="about-img img-fluid " loading="lazy" src="assets/images/about/3.png" alt="Our vision"/></div>
              </div>
            </div>
          </div>
        </div>
     
        <div class="content-block  ">
          <div class="row">
            <div class="col-12 col-lg-6 d-flex align-items-center about-col  wow fadeInUp" data-wow-delay="0.2s" >
              <div class="img-area  ">
                <div class="image  " data-tilt=""><img class="about-img img-fluid " loading="lazy" src="assets/images/about/1.png" alt="about"/></div>
              </div>
            </div>
            <div class="col-12 col-lg-6 d-flex align-items-center about-col pad-start  wow fadeInUp" data-wow-delay="0.6s" >
              <div class="text-area ">
                <div class="sec-heading  light-title ">
                  <div class="content-area"><span class=" pre-title       wow fadeInUp " data-wow-delay=".2s" >why choose us</span>
                    <h2 class=" title    wow fadeInUp" data-wow-delay=".4s" >Why our <span class="hollow-text"> customers</span>  choose <span class="featured-text">working <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path></svg></span> with us</h2>
                  </div>
                </div>
                <p class=" about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</p>
                <div class="info-items-list">
                  <div class="row ">
                    <div class="col-12 ">
                      <div class="info-item"><span class="info-number ">01.</span>
                        <div class="info-content">
                          <h5 class="info-title">latest technologies </h5>
                          <p class="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="info-item"><span class="info-number ">02.</span>
                        <div class="info-content">
                          <h5 class="info-title">uniqe solutions </h5>
                          <p class="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="info-item"><span class="info-number ">03.</span>
                        <div class="info-content">
                          <h5 class="info-title">powerful strategies </h5>
                          <p class="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cta-area "><a class=" btn-solid " href="about-us.html">get in toutch</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section> */}






  </>
}

export default Event