import { Header } from '../components/header/Header'

type Props = {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}