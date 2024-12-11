import React from "react";

function Carousel() {
    return (
        <div className="row">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/imgs/room1.jpg" className="d-block w-100" alt="room1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/imgs/room2.jpg" className="d-block w-100" alt="room2" />
                    </div>
                    <div className="carousel-item">
                        <img src="/imgs/room3.jpg" className="d-block w-100" alt="room3" />
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
        </div>
    );
}

export default Carousel;
