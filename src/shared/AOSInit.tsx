'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true, // Animation happens only once
      offset: 50, // Trigger 50px before element enters viewport
    })
  }, [])

  return null
}
