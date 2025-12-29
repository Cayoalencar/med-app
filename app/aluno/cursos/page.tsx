import { StudentHeader } from "@/components/student-header"
import { CourseCard } from "@/components/course-card"

// Mock data
const courses = [
  {
    id: "1",
    title: "Cardiologia Avançada",
    description:
      "Estudo aprofundado das patologias cardiovasculares, diagnóstico e tratamento de doenças cardíacas complexas.",
  },
  {
    id: "2",
    title: "Neurologia Clínica",
    description:
      "Abordagem prática das principais doenças neurológicas, incluindo diagnóstico diferencial e manejo clínico.",
  },
  {
    id: "3",
    title: "Pediatria Geral",
    description:
      "Fundamentos da medicina pediátrica, crescimento e desenvolvimento infantil, e principais patologias da infância.",
  },
  {
    id: "4",
    title: "Cirurgia Geral",
    description:
      "Técnicas cirúrgicas fundamentais, preparo pré-operatório e cuidados pós-operatórios em cirurgia geral.",
  },
]

export default function MeusCursosPage() {
  return (
    <div className="min-h-screen bg-background">
      <StudentHeader studentName="João Silva" />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Meus Cursos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  )
}
