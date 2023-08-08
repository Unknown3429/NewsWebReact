import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer Start --> */}
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Useful Links</h3>
                                <ul>
                                    <li><NavLink to="">Pellentesque</NavLink></li>
                                    <li><NavLink to="">Aliquam</NavLink></li>
                                    <li><NavLink to="">Fusce placerat</NavLink></li>
                                    <li><NavLink to="">Nulla hendrerit</NavLink></li>
                                    <li><NavLink to="">Maecenas</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Quick Links</h3>
                                <ul>
                                    <li><NavLink to="">Posuere egestas</NavLink></li>
                                    <li><NavLink to="">Sollicitudin</NavLink></li>
                                    <li><NavLink to="">Luctus non</NavLink></li>
                                    <li><NavLink to="">Duis tincidunt</NavLink></li>
                                    <li><NavLink to="">Elementum</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Get in Touch</h3>
                                <div className="contact-info">
                                    <p><i className="fa fa-map-marker"></i>123 Terry Lane, New York, USA</p>
                                    <p><i className="fa fa-envelope"></i>email@example.com</p>
                                    <p><i className="fa fa-phone"></i>+123-456-7890</p>
                                    <div className="social">
                                        <NavLink ><i className="fab fa-twitter"></i></NavLink>
                                        <NavLink ><i className="fab fa-facebook"></i></NavLink>
                                        <NavLink ><i className="fab fa-linkedin"></i></NavLink>
                                        <NavLink ><i className="fab fa-instagram"></i></NavLink>
                                        <NavLink ><i className="fab fa-youtube"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Newsletter</h3>
                                <div className="newsletter">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed porta dui. Class
                                        aptent taciti sociosqu ad litora torquent per conubia nostra inceptos
                                    </p>
                                    <form>
                                        <input className="form-control" type="email" placeholder="Your email here" />
                                        <button className="btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}


            {/* <!-- Footer Bottom Start --> */}
            < div className="footer-bottom">

                <div className="text-center col-md-6 copyright">
                    <p className='text-center'>Copyright  <NavLink >News</NavLink>. All Rights Reserved</p>
                </div>

                {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                {/* <div className="col-md-6 template-by">
                            <p>Template By <NavLink href="https://htmlcodex.com">HTML Codex</NavLink></p>
                        </div> */}

            </div>
            {/* <!-- Footer Bottom End -->


            <!-- Back to Top --> */}
            <NavLink to="" className="back-to-top"><i className="fa fa-chevron-up"></i></NavLink>

        </div >
    )
}

export default Footer