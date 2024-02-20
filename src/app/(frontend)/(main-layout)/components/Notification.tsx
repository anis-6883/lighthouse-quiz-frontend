export default function Notification({
  title = '',
  body = '',
  src = '',
  time = '',
}: {
  title: string;
  body: string;
  src?: any;
  time: any;
}) {
  return (
    <div className="w-full rounded-xl bg-[#E0E0E0] p-5">
      <div className="flex gap-3">
        <img className="h-9 w-11 rounded-md" src={src} alt="" />
        <h1 className="text-xl font-semibold ">{title}</h1>
      </div>
      <p className="font-lg py-3 text-base ">{body}</p>
      <p className="pb-1 text-sm text-[#008000]">{time} ago</p>
    </div>
  );
}
