import { FaCaretDown } from 'react-icons/fa';
export default function FaqCard({
  question,
  answer,
}: {
  question: any;
  answer: any;
}) {
  return (
    <details
      className="group relative w-full rounded-2xl border bg-white  shadow-md"
      onClick={(e) => e.stopPropagation()}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between px-6 pb-6 pt-6 font-medium">
        <span className="sm:font-lg text-lg sm:text-xl">{question}</span>
        <span className="transition group-open:rotate-180">
          <FaCaretDown className="text-[28px] text-[var(--primary-color)]" />
        </span>
      </summary>
      <p className="group-open:animate-fadeIn mt-[-8px] px-6 pb-6 text-base text-neutral-600">
        {answer}
      </p>
    </details>
  );
}
