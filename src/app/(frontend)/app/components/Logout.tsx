'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()

  return (
    <>
      <div
        className="flex w-full cursor-pointer items-center justify-between p-4 hover:bg-slate-50"
        onClick={() => {
          const settingLogout = document.getElementById('setting_logout') as HTMLDialogElement
          if (settingLogout) {
            settingLogout.showModal()
          }
        }}
      >
        <div className="flex  items-center justify-center gap-6 ">
          <img src="/images/setting_logout.png" alt="bible quiz image" />
          <span className="text-lg font-medium capitalize text-[#F75555] sm:text-xl">Logout</span>
        </div>
      </div>

      {/* logout Modal text */}
      <dialog id="setting_logout" className="modal modal-bottom mx-auto max-w-3xl">
        <div className="modal-box rounded-t-[3rem] text-center">
          <h1 className="p-4 text-2xl font-bold text-[#dc3545]">Logout</h1>
          <hr className="h-[1px] w-full bg-[#e4e2e2]" />
          <h2 className="py-8 text-[22px] font-semibold">Are you sure you want to log out?</h2>
          <div className="flex items-center justify-center gap-3 overflow-hidden sm:gap-6">
            <form method="dialog" className="w-full max-w-48 sm:max-w-80">
              {/* if there is a button in form, it will close the modal */}
              <button className="h-14 w-full rounded-full border-b-[5px] border-b-[#C3B6FF] bg-[#F0EDFF] text-sm capitalize text-[var(--primary-color)] shadow-md outline-none sm:h-16 sm:text-lg">
                Cancel
              </button>
            </form>
            <div className="w-full max-w-48 sm:max-w-80">
              <button
                type="button"
                onClick={() => signOut()}
                className="h-14 w-full rounded-full border-b-[5px] border-b-[#543ACC] bg-[var(--primary-color)] text-sm capitalize text-white shadow-md  hover:bg-[var(--btn-hover-color)]  sm:h-16 sm:text-lg"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}
