import React from 'react'

export default function GrooveLogo() {
  return (
    <div
        id="logo"
        className="ml-12 mt-8 flex flex-col w-6/12 items-start"
    >
        <span className="text-gray-700 heading-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-8 w-8 inline-block mr-1">
                <path d="M19.722 19.852h19.326c-.829 8.975-4.942 14.896-12.34 17.763-7.397 2.866-14.386 1.433-20.966-4.3l6.906-6.626c2.51 1.84 4.869 2.76 7.074 2.76 2.206 0 4.268-.844 6.186-2.532l-6.186-7.065zM0 19.36h9.909c.391-4.854 2.702-7.9 6.933-9.137 4.23-1.236 7.798.038 10.702 3.822l7.73-6.309C28.764.456 21.24-1.686 12.701 1.312 4.814 4.08.581 10.097 0 19.36z" fill="#FD6481" fillRule="evenodd" />
            </svg>
            Groove
        </span>
    </div>
  )
}
