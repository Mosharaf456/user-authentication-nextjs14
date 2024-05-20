<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

// $routes->group('api', ['namespace' => 'App\Controllers'], function($routes) {
//     $routes->resource('users'); // Creates RESTful routes for the UserController
// });

$routes->group('api/v1', ['namespace' => 'App\Controllers'], function($routes) {
    $routes->get('users', 'ApiController::index');  // Get all users
    $routes->get('users/(:num)', 'ApiController::show/$1');  // Get a specific user by ID
});



