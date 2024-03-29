import { FaRegCalendar } from 'react-icons/fa6'

export default function DailyQuizCard({
  name,
  image,
  date,
  status,
  question,
}: {
  name: string
  image: string
  date: Date
  status: boolean
  question: number
}) {
  const formattedDate: string = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="card card-compact mx-1 max-w-56 border bg-base-100 shadow-base-content">
      <figure className="relative">
        <img className="h-28 w-full object-cover sm:h-[140px]" src={image} alt="quiz image" />
        <span className="absolute bottom-4 right-2 z-10 rounded-md bg-[#0d6efd] p-1 text-[10px] text-white sm:text-[12px] ">{question} Qs</span>
      </figure>

      <div className="card-body" style={{ padding: '12px' }}>
        <h2 className="h-[55px] text-base font-medium sm:text-lg">{name.length > 30 ? `${name.slice(0, 30)}...` : name}</h2>
        <div className="flex justify-between">
          <div className="flex flex-wrap items-center justify-center gap-1 text-xs font-medium sm:gap-2 sm:text-base">
            <FaRegCalendar className="text-base " /> {formattedDate}
          </div>

          {/* if quiz is already played  */}
          {status && (
            <div className="flex items-center gap-1 text-[12px] font-medium uppercase sm:gap-2 ">
              <img src="/images/done.png" alt="bible quiz done image" />
              done
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
