import React from "react";
import Slider from "react-slick";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import Link from "next/link";
import { Title } from "./common/Title";
import { testimonial as testimonialData } from "@/assets/data/dummydata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow({ onClick }) {
  return (
    <div className="slick-arrow">
      <button className="next" onClick={onClick}>
        <RiArrowRightSLine size={25} />
      </button>
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="slick-arrow">
      <button className="prev" onClick={onClick}>
        <RiArrowLeftSLine size={25} />
      </button>
    </div>
  );
}

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="testimonial">
      <div className="container">
        <div className="heading-title">
          <Title title="WHAT CLIENTS SAY ABOUT OUR WORK" />
        </div>
        <div className="cards">
          {Array.isArray(testimonialData) && testimonialData.length > 0 ? (
            <Slider {...settings}>
              {testimonialData.map((user, i) => (
                <div key={i}>
                  <div className="card">
                    <div className="image">
                      <div className="img">
                        <img src={user.cover} alt={user.name} />
                      </div>
                      <div className="img-text">
                        <h3>{user.name}</h3>
                        <span>{user.post}</span>
                      </div>
                    </div>
                    <div className="details">
                      <p>{user.desc}</p>
                      <Link href="/#">
                        VIEW CASE <HiOutlineArrowRight className="link-icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p>No testimonials available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
