import React from "react"

interface LogoProps {
  variant?: "header" | "large" | "footer"
}

export default function Logo({ variant = "header" }: LogoProps) {
  if (variant === "large" || variant === "footer") {
    return (
      <div className="flex flex-col items-center select-none text-center">
        <div className="flex items-center justify-center font-serif text-6xl md:text-7xl font-light tracking-tight text-[#111827]">
          <span className="relative flex items-center justify-center">
            A
            <span
              className="absolute text-[#e07a2c] font-sans font-bold text-lg md:text-2xl"
              style={{ bottom: "20%", left: "38%" }}
            >
              ▲
            </span>
          </span>
          <span>O</span>
        </div>
        <div className="w-48 md:w-64 h-[1px] bg-[#e07a2c] my-3"></div>
        <div className="text-xs md:text-sm font-sans uppercase tracking-[0.35em] text-[#111827] font-semibold">
          ADENIYI ODEJOBI
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center select-none">
      <div className="flex flex-col items-start leading-none">
        <div className="flex items-center font-serif text-3xl font-light tracking-tight text-[#111827]">
          <span className="relative flex items-center justify-center">
            A
            <span
              className="absolute text-[#e07a2c] font-sans font-bold text-[8px]"
              style={{ bottom: "20%", left: "36%" }}
            >
              ▲
            </span>
          </span>
          <span>O</span>
        </div>
        <div className="w-full h-[1px] bg-[#e07a2c] my-1"></div>
        <div className="text-[7.5px] font-sans uppercase tracking-[0.25em] text-[#111827] font-bold">
          ADENIYI ODEJOBI
        </div>
      </div>
    </div>
  )
}
