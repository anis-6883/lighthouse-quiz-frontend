import { metaObject } from '@/config/site.config'
import UserPoint from './components/UserPoint'

export const metadata = {
  ...metaObject('Leaderboard'),
}

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl bg-[var(--leader-board-bg-color)] bg-[url('/images/box_bg.png')] bg-cover bg-no-repeat">
      <div className="w-full px-6 sm:px-8">
        <h1 className="py-6 text-center text-2xl font-semibold tracking-wide text-white">Leaderboard</h1>
        <hr className=" border border-[#A592FF] " />
      </div>
      <div className="py-4">
        <UserPoint name="Pedro" />
        <UserPoint name="Theresa" />
        <UserPoint name="Pedro" />
        <UserPoint name="Theresa" />
        <UserPoint name="Pedro" />
        <UserPoint name="Theresa" />
        <UserPoint isActive={1} name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Pedro" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint ImageSrc="/images/summary/avatar-2.png" name="Pedro" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Pedro" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Pedro" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
      </div>
    </main>
  )
}
