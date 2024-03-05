export default function QuestionCard({ imageSrc, question }: { imageSrc?: any; question: string }) {
  return (
    <div className="flex min-h-40  flex-col  items-center justify-center rounded-2xl  border bg-[#F1F1F1] px-4 py-4 text-center text-black shadow-md shadow-[#5756566b] sm:px-6">
      {imageSrc != null && <img className="mb-3 h-full max-h-48 w-auto rounded-2xl" src={imageSrc} alt="question image" />}
      <p className="text-xl font-semibold leading-9 sm:text-[24px]">{question}</p>
      {/* </div> */}
    </div>
  )
}
