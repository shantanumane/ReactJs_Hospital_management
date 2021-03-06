@include('header');
 <!-- <div class="menu dropdown_account">

 </div>
<!DOCTYPE html>
<html lang="en">

 Mirrored from gambolthemes.net/html-items/gambo_supermarket_demo/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Feb 2021 14:27:17 GMT -->
 <head> <meta charset="utf-8">
<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, shrink-to-fit=9">
<meta name="description" content="Gambolthemes">
<meta name="author" content="Gambolthemes"> -->
<head>
 <!-- <title>User - Dashboard</title> -->
    <link rel="icon" type="image/png" href="{{asset(('/images/fav.png'))}}">

    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
    <link href="{{asset(('/vendor/unicons-2.0.1/css/unicons.css'))}}" rel='stylesheet'>
    <link href="{{asset(('/css1/style1.css'))}}" rel="stylesheet">
    <link href="{{asset(('/css1/responsive.css'))}}" rel="stylesheet">
    <link href="{{asset(('/css1/night-mode.css'))}}" rel="stylesheet">
    <link href="{{asset(('/css1/step-wizard.css'))}}" rel="stylesheet">
    <link href="{{asset(('/vendor/fontawesome-free1/css/all.min.css'))}}" rel="stylesheet">
    <link href="{{asset(('/vendor/OwlCarousel/assets/owl.carousel.css'))}}" rel="stylesheet">
    <link href="{{asset(('/vendor/OwlCarousel/assets/owl.theme.default.min.css'))}}" rel="stylesheet">
    <link href="{{asset(('/vendor/bootstrap1/css/bootstrap.min.css'))}}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset(('/vendor/semantic/semantic.min.css'))}}">


 </head>
 <body>

<div class="wrapper">
<div class="gambo-Breadcrumb">
<div class="container">
<div class="row">
<div class="col-md-12">
<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="index.html">Home</a></li>
<li class="breadcrumb-item active" aria-current="page">User Dashboard</li>
</ol>
</nav>
</div>
</div>
</div>
</div>

<!-- <div class="dashboard-group">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="user-dt">
<div class="user-img"> -->
    <!-- <div class="night_mode_switch__btn">
        <a href="#" id="night-mode" class="btn-night-mode">
        <i class="uil uil-moon"></i> Night mode
        <span class="btn-night-mode-switch">
        <span class="uk-switch-button"></span>
        </span>
        </a>
    </div>
    <br>
<img src="{{asset(('/images/avatar/img-5.jpg'))}}" alt="">
<div class="img-add">
<input type="file" id="file">
<label for="file"><i class="uil uil-camera-plus"></i></label>
</div>
</div>
<h4>{{((auth::user()->name))}}</h4>
<p>{{((auth::user()->email))}}<a href="#"> -->
<!-- <i class=""></i></a></p> -->
<!-- <div class="earn-points"><img src="{{asset(('/images/Dollar.svg'))}}" alt="">Points : <span>20</span></div> -->
<!-- </div>
</div>
</div>
</div>
</div> -->
<div class="">
<div class="container">
<div class="row">
<div class="col-lg-3 col-md-4">
<div class="left-side-tabs">
<div class="dashboard-left-links">
<!-- <div class="night_mode_switch__btn"> -->
        <a href="#" id="night-mode" class="btn-night-mode">
        <center><i class="uil uil-moon"></i> Night mode</center>
        <span class="btn-night-mode-switch">
        <span class="uk-switch-button"></span>
        </span>
        </a>
    </div>
    <br>
    <center><img src="{{asset(('/images/avatar/img-5.jpg'))}}" alt=""><center>
<div class="img-add">
<!-- <input type="file" id="file"> -->
<!-- <label for="file"><i class="uil uil-camera-plus"></i></label> -->
<!-- </div>
</div> -->
<h4><center>{{((auth::user()->name))}}<center></h4>
<p><center>{{((auth::user()->email))}}<center><a href="#">
<br>
<a href="dashboard_overview.html" class="user-item active"><i class="uil uil-apps"></i>Overview</a>
<a href="dashboard_my_orders.html" class="user-item"><i class="uil uil-box"></i>My Orders</a>
<a href="dashboard_my_rewards.html" class="user-item"><i class="uil uil-gift"></i>My Rewards</a>
<a href="dashboard_my_wallet.html" class="user-item"><i class="uil uil-wallet"></i>My Wallet</a>
<a href="dashboard_my_wishlist.html" class="user-item"><i class="uil uil-heart"></i>Shopping Wishlist</a>
<a href="dashboard_my_addresses.html" class="user-item"><i class="uil uil-location-point"></i>My Address</a>
<!-- <a href="sign_in.html" class="user-item"><i class="uil uil-exit"></i>Logout</a> -->
<a class="user-item href="{{route('logout')}}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
<i class="uil uil-exit"></i>Logout</a>

                                            <!-- <i class="seoicon-right-arrow"></i> -->
                                        </a>
                                        </li>
                                        <form id='logout-form' action="{{route('logout')}}" method="POST">
                                            @csrf
                                            </form>
</div>
</div>
</div>
<div class="col-lg-9 col-md-8">
<div class="dashboard-right">
<div class="row">
<div class="col-md-12">
<div class="main-title-tab">
<h4><i class="uil uil-apps"></i>Overview</h4>
</div>
<div class="welcome-text">
<h2>Hi! {{((auth::user()->name))}}</h2>
</div>
</div>
<div class="col-lg-6 col-md-12">
<div class="pdpt-bg">
<div class="pdpt-title">
<h4>Create Post</h4>
</div>
<div class="ddsh-body">
<button type="button" class="btn btn-danger btn-lg"> <i class="fa fa-plus" ></i> Post </button>
<ul>
<li>
<!-- <a href="#" class="?small-reward-dt hover-btn">Won $2</a> -->
</li>
<li>
<!-- <a href="#" class="small-reward-dt hover-btn">Won 40% Off</a> -->
</li>
<li>
<!-- <a href="#" class="small-reward-dt hover-btn">Caskback $1</a> -->
</li>
<li>
<!-- <a href="#" class="rewards-link5">+More</a> -->
</li>
</ul>
</div>
<!-- <a href="#" class="more-link14">Rewards and Details <i class="uil uil-angle-double-right"></i></a> -->
</div>
</div>
<div class="col-lg-6 col-md-12">
<div class="pdpt-bg">
<div class="pdpt-title">
<h4>Approvals</h4>
</div>
<div class="ddsh-body">
<button type="button" class="btn btn-danger btn-lg"><i class="fas fa-clipboard-check"></i> Approvals</button>
<ul class="order-list-145">
<li>
<div class="smll-history">
<!-- <div class="order-title">2 Items <span data-inverted="" data-tooltip="2kg broccoli, 1kg Apple" data-position="top center">?</span></div> -->
<!-- <div class="order-status">On the way</div> -->
<!-- <p>$22</p> -->
</div>
</li>
</ul>
</div>
<!-- <a href="#" class="more-link14">All Orders <i class="uil uil-angle-double-right"></i></a> -->
</div>
</div>
<div class="col-lg-6 col-md-12">
<div class="pdpt-bg">
<div class="pdpt-title">
<h4>Library</h4>
</div>
<div class="ddsh-body">
<button type="button" class="btn btn-danger btn-lg">
<i class="fa fa-bookmark" aria-hidden="true"></i> Library </button>
<ul>
<li>
<!-- <a href="#" class="?small-reward-dt hover-btn">Won $2</a> -->
</li>
<li>
<!-- <a href="#" class="small-reward-dt hover-btn">Won 40% Off</a> -->
</li>
<li>
<!-- <a href="#" class="small-reward-dt hover-btn">Caskback $1</a> -->
</li>
<li>
<!-- <a href="#" class="rewards-link5">+More</a> -->
</li>
</ul>
</div>
<!-- <a href="#" class="more-link14">Rewards and Details <i class="uil uil-angle-double-right"></i></a> -->
</div>
</div>
<div class="col-lg-6 col-md-12">
<div class="pdpt-bg">
<div class="pdpt-title">
<h4>Analytics</h4>
</div>
<div class="ddsh-body">
<button type="button" class="btn btn-danger btn-lg"> <i class="fa fa-line-chart    "></i> Analytics</button>
<ul class="order-list-145">
<li>
<div class="smll-history">
<!-- <div class="order-title">2 Items <span data-inverted="" data-tooltip="2kg broccoli, 1kg Apple" data-position="top center">?</span></div> -->
<!-- <div class="order-status">On the way</div> -->
<!-- <p>$22</p> -->
</div>
</li>
</ul>
</div>
<!-- <a href="#" class="more-link14">All Orders <i class="uil uil-angle-double-right"></i></a> -->
</div>
</div>
<!-- <div class="col-lg-12 col-md-12">
<div class="pdpt-bg">
<div class="pdpt-title">
<h4>My Wallet</h4>
</div>
<div class="wllt-body">
<h2>Credits $100</h2>
<ul class="wallet-list">
<li>
<a href="#" class="wallet-links14"><i class="uil uil-card-atm"></i>Payment Methods</a>
</li>
<li>
<a href="#" class="wallet-links14"><i class="uil uil-gift"></i>3 offers Active</a>
</li>
<li>
<a href="#" class="wallet-links14"><i class="uil uil-coins"></i>Points Earning</a>
</li>
</ul>
</div>
<a href="#" class="more-link14">Rewards and Details <i class="uil uil-angle-double-right"></i></a> -->
<!-- </div> -->
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<script data-cfasync="false" src="/../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="{{asset(('/js1/jquery-3.3.1.min.js'))}}"></script>
<script src="{{asset(('vendor/bootstrap1/js/bootstrap.bundle.min.js'))}}"></script>
<script src="{{asset(('vendor/OwlCarousel/owl.carousel.js'))}}"></script>
<script src="{{asset(('vendor/semantic/semantic.min.js'))}}"></script>
<script src="{{asset(('js1/jquery.countdown.min.js'))}}"></script>
<script src="{{asset(('js1/custom.js'))}}"></script>
<script src="{{asset(('js1/product.thumbnail.slider.js'))}}"></script>
<script src="{{asset(('js1/offset_overlay.js'))}}"></script>
<script src="{{asset(('js1/night-mode.js'))}}"></script>
@include('footer');
