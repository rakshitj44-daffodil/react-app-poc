import React from 'react'
import LoginAd from '../components/LoginAd'
import LoginForm from '../components/LoginForm'
import GrooveLogo from '../components/GrooveLogo'

export default function Login() {
  return (
    <div className='flex justify-between h-screen bg-white'>
        <div className='flex flex-col w-full lg:w-7/12'>
          <GrooveLogo />
          <LoginForm />
        </div>
        <div className='relative w-5/12 hidden lg:block '>
          <LoginAd />
        </div>
    </div>
  )
}
