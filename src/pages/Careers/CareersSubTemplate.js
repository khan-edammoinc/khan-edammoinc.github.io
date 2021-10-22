import React from 'react'
import "./CareersSubTemplate.css";

function CareersSubTemplate({
    header,
    rolelist,
}) {
    return (
        <div className="careersSub">

            {/**BANNER */}            
            <div className="careersSubBanner">
                <h1>{header}</h1>
            </div>

            {/**ROLES */}
            <div className="careersSubRoles">
                <h2>Role Description</h2>
                <ul>
                    {rolelist.map(r => <li>{r}</li>)}
                </ul>
            </div>

            {/**FORM */}
            <form action="/" method="post">
                <h2>Come Work With Us</h2>
                <div className="careersSubForm_inputs">
                    <label for="firstname">First Name<br/>
                        <input name="firstname" id="firstname" placeholder="First Name"/>
                    </label>
                    <label for="lastname">Last Name<br/>
                        <input name="lastname" id="lastname" placeholder="Last Name"/>
                    </label>
                    <label for="email">Email<br/>
                        <input name="email" id="email" type="email" placeholder="Email"/>
                    </label>
                    <label for="phone">Phone<br/>
                        <input name="phone" id="phone" type="tel" placeholder="Phone"/>
                    </label>
                    <label for="position">Position you apply for<br/>
                        <select name="position" id="position" placeholder="Select Position">
                            <option>Senior Software Developer</option>
                            <option>Machine Learning Research Scientist</option>
                            <option>Technical Business Analyst</option>
                        </select>
                    </label>
                    <label for="date">Available start date *<br/>
                        <input name="date" id="date" type="date" placeholder="Start Date"/>
                    </label>
                    <input className="careersSubForm_resume" name="resume" placeholder="Link to Your Resume"/>
                </div>

                <button className="careersSubForm_apply">Apply Now</button>
            </form>


        </div>
    )
}

export default CareersSubTemplate
