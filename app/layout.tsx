import type React from "react"
import { Lora, Lato } from "next/font/google"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "700"],
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
  display: "swap",
})

export const metadata = {
  title: "Plataforma de Educação Médica",
  description: "Sistema de gestão de cursos e feedback para educação médica",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${lato.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
