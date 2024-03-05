import { metaObject } from '@/config/site.config'

export const metadata = {
  ...metaObject('Countdown'),
}

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center bg-[#212121] bg-[url('/images/box_bg.png')] bg-cover bg-no-repeat">
      <span className="text-6xl font-bold uppercase text-white">1</span>
    </main>
  )
}
