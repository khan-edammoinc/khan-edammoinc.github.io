import React from 'react'
import CaseStudiesSubTemplate from './CaseStudiesSubTemplate';
import onexone from "./res/1x1placeholder.png";

function CaseStudiesHumanResourceTech() {
    return (
        <CaseStudiesSubTemplate
            bannerh1="Our Work"
            bannerp="How Edammo Analytics Supports Recruiters through Real-Time Candidate Recommendation Engine"
            fleximg1={onexone}
            flexhn1="The Challenge"
            flexText1={<p>Recruiters at an established bio-pharmaceutical company spent days using search engines to find candidates of interest. Team KPIs were measured by the amount of time the recruiter needed to fill a preliminary candidate list.</p>}
            fleximg2={onexone}
            flexhn2="The Solution"
            flexText2="Edammo developed a full custom application running on-premise that integrates with a number of commercial resume databases. Recruiters provide search terms and vote in real-time on presented resumes allowing the learning model to also update in real-time and present a final resume list."
            fleximg3={onexone}
            flexhn3="The Result"
            flexPercent3="96"
            flexp3="decrease in time needed to find a viable candidate"
        />
    )
}

export default CaseStudiesHumanResourceTech
