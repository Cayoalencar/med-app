"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeedbackCharts } from "@/components/feedback-charts"
import { FeedbackTable } from "@/components/feedback-table"
import { Download } from "lucide-react"

// Mock data
const courses = [
  { id: "1", name: "Cardiologia Avançada" },
  { id: "2", name: "Neurologia Clínica" },
]

const lessons: Record<string, Array<{ id: string; name: string }>> = {
  "1": [
    { id: "1", name: "Aula 1: Anatomia Cardíaca" },
    { id: "2", name: "Aula 2: Fisiologia do Sistema Cardiovascular" },
  ],
  "2": [
    { id: "1", name: "Aula 1: Anatomia do Sistema Nervoso" },
    { id: "2", name: "Aula 2: Exame Neurológico" },
  ],
}

export default function RelatoriosPage() {
  const [selectedCourse, setSelectedCourse] = useState<string>("")
  const [selectedLesson, setSelectedLesson] = useState<string>("")
  const [showResults, setShowResults] = useState(false)

  const handleGenerateReport = () => {
    if (selectedCourse && selectedLesson) {
      setShowResults(true)
    }
  }

  const handleExportCSV = () => {
    alert("Exportando relatório para CSV...")
  }

  return (
    <AdminLayout>
      <div className="container mx-auto px-8 py-8 max-w-7xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Relatório de Respostas</h1>

        {/* Filters Section */}
        <Card className="p-6 mb-8">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">Filtros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label>Selecione o Curso</Label>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha um curso" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Selecione a Aula</Label>
              <Select value={selectedLesson} onValueChange={setSelectedLesson} disabled={!selectedCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha uma aula" />
                </SelectTrigger>
                <SelectContent>
                  {selectedCourse &&
                    lessons[selectedCourse]?.map((lesson) => (
                      <SelectItem key={lesson.id} value={lesson.id}>
                        {lesson.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handleGenerateReport}
            disabled={!selectedCourse || !selectedLesson}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Gerar Relatório
          </Button>
        </Card>

        {/* Results Section */}
        {showResults && (
          <Tabs defaultValue="charts" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="charts">Resumo Gráfico</TabsTrigger>
              <TabsTrigger value="individual">Respostas Individuais</TabsTrigger>
            </TabsList>

            <TabsContent value="charts" className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Total de Respostas</p>
                    <p className="font-serif text-3xl font-bold text-foreground">42</p>
                  </div>
                </div>
              </Card>

              <FeedbackCharts />
            </TabsContent>

            <TabsContent value="individual">
              <Card className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground">Respostas Individuais</h2>
                  <Button onClick={handleExportCSV} variant="outline" className="gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Exportar para CSV
                  </Button>
                </div>
                <FeedbackTable />
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </AdminLayout>
  )
}
