import React from 'react'


interface BasicLayoutProps {
  Element: React.ComponentType
}

const BasicLayout: React.FC<BasicLayoutProps> = ({Element}) => {
  return (
    <div className="flex justify-between container mx-auto shadow-lg rounded-lg mt-12 bg-white">
        <Element />
    </div>
  )
}

export default  BasicLayout