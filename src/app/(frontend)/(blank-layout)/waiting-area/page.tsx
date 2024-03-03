import { metaObject } from '@/config/site.config'
import LeaveQuiz from '../../components/LeaveQuiz'
import Participant from '../../components/Participant'

export const metadata = {
  ...metaObject('Waiting Area'),
}

export default function Page() {
  return (
    <main className="relative m-auto min-h-screen w-full max-w-3xl overflow-hidden bg-[#7456ff] bg-[url('/images/Group_vector.png')] bg-cover bg-center bg-no-repeat px-4 pt-6  sm:px-12 ">
      <div className="grid grid-flow-row justify-items-center gap-4 text-center">
        <h1 className="pt-1 text-xl font-normal text-white sm:text-2xl">Waiting for Participants to Join...</h1>
        <div className="card w-full max-w-[280px] bg-white shadow-2xl sm:max-w-[300px]">
          <figure className="px-3 pt-3">
            <img src="/images/Live_Quiz.png" alt="quiz image" className="h-full max-h-[180px] w-full rounded-2xl sm:max-h-[200px]" />
          </figure>
          <div className=" p-2 text-center">
            <h2 className="px-1 py-1 text-xl sm:text-[22px]">Live Quiz Title</h2>
            <hr className="my-2 h-[1px] w-full bg-slate-500" />
            <p className="px-1 pb-4 pt-2 text-base font-medium sm:px-2">2 players have joined</p>
          </div>
        </div>
        <div className="mt-3">
          <Participant name="shark" />
        </div>
      </div>
      <LeaveQuiz />
    </main>
  )
}
