'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import DailyQuizCard from './DailyQuizCard'
import Link from 'next/link'
import { settings } from './SliderSettings'

type Props = {
  data: {
    _id: string
    title: string
    image: string
    publishDate: Date
  }[]
}

export default function DailyQuizSlider({ data }: Props) {
  return (
    <section>
      <h1 className="my-3 py-2 text-xl font-normal text-[var(--text-color)] sm:text-2xl">Daily Verse Quiz</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {data?.map((dailyQuiz) => (
            <Link key={dailyQuiz?._id} href="/quiz">
              <DailyQuizCard name={dailyQuiz?.title} image={dailyQuiz?.image} date={dailyQuiz?.publishDate} status={dailyQuiz?.status} />
            </Link>
          ))}
        </Slider>
        {/* <div className="text-center py-10 px-[75px] text-base font-semibold leading-8">
							No Daily Quiz today. Take this time to reflect on His words. Join
							us again tomorrow !
						</div> */}
      </div>
    </section>
  )
}
