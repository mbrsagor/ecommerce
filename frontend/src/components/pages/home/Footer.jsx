import React, { Component } from 'react';
import FooterWidget1 from './FooterWidget1';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <FooterWidget1 title="Sell Online"
                                name1="" link1="" 
                                name2="Google" link2="" 
                                name3="Instagram" link3="" 
                                name4="Messenger" link4="" 
                                name5="WhatsApp" link5="" 
                                name6="Website" link6="" 
                            />
                            
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <FooterWidget1 title="Product" 
                                name1="Ordering channels" link1="" 
                                name2="Order management" link2="" 
                                name3="Delivery integration" link3="" 
                                name4="1-hour setup" link4="" 
                                name5="Checkout experience" link5="" 
                                name6="Contact less dining" link6="" 
                            />
                            
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <FooterWidget1 title="Resources"
                                name1="Pricing" link1="https://www.google.com/" 
                                name2="Contact us" link2="" 
                                name3="Help center" link3="" 
                                name4="Blog" link4="" 
                                name5="Log in" link5="" 
                                name6="Book a demo" link6="" 
                            />
                            
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <FooterWidget1 title="Sell Online" 
                                name1="Terms of service" link1="" 
                                name2="Privacy policy" link2="" 
                                name3="" link3="" 
                                name4="" link4="" 
                                name5="" link5="" 
                                name6="" link6="" 
                            />

                            <div className="socail-links text-md-left text-center">
                                <a className="mr-2" href="/">
                                    <img width="25px" height="25px" src="icon/facebook.svg" alt="Facebook"/>
                                </a>
                                <a className="mr-2" href="/">
                                    <img width="25px" height="25px" src="icon/youtube.svg" alt="YouTube"/>
                                </a> 
                                <a className="mr-2" href="/">
                                    <img width="25px" height="25px" src="icon/instagram.svg" alt="Instagram"/>
                                </a> 
                                <a className="mr-2" href="/">
                                    <img width="25px" height="25px" src="icon/linkedin.svg" alt="LinkedIn"/>
                                </a> 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
