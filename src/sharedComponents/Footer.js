import React from 'react'
import brand from "../assets/images/fortunebrands.svg"

const Footer = () => {
    return (
        <div className='FooterMain'>
            <div className='row' >
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <div className='Map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34880.70560256825!2d55.21897897827466!3d25.083542026470155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1704750932405!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='HeaderList'>
                        <ul>
                            <li><a href="#dashBoardMe">Home</a></li>
                            <li><a href="#ServicesMe">Collaction</a></li>
                            <li><a href="#ResumeMe">Showroom</a></li>
                            <li><a href="#AboutMe">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='DetailsFoot'>
                        <p className='footHeading'>Fartune Brands</p>
                        <p className='footAddress'>Av. Pdte. Masaryk 454, Polanco, Polanco III Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX, Mexico</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer