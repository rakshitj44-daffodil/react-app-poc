import React from 'react'
import ErrorMsg from './ErrorMsg';

interface TextboxProps {
  label: string,
  value: string,
  name: string,
  type: string,
  errorMsg?: string,
  placeholder?: string,
  className?: string,

  updateField: (field: string, value: string) => void,
}


export default function Textbox({label, value, name, type, placeholder = "", className = "", errorMsg = "", updateField}: TextboxProps) {
  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    updateField(name, value);
  }

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <label className='text-gray-700 defaultText' htmlFor="input">{label}</label>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleFieldChange}
        className="w-full h-12 border-solid border rounded p-4 border-grey-300"
      />
      {errorMsg && <ErrorMsg errorMsg={errorMsg} /> }
    </div>
  )
}
