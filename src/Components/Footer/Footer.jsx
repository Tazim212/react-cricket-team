import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-gray-400 text-base-content p-10">

            <nav>
                <h6 className="footer-title">About us</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sed distinctio aliquam saepe aut nemo?</p>
            </nav>
            <nav>
                <h6 className="footer-title">Quick Links</h6>
                <a className="link link-hover">THome</a>
                <a className="link link-hover">Contacts</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
            <span className='border-3'></span>
            <h4>@2024 Your Company All Rights Reserved.</h4>
        </footer>
    );
};

export default Footer;