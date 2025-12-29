"use client"

import type React from "react"

import { useState } from "react"
import { StudentHeader } from "@/components/student-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PerfilPage() {
  const [formData, setFormData] = useState({
    nome: "João Silva",
    email: "joao.silva@example.com",
    novaSenha: "",
    matricula: "2024001",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to an API
    console.log("Profile updated:", formData)
    alert("Alterações salvas com sucesso!")
  }

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader studentName={formData.nome} />

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Meu Perfil</h1>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="novaSenha">Nova Senha</Label>
              <Input
                id="novaSenha"
                type="password"
                value={formData.novaSenha}
                onChange={(e) => setFormData({ ...formData, novaSenha: e.target.value })}
                placeholder="Deixe em branco para manter a senha atual"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="matricula">Matrícula</Label>
              <Input id="matricula" type="text" value={formData.matricula} disabled className="bg-muted" />
              <p className="text-sm text-muted-foreground">A matrícula não pode ser alterada</p>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Salvar Alterações
            </Button>
          </form>
        </Card>
      </main>
    </div>
  )
}
