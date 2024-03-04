'use client'

import Button from '@/app/(frontend)/components/Button'
import MCQOption from '../MCQOption'
import TopBar from '../topBar'
import QuestionCard from './QuestionCard'
import { useState } from 'react'
import toast from 'react-hot-toast'

type Question = {
  _id: string
  question: string
  type: string
  answer: number[]
  options: { title: string; image: string; _id: string }[]
  duration: number
  status: boolean
  createdAt: string
  updatedAt: string
  image?: undefined
}[]

const optionColors = ['bg-[#3779ff]', 'bg-[#7a5548]', 'bg-[#ff981f]', 'bg-[#607d8a]']

const playIncorrectAudio = () => {
  const audio = new Audio('/audio/incorrect.mp3')
  audio.play()
}

const playCorrectAudio = () => {
  const audio = new Audio('/audio/correct.mp3')
  audio.play()
}

export default function Question({ questions }: { questions: Question }) {
  const [serial, setSerial] = useState(0)
  const [seconds, setSeconds] = useState(-1)

  const handleQuestion = (answer: number) => {
    if (questions[serial].answer[0] === answer || answer === -1) {
      toast.success('Your answer is correct')
      playCorrectAudio()
    } else {
      toast.error('Your answer is incorrect')
      playIncorrectAudio()
    }

    setSerial((prev) => prev + 1)
    setSeconds(-1)
  }

  return (
    <div className="w-full">
      <TopBar progress={`${serial + 1}/${questions.length}`} duration={15} seconds={seconds} setSeconds={setSeconds} action={handleQuestion} />
      <QuestionCard question={questions[serial]?.question} />

      <div className="pt-6">
        {questions[serial].type === 'multiple' &&
          questions[serial].options.map((option, index) => (
            <MCQOption key={option._id} index={index} action={handleQuestion} bg_color={`${optionColors[index]}`} title={option.title} />
          ))}

        {/* <McqCard bg_color="bg-[var(--ans-option-one)]" option_text="hello bangladesh" imageSrc="/images/Live_Quiz.png" />
            <CheckboxCard bg_color="bg-[var(--ans-option-two)]" option_text="Open Hello Bangladesh" />
            <OpenendedCard /> */}
      </div>
      <br />
      <Button type="submit" height={16} title="submit answer" onClick={() => handleQuestion(-1)} />
    </div>
  )
}
