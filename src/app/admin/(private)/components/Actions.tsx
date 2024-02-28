import { MouseEventHandler } from 'react'

export type Option = {
  name: string
  action: MouseEventHandler<HTMLButtonElement> | any
}

export default function Action(rowData: any, options: Option[]) {
  return (
    <div className="flex items-center justify-center">
      {options.map((option: { name: string; action: MouseEventHandler<HTMLButtonElement> }) => (
        <button
          type="button"
          className="mx-3 my-1 rounded border px-5 py-2 text-base font-semibold capitalize text-primary hover:bg-white"
          key={option.name}
          onClick={() => option.action(rowData)}
        >
          {option.name}
        </button>
      ))}
    </div>
  )
}
