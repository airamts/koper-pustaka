import React from "react";


function BookCarousel({ image }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="book-carousel d-flex flex-column w-70">
        <div
          id="carouselExampleIndicators"
          className="carousel slide d-flex flex-column"
        >
          <div className="carousel-indicators mb-0">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div
            className="carousel-inner d-fex align-items-center justify-content-center"
            style={{ height: "26rem" }}
          >
            <div className="carousel-item active d-flex align-items-center justify-content-center">
              <img src={image} style={{ width: "16rem" }} alt="image" />
            </div>
            <div className="carousel-item d-flex align-items-center justify-content-center">
              <img src={image} style={{ width: "16rem" }} alt="image" />
            </div>
            <div className="carousel-item d-flex align-items-center justify-content-center">
              <img src={image} style={{ width: "16rem" }} alt="image" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <img src="/images/arrow-left-icon.svg" alt="" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <img src="/images/arrow-right-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCarousel;
