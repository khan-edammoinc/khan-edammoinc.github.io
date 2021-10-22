import React from 'react'
import { Link } from 'react-router-dom';
import "./IndustriesSubTemplate.css";

function IndustriesSubTemplate({
    bannerh1,
    bannerp,
    bannerImgSrc,
    bannerImgAlt,
    underBanner,
    solutions, // h1 and p
    footer,
    footerCred,
}) {
    return (
        <div className="industriesSub">
            {/**BANNER */}
            <div className="industriesSubBanner">
                <div className="industriesSubBanner_card">
                    <h1>{bannerh1}</h1>
                    <p>{bannerp}</p>
                    <Link to="/getstarted">
                        <div className="industriesSubBanner_demo">
                            <p>Free Demo</p>
                        </div>
                    </Link>
                </div>
                <img src={bannerImgSrc} alt={bannerImgAlt}/>
            </div>

            {/**UNDERBANNER */}
            <div className="industriesSubUnderBanner">
                <p>{underBanner}</p>
            </div>

            {/**SOLUTIONS */}
            <div className="industriesSubSolutions">
                <h2>Our Solutions</h2>
                <div className="industriesSubSolutions_list">
                    {solutions.map(sln => <div key={sln} className="industriesSubSolutions_item">
                        <h3>{sln[0]}</h3>
                        <p>{sln[1]}</p>
                    </div>)}
                </div>
            </div>

            {/**FOOTER */}
            <div className="industriesSubFooter">
                <p>"{footer}"<br/>
                {footerCred}</p>
            </div>
        </div>
    )
}

export default IndustriesSubTemplate
