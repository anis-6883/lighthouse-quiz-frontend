export default function EmptyCard({ name }: { name: string }) {
  return (
    <div className="flex w-full items-center justify-center rounded-sm border-b-4 border-b-[#c3b6ff] bg-[#f0edff]">
      <p className="font-lg py-12 text-base sm:py-16 ">No {name} right now</p>
    </div>
  );
}
