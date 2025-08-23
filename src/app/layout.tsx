import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seu Nome — Portfólio',
  description: 'Site pessoal moderno em Next.js',
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}