export default function Point({ name, ImageSrc, isActive }: { name: string; ImageSrc?: any; isActive?: number }) {
  return (
    // Active bg color #DED6FF
    <div className={`${isActive == 1 ? 'bg-[#DED6FF]' : 'bg-white'} text-black`}>
      <div className="flex items-center justify-between px-6 py-2 text-base font-medium sm:px-8">
        <span className="flex items-center gap-4 rounded-full ">
          1
          {ImageSrc ? (
            <img className="h-10 w-10 rounded-full" src={ImageSrc} alt="user image" />
          ) : (
            <p className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xl text-white">{name.charAt(0).toUpperCase()}</p>
          )}
          {name}
        </span>
        120
      </div>
    </div>
  )
}
