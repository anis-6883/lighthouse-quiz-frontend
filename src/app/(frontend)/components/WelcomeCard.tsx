export default function WelcomeCard({ ImageSrc, title, quote }: { ImageSrc: string; title: string; quote: JSX.Element }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center sm:px-4">
      <img className="h-64 w-72" src={ImageSrc} alt="welcome image title" />
      <h1 className="text-3xl font-medium">{title}</h1>
      <p className="mb-4 min-h-12 text-base font-medium">{quote}</p>
    </div>
  )
}
