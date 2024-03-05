import { metaObject } from '@/config/site.config'

export const metadata = {
  ...metaObject('End Quiz'),
}

export default function Page() {
  return (
    <main
      style={{ backgroundImage: "url('/images/quiz-end-2.png'), url('/images/quiz-end-1.png')" }}
      className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      <span className=" text-center text-8xl font-semibold tracking-wider text-white">
        Quiz <br />
        Ended
      </span>
    </main>
  )
}
