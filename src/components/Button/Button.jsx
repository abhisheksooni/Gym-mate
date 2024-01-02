import React from 'react'
import { MoveRight } from 'lucide-react';

function Button({text="add-name", bg="red", goto, addclass}) {
  return (
    <button className={`px-4 py-3 bg-[#000] text-xl font-semibold flex items-center justify-start gap-8 ${addclass}`}>
        {text}
    <MoveRight/>
    </button>
  )
}

export default Button