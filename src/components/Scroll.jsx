import React from 'react'

export const Scroll = ({name, value}) => {
  return (
    <div style={{ width: 130 }} className="bg-green-100 mr-5 h-full flex items-center justify-around p-5 rounded-3xl">
            <div className="font-bold">{name}</div>
            <div style={{ height: 2 }} className="w-2/3 bg-black"></div>
            <div>{value}</div>
        </div>
  )
}
