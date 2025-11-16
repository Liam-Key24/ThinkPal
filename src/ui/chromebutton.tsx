'use client'
import {ArrowSquareOutIcon} from '@phosphor-icons/react'

export default function ChromeBtn(){
    return (
        <>
            <button type="submit" className="bg-white text-black w-50 h-14 text-xl flex justify-center items-center space-x-2 rounded-full"><span>Add to Chrome</span> <ArrowSquareOutIcon size={32} weight="thin" /></button>
        
        </>
    )
}