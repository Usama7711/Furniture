import React from 'react'
import vedio from "../assets/InteriorDesigh.webm"
import logo from "../assets/images/fortunebrands.svg"
import Collactions from './Collactions'

const HomePage = () => {
    return (
        <>
            <div className='Homepage'>
                <video autoPlay loop muted playsInline>
                    <source src={vedio}  type="video/mp4" />
                </video>
            </div>
            <div className='HomePageContain'>
                <img src={logo} />
                <h1>YOUR BRAND NAME</h1>
                <h5>Your destination for a unique shopping experience of premium products</h5>
                <button>know More</button>
            </div>
        </>

    )
}

export default HomePage