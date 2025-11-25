import { PATH } from './PATH'

export const NAVIGATION = [
  { name: 'Головна', href: PATH.HOME },
  { name: 'Послуги', href: PATH.SERVICES },
  { name: 'Портфоліо', href: PATH.PORTFOLIO },
  { name: 'Про нас', href: PATH.ABOUT },
  { name: 'Контакти', href: PATH.CONTACT },
] as const
