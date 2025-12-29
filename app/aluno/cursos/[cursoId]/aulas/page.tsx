import Link from "next/link"
import { StudentHeader } from "@/components/student-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, PlayCircle } from "lucide-react"

// Mock data
const courseData: Record<string, { title: string; lessons: Array<{ id: string; title: string }> }> = {
  "1": {
    title: "Cardiologia Avançada",
    lessons: [
      { id: "1", title: "Aula 1: Anatomia Cardíaca" },
      { id: "2", title: "Aula 2: Fisiologia do Sistema Cardiovascular" },
      { id: "3", title: "Aula 3: Insuficiência Cardíaca" },
      { id: "4", title: "Aula 4: Arritmias Cardíacas" },
      { id: "5", title: "Aula 5: Doença Arterial Coronariana" },
    ],
  },
  "2": {
    title: "Neurologia Clínica",
    lessons: [
      { id: "1", title: "Aula 1: Anatomia do Sistema Nervoso" },
      { id: "2", title: "Aula 2: Exame Neurológico" },
      { id: "3", title: "Aula 3: Acidente Vascular Cerebral" },
    ],
  },
}

export default function AulasCursoPage({ params }: { params: { cursoId: string } }) {
  const course = courseData[params.cursoId] || { title: "Curso", lessons: [] }

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader studentName="João Silva" />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/aluno/cursos">
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="h-4 w-4" />
            Voltar para Meus Cursos
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">{course.title}</h1>

        <Card className="p-6">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Aulas do Curso</h2>
          <div className="space-y-3">
            {course.lessons.map((lesson) => (
              <Link key={lesson.id} href={`/aluno/cursos/${params.cursoId}/aulas/${lesson.id}`}>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                  <PlayCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{lesson.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
