import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div class='container-fluid'>
                <Link class='navbar-brand' to='/'>
                    Reduce Fluffy
                </Link>
                <form className='d-flex'>
                    <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                    <button class='btn btn-outline-success' type='submit'>
                        Search
                    </button>
                </form>
                <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li class='nav-item'>
                            <Link to="/login" class='nav-link active' aria-current='page' href="/login">
                                Login
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link class='nav-link' href='/register'>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
