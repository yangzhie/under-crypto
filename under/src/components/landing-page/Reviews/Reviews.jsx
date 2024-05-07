import React, { useState, useEffect } from 'react'

import './Reviews.css'

import finderImg from '/src/assets/finder-awards.png'
import forexImg from '/src/assets/forex-brokers.png'
import forbesImg from '/src/assets/forbes-advisor.png'
import tpImg from '/src/assets/trustpilot.png'

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
            <img className={`hidden ${condition ? 'show' : 'hidden'}`} src={finderImg} />
            <img className={`hidden ${condition ? 'show' : 'hidden'}`} src={forexImg} />
            <img className={`hidden ${condition ? 'show' : 'hidden'}`} src={forbesImg} />
            <img className={`hidden ${condition ? 'show' : 'hidden'}`} src={tpImg} />
        </div>
    );
}

export default Reviews
