import React from 'react'
import funai1 from "../assets/images/funiture (1).jpg"
import funai2 from "../assets/images/funiture (2).jpg"
import funai3 from "../assets/images/funiture (3).jpg"
import funai4 from "../assets/images/funiture (4).jpg"
import funai5 from "../assets/images/funiture (5).jpg"
import funai6 from "../assets/images/funiture (6).jpg"
const Collactions = () => {
    return (
        <div className='CollactionMain' id='ServicesMe'>
            <div className='container '>
                <div className='row'>
                    <h2 className='CollactionHeading'>Collaction's</h2>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='CollactionMainCard'>
                            <img src={funai1} alt='' />
                            <div className='collactionCardDetails'>
                                <p className='productName'>Study Material</p>
                                <p className='productDetails'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='CollactionMainCard'>
                            <img src={funai2} alt='' />
                            <div className='collactionCardDetails'>
                                <p className='productName'>Bed Room Interior</p>
                                <p className='productDetails'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='CollactionMainCard'>
                            <img src={funai3} alt='' />
                            <div className='collactionCardDetails'>
                                <p className='productName'>living Area Design</p>
                                <p className='productDetails'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='CollactionMainCard'>
                            <img src={funai4} alt='' />
                            <div className='collactionCardDetails'>
                                <p className='productName'>Weston Design</p>
                                <p className='productDetails'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='CollactionMainCard'>
                            <img src={funai5} alt='' />
                            <div className='collactionCardDetails'>
                                <p className='productName'>Chair Design</p>
                                <p className='productDetails'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='CollactionMainCard'>
                            <img src={funai6} alt='' />
                            <div className='collactionCardDetails'>
                                <p className='productName'>Dining Tables</p>
                                <p className='productDetails'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collactions