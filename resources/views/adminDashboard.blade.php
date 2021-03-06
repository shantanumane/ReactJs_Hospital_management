@include('header');
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from gambolthemes.net/html-items/gambo_admin/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Feb 2021 14:29:09 GMT -->
<head>
@dd(auth::user());

    {{-- <meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description-gambolthemes" content="">
<meta name="author-gambolthemes" content="">
<title>Gambo Supermarket Admin</title> --}}
    <link href="{{asset(('/css1/styles.css'))}}" rel="stylesheet">
    <link href="{{asset(('/css1/admin-style.css'))}}" rel="stylesheet">

    <link href="{{asset(('/vendor/bootstrap/css/bootstrap.min.css'))}}" rel="stylesheet">
    <link href="{{asset(('/vendor/fontawesome-free/css/all.min.css'))}}" rel="stylesheet">
</head>
<body class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-light bg-clr">
        <a class="navbar-brand logo-brand" href="index.html">Le Grand Hotel</a>
        <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
        <a href="../gambo_supermarket_demo/index.html" class="frnt-link"><i class="fas fa-external-link-alt"></i>Home</a>
        <ul class="navbar-nav ml-auto mr-md-0">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item admin-dropdown-item" href="edit_profile.html">Edit Profile</a>
                    <a class="dropdown-item admin-dropdown-item" href="change_password.html">Change Password</a>
                    <a class="dropdown-item admin-dropdown-item" href="login.html">Logout</a>
                </div>
            </li>
        </ul>
    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <a class="nav-link active" href="index.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </a>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-newspaper"></i></div>
                            ROOMS
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link sub_nav_link" href="posts.html">All Rooms</a>
                                <a class="nav-link sub_nav_link" href="add_post.html">Manage</a>
                                <a class="nav-link sub_nav_link" href="post_categories.html">Categories</a>
                                <a class="nav-link sub_nav_link" href="post_tags.html">Available Rooms</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLocations" aria-expanded="false" aria-controls="collapseLocations">
                            <div class="sb-nav-link-icon"><i class="fas fa-map-marker-alt"></i></div>
                            CLIENTS
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLocations" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link sub_nav_link" href="locations.html">All Clients</a>
                                <a class="nav-link sub_nav_link" href="add_location.html">Add Clients</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAreas" aria-expanded="false" aria-controls="collapseAreas">
                            <div class="sb-nav-link-icon"><i class="fas fa-map-marked-alt"></i></div>
                            Bookings
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid">
                    <h2 class="mt-30 page-title">Dashboard</h2>
                    <ol class="breadcrumb mb-30">
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                    {{-- <div class="row">
                        <div class="col-xl-3 col-md-6">
                            <div class="dashboard-report-card purple">
                                <div class="card-content">
                                    <span class="card-title">Order Pending</span>
                                    <span class="card-count">2</span>
                                </div>
                                <div class="card-media">
                                    <i class="fab fa-rev"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="dashboard-report-card red">
                                <div class="card-content">
                                    <span class="card-title">Order Cancel</span>
                                    <span class="card-count">0</span>
                                </div>
                                <div class="card-media">
                                    <i class="far fa-times-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="dashboard-report-card info">
                                <div class="card-content">
                                    <span class="card-title">Order Process</span>
                                    <span class="card-count">5</span>
                                </div>
                                <div class="card-media">
                                    <i class="fas fa-sync-alt rpt_icon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="dashboard-report-card success">
                                <div class="card-content">
                                    <span class="card-title">Today Income</span>
                                    <span class="card-count">$9568.00</span>
                                </div>
                                <div class="card-media">
                                    <i class="fas fa-money-bill rpt_icon"></i>
                                </div>
                            </div>
                        </div> --}}
                        <table class="table table-bordered bg-light">
                            <thead style="background:#c4c4c4;">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Mon</th>
                                    <th scope="col">Tue</th>
                                    <th scope="col">Wed</th>
                                    <th scope="col">Thrus</th>
                                    <th scope="col">Fri</th>
                                    <th scope="col">Sat</th>
                                    <th scope="col">Sun</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" class="bg-dark text-light">Total</th>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="bg-dark text-light">Dulex</th>
                                    <td>5</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>25</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="col-xl-12 col-md-12">
                            <div class="card card-static-2 mb-30">
                                <div class="card-title-2">
                                    <h4>Recent Bookings</h4>
                                    <a href="orders.html" class="view-btn hover-btn">View All</a>
                                </div>
                                <div class="card-body-table">
                                    <div class="table-responsive">
                                        <table class="table ucp-table table-hover">
                                            <thead>
                                                <tr>
                                                    <th style="width:130px">Booking ID</th>
                                                    <th style="width:130px">Room ID</th>
                                                    <th style="width:130px">Booking OTA</th>
                                                    <th style="width:200px">Check IN</th>
                                                    <th style="width:300px">Check OUT</th>
                                                    <th style="width:130px">Status</th>
                                                    <th style="width:130px">Total</th>
                                                    <th style="width:100px">Booking Date</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="py-4 bg-footer mt-auto">
                <div class="container-fluid">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted-1">© 2020 <b>Le Grand Hotel</b>. by <a href="https://themeforest.net/user/gambolthemes">Gambolthemes</a></div>
                        <div class="footer-links">
                            <a href="../gambo_supermarket_demo/privacy_policy.html">Privacy Policy</a>
                            <a href="../gambo_supermarket_demo/term_and_conditions.html">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <script src="{{asset(('/js1/jquery-3.4.1.min.'))}}"></script>
    <script src="{{asset(('/vendor/bootstrap/js/bootstrap.bundle.min.js'))}}"></script>
    <script src="{{asset(('/vendor/chart/highcharts.js'))}}"></script>
    <script src="{{asset(('/vendor/chart/exporting.js'))}}"></script>
    <script src="{{asset(('/vendor/chart/export-data.js'))}}"></script>
    <script src="{{asset(('/vendor/chart/accessibility.js'))}}"></script>
    <script src="{{asset(('/js1/scripts.js'))}}"></script>
    <script src="{{asset(('/js1/chart.js'))}}"></script>
</body>

<!-- Mirrored from gambolthemes.net/html-items/gambo_admin/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Feb 2021 14:29:45 GMT -->
</html>
@include('footer');
