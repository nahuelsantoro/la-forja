import { Header } from '../components/header/Header'
import { WhatsAppButton } from '../components/whatsapp/WhatsAppButton'
import { Footer } from '../components/footer/Footer'
type Props = {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  return (
  <>
    <Header />

    {children}

    <Footer />

    <WhatsAppButton />
  </>
)
}