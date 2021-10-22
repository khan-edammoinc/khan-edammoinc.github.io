import React from 'react'
import "./CaseStudiesSubTemplate.css";

function CaseStudiesSubTemplate({
    bannerh1,
    bannerp,
    subbanner, // [video, h2, p]
    fleximg1,
    flexhn1,
    flexText1,
    fleximg2,
    flexhn2,
    flexText2,
    fleximg3,
    flexhn3,
    flexPercent3, // number
    flexp3,
}) {
    return (
        <div className="caseSub">
            
            {/**BANNER */}
            <div className="caseSubBanner">
                <div className="caseSubBanner_card">
                    <h1>{bannerh1}</h1>
                    <p>{bannerp}</p>
                </div>
            </div>

            {/**FLEX1 */}
            <div className="caseSubFlex">
                <div className="caseSubFlex_img">
                    <img src={fleximg1} alt={flexhn1}/>
                </div>
                <div className="caseSubFlex_text">
                    <div className="caseSubFlex_textPlaynice">
                        <h3>{flexhn1}</h3>
                        <div className="caseSubFlex_textContent">
                            {flexText1}
                        </div>
                    </div>
                </div>
            </div>

            {/**FLEX2 */}
            <div className="caseSubFlex caseSubFlexFlip">
                <div className="caseSubFlex_img">
                    <img src={fleximg2} alt={flexhn2}/>
                </div>
                <div className="caseSubFlex_text">
                    <div className="caseSubFlex_textPlaynice">
                        <h3>{flexhn2}</h3>
                        <div className="caseSubFlex_textContent">
                            {flexText2}
                        </div>
                    </div>
                </div>
            </div>

            {/**FLEX3 */}
            <div className="caseSubFlex caseSubFlex3">
                <div className="caseSubFlex_img">
                    <img src={fleximg3} alt={flexhn3}/>
                </div>
                <div className="caseSubFlex_text">
                    <div className="caseSubFlex_textPlaynice">
                        <h3>{flexhn3}</h3>
                        <div className="caseSubFlex_textContent">
                            <p className="caseSubFlex_perc3">
                                {flexPercent3}%
                            </p>
                            <p className="caseSubFlex_flexp3">
                                {flexp3}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CaseStudiesSubTemplate
