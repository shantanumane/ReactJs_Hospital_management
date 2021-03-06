<?php

use App\Http\Livewire\Admin\AdminDashboardComponent;
use App\Http\Livewire\User\UserDashboardComponent;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/05_service_details_localseo', function () {
    return view('05_service_details_localseo');
});
Route::get('/06_service_detail', function () {
    return view('06_service_detail');
});
Route::get('/07_service_email_marketing', function () {
    return view('07_service_email_marketing');
});
Route::get('/04_service_detail_seo', function () {
    return view('04_service_detail_seo');
});
Route::get('/08_service_ppc_management', function () {
    return view('08_service_ppc_management');
});
Route::get('/youtube', function () {
    return view('youtube');
});
Route::get('/header', function () {
    return view('header');
});
Route::get('/navigation-menu', function () {
    return view('navigation-menu');
});
Route::get('/userDashboard', function () {
    return view('userDashboard');
});
Route::get('/userDashboard', function () {
    return view('adminDashboard');
});
Route::get('/customer_view', function () {
    return view('customer_view');
});
Route::get('/customer_edit', function () {
    return view('customer_edit');
});
Route::get('/customers', function () {
    return view('customers');
});
Route::get('/code', function () {
    return view('code');
});

// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
//     return view('dashboard');
// })->name('dashboard');
//For User OR Customer
Route::middleware(['auth:sanctum','verified'])->group(function () {
Route::get('/user/dashboard',UserDashboardComponent::class)->name('user.dashboard');
});
//For Admin
Route::middleware(['auth:sanctum','verified','authadmin'])->group(function () {
Route::get('/admin/dashboard',AdminDashboardComponent::class)->name('admin.dashboard');
});
