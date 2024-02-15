import { Response } from '@/data/response';
import reload from '@/utils/fetch/reload';
import React from 'react';
import toast from 'react-hot-toast';

export default function AskConfirmation(t: any, action: Function) {
  return (
    <span>
      <b className='text-xl'>Confirm deletion of this item?</b>
      <div className='flex justify-around mt-3'>
        <button
          className='text-lg px-3 my-1 bg-red-700 text-white rounded'
          onClick={() => {
            toast.dismiss(t.id);
            toast.promise(action(), {
              loading: 'Deleting...',
              success: (data: Response) => {
                if (data.status) {
                  reload('faq');
                  return data.message;
                }

                throw new Error(data.message);
              },
              error: (error) => error.message
            });
          }}
        >
          Confirm
        </button>

        <button className='text-lg px-3 my-1 border-2 bg-gray-300 rounded' onClick={() => toast.dismiss(t.id)}>
          Dismiss
        </button>
      </div>
    </span>
  );
}
