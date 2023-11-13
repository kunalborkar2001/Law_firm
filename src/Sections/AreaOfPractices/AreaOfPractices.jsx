import React from 'react'
import './AreaOfPractices.css'
import business from "../../assets/businessLaw.svg"
import partnership from "../../assets/partnership.svg"
import realestate from "../../assets/realestate.svg"
import landlord from "../../assets/landlord.svg"
import elderabuse from "../../assets/elderabuse.svg"


const AreaOfPractices = () => {
    return (
        <div className='areaofpractices'>
            <h1>Area of Practices</h1>
            <div className='imgcontainer'>
                <div className='grid'>
                    <div style={{ position: "relative" }}>
                        <img className='bigimg' src={business} alt="kunalborkar2001@gmail.com" />
                        <p className='under'>BUSINESS LAW</p>
                    </div>
                    <div style={{ position: "relative" }}>
                        <img className='smallimg' src={partnership} alt="kunalborkar2001@gmail.com" />
                        <p className='under'>PARTNERSHIP LAW</p>
                    </div>
                </div>
                <div className='grid'>
                    <div style={{ position: "relative" }}>
                        <img className='smallimg' src={realestate} alt="kunalborkar2001@gmail.com" />
                        <p className='under'>REAL ESTATE LAW</p>
                    </div>
                    <div style={{ position: "relative" }}>
                        <img className='bigimg' src={business} alt="kunalborkar2001@gmail.com" />
                        <p className='under'>BUSINESS LAW</p>
                    </div>
                </div>
                <div className='grid'>
                    <div style={{ position: "relative" }}>
                        <img className='bigimg' src={landlord} alt="kunalborkar2001@gmail.com" />
                        <p className='under'>LANDLORD DISPUTES</p>
                    </div>
                    <div style={{ position: "relative" }}>
                        <img className='smallimg' src={elderabuse} alt="kunalborkar2001@gmail.com" />
                        <p className='under'>ELDER ABUSE</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AreaOfPractices