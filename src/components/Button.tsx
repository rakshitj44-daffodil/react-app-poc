import React from 'react'

interface ButtonProps {
  btnText: string,
  primary?: boolean,
  className?: string,
  onClick?: () => void,
}

export default function Button({
  btnText,
  className = "",
  primary = false,
  onClick = () => {}
}: ButtonProps) {

  const btnClass = primary ? 'bg-pink text-white' : 'bg-white text-pink-dark'
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className={`
          w-full h-12 sm:font-normal flex items-center heading-sm focus:outline-none
          shadow hover:shadow-lg focus:shadow-lg rounded-lg border-pink
          border border-solid ${btnClass}
        `}
      >
        <span className="flex items-center justify-center h-full w-full relative">
          {btnText}
        </span>
      </button>
    </div>
  )
}
