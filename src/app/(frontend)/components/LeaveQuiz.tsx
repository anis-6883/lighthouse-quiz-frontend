'use client'
import { BsExclamationCircle } from 'react-icons/bs'
export default function LeaveQuiz() {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          const model = document.getElementById('my_modal_1') as HTMLDialogElement
          if (model != null) {
            model.showModal()
          }
        }}
        className="fixed bottom-5 left-1/2 w-full max-w-64 -translate-x-1/2 transform rounded-full border-b-[2px] bg-white py-3 text-lg font-medium text-[var(--primary-color)] hover:bg-[#e8e7e9]  "
      >
        Leave Quiz
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center">
          <div className="flex w-full items-center justify-center pb-4">
            <BsExclamationCircle className=" text-3xl text-red-500" />
          </div>
          <h3 className="text-center text-lg font-bold">Are You Sure You Want to Leave?</h3>
          {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-red-400 text-white">Cancel</button>
            </form>
            <button className="btn bg-[#2B78C0] text-white">Ok</button>
          </div>
        </div>
      </dialog>
    </>
  )
}
