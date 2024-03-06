'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import DailyQuizCard from './DailyQuizCard'
import Link from 'next/link'
import { settings } from './SliderSettings'
import { routes } from '@/config/routes'

type Props = {
  data: {
    _id: string
    title: string
    image: string
    question: string[]
    publishDate: Date
    done: boolean
  }[]
}

export default function DailyQuizSlider({ data }: Props) {
  return (
    <section>
      <h1 className="my-3 py-2 text-xl font-normal text-[var(--text-color)] sm:text-2xl">Daily Verse Quiz</h1>
      <div className="slider-container">
        {data?.length === 0 ? (
          <div className="px-[75px] py-10 text-center text-base font-semibold leading-8">
            No Daily Quiz today. Take this time to reflect on His words. Join us again tomorrow!
          </div>
        ) : (
          <Slider {...settings}>
            {data?.map((dailyQuiz) => (
              <Link key={dailyQuiz?._id} href={`${routes.quiz}/daily/${dailyQuiz._id}`}>
                <DailyQuizCard
                  name={dailyQuiz?.title}
                  image={dailyQuiz?.image}
                  date={dailyQuiz?.publishDate}
                  status={dailyQuiz?.done}
                  question={dailyQuiz?.question?.length}
                />
              </Link>
            ))}
          </Slider>
        )}
      </div>
    </section>
  )
}
