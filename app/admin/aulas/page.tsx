"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, SquarePen, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data
const initialLessons = [
  { id: "1", titulo: "Anatomia Cardíaca", curso: "Cardiologia Avançada" },
  { id: "2", titulo: "Fisiologia do Sistema Cardiovascular", curso: "Cardiologia Avançada" },
  { id: "3", titulo: "Anatomia do Sistema Nervoso", curso: "Neurologia Clínica" },
  { id: "4", titulo: "Exame Neurológico", curso: "Neurologia Clínica" },
  { id: "5", titulo: "Crescimento e Desenvolvimento Infantil", curso: "Pediatria Geral" },
]

export default function AulasPage() {
  const [lessons, setLessons] = useState(initialLessons)

  const handleEdit = (id: string) => {
    alert(`Editar aula ${id}`)
  }

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta aula?")) {
      setLessons(lessons.filter((l) => l.id !== id))
    }
  }

  const handleAdd = () => {
    alert("Adicionar nova aula")
  }

  return (
    <AdminLayout>
      <div className="container mx-auto px-8 py-8 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">Gerenciar Aulas</h1>
          <Button onClick={handleAdd} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            <Plus className="h-4 w-4" />
            Adicionar Nova Aula
          </Button>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Curso</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lessons.map((lesson) => (
                <TableRow key={lesson.id}>
                  <TableCell className="font-medium">{lesson.titulo}</TableCell>
                  <TableCell>{lesson.curso}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(lesson.id)}
                        className="text-primary hover:text-primary hover:bg-primary/10"
                      >
                        <SquarePen className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(lesson.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </AdminLayout>
  )
}
