export default function McqCard({ bg_color, imageSrc, option_text }: { bg_color: any; imageSrc?: any; option_text: any }) {
  return (
    <>
      <form>
        <label className={`flex min-h-16 items-center justify-between gap-4 ${bg_color} my-3 cursor-pointer rounded-2xl px-5 py-3 text-[#fff] shadow-md`}>
          <div className="flex items-center gap-2">
            {imageSrc != null && <img className="h-[45px] w-[45px] rounded-lg object-fill sm:h-[56px] sm:w-[56px]" src={imageSrc} alt="option image" />}
            <span className="text-sm font-medium sm:text-lg ">{option_text}</span>
          </div>
          <input
            type="checkbox"
            // checked="checked"
            className="checkbox rounded-full border-[#232020]"
          />
        </label>
      </form>
    </>
  )
}
