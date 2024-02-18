'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import WelcomeCard from './WelcomeCard';

export default function WelcomeSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dotsClass: `slick-dots`,
  };

  return (
    <Slider {...settings}>
      <WelcomeCard
        title="Welcome"
        ImageSrc="/images/logo.png"
        quote="Register or Sign-in to learn to participate in our Bible Quiz!"
      />
      <WelcomeCard
        title="Learn it!"
        ImageSrc="/images/learn_it.png"
        quote="Explore the Bible's depths and grow deeper by studying the Word of God."
      />
      <WelcomeCard
        title="Live it!"
        ImageSrc="/images/live_it.png"
        quote="Walk in God’s Path and let God’s word guide our steps, shape our actions and how we walk in our day-to-day life."
      />
      <WelcomeCard
        title="Share it!"
        ImageSrc="/images/share_it.png"
        quote="Share the amazing Word of God that you learnt with others and let us build His Kingdom together."
      />
    </Slider>
  );
}
