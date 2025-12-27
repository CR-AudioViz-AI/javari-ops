import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Operations Command Center | CRAIverse',
  description: 'Real-time monitoring and control center for all CRAIverse applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased">{children}</body>
    </html>
  )
}
