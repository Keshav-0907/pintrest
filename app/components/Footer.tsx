import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-sm py-3 text-center'>
      <div>
        Made by <Link className='text-blue-400 font-semibold' target='_blank' href={'https://linktr.ee/_keshav_malik'}>Keshav Malik</Link>
      </div>
    </div>
  )
}

export default Footer