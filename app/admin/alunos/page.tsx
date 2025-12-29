"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, SquarePen, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data
const initialStudents = [
  { id: "1", nome: "João Silva", email: "joao.silva@example.com", matricula: "2024001" },
  { id: "2", nome: "Maria Santos", email: "maria.santos@example.com", matricula: "2024002" },
  { id: "3", nome: "Pedro Oliveira", email: "pedro.oliveira@example.com", matricula: "2024003" },
  { id: "4", nome: "Ana Costa", email: "ana.costa@example.com", matricula: "2024004" },
  { id: "5", nome: "Carlos Ferreira", email: "carlos.ferreira@example.com", matricula: "2024005" },
]

export default function AlunosPage() {
  const [students, setStudents] = useState(initialStudents)

  const handleEdit = (id: string) => {
    alert(`Editar aluno ${id}`)
  }

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este aluno?")) {
      setStudents(students.filter((s) => s.id !== id))
    }
  }

  const handleAdd = () => {
    alert("Adicionar novo aluno")
  }

  return (
    <AdminLayout>
      <div className="container mx-auto px-8 py-8 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">Gerenciar Alunos</h1>
          <Button onClick={handleAdd} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            <Plus className="h-4 w-4" />
            Adicionar Novo Aluno
          </Button>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Matrícula</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.matricula}</TableCell>
                  <TableCell>{student.nome}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(student.id)}
                        className="text-primary hover:text-primary hover:bg-primary/10"
                      >
                        <SquarePen className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(student.id)}
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
