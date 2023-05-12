import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import WebDev from "../../img/webdev.jpg";
import Stock from "../../img/stock.jpg";
import Calculus from "../../img/calculus.png";
import Music from "../../img/music.jpg";
import { themeContext } from "../../Context";
import { Typography } from "@mui/material";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Find your interests</span>
      <span>We will help you find or create your own interests</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={WebDev} alt="" />
          <Typography>Web development</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Stock} alt="" />
          <Typography>Stock Investment</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Music} alt="" />
          <Typography>Musics</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Calculus} alt="" />
          <Typography>Calculus</Typography>
        </SwiperSlide>
      </Swiper>

      <a href="https://forms.gle/8byKgwRBMM8oaKdGA" target="_blank">
        <button className="button i-buttonn">Let us know your interests</button>
      </a>
    </div>
  );
};

export default Portfolio;
