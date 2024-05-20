<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table = 'ion_auth_users';
    protected $primaryKey = 'id';
    protected $allowedFields = ['username', 'email', 'password'];
    protected $returnType = 'array';
    protected $useTimestamps = true;

    protected $validationRules = [
        'username' => 'required|alpha_numeric|min_length[3]|max_length[20]|is_unique[users.username]',
        'email'    => 'required|valid_email|is_unique[users.email]',
        'password' => 'required|min_length[8]'
    ];

    protected $validationMessages = [
        'username' => [
            'required'    => 'Username is required',
            'is_unique'   => 'This username is already taken',
            'min_length'  => 'Username must be at least 3 characters long',
            'max_length'  => 'Username cannot exceed 20 characters',
            'alpha_numeric' => 'Username can only contain alphanumeric characters'
        ],
        'email' => [
            'required'    => 'Email is required',
            'is_unique'   => 'This email is already registered',
            'valid_email' => 'Please provide a valid email address'
        ],
        'password' => [
            'required'   => 'Password is required',
            'min_length' => 'Password must be at least 8 characters long'
        ]
    ];

    
}
