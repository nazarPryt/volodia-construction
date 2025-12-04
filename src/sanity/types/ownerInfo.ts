/**
 * Owner/Business Information Types
 * Single source of truth for contact details across the application
 */

export interface PhoneInfo {
  /** Raw phone number for tel: links (e.g., "+380000000001") */
  number: string
  /** Formatted phone number for display (e.g., "+380 (00) 000-00-01") */
  display: string
}

export interface SocialLinks {
  /** Telegram username (without @) */
  telegram: string
  /** Viber phone number */
  viber: string
  /** WhatsApp phone number (international format without +) */
  whatsapp: string
}

export interface OwnerInfo {
  /** Phone contact information */
  phone: PhoneInfo
  /** Email address */
  email: string
  /** Social media links */
  social: SocialLinks
}
