"use client"

import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from "react"
import { WelcomeModal } from "@/components/welcome-modal"
import { Button } from "@/components/ui/button"

export default function BoasVindasPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const studentName = searchParams.get("nome") || "Estudante"
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleYearSelect = (year: string) => {
    router.push(`/aluno/anos/${year}/modulos`)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-10">
      <WelcomeModal
        studentName={studentName}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="w-full max-w-2xl border border-border rounded-lg p-8 bg-card shadow-sm h-80 flex flex-col justify-center">
        {/* Year selection buttons */}
        <div className="flex gap-6 justify-center mb-12">
          <Button
            onClick={() => handleYearSelect("5")}
            className="h-28 px-12 text-xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
          >
            5° ano
          </Button>
          <Button
            onClick={() => handleYearSelect("6")}
            className="h-28 px-12 text-xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
          >
            6° ano
          </Button>
        </div>

        <p className="text-center text-muted-foreground text-lg">
          Selecione o seu ano atual para visualizar os módulos disponíveis.
        </p>
      </div>
    </div>
  )
}
