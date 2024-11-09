import React from 'react';
import Navbar from './Navbar';
function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/mir.png)] bg-right lg:bg-[10%] bg-cover"
      style={{ backgroundSize: "35%",backgroundPosition:"left 100px top 100px" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-light leading-tight flex lg:justify-start justify-center items-center">
          <div className="text-center lg:text-left">
            <p data-aos="zoom-out-up">Me</p>
            <p data-aos="zoom-out-up">Mir</p>
            <p data-aos="zoom-out-up">Muhammad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
