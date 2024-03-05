'use client'

import { useEffect, useState } from 'react'
import { IoMdMusicalNote } from 'react-icons/io'
import { MdMusicOff } from 'react-icons/md'
import './timer.css'

function getPortion(partialValue: number, totalValue: number) {
  if (partialValue < 0) return ''

  const portionSize = totalValue / 3

  if (partialValue <= portionSize) {
    return 'bg-[#ff0000]'
  } else if (partialValue <= portionSize * 2) {
    return 'bg-amber-500'
  } else {
    return 'bg-green-600'
  }
}

export default function TopBar({
  seconds,
  setSeconds,
  duration,
  action,
  progress,
}: {
  progress: string
  seconds: number
  setSeconds: Function
  duration: number
  action: Function
}) {
  const [audio, setAudio] = useState(false)

  useEffect(() => {
    if (seconds > 0) {
      const timeoutId = setTimeout(() => {
        setSeconds(seconds - 1)
      }, 1000)

      return () => clearTimeout(timeoutId) // Cleanup function
    } else if (seconds === -1) {
      setSeconds(duration)
    } else if (seconds === 0) {
      action()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, seconds])

  return (
    <div>
      <audio controls={false} autoPlay={true} muted={!audio} loop={true}>
        <source src="/audio/quiz.mp3" />
      </audio>

      <div className="flex items-center justify-between bg-[#fff] font-medium ">
        <span>
          <h2 className="flex items-center gap-2 text-2xl font-semibold capitalize text-[var(--text-color)]">{progress}</h2>
        </span>

        <button type="button" onClick={() => setAudio((current) => !current)}>
          {audio ? <IoMdMusicalNote className="text-2xl font-semibold sm:text-4xl" /> : <MdMusicOff className="text-2xl font-semibold sm:text-4xl" />}
        </button>
      </div>

      <div className="pb-4 pt-3">
        <div className="h-4 w-full rounded-full bg-gray-300">
          <div
            style={{ animationDuration: `${duration}s` }}
            className={`${seconds > 0 ? 'timer' : ''} ${getPortion(seconds, duration)} h-full rounded-full pr-2 text-end text-xs text-white`}
          >
            {seconds > 0 && seconds}
          </div>
        </div>
      </div>
    </div>
  )
}
