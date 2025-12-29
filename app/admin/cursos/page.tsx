"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, SquarePen, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data
const initialCourses = [
  { id: "1", titulo: "Cardiologia Avançada", descricao: "Estudo aprofundado das patologias cardiovasculares" },
  { id: "2", titulo: "Neurologia Clínica", descricao: "Abordagem prática das principais doenças neurológicas" },
  { id: "3", titulo: "Pediatria Geral", descricao: "Fundamentos da medicina pediátrica" },
  { id: "4", titulo: "Cirurgia Geral", descricao: "Técnicas cirúrgicas fundamentais" },
]

export default function CursosPage() {
  const [courses, setCourses] = useState(initialCourses)

  const handleEdit = (id: string) => {
    alert(`Editar curso ${id}`)
  }

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este curso?")) {
      setCourses(courses.filter((c) => c.id !== id))
    }
  }

  const handleAdd = () => {
    alert("Adicionar novo curso")
  }

  return (
    <AdminLayout>
      <div className="container mx-auto px-8 py-8 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">Gerenciar Cursos</h1>
          <Button onClick={handleAdd} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            <Plus className="h-4 w-4" />
            Adicionar Novo Curso
          </Button>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.titulo}</TableCell>
                  <TableCell>{course.descricao}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(course.id)}
                        className="text-primary hover:text-primary hover:bg-primary/10"
                      >
                        <SquarePen className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(course.id)}
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
