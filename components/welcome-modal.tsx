"use client"

import { useState, useEffect } from "react"
import { X } from 'lucide-react'

interface WelcomeModalProps {
  studentName: string
  onClose: () => void
}

export function WelcomeModal({ studentName, onClose }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal on mount
    setIsOpen(true)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-card border border-border rounded-lg shadow-lg p-8 max-w-md w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            Olá, {studentName}!
          </h2>

          <div className="space-y-4">
            <p className="text-sm text-foreground leading-relaxed">
              É um prazer ter você aqui.
            </p>

            <div className="bg-muted/50 rounded p-4">
              <h3 className="font-semibold text-sm text-foreground mb-2">
                Primeiro acesso:
              </h3>
              <p className="text-sm text-foreground">
                você navegará por Ano → Módulo → Disciplina para configurar seu fluxo.
              </p>
            </div>

            <div className="bg-muted/50 rounded p-4">
              <h3 className="font-semibold text-sm text-foreground mb-2">
                Acessos posteriores:
              </h3>
              <p className="text-sm text-foreground">
                você será levado diretamente às atividades da disciplina atual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
