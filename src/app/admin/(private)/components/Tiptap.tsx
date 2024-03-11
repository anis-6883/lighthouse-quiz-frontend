'use client'

import { Editor, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import { Button } from 'rizzui'

const Tiptap = () => {
  const [bagIndex, setBagIndex] = useState(0)

  const editor: Editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })!

  const editor2: Editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })!

  const bag = [editor, editor2]

  if (!editor && !editor2) return null

  return (
    <div>
      <div>
        <Button
          className={bag[bagIndex].isActive('bold') ? 'is-active' : ''}
          onClick={() => bag[bagIndex].chain().focus().toggleBold().run()}
          disabled={!bag[bagIndex].can().chain().focus().toggleBold().run()}
        >
          B
        </Button>
        <Button
          className={bag[bagIndex].isActive('bold') ? 'is-active' : ''}
          onClick={() => bag[bagIndex].chain().focus().toggleItalic().run()}
          disabled={!bag[bagIndex].can().chain().focus().toggleItalic().run()}
        >
          I
        </Button>
      </div>
      <div>
        <EditorContent
          editor={editor}
          onInput={() => console.log(editor.getHTML())}
          onClick={() => {
            setBagIndex(0)
            console.log('editor 1')
          }}
        />
        <EditorContent
          editor={editor2}
          onInput={() => console.log(editor2.getHTML())}
          onClick={() => {
            setBagIndex(1)
            console.log('editor 2 set')
          }}
        />
      </div>
    </div>
  )
}

export default Tiptap
