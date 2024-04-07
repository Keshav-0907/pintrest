import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-sm py-3 text-center'>
      <div>
        Made by <Link href={'https://linktr.ee/_keshav_malik'}>Keshav Malik</Link>
      </div>
    </div>
  )
}

export default Footer