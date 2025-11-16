'use client'

import { BrainIcon } from "@phosphor-icons/react"


export default function Footer() {
    return (
        <footer className="w-full h-auto mt-10 p-5 flex flex-col items-center justify-center border border-white">
            <div className="flex w-full h-fit items-center justify-center space-x-2 my-3">
                <h1 className="text-2xl">ThinkPal</h1>
                <BrainIcon size={32} />
            </div>
            <div className="text-center w-full h-auto space-y-2">

                <p>About</p>
                <p>Docs</p>
                <p>Contacts</p>

            </div>
        </footer>
    )
}