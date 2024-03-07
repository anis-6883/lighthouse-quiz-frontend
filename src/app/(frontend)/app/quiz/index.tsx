'use client'

import Button from '@/app/(frontend)/components/Button'
import MCQOption from './components/MCQOption'
import TopBar from './components/topBar'
import QuestionCard from './components/QuestionCard'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import postData from '@/utils/fetch/postData'
import { useSession } from 'next-auth/react'
import LeaderBoard from './components/leaderboard'
import notify from './components/notify'

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

export default function Quiz({ questions, quizId }: { questions: Question; quizId: string }) {
  const [serial, setSerial] = useState(0)
  const [seconds, setSeconds] = useState(-1)
  const { data: session }: any = useSession()
  const [leaderBoard, setLeaderBoard] = useState(false)
  const [audio, setAudio] = useState(false)

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
    if (answer) {
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
    }
    setSeconds(0)

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        setSerial((prev) => (prev < questions.length - 1 ? prev + 1 : prev))
        setSeconds(-1)
        resolve()
      }, 3000)
    })
  }

  useEffect(() => {
    if (serial > 0 && (serial === questions.length - 1 || serial % 3 === 0)) {
      setLeaderBoard(true) // show leader board after every 3 questions
    }
  }, [questions.length, serial])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (leaderBoard) timeoutId = setTimeout(() => setLeaderBoard(false), 3000) //hide leader board in 3 seconds
    return () => clearTimeout(timeoutId)
  }, [leaderBoard])

  if (leaderBoard) return <LeaderBoard quizId={quizId} isFinished={questions.length - 1 === serial} />

  return (
    <div className="w-full select-none">
      <TopBar
        audio={audio}
        setAudio={setAudio}
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
              <MCQOption
                key={option._id}
                index={index}
                time={seconds}
                action={handleQuestion}
                bg_color={`${optionColors[index]}`}
                title={option.title}
              />
            ))}

          {/* 
          <McqCard bg_color="bg-[var(--ans-option-one)]" option_text="hello bangladesh" imageSrc="/images/Live_Quiz.png" />
          <CheckboxCard bg_color="bg-[var(--ans-option-two)]" option_text="Open Hello Bangladesh" />
          <OpenendedCard /> */}
        </div>
      )}

      <br />
      {/* <Button type="submit" height={16} title="submit answer" onClick={() => handleQuestion(-1)} /> */}
    </div>
  )
}
