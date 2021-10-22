import React from 'react'
import { Link } from 'react-router-dom';
import "./AboutUs.css";
import onexone from "./res/1x1placeholder.png";

function AboutUs() {
    return (
        <div className="aboutUs">
            
            {/**TOP */}
            <div className="aboutUsTop">
                <h1>About Us</h1>
                <h4>Empowering our Customers</h4>
                <p>Our mission is to build core technology for our clients that enables them to make real-time, data driven decisions.​  We value our clients needs and put their interests first in every situation while maintaining the highest ethical standards.</p>
            </div>

            {/**SPLASHIMG */}
            <div className="aboutUsSplashimg"></div>

            {/**OURSTORY */}
            <div className="aboutUsOurstory">
                <h2>Our Story</h2>
                <div className="aboutUs_hr"></div>
                <p>Our story begins in 2018 with the conception of Edammo's unique patent-pending approach to dynamic data. Unable to use conventional predictive analytics, Dr. Ratner and Dr. Lendasse began working on their own unique approach to Big Data thus creating, Edammo. The founders, Dr. Edward Ratner and Dr. Amaury Lendasse leveraged their expertise in the machine learning space  to determine how to process data sets that were neither static nor large.</p>
            </div>

            {/**LEADERSHIP */}
            <div className="aboutUsLeadership">
                <h2>Leadership</h2>
                <div className="aboutUs_hr"></div>

                <div className="aboutUsLeadership_cards">
                    <div className="aboutUsLeadership_card">
                        <img src={onexone} alt="Ratner"/>
                        <p className="aboutUsLeadership_name">Edward Ratner</p>
                        <p className="aboutUsLeadership_title">Founder &amp; CEO</p>
                        <a className="aboutUsLeadership_in" href="https://www.youtube.com">in</a>
                    </div>
                    <div className="aboutUsLeadership_card">
                        <img src={onexone} alt="Lendasse"/>
                        <p className="aboutUsLeadership_name">Amaury Lendasse</p>
                        <p className="aboutUsLeadership_title">Founder &amp; CTO</p>
                        <a className="aboutUsLeadership_in" href="https://www.youtube.com">in</a>
                    </div>
                </div>
            </div>

            {/**ADVISORY */}
            <div className="aboutUsAdvisory">
                <h2>Advisory Board</h2>
                <div className="aboutUs_hr"></div>
                <div className="aboutUsAdvisory_members">
                    <div className="aboutUsAdvisory_member">
                        <img src={onexone} alt="Berenstein"/>
                        <p className="aboutUsAdvisory_name">Gilad Berenstein</p>
                        <a className="aboutUsAdvisory_in" href="https://www.youtube.com">in</a>
                    </div>
                    <div className="aboutUsAdvisory_member">
                        <img src={onexone} alt="Berenstein"/>
                        <p className="aboutUsAdvisory_name">Gilad Berenstein</p>
                        <a className="aboutUsAdvisory_in" href="https://www.youtube.com">in</a>
                    </div>
                    <div className="aboutUsAdvisory_member">
                        <img src={onexone} alt="Berenstein"/>
                        <p className="aboutUsAdvisory_name">Gilad Berenstein</p>
                        <a className="aboutUsAdvisory_in" href="https://www.youtube.com">in</a>
                    </div>
                </div>
            </div>

            {/**NEWS */}
            <div className="aboutUsNews">
                <h2>Latest News</h2>
                <div className="aboutUs_hr"></div>
                <div className="aboutUsNews_articles">
                    <div className="aboutUsNews_article">
                        <img src={onexone} alt="Article"/>
                        <p className="aboutUsNews_date">May 2021</p>
                        <h3>AI Reimagined: How Smaller Data Sets Hold the Key to Better Business Insights</h3>
                        <p className="aboutUsNews_p">Edammo CEO, Ed Ratner is featured on The Maven's Haven podcast to discuss the conception of Edammo and their unique value proposition.</p>
                        <div className="aboutUsNews_border"></div>
                        <a href="https://themavenshavens.com/2021/05/04/ai-reimagined-how-smaller-data-sets-hold-the-key-to-better-business-insights/">
                            <button className="aboutUsNews_view" type="button">View Article</button>
                        </a>
                    </div>
                    <div className="aboutUsNews_article">
                        <img src={onexone} alt="Article"/>
                        <p className="aboutUsNews_date">September 2019</p>
                        <h3>Edammo: Reinventing Predictive Analytics with Real-Time Learning</h3>
                        <p className="aboutUsNews_p">Edammo is featured in Pharmatech Outlook as a novel company in the AI space that offers break-through machine learning solutions for the pharmaceutical industry.</p>
                        <a href="https://artificial-intelligence.pharmatechoutlook.com/vendor/edammo-reinventing-predictive-analytics-with-realtime-learning-cid-352-mid-40.html">
                            <button className="aboutUsNews_view" type="button">View Article</button>
                        </a>
                    </div>
                </div>
            </div>

            {/**HIRING */}
            <div className="aboutUsHiring">
                <div className="aboutUsHiring_left">
                    <img src={onexone} alt="hiring"/>
                </div>
                <div className="aboutUsHiring_right">
                    <div className="aboutUsHiring_text">
                        <h2>We are Hiring</h2>
                        <p>Check our current opportunities</p>
                        <Link to="/careers">
                            <button className="aboutUsHiring_careers" type="button">
                                Careers
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs
