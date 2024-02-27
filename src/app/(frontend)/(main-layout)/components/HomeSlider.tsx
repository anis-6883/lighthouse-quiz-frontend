'use client'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import DailyQuizCard from '../components/DailyQuizCard'
import ImageCard from '../components/ImageCard'

export default function HomeSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <>
      <div>
        <h1 className=" my-3 py-2 text-xl font-normal text-[var(--text-color)] sm:text-2xl">Daily Verse Quiz</h1>
        <div className="slider-container">
          <Slider {...settings}>
            <Link href="/quiz">
              <DailyQuizCard name="Today English" ImageSrc="/images/Daily_Quiz.png" date="06.2.2024" />
            </Link>
            <Link href="/quiz">
              <DailyQuizCard name="Today English Daily Quiz" ImageSrc="/images/home_popup_img.jpg" date="06.2.2024" />
            </Link>
            <Link href="/quiz">
              <DailyQuizCard name="Today English Daily Quiz" ImageSrc="/images/Daily_Quiz.png" date="06.2.2024" />
            </Link>
            <Link href="/quiz">
              <DailyQuizCard name="Today English Daily Quiz text for long test form hit " ImageSrc="/images/home_popup_img.jpg" date="06.2.2024" />
            </Link>
          </Slider>
          {/* <div className="text-center py-10 px-[75px] text-base font-semibold leading-8">
							No Daily Quiz today. Take this time to reflect on His words. Join
							us again tomorrow !
						</div> */}
        </div>
      </div>
      <div>
        <h1 className="my-4 py-2 text-xl font-normal text-[var(--text-color)] sm:text-2xl">Upcoming ...</h1>
        <Slider {...settings}>
          <ImageCard ImageSrc="/images/home_popup_img.jpg" />
          <ImageCard ImageSrc="/images/Daily_Quiz.png" />
          <ImageCard ImageSrc="/images/home_popup_img.jpg" />
          <ImageCard ImageSrc="/images/Daily_Quiz.png" />
        </Slider>
      </div>
    </>
  )
}
