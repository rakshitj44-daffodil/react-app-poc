import React from 'react'
import LoginAd from '../../images/LoginAd'
import LoginForm from '../../forms/components/LoginForm'
import GrooveLogo from '../../images/logos/GrooveLogo'

export default function Login() {
  return (
    <>
        <div className='flex flex-col w-7/12'>
              <GrooveLogo />
              <LoginForm />
        </div>
        <div className='w-5/12'>
            <LoginAd />
        </div>
    </>
  )
}
