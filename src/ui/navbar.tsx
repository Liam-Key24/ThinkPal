'use client'

import { UserIcon, ListIcon } from '@phosphor-icons/react'

export default function NavBar() {
  return (
    <nav className="w-full h-12 border border-white px-2 flex items-center justify-between mx-auto">
      <div className="w-fit h-auto">
        <h1 className="text-2xl text-white">ThinkPal</h1>
      </div>

      <div className="flex space-x-2">
        <UserIcon size={20} color="#fcfcfc" />
        <ListIcon size={20} color="#fcfcfc" />
      </div>
    </nav>
  )
}
