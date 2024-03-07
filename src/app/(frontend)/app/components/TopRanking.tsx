export default function TopRanking() {
  return (
    <div className="flex flex-row items-end justify-center pb-5 pt-2 sm:gap-[3.75rem]">
      <div className="grid gap-3 text-center">
        <div className="relative mb-3 flex items-center justify-center">
          <img className="h-[72px] w-[73px]" src="/images/summary/avatar-2.png" alt="summary" />
          <img className="absolute -bottom-5 left-[38%]" src="/images/summary/batch-2.png" alt="" />
        </div>
        <h1 className="text-xl font-semibold capitalize">Andrew</h1>
        <p className="text-sm font-medium tracking-wide text-[var(--primary-color)]">3,496</p>
        <img src="/images/summary/rank-2.png" alt="" />
      </div>
      <div className="grid gap-3 text-center">
        <div className="relative mb-3 flex items-center justify-center">
          <img className="h-[72px] w-[73px]" src="/images/summary/avatar-1.png" alt="summary" />
          <img className="absolute -bottom-5 left-[38%]" src="/images/summary/batch-1.png" alt="" />
        </div>
        <h1 className="text-xl font-semibold capitalize">Pedro</h1>
        <p className="text-sm font-medium tracking-wide text-[var(--primary-color)]">3,645</p>
        <img src="/images/summary/rank-1.png" alt="" />
      </div>
      <div className="grid gap-3 text-center">
        <div className="relative mb-3 flex items-center justify-center">
          <img className="h-[72px] w-[73px]" src="/images/summary/avatar-3.png" alt="summary" />
          <img className="absolute -bottom-5 left-[38%]" src="/images/summary/batch-3.png" alt="" />
        </div>
        <h1 className="text-xl font-semibold capitalize">Freida</h1>
        <p className="text-sm font-medium tracking-wide text-[var(--primary-color)]">3,178</p>
        <img src="/images/summary/rank-3.png" alt="" />
      </div>
    </div>
  )
}
