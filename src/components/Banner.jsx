import React from 'react'
import banner1 from '../assets/Banner1.png'
import banner2 from '../assets/Banner2.png'
import banner3 from '../assets/Banner3.png'

function Banner() {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="banner d-block w-100 mx-auto" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="banner d-block w-100 mx-auto" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="banner d-block w-100 mx-auto" alt="..." />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner
