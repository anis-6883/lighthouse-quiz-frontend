import { FaPen } from 'react-icons/fa6';

export default function ProfileImage({
  name,
  ImageSrc,
}: {
  name: string;
  ImageSrc: any;
}) {
  return (
    <div className="relative my-4 flex items-center justify-center pb-5 pt-4">
      {ImageSrc ? (
        <img
          className=" h-[120px] w-[120px] rounded-full border"
          src={ImageSrc}
          alt="profile image"
        />
      ) : (
        <p className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-blue-500 text-4xl font-bold text-white">
          {name.charAt(0).toUpperCase()}
        </p>
      )}

      <div className="absolute bottom-[5%] right-[36%] rounded-md border border-indigo-500 bg-[var(--primary-color)] p-1 sm:bottom-[6%] sm:right-[42%]">
        <label
          htmlFor="upload"
          className="flex cursor-pointer flex-col items-center"
        >
          <FaPen className="text-lg text-white" />
        </label>
        <input id="upload" type="file" className="hidden" />
      </div>
    </div>
  );
}
