export default function UserPoint({
  rank,
  name,
  ImageSrc,
  isActive,
  point,
}: {
  rank: number
  name: string
  ImageSrc?: any
  isActive: boolean
  point: number
}) {
  return (
    <div className={`${isActive ? 'bg-white text-black' : 'text-white'} `}>
      <div className="flex items-center justify-between px-6 py-2 text-base font-medium sm:px-8">
        <span className="flex items-center gap-4 rounded-full ">
          {rank}
          {ImageSrc ? (
            <img className="h-10 w-10 rounded-full" src={ImageSrc} alt="user image" />
          ) : (
            <p className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xl text-white">{name.charAt(0).toUpperCase()}</p>
          )}
          {name}
        </span>
        {point}
      </div>
    </div>
  )
}
