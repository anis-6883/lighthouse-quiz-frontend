import { Response } from '@/data/response'
import reload from '@/utils/fetch/reload'
import React from 'react'
import toast from 'react-hot-toast'

export default function AskConfirmation(t: any, action: Function) {
  return (
    <span>
      <b className="text-xl">Confirm deletion of this item?</b>
      <div className="mt-3 flex justify-around">
        <button
          className="my-1 rounded bg-red-700 px-3 text-lg text-white"
          onClick={() => {
            toast.dismiss(t.id)
            toast.promise(action(), {
              loading: 'Deleting...',
              success: (data: Response) => {
                if (data?.status) {
                  reload('faq')
                  return data?.message
                }

                throw new Error(data?.message)
              },
              error: (error) => {
                if (error?.message) return error?.message
                return 'Something went wrong!'
              },
            })
          }}
        >
          Confirm
        </button>

        <button className="my-1 rounded border-2 bg-gray-300 px-3 text-lg" onClick={() => toast.dismiss(t.id)}>
          Dismiss
        </button>
      </div>
    </span>
  )
}
