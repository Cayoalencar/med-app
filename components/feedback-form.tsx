"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

interface FeedbackFormProps {
  cursoId: string
  aulaId: string
}

export function FeedbackForm({ cursoId, aulaId }: FeedbackFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    clareza: "",
    relevancia: "",
    ritmo: "",
    dominio: "",
    engajamento: "",
    confianca: "",
    pontoForte: "",
    sugestao: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to an API
    console.log("Feedback submitted:", formData)
    alert("Respostas enviadas com sucesso!")
    router.push(`/aluno/cursos/${cursoId}/aulas`)
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: About the Lesson Content */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-foreground">Sobre o Conteúdo da Aula</h3>

          {/* Question 1: Clarity */}
          <div className="space-y-3">
            <Label className="text-base">
              Em uma escala de 1 a 5, quão claro foi o conteúdo apresentado nesta aula?
            </Label>
            <RadioGroup
              value={formData.clareza}
              onValueChange={(value) => setFormData({ ...formData, clareza: value })}
              className="flex flex-wrap gap-4"
              required
            >
              {[
                { value: "1", label: "1 - Muito Confuso" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5 - Muito Claro" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`clareza-${option.value}`} />
                  <Label htmlFor={`clareza-${option.value}`} className="font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Question 2: Relevance */}
          <div className="space-y-3">
            <Label className="text-base">
              O conteúdo desta aula foi relevante para sua prática clínica / seus estudos?
            </Label>
            <RadioGroup
              value={formData.relevancia}
              onValueChange={(value) => setFormData({ ...formData, relevancia: value })}
              className="flex flex-wrap gap-4"
              required
            >
              {[
                { value: "1", label: "1 - Nada Relevante" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5 - Extremamente Relevante" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`relevancia-${option.value}`} />
                  <Label htmlFor={`relevancia-${option.value}`} className="font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Question 3: Pace */}
          <div className="space-y-3">
            <Label className="text-base">Como você avalia o ritmo da aula?</Label>
            <RadioGroup
              value={formData.ritmo}
              onValueChange={(value) => setFormData({ ...formData, ritmo: value })}
              className="flex flex-col gap-3"
              required
            >
              {[
                { value: "muito-lento", label: "Muito Lento" },
                { value: "pouco-lento", label: "Um Pouco Lento" },
                { value: "ideal", label: "Ideal" },
                { value: "pouco-rapido", label: "Um Pouco Rápido" },
                { value: "muito-rapido", label: "Muito Rápido" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`ritmo-${option.value}`} />
                  <Label htmlFor={`ritmo-${option.value}`} className="font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* Section 2: About the Instructor */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-foreground">Sobre o(a) Instrutor(a) / Professor(a)</h3>

          {/* Question 4: Mastery */}
          <div className="space-y-3">
            <Label className="text-base">O(A) instrutor(a) demonstrou domínio sobre o assunto?</Label>
            <RadioGroup
              value={formData.dominio}
              onValueChange={(value) => setFormData({ ...formData, dominio: value })}
              className="flex flex-wrap gap-4"
              required
            >
              {[
                { value: "1", label: "1 - Pouco Domínio" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5 - Domínio Completo" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`dominio-${option.value}`} />
                  <Label htmlFor={`dominio-${option.value}`} className="font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Question 5: Engagement */}
          <div className="space-y-3">
            <Label className="text-base">
              O(A) instrutor(a) conseguiu manter seu interesse e engajamento durante a aula?
            </Label>
            <RadioGroup
              value={formData.engajamento}
              onValueChange={(value) => setFormData({ ...formData, engajamento: value })}
              className="flex flex-wrap gap-4"
              required
            >
              {[
                { value: "1", label: "1 - Pouco Engajante" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5 - Extremamente Engajante" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`engajamento-${option.value}`} />
                  <Label htmlFor={`engajamento-${option.value}`} className="font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* Section 3: Self-Assessment and General Feedback */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-foreground">Autoavaliação e Feedback Geral</h3>

          {/* Question 6: Confidence */}
          <div className="space-y-3">
            <Label className="text-base">
              Após esta aula, como você avalia sua confiança para aplicar o conhecimento adquirido?
            </Label>
            <RadioGroup
              value={formData.confianca}
              onValueChange={(value) => setFormData({ ...formData, confianca: value })}
              className="flex flex-wrap gap-4"
              required
            >
              {[
                { value: "1", label: "1 - Nada Confiante" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5 - Totalmente Confiante" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`confianca-${option.value}`} />
                  <Label htmlFor={`confianca-${option.value}`} className="font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Question 7: Strengths (Optional) */}
          <div className="space-y-3">
            <Label htmlFor="pontoForte" className="text-base">
              (Opcional) Qual foi o ponto mais forte ou o principal aprendizado que você tirou desta aula?
            </Label>
            <Textarea
              id="pontoForte"
              value={formData.pontoForte}
              onChange={(e) => setFormData({ ...formData, pontoForte: e.target.value })}
              rows={4}
              className="resize-none"
              placeholder="Compartilhe seus principais aprendizados..."
            />
          </div>

          {/* Question 8: Suggestions (Optional) */}
          <div className="space-y-3">
            <Label htmlFor="sugestao" className="text-base">
              (Opcional) Você tem alguma sugestão de como esta aula poderia ser melhorada?
            </Label>
            <Textarea
              id="sugestao"
              value={formData.sugestao}
              onChange={(e) => setFormData({ ...formData, sugestao: e.target.value })}
              rows={4}
              className="resize-none"
              placeholder="Suas sugestões são muito importantes para nós..."
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Enviar Respostas
        </Button>
      </form>
    </Card>
  )
}
