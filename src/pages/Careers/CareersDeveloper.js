import React from 'react'
import CareersSubTemplate from './CareersSubTemplate';

function CareersDeveloper() {
    return (
        <CareersSubTemplate
            header="Senior Software Developer"
            rolelist={[
                "Develop high-quality software",
                "Identify, prioritize and execute tasks in the software development life cycle",
                "Develop tools and applications by producing clean, efficient code",
                "Automate tasks through appropriate tools and scripting",
                "Review and debug code",
                "Perform validation and verification testing",
                "Collaborate with internal teams and vendors to fix and improve products",
                "Document development phases including writing detailled documentation",
            ]}
        />
    )
}

export default CareersDeveloper
