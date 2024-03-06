'use client'

import React, { useMemo, useState, useCallback } from 'react'
import { createEditor, Editor, Transforms, Text } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const RichTextEditor: React.FC = () => {
  const editor = useMemo(() => withReact(createEditor()), [])

  const [value, setValue] = useState<any>([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ])

  const renderElement = useCallback((props) => <Element {...props} />, [])

  return (
    <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
      <Editable renderElement={renderElement} />
    </Slate>
  )
}

const toggleFormat = (editor: Editor, format: string) => {
  const isActive = isFormatActive(editor, format)
  Transforms.setNodes(editor, { [format]: isActive ? null : true }, { match: (n) => Text.isText(n), split: true })
}

const isFormatActive = (editor: Editor, format: string) => {
  // const [match] = Editor.nodes(editor, {
  //   match: (n) => n[format] === true,
  //   universal: true,
  // })

  return false //!!match
}

const Element: React.FC<{ attributes: any; element: any }> = ({ attributes, children, element }: any) => {
  switch (element.type) {
    case 'paragraph':
      return <p {...attributes}>{children}</p>
    default:
      return <p {...attributes}>{children}</p>
  }
}

export default RichTextEditor
