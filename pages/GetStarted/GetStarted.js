import React from 'react'
import "./GetStarted.css";

function GetStarted() {
    return (
        <div className="getStarted">

            {/**BANNER */}
            <div className="getStartedBanner">
                <h1>Get Started</h1>
                <p>Let’s give your business what it needs to grow.</p>
            </div>

            {/**BODY */}
            <div className="getStartedBody">
                <div className="getStartedBody_left">
                    <p>We look forward to working with you.</p>
                </div>
                <div className="getStartedBody_right">
                    <form action="/" method="get">
                        <h2>Contact Us</h2>
                        <div className="getStartedBody_formTop">
                            <label htmlFor="firstname">First Name<br/>
                                <input name="firstname" id="firstname" placeholder="First Name"/>
                            </label>
                            <label htmlFor="lastname">Last Name<br/>
                                <input name="lastname" id="lastname" placeholder="Last Name"/>
                            </label>
                        </div>
                        <div className="getStartedBody_formBottom">
                            <label htmlFor="email">Email<br/>
                                <input name="email" id="email" type="email" placeholder="Email"/>
                            </label>
                            <label htmlFor="phone">Phone<br/>
                                <input name="phone" id="phone" type="tel" placeholder="Phone"/>
                            </label>
                        </div>
                        <label className="getStartedBody_message" htmlFor="messaage">Leave us a message...<br/>
                            <textarea name="message" id="message" placeholder="Type your message here..."></textarea>
                        </label>
                        <button className="getStartedBody_submit">Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default GetStarted
