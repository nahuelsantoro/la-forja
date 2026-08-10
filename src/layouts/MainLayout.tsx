import { Header } from '../components/header/Header'
import { WhatsAppButton } from '../components/whatsapp/WhatsAppButton'

type Props = {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <>
      <Header />

      {children}

      <WhatsAppButton />
    </>
  )
}