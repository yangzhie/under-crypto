import React, { useState, useEffect } from 'react'

import './Reviews.css'

function Reviews() {
    const [condition, setCondition] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setCondition(entry.isIntersecting)
            });
        });

        const targetElements = document.querySelectorAll('.hidden')
        targetElements.forEach((el) => observer.observe(el))
    }, [])

    return (
        <div className='bg'>
            <img className={`hidden ${condition ? 'show' : 'hidden'}`} src="src/assets/finder-awards.png" alt="" />
            <img className={`hidden ${condition ? 'show' : 'hidden'}`} src="src/assets/forex-brokers.png" alt="" />
            <img className={`hidden ${condition ? 'show' : 'hidden'}`} src="src/assets/forbes-advisor.png" alt="" />
            <img className={`hidden ${condition ? 'show' : 'hidden'}`} src="src/assets/trustpilot.png" alt="" />
        </div>
    );
}

export default Reviews
