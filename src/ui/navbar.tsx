'use client'

import { UserIcon, ListIcon, BrainIcon } from '@phosphor-icons/react'

export default function NavBar() {
  return (
    <nav className="w-full h-12 border border-white px-2 flex items-center justify-between mx-auto">
      <div className="flex w-full h-fit items-center space-x-2">
        <h1 className="text-2xl">ThinkPal</h1>
        <BrainIcon size={32} />
      </div>


      <div className="flex space-x-2">
        <UserIcon size={20} color="#fcfcfc" />
        <ListIcon size={20} color="#fcfcfc" />
      </div>
    </nav>
  )
}
