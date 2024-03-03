import { metaObject } from '@/config/site.config'

import { routes } from '@/config/routes'
import Link from 'next/link'
import { GoHomeFill } from 'react-icons/go'
import Point from './components/Point'
import TopScorer from './components/TopScorer'

export const metadata = {
  ...metaObject('End Score Leaderboard'),
}

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl bg-[var(--leader-board-bg-color)] bg-[url('/images/box_bg.png')] bg-cover bg-no-repeat px-5">
      <div className="relative w-full px-6 sm:px-8">
        <Link href={routes.authHome}>
          <GoHomeFill className="absolute left-[0%] top-[38%] text-2xl text-white" />
        </Link>
        <h1 className="py-6 text-center text-2xl font-semibold tracking-wide text-white">Final Scoreboard</h1>
      </div>
      <TopScorer />
      <div className="pb-4">
        <Point name="Pedro" />
        <Point name="Theresa" />
        <Point name="Pedro" />
        <Point name="Theresa" />
        <Point name="Pedro" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point ImageSrc="/images/summary/avatar-1.png" isActive={1} name="Theresa" />
        <Point name="Pedro" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Pedro" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Pedro" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Pedro" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
        <Point name="Theresa" />
      </div>
    </main>
  )
}
