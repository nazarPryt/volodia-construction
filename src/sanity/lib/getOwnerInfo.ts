import { client } from './client'
import { OWNER_INFO_QUERY } from './queries'
import { OwnerInfo } from '../types/ownerInfo'
import { CONTACT_INFO } from '@/config/contacts'

/**
 * Fetches owner/business information from Sanity CMS
 * Falls back to config file if Sanity data is unavailable
 *
 * @returns Owner information with phone, email, social links, and optional address
 */
export async function getOwnerInfo(): Promise<OwnerInfo> {
  try {
    const data = await client.fetch<OwnerInfo | null>(OWNER_INFO_QUERY)

    // If Sanity data exists, return it
    if (data) {
      return data
    }

    // Fallback to config
    return getFallbackOwnerInfo()
  } catch (error) {
    console.error('Error fetching owner info from Sanity:', error)
    // Fallback to config on error
    return getFallbackOwnerInfo()
  }
}

/**
 * Fallback owner info from config file
 */
function getFallbackOwnerInfo(): OwnerInfo {
  return {
    phone: {
      number: CONTACT_INFO.PHONE.NUMBER,
      display: CONTACT_INFO.PHONE.DISPLAY,
    },
    email: CONTACT_INFO.EMAIL,
    social: {
      telegram: CONTACT_INFO.SOCIAL.TELEGRAM,
      viber: CONTACT_INFO.SOCIAL.VIBER,
      whatsapp: CONTACT_INFO.SOCIAL.WHATSAPP,
    },
  }
}
