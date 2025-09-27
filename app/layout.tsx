import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CS Matthew - Portfolio',
  description: 'Personal portfolio showcasing my journey as a creative thinker and problem-solver, blending architecture studies with software development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
