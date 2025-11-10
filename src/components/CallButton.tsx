'use client'

import { CONTACT_INFO } from '@/config/contacts'

export default function CallButton() {
  return (
    <a
      href={`tel:${CONTACT_INFO.PHONE.NUMBER}`}
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg transition-all hover:scale-110 hover:bg-blue-700 sm:h-auto sm:w-auto sm:rounded-lg sm:px-6 sm:py-3"
      aria-label="Зателефонувати"
    >
      <span className="hidden sm:inline">📞 Зателефонувати</span>
      <span className="sm:hidden">📞</span>
    </a>
  )
}
