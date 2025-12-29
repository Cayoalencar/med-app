"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap } from 'lucide-react'

export function LoginForm() {
  const router = useRouter()
  const [matricula, setMatricula] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple mock authentication
    // Admin: matricula starts with 'ADM'
    // Student: any other matricula
    if (matricula.toUpperCase().startsWith("ADM")) {
      router.push("/admin/dashboard")
    } else {
      // Pass the student name via URL parameter
      const studentName = matricula.toUpperCase()
      router.push(`/aluno/boas-vindas?nome=${encodeURIComponent(studentName)}`)
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-card border border-border rounded-lg shadow-sm p-8">
        {/* Logo placeholder */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-10 w-10 text-primary" />
            <span className="font-serif text-2xl font-bold text-primary">MedEdu</span>
          </div>
        </div>

        <h2 className="font-serif text-2xl font-bold text-center mb-6 text-foreground">Acessar Plataforma</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="matricula">Matrícula</Label>
            <Input
              id="matricula"
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
}
