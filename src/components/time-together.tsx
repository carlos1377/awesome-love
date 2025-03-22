'use client'

import { useEffect, useState } from "react"
import { differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns"
import { motion } from "framer-motion"

const startDate = new Date("2024-12-07T00:00:00") // 🗓️ data que vocês começaram a namorar

export function TimeTogether() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const totalMonths = differenceInMonths(now, startDate)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const days = differenceInDays(now, new Date(startDate.getFullYear() + years, startDate.getMonth() + months, startDate.getDate()))
  const hours = differenceInHours(now, new Date(now.getFullYear(), now.getMonth(), now.getDate()))
  const minutes = differenceInMinutes(now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()))
  const seconds = differenceInSeconds(now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes()))

  const boxClass = "flex flex-col items-center justify-center bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg w-24 h-24 text-fuchsia-600 font-bold text-lg"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-wrap gap-4 justify-center mt-8"
    >
      {/* <div className={boxClass}>
        <span className="text-3xl">{years}</span>
        <span>Anos</span>
      </div> */}
      <div className={boxClass}>
        <span className="text-3xl">{months}</span>
        <span>Meses</span>
      </div>
      <div className={boxClass}>
        <span className="text-3xl">{days}</span>
        <span>Dias</span>
      </div>
      <div className={boxClass}>
        <span className="text-3xl">{hours}</span>
        <span>Horas</span>
      </div>
      <div className={boxClass}>
        <span className="text-3xl">{minutes}</span>
        <span>Min</span>
      </div>
      <div className={boxClass}>
        <span className="text-3xl">{seconds}</span>
        <span>Seg</span>
      </div>
    </motion.div>
  )
}
