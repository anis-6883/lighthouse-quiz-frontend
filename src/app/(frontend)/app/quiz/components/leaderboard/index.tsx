'use client'
import UserPoint from './UserPoint'

export default function LeaderBoard() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl bg-[var(--leader-board-bg-color)] bg-[url('/images/box_bg.png')] bg-cover bg-no-repeat">
      <div className="w-full px-6 pt-6 text-white sm:px-8">
        <h1 className="text-center text-2xl font-semibold tracking-wide ">Leader board</h1>
        <p className="pb-1 pt-2 text-center">Answers submitted! 🚀</p>
        <p className="pb-6 text-center">Please wait, and we&apos;ll unveil your results soon.</p>
        <hr className=" border border-[#A592FF] " />
      </div>

      <div className="py-3">
        <UserPoint name="Pedro" />
        <UserPoint name="Andrew" />
        <UserPoint name="Pedro" />
        <UserPoint name="Andrew" />
        <UserPoint name="Pedro" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint isActive={1} name="Andrew" />
        <UserPoint name="Pedro" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Pedro" />
        <UserPoint name="Andrew" />
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
        <UserPoint name="Andrew" />
        <UserPoint name="Theresa" />
        <UserPoint name="Theresa" />
        <UserPoint name="Andrew" />
        <UserPoint name="Theresa" />
        <UserPoint name="Andrew" />
        <UserPoint name="Theresa" />
        <UserPoint name="Andrew" />
        <UserPoint name="Theresa" />
        <UserPoint name="Andrew" />
        <UserPoint name="Theresa" />
      </div>
    </main>
  )
}
