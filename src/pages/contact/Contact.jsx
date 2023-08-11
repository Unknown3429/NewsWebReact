import React from 'react'

import "./style.css"
const Contact = () => {

    return (
        <div className='contact container-fluid'>
            <h2 className="common-heading">Contact page</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="">
                <div className="form">
                    {/* <h2>Give Your Suggestion</h2> */}
                    <form 
                        // method="POST"
                        className="contact-inputs"
                    >
                        <input type="text"
                            name="username"
                            required
                            autoComplete="off"
                            placeholder="Write your name here.."
                            className='feedback-input'
                            // value={""}
                        />
                        <input placeholder="Let us know how to contact you back.."
                            type="email"
                            name="Email"
                            autoComplete="off"
                            className='feedback-input'
                            required
                        />
                        <textarea
                            name="text"
                            className="feedback-input"
                            required
                            autoComplete="off"
                            placeholder="What would you like to tell us.."
                        />
                        <input type="submit" value="SUBMIT" />
                    </form>
                    <p>sorry some problem in backend you can't contact with us</p>

                    {/* <input className='submit' type="submit" value="send" /> */}
                </div>
            </div>
        </div>

    )
}

export default Contact