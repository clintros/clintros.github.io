import React, { Component } from 'react';
import '../App.sass';
import '../index.css';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header">
                    <div className="title is-1 animated bounceInDown">PUBG<span className="blue"> Mate</span></div>
                </div>                
            </div>
        )
    }
}

export default Header;