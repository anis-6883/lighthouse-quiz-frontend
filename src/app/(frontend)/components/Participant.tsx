export default function Participant({ name, ImageSrc }: { name: string; ImageSrc?: any }) {
  return (
    <span className="flex items-center gap-1 rounded-full bg-white p-[6px] text-base ">
      {ImageSrc ? <img className="h-9 w-9 rounded-full" src={ImageSrc} alt="user image" /> : <p className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white">{name.charAt(0).toUpperCase()}</p>}
      {name}
    </span>
  )
}
