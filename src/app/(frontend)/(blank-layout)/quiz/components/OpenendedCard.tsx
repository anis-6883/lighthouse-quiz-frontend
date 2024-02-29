export default function OpenendedCard() {
  return (
    <form>
      <textarea name="input" id="input" rows={5} maxLength={256} placeholder="Type Answer... " className=" h-28 w-full rounded-xl bg-gradient-to-r from-[#5C2A81] to-[#9F276D] p-4 text-base font-medium text-white placeholder-white outline-none"></textarea>
    </form>
  )
}
