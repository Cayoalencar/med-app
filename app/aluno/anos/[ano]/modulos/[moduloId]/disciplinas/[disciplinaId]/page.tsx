"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { StudentHeader } from "@/components/student-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, X, Upload } from "lucide-react"

const activities = [
  "Ambulatório",
  "Enfermaria",
  "Centro Cirúrgico",
  "Visita Domiciliar",
  "Sala de Parto",
  "Discussão de Casos",
]

export default function DisciplinaPage({
  params,
}: {
  params: { ano: string; moduloId: string; disciplinaId: string }
}) {
  const [showModal, setShowModal] = useState(true)
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null)
  const [activityFormCompleted, setActivityFormCompleted] = useState(false)

  const handleActivitySelect = (activity: string) => {
    setSelectedActivity(activity)
    setShowModal(false)
    setActivityFormCompleted(false)
  }

  if (selectedActivity && !activityFormCompleted) {
    return (
      <div className="min-h-screen bg-background">
        <StudentHeader studentName="João Silva" />
        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <Link
            href={`/aluno/anos/${params.ano}/modulos/${params.moduloId}/disciplinas`}
            onClick={() => setSelectedActivity(null)}
          >
            <Button variant="ghost" className="mb-6 gap-2">
              <ChevronLeft className="h-4 w-4" />
              Voltar para Disciplinas
            </Button>
          </Link>
          <ActivityForm
            activity={selectedActivity}
            onComplete={() => setActivityFormCompleted(true)}
            onBack={() => setSelectedActivity(null)}
          />
        </main>
      </div>
    )
  }

  if (selectedActivity && activityFormCompleted) {
    return (
      <div className="min-h-screen bg-background">
        <StudentHeader studentName="João Silva" />
        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <Link
            href={`/aluno/anos/${params.ano}/modulos/${params.moduloId}/disciplinas`}
            onClick={() => setSelectedActivity(null)}
          >
            <Button variant="ghost" className="mb-6 gap-2">
              <ChevronLeft className="h-4 w-4" />
              Voltar para Disciplinas
            </Button>
          </Link>
          <CheckInForm
            activity={selectedActivity}
            ano={params.ano}
            moduloId={params.moduloId}
            disciplinaId={params.disciplinaId}
            onBack={() => setActivityFormCompleted(false)}
          />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader studentName="João Silva" />

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <Card className="w-full max-w-md mx-4 p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="font-serif text-2xl font-bold text-foreground mb-4 pr-8">Selecione a Atividade</h2>

            <div className="space-y-3">
              {activities.map((activity) => (
                <button
                  key={activity}
                  onClick={() => handleActivitySelect(activity)}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-primary/5 hover:border-primary transition-all"
                >
                  {activity}
                </button>
              ))}
            </div>
          </Card>
        </div>
      )}

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href={`/aluno/anos/${params.ano}/modulos/${params.moduloId}/disciplinas`}>
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="h-4 w-4" />
            Voltar para Disciplinas
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Atividades da Disciplina</h1>

        <Card className="p-8 text-center text-muted-foreground">
          <p>Clique em uma disciplina para abrir o modal de atividades</p>
        </Card>
      </main>
    </div>
  )
}

interface ActivityFormProps {
  activity: string
  onComplete: () => void
  onBack: () => void
}

function ActivityForm({ activity, onComplete, onBack }: ActivityFormProps) {
  const [formData, setFormData] = useState({
    date: "",
    shift: "",
    local: "",
    preceptor: "",
    attendances: "",
    diagnoses: "",
    discussedCases: "",
    surgeryType: "",
    role: "",
    participation: "",
    theme: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onComplete()
  }

  const renderActivityFields = () => {
    switch (activity) {
      case "Ambulatório":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Número de atendimentos</label>
              <input
                type="number"
                name="attendances"
                value={formData.attendances}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Casos/diagnósticos</label>
              <textarea
                name="diagnoses"
                value={formData.diagnoses}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </>
        )
      case "Enfermaria":
        return (
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Casos discutidos</label>
            <textarea
              name="discussedCases"
              value={formData.discussedCases}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        )
      case "Centro Cirúrgico":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tipo de cirurgia</label>
              <input
                type="text"
                name="surgeryType"
                value={formData.surgeryType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Posição/Papel na cirurgia (entrou em campo?)
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Selecione...</option>
                <option value="observador">Observador</option>
                <option value="auxiliar">Auxiliar</option>
                <option value="operador">Operador</option>
              </select>
            </div>
          </>
        )
      case "Sala de Parto":
        return (
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Realizou? Assistiu?</label>
            <select
              name="participation"
              value={formData.participation}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Selecione...</option>
              <option value="realizou">Realizou</option>
              <option value="assistiu">Assistiu</option>
            </select>
          </div>
        )
      case "Discussão de Casos":
        return (
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tema/Diagnóstico</label>
            <input
              type="text"
              name="theme"
              value={formData.theme}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-2">{activity}</h2>
        <p className="text-muted-foreground">Registro de Atividade</p>
      </div>

      <Card className="p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Data e turno</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Turno</label>
              <select
                name="shift"
                value={formData.shift}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Selecione...</option>
                <option value="matutino">Matutino</option>
                <option value="vespertino">Vespertino</option>
                <option value="noturno">Noturno</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Local (Unidade/Serviço)</label>
            <input
              type="text"
              name="local"
              value={formData.local}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Preceptor responsável</label>
            <input
              type="text"
              name="preceptor"
              value={formData.preceptor}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {renderActivityFields()}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              Revise as informações antes de finalizar. Você poderá editar em até 24h.
            </p>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Finalizar Registro
          </Button>
        </form>
      </Card>
    </>
  )
}

interface CheckInFormProps {
  activity: string
  ano: string
  moduloId: string
  disciplinaId: string
  onBack: () => void
}

function CheckInForm({ activity, ano, moduloId, disciplinaId, onBack }: CheckInFormProps) {
  const [checkInData, setCheckInData] = useState({
    location: "",
    time: "",
    photo: null as File | null,
  })
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCheckInData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCheckInData((prev) => ({ ...prev, photo: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmModal(true)
  }

  const handleNewRegistration = () => {
    setCheckInData({
      location: "",
      time: "",
      photo: null,
    })
    setPhotoPreview(null)
    setShowConfirmModal(false)
    onBack()
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-2">{activity}</h2>
        <p className="text-primary font-medium">Agora registre sua localização com foto, horário e endereço do local</p>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Endereço do local</label>
            <input
              type="text"
              name="location"
              value={checkInData.location}
              onChange={handleInputChange}
              required
              placeholder="Digite o endereço completo"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Horário</label>
            <input
              type="time"
              name="time"
              value={checkInData.time}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Foto do local</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                required
                className="hidden"
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="cursor-pointer">
                {photoPreview ? (
                  <div className="space-y-4">
                    <img
                      src={photoPreview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-sm text-primary font-medium">Clique para alterar a foto</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Upload className="h-12 w-12 mx-auto text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Clique para fazer upload da foto</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG ou JPEG (máx. 10MB)</p>
                    </div>
                  </div>
                )}
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Finalizar Registro
          </Button>
        </form>
      </Card>

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Registro concluído com sucesso!</h3>
            <p className="text-muted-foreground mb-2">Obrigado por atualizar suas atividades.</p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-green-800">
                Você pode registrar outra atividade ou retornar ao painel da disciplina.
              </p>
            </div>

            <div className="flex gap-3">
              <Link href={`/aluno/anos/${ano}/modulos/${moduloId}/disciplinas`} className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Concluir
                </Button>
              </Link>
              <Button onClick={handleNewRegistration} className="flex-1">
                Novo Registro
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
