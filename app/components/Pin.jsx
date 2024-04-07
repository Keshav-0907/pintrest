import React from 'react'

const Pin = () => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
    <img
      src="https://i.pinimg.com/564x/fe/e0/3e/fee03ef285f223ab5fae7a853bdbba88.jpg"
      className="object-cover object-center w-full h-64"
      alt="pin"
    />
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold text-gray-800">Pinterest Card</div>
      <p className="text-base text-gray-700">
        This is a Pinterest-like card styled using Tailwind CSS.
      </p>
    </div>
  </div>
  )
}

export default Pin