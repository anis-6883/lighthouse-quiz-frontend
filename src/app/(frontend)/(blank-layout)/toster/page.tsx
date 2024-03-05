import TosterPop from './components/TosterPop'

export default function Page() {
  return (
    <main className="bg-[#EBF5FB]">
      <div className="m-auto min-h-screen max-w-3xl place-items-center overflow-hidden bg-[#ffffff] px-6 sm:px-10">
        <div className="w-full pb-4 pt-2">Lighthouse Quiz - Toster</div>
        <TosterPop isRight={true} point={324} />
      </div>
    </main>
  )
}
