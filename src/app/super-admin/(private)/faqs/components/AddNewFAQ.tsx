'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Text, ActionIcon, Input, Password, Checkbox, Textarea } from 'rizzui';

export default function AddNewFAQ() {
  const [modalState, setModalState] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <div className='flex w-full justify-end'>
      <Modal isOpen={modalState} onClose={() => setModalState(false)}>
        <div className='m-auto px-7 pt-6 pb-8'>
          <div className=' flex items-end justify-end'>
            <button className='text-3xl pl-5' onClick={() => setModalState(false)}>
              X
            </button>
          </div>

          <div className=''>
            <Input label='Question *' inputClassName='border-2' size='lg' onChange={(e) => setQuestion(e.target.value)} />
            <Textarea label='Answer' className='w-full my-5' onChange={(e) => setAnswer(e.target.value)} />;
            <Button type='submit' size='lg' className='col-span-2 mt-2' onClick={() => setModalState(false)}>
              Add
            </Button>
          </div>
        </div>
      </Modal>

      <button
        onClick={() => setModalState(true)}
        type='button'
        className=' mb-3 rounded-lg border-b-[5px] border-b-[#543ACC] bg-[#6949FF] px-5 py-3 text-sm capitalize text-white '
      >
        Add New FAQ
      </button>
    </div>
  );
}
