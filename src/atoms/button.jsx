import React from 'react'

function ButtonGeneral({children, className, onClick}) {
  return (
    <button onClick={onClick} className={`px-7 mb-4 py-3 border bg-gradient-to-r from-blue-500/80 to-blue-400/100 backdrop-blur-md text-white shadow-lg shadow-blue-300/50 border-blue-400/50 border-none w-full mt-4 rounded-lg text-sm font-sans text-grayText ${className}`}>
      {children}
    </button>
  )
}

export default ButtonGeneral