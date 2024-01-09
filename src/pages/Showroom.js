import React, { useState } from 'react'
import store1 from "../assets/images/Store (1).jpg"
import store2 from "../assets/images/Store (2).jpg"
import Carousel from 'react-bootstrap/Carousel';

const Showroom = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const [index2, setIndex2] = useState(0);

    const handleSelect2 = (selectedIndex) => {
        setIndex2(selectedIndex);
    };
    return (
        <div className='ShowroomMain' id='ResumeMe'>
            <div className='container '>
                <div className='row'>
                    <h2 className='ShowroomHeading'>Our Outlet's</h2>
                    <div className='col-lg-6 col-md-12'>
                        <div className='ShowroomImage'>
                            <div className='ShowroomImage'>
                                <Carousel activeIndex={index2} onSelect={handleSelect2}>
                                    <Carousel.Item>
                                        <img src={store2} alt='Store' />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={store1} alt='Store' />
                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='showroomDetails'>
                            <p className='showHeading'>IKEA Furniture Store</p>
                            <p className='showAddress'>Al Barsha South, Al Barsha - Dubai - United Arab Emirates</p>
                            <p className='showSpecialized'>A Specialized furniture store</p>
                            <ul className='showlist'>
                                <li>Frame material</li>
                                <li>Cushion filling</li>
                                <li>Polyester fibres</li>
                                <li>Feather , Suspension</li>
                                <li>Frame joints</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='showroomDetails'>
                            <p className='showHeading'>Fendi Casa</p>
                            <p className='showAddress'>Av. Pdte. Masaryk 454, Polanco, Polanco III Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX, Mexico</p>
                            <p className='showSpecialized'>A Specialized furniture store</p>
                            <ul className='showlist'>
                                <li>Stability and structural integrity</li>
                                <li>Weight and density indicating durability</li>
                                <li>Sustainability and eco-friendliness</li>
                                <li>Craftsmanship and attention to detail</li>
                                <li>Longevity and resilience over time</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='ShowroomImage'>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <img src={store2} alt='Store' />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={store1} alt='Store' />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showroom