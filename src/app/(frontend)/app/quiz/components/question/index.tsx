'use client'

import Button from '@/app/(frontend)/components/Button'
import MCQOption from '../MCQOption'
import TopBar from '../topBar'
import QuestionCard from './QuestionCard'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import postData from '@/utils/fetch/postData'
import { useSession } from 'next-auth/react'
import LeaderBoard from '../leaderboard'
import notify from './notify'

type Question = {
  _id: string
  question: string
  type: string
  answer: number[]
  options: {
    title: string
    image?: string
    _id: string
  }[]
  duration: number
  status: boolean
  createdAt: string
  updatedAt: string
  image?: string
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

const calculateScore = (remaining: number, duration: number) => {
  const points = 1000
  const timeSpent = duration - remaining
  const score = points - timeSpent * 10 // deduct 10 points per second
  return score
}

export default function Question({ questions, quizId }: { questions: Question; quizId: string }) {
  const [serial, setSerial] = useState(0)
  const [seconds, setSeconds] = useState(-1)
  const { data: session }: any = useSession()
  const [leaderBoard, setLeaderBoard] = useState(false)

  const handleQuestion = async (answer: number) => {
    let point = 0

    if (questions[serial].answer[0] === answer || answer === -1) {
      point = calculateScore(seconds, questions[serial].duration)
      notify(true, point)
      playCorrectAudio()
    } else {
      notify(false)
      playIncorrectAudio()
    }

    postData('daily-quiz/answer', session?.accessToken, {
      quizId,
      answer: {
        quesId: questions[serial]._id,
        answered: [answer],
        time: seconds,
        point,
      },
      isFinished: questions.length - 1 === serial,
    })

    setSerial((prev) => (prev < questions.length - 1 ? prev + 1 : prev))
    setSeconds(-1)
  }

  // show leader board after every 3 questions
  useEffect(() => {
    if (serial > 0 && (serial === questions.length - 1 || serial % 3 === 0)) {
      setLeaderBoard(true)
    }
  }, [questions.length, serial])

  //hide leader board in 3 seconds
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (leaderBoard) {
      timeoutId = setTimeout(() => {
        setLeaderBoard(false)
      }, 3000) // 3000 milliseconds = 3 seconds
    }
    return () => clearTimeout(timeoutId)
  }, [leaderBoard])

  if (leaderBoard) return <LeaderBoard />

  return (
    <div className="w-full select-none">
      <TopBar
        progress={`${serial + 1}/${questions.length}`}
        duration={questions[serial].duration}
        seconds={seconds}
        setSeconds={setSeconds}
        action={handleQuestion}
      />
      <QuestionCard question={questions[serial]?.question} />

      {seconds !== -1 && (
        <div className="pt-6">
          {questions[serial].type === 'multiple' &&
            questions[serial].options.map((option, index) => (
              <MCQOption key={option._id} index={index} action={handleQuestion} bg_color={`${optionColors[index]}`} title={option.title} />
            ))}

          {/* <McqCard bg_color="bg-[var(--ans-option-one)]" option_text="hello bangladesh" imageSrc="/images/Live_Quiz.png" />
            <CheckboxCard bg_color="bg-[var(--ans-option-two)]" option_text="Open Hello Bangladesh" />
            <OpenendedCard /> */}
        </div>
      )}

      <br />
      {/* <Button type="submit" height={16} title="submit answer" onClick={() => handleQuestion(-1)} /> */}
    </div>
  )
}
