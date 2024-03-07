'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import ImageCard from '../components/ImageCard'
import { settings } from './SliderSettings'

export default function UpcomingFeatures({ data }: { data: { title: string; image: string }[] }) {
  return (
    <div>
      <h1 className="my-4 py-2 text-xl font-normal text-[var(--text-color)] sm:text-2xl">Upcoming ...</h1>
      <Slider {...settings}>
        {data.map((feature) => (
          <ImageCard key={feature.image} ImageSrc={feature.image} />
        ))}
      </Slider>
    </div>
  )
}
