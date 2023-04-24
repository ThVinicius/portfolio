import '../assets/css/reset.scss'
import '../assets/css/global.scss'

import { Background } from 'components/background/Background'
import Header from 'components/header/Header'

export const metadata = {
  title: 'Vinicius Pacheco',
  description:
    'Portfolio do desenvolvedor de software Vinicius Pacheco dos Santos'
}

interface IProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="pt-BR">
      <body>
        <Background />
        <Header />
        {children}
      </body>
    </html>
  )
}
