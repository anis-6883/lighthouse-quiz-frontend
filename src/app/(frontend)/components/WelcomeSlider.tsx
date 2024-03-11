'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import WelcomeCard from './WelcomeCard'

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
  }

  return (
    <Slider {...settings}>
      <WelcomeCard title="Welcome" ImageSrc="/images/logo.png" quote={<>Register or Login to learn and participate in our Bible Quiz!</>} />
      <WelcomeCard
        title="Learn it!"
        ImageSrc="/images/learn_it.png"
        quote={<>Explore the Bible&apos;s depths and grow deeper by studying the Words of God</>}
      />

      <WelcomeCard
        title="Live it!"
        ImageSrc="/images/live_it.png"
        quote={
          <>
            Walk in God’s Path and let God’s word guide our steps, shape our actions <br />
            and how we walk in our day-to-day life
          </>
        }
      />

      <WelcomeCard
        title="Share it!"
        ImageSrc="/images/share_it.png"
        quote={
          <>
            Share the amazing Word of God that you learned with others
            <br /> and let us build His Kingdom together
          </>
        }
      />
    </Slider>
  )
}
