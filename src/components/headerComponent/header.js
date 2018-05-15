import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                <Link to="/">Julia JY Shin</Link>
                </div>

                <nav>
                    <ul>
                        <li class="first">
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Portfolio">Portfolio</Link>
                        </li>
                        <li class="last">
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
