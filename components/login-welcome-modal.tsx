"use client"

import { useState, useEffect } from "react"
import { X } from 'lucide-react'

export function LoginWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={handleClose}
      />
      
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div 
          className="relative bg-card border border-border rounded-lg shadow-lg p-8 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted rounded"
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5" />
          </button>

          <h2 className="font-serif text-xl font-bold text-primary mb-4 pr-8">
            Bem-vindo ao Sistema de Internato
          </h2>

          <div className="space-y-4 text-foreground">
            <p>
              Faça login para continuar.
            </p>

            <div className="bg-muted/50 p-4 rounded border-l-4 border-secondary">
              <p className="font-semibold text-sm text-secondary mb-1">Ajuda:</p>
              <p className="text-sm">
                Em caso de dúvidas, procure a Coordenação do Internato.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded border-l-4 border-primary">
              <p className="font-semibold text-sm text-primary mb-1">Observação:</p>
              <p className="text-sm">
                Após autenticação, você será direcionado à tela de Boas-vindas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
