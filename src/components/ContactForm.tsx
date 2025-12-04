'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { OwnerInfo } from '@/sanity/types/ownerInfo'

interface ContactFormProps {
  ownerInfo: OwnerInfo
}

export default function ContactForm({ ownerInfo }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate form submission - in production this would send to an API
    setTimeout(() => {
      console.log('Form data:', formData)
      setStatus('success')
      setFormData({ name: '', phone: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="text-foreground mb-2 block text-sm font-medium">
          Ваше ім'я <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-foreground/20 bg-background text-foreground w-full rounded-lg border px-4 py-3 transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
          placeholder="Володимир"
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-foreground mb-2 block text-sm font-medium">
          Телефон <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border-foreground/20 bg-background text-foreground w-full rounded-lg border px-4 py-3 transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
          placeholder="+380 (99) 999-99-99"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-foreground mb-2 block text-sm font-medium">
          Email <span className="text-foreground/40">(опціонально)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-foreground/20 bg-background text-foreground w-full rounded-lg border px-4 py-3 transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-foreground mb-2 block text-sm font-medium">
          Повідомлення <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="border-foreground/20 bg-background text-foreground w-full rounded-lg border px-4 py-3 transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
          placeholder="Розкажіть про ваш проєкт: тип ремонту, площа, бажані терміни..."
        />
      </div>

      {status === 'success' && (
        <div className="rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-300">
          ✓ Дякуємо за звернення! Ми зв'яжемося з вами найближчим часом.
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-300">
          ✗ Щось пішло не так. Будь ласка, спробуйте ще раз або зателефонуйте нам.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'submitting' ? 'Відправлення...' : 'Відправити повідомлення'}
      </button>

      <p className="text-foreground/60 text-center text-sm">
        Або зателефонуйте нам:{' '}
        <a href={`tel:${ownerInfo.phone.number}`} className="font-semibold text-blue-600 hover:underline">
          {ownerInfo.phone.display}
        </a>
      </p>
    </form>
  )
}
