import React, {Component} from 'react';
import { withRouter, Link} from 'react-router-dom';
const Footbar = () => {
    return(
        <div>
            <div className="logos">
                <a className='icon' href='mailto:kelaiyarao2@gmail.com' target='_blank'>
                    <img className='logo-img' src='/gmail.png' />
                </a>
                <a className="icon" href="https://www.linkedin.com/in/kelaiya-parikh" target="_blank">
                    <img className="logo-img" src="/linkedin.png" />
                </a>
                <a className="icon" href="https://github.com/kelaiya" target="_blank">
                    <img className="logo-img" src="/git.png" />
                </a>
            </div>
        </div>
    )
}
export default Footbar