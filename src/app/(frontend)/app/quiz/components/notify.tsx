import toast from 'react-hot-toast'
import { FaCircleCheck } from 'react-icons/fa6'
import { IoMdCloseCircle } from 'react-icons/io'

export default async function notify(isRight: boolean, points?: number) {
  return toast.custom(
    (t) => (
      <div className="fixed bottom-0 mx-auto  w-full max-w-3xl bg-red-500 ">
        {isRight ? (
          <div className="absolute  top-[-70px] flex h-[85px]  w-full max-w-3xl  items-center justify-center rounded-lg bg-[#4CB050] text-center font-bold  ">
            <span className="flex flex-col items-center rounded-md bg-[#D1EBD3] px-12 py-3 text-base font-medium">
              <span className="flex items-center gap-2 ">
                <FaCircleCheck className="text-xl text-[#4CB050]" />
                <span>Correct Answer</span>
              </span>
              <span>+{points}</span>
            </span>
          </div>
        ) : (
          <div className=" absolute top-[-70px] flex h-20 w-full max-w-3xl items-center justify-center rounded-lg bg-[#F44236] text-center font-bold ">
            <span className="flex items-center gap-3 rounded-md bg-[#FBC1BD] px-12 py-5 text-base font-medium">
              Incorrect Answer <IoMdCloseCircle className="text-xl text-[#F50049]" />
            </span>
          </div>
        )}
      </div>
    ),
    {
      duration: 2000,
      position: 'bottom-center',
    },
  )
}
