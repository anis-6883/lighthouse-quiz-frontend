import { MouseEventHandler } from 'react';

export type Option = {
  name: string;
  action: MouseEventHandler<HTMLButtonElement> | any;
};

export default function Action(rowData: any, options: Option[]) {
  return (
    <>
      {options.map((option: { name: string; action: MouseEventHandler<HTMLButtonElement> }) => (
        <button
          type='button'
          className='mx-3 rounded border px-5 py-2 text-base capitalize text-primary'
          key={option.name}
          onClick={() => option.action(rowData)}
        >
          {option.name}
        </button>
      ))}
    </>
  );
}
