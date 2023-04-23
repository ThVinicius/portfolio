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
      <body>{children}</body>
    </html>
  )
}
