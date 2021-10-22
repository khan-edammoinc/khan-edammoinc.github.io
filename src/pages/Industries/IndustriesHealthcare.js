import React from 'react'
import IndustriesSubTemplate from './IndustriesSubTemplate';
import sixteenxnine from "./res/16x9placeholder.png";

function IndustriesHealthcare() {
    return (
        <IndustriesSubTemplate
            bannerh1="Healthcare"
            bannerp="The future of Healthcare is utilizing machine learning to address critical Healthcare challenges. These include workflow solutions, patient monitoring and treatments."
            bannerImgSrc={sixteenxnine}
            bannerImgAlt="Performing Surgery"
            underBanner="Improve Patient Care and Care Providers through Edammo AI-Driven Intelligence"
            solutions={[
                ["Real-Time Medical Monitoring", "Real-Time technology connects to patient censors and heart rate monitoring systems to analyze real-time patient data.  Subtle changes in heart-rate, blood pressure and body temperature are detected by Edammo technology so medical staff can assess the situation with speed and efficacy."],
                ["AI-Driven Diagnostics", "Patient data is analyzed to determine relevant information. This data is compared with thousands of other patients in order to compare the likeliness of disease for prospective patients. This ensures that at-risk patients receive medical care as soon as possible."],
            ]}
            footer="AI will not replace doctors, but instead will augment them, enabling physicians to practice with greater accuracy and increased efficiency."
            footerCred="-Benjamin Bell"
        />
    )
}

export default IndustriesHealthcare
