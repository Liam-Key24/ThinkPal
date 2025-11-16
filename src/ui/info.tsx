'use client'
import { AsteriskIcon, CopyIcon, FlowArrowIcon, ShootingStarIcon } from "@phosphor-icons/react"

export default function Info() {
    return (
        <>
            <div className="my-3">
                <div className="w-full h-20 flex items-center justify-center">
                    <h1 className="text-xl">A browser extention that can do more</h1>
                </div>

                <div className="grid grid-cols-1 grid-row-4 md:grid-cols-2 space-y-5">
                    <div className="w-full h-40 border border-white flex flex-col items-center justify-center space-y-5 px-10 text-center">
                        <CopyIcon size={50} weight="thin" />
                        <p className="text-xl">Quick inserts, copy and paste</p>
                    </div>
                    <div className="w-full h-40 border border-white flex flex-col items-center justify-center space-y-5 px-10 text-center">
                        <FlowArrowIcon size={32} weight="thin" /> 
                        <p className="text-xl">Stay in your productive flow. Never leave your choosen LLM</p>
                    </div>
                    <div className="w-full h-40 border border-white flex flex-col items-center justify-center space-y-5 px-10 text-center">
                        <ShootingStarIcon size={32} weight="thin" /> 
                        <p className="text-xl">Fast and responsive with in-page overlay that appears inside any LLM </p>
                    </div>
                    <div className="w-full h-40 border border-white flex flex-col items-center justify-center space-y-5 px-10 text-center">
                        <AsteriskIcon size={32} />
                        <p className="text-xl">Clean and simple UI, tool thats meant to be used.</p>
                    </div>
                </div>
            </div>
        </>
    )
}