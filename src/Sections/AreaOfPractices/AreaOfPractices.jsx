import React from 'react'
import './AreaOfPractices.css'
import business from "../../assets/businessLaw.svg"
import partnership from "../../assets/partnership.svg"
import realestate from "../../assets/realestate.svg"
import businesslaws from "../../assets/businesslaws.svg"
import landlord from "../../assets/landlord.svg"
import elderabuse from "../../assets/elderabuse.svg"

const AreaOfPractices = () => {
    return (
        <div className='areaofpractices'>
            <h1>Area of Practices</h1>
            <div className='imgcontainer'>
                <div className='grid'>
                    <img className='bigimg' src={business} alt="kunalborkar2001@gmail.com" />
                    <img className='smallimg' src={partnership} alt="kunalborkar2001@gmail.com" />
                </div>
                <div className='grid'>
                    <img className='smallimg' src={realestate} alt="kunalborkar2001@gmail.com" />
                    <img className='bigimg' src={businesslaws} alt="kunalborkar2001@gmail.com" />
                </div>
                <div className='grid'>
                    <img className='bigimg' src={landlord} alt="kunalborkar2001@gmail.com" />
                    <img className='smallimg' src={elderabuse} alt="kunalborkar2001@gmail.com" />
                </div>
            </div>
        </div>
    )
}

export default AreaOfPractices