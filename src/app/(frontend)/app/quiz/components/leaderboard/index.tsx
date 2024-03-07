'use client'
import { useEffect, useState } from 'react'
import UserPoint from './UserPoint'
import postData from '@/utils/fetch/postData'
import { useSession } from 'next-auth/react'

export default function LeaderBoard({ quizId, isFinished }: { quizId: string; isFinished: Boolean }) {
  const { data: session }: any = useSession()
  const token = session?.accessToken || ''
  const [leaderBoard, setLeaderBoard] = useState([])

  useEffect(() => {
    const getLeaderBoard = async () => {
      const response = await postData('daily-quiz/leaderboard', token, { quizId, finalLeaderBoard: isFinished })
      if (response.status) setLeaderBoard(response.data)
    }
    getLeaderBoard()
  }, [isFinished, quizId, token])

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl bg-[var(--leader-board-bg-color)] bg-[url('/images/box_bg.png')] bg-cover bg-no-repeat">
      <div className="w-full px-6 pt-6 text-white sm:px-8">
        <h1 className="text-center text-2xl font-semibold tracking-wide ">Leader board</h1>
        <p className="pb-1 pt-2 text-center">Answers submitted! 🚀</p>
        <p className="pb-6 text-center">Please wait, and we&apos;ll unveil your results soon.</p>
        <hr className=" border border-[#A592FF] " />
      </div>

      <div className="py-3">
        {leaderBoard.map((player: { rank: number; userName: string; userId: string; totalPoints: number }) => (
          <UserPoint key={player.rank} rank={player.rank} name={player.userName} isActive={session.userId === player.userId} point={player.totalPoints} />
        ))}
      </div>
    </main>
  )
}
