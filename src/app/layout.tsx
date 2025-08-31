import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { generateMetadata } from './lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateMetadata(
  'Neivam Carvalho - IT Digital Leader & AI Strategist',
  'Especialista em transformação digital, Business Intelligence e implementação de soluções de Inteligência Artificial. Líder experiente em IT com foco em inovação e resultados.',
  'https://neivamcarvalho.com.br'
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
