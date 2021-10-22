import React from 'react'
import { Link } from 'react-router-dom';
import "./Careers.css";
import onexone from "./res/1x1placeholder.png";

function Careers() {
    return (
        <div className="careers">

            {/**BANNER */}
            <div className="careersBanner">
                <h1>Careers</h1>
            </div>

            {/**ROLES */}
            <div className="careersRoles">
                <div className="careersRoles_card">
                    <img src={onexone} alt="Developer"></img>
                    <Link to="/careers/developer">
                        <button className="careersRoles_role">Developer</button>
                    </Link>
                    <h3>Senior Software Developer</h3>
                    <Link to="/careers/developer">
                        <button className="careersRoles_applyNow">Apply Now</button>
                    </Link>
                </div>
                <div className="careersRoles_card careersRoles_cardMiddle">
                    <img src={onexone} alt="ML Research Scientist"></img>
                    <Link to="/careers/researcher">
                        <button className="careersRoles_role">Researcher</button>
                    </Link>
                    <h3>Machine Learning Research Scientist</h3>
                    <Link to="/careers/researcher">
                        <button className="careersRoles_applyNow">Apply Now</button>
                    </Link>
                </div>
                <div className="careersRoles_card">
                    <img src={onexone} alt="Technical Business Analyst"></img>
                    <Link to="/careers/analyst">
                        <button className="careersRoles_role">Analyst</button>
                    </Link>
                    <h3>Technical Business Analyst</h3>
                    <Link to="/careers/analyst">
                        <button className="careersRoles_applyNow">Apply Now</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Careers
