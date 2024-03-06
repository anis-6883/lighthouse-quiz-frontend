'use client'
import React, { useState, useRef } from 'react'
import ReactQuill from 'react-quill'
import './style.css'

const toolbarOptions = [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }]]

export default function Toolbar({ value, setValue }: any) {
  return <ReactQuill theme="snow" modules={{ toolbar: toolbarOptions }} value={value} className="" onChange={(value) => setValue(value)} />
}
