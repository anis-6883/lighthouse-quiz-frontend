'use client'
import { FaTrashAlt } from 'react-icons/fa'
import { TiPlus } from 'react-icons/ti'

export default function FillInTheBlank() {
  return (
    <>
      <div className="mb-5 rounded-xl bg-[#3a1737] py-8">
        <div className="mx-auto w-full max-w-[500px]">
          <input type="text" style={{ boxShadow: 'none', borderColor: 'transparent', borderBottom: '3px solid white' }} className="w-full rounded-md bg-[#f9fbfd23] text-lg text-white outline-none" placeholder="Type answer here" />
        </div>
      </div>
      <div className="bg-[#3a1737] p-6">
        <p className="mb-10 text-left text-[18px] capitalize text-[#ffffff70]">Alternative Options</p>
        <div className="">
          <div className="mx-auto flex w-full max-w-[500px] gap-2">
            <div>
              <select className="select w-full bg-[#f9fbfd23] text-base font-semibold text-[#fff]">
                <option className="bg-white text-lg text-black">is exactly</option>
                <option className="bg-white text-lg text-black">contains</option>
              </select>
              {/* <Select className="border-none bg-[#f9fbfd23] text-[18px] text-white hover:border-none" options={options} value={value} onChange={setValue} /> */}
            </div>
            <div>
              <input type="text" style={{ boxShadow: 'none', border: 'transparent' }} className="w-[315px] rounded-md bg-[#f9fbfd23] py-[11px] text-[18px] text-white outline-none" placeholder="Type an answer here" />
            </div>
            <div className="flex h-11 items-center rounded-md bg-[#f9fbfd23] px-4 hover:bg-[#ffffff65]">
              <FaTrashAlt className="text-white" />
            </div>
          </div>

          <button className="mx-auto mb-10 mt-8 flex items-center justify-center gap-2 rounded-md bg-[#f9fbfd23] p-3 text-[16px] font-semibold text-white">
            <TiPlus /> Add alternative answer
          </button>
        </div>
      </div>
    </>
  )
}
