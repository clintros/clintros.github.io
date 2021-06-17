import React from 'react';
import '../App.sass';
import '../index.css';

function Footer() {

    const date = new Date().getFullYear();

    return (
        <div className="foot">
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>© 2019 - {date} PUBG Mate</p>
                    <p>Created with <span className="blue">♥</span> by chX  <span className="footer-links"><a href="https://www.reddit.com/user/xhc" target="_blank" rel="noopener noreferrer">reddit</a> <a href="https://steamcommunity.com/id/chaos" target="_blank" rel="noopener noreferrer">steam</a></span>
                    <br /> PUBG Mate is not affiliated with Playerunknown's Battlegrounds, PUBG Corp or pubg.op.gg.</p>
                </div>
            </footer>
        </div>       
    )
}

export default Footer;