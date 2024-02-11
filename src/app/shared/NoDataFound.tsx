'use client';

import Image from 'next/image';

export default function NoDataFound({
  width,
  message,
}: {
  width?: string;
  message?: string;
}) {
  return (
    <div className={`w-${width || '6/12'} m-auto `}>
      <Image
        src="/images/not-found-one.svg"
        className="m-auto w-6/12"
        height={0}
        width={0}
        sizes="100vw"
        alt="Not Found!"
      />
      <h2 className="text-center text-xs font-medium uppercase text-white lg:text-lg">
        {message || 'UNFORTUNATELY, THERE ARE NO DATA AT THE MOMENT!'}
      </h2>
    </div>
  );
}
