export default function Button({
  type,
  height,
  title,
}: {
  type: any;
  height: number;
  title: string;
}) {
  return (
    <button
      type={type}
      className={`w-full h-${height} btn  rounded-full bg-[#6949FF] capitalize text-[#fff] shadow-md hover:bg-[#785cf8]`}
    >
      {title}
    </button>
  );
}
