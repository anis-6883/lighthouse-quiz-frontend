import Link from 'next/link';

export default function HistoryCard({
  questionType,
  ImageSrc,
  title,
  quizName,
  date,
}: {
  questionType: string;
  ImageSrc?: any;
  title: any;
  quizName?: any;
  date: any;
}) {
  return (
    <Link href="/summary">
      <div className="card card-side mb-3 max-h-32 overflow-hidden rounded-2xl border bg-base-100 shadow-md">
        {ImageSrc ? (
          <img
            className="h-[120px] w-full max-w-28 object-fill sm:max-w-[150px]"
            src={ImageSrc}
            alt="quiz image"
          />
        ) : questionType === 'daily' ? (
          <img
            className="h-[120px] w-full max-w-28 object-fill sm:max-w-[150px]"
            src="/images/Daily_Quiz.png"
            alt="quiz image"
          />
        ) : (
          <img
            className="h-[120px] w-full max-w-28 object-fill sm:max-w-[150px]"
            src="/images/Live_Quiz.png"
            alt="quiz image"
          />
        )}

        <div className="card-body p-2">
          <h2 className="card-title pt-1 text-base sm:text-lg">
            {title.length > 30 ? `${title.slice(0, 30)}...` : title}
          </h2>
          <p className="text-sm capitalize text-[#6c757d] sm:text-base">
            {quizName}
          </p>
          <p className="text-base">{date}</p>
        </div>
      </div>
    </Link>
  );
}
