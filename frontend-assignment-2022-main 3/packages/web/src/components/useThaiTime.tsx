import moment from 'moment-timezone'
import React, { useEffect, useState } from 'react'
import "./useThaiTime.css"
function useThaiTime() {
  const [time, setTime] = useState(moment().tz('Asia/Bangkok').format('HH:mm'))
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz('Asia/Bangkok').format('HH:mm'))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const currentHour = parseInt(time.split(':')[0])
    if (currentHour >= 6 && currentHour < 21) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [time])

  return <div className={`circle ${isOpen ? 'open' : 'closed'}`}></div>
}

export default useThaiTime