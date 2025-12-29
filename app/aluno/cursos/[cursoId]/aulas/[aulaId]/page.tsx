import Link from "next/link"
import { StudentHeader } from "@/components/student-header"
import { FeedbackForm } from "@/components/feedback-form"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

// Mock data
const lessonData: Record<string, Record<string, string>> = {
  "1": {
    "1": "Aula 1: Anatomia Cardíaca",
    "2": "Aula 2: Fisiologia do Sistema Cardiovascular",
    "3": "Aula 3: Insuficiência Cardíaca",
    "4": "Aula 4: Arritmias Cardíacas",
    "5": "Aula 5: Doença Arterial Coronariana",
  },
  "2": {
    "1": "Aula 1: Anatomia do Sistema Nervoso",
    "2": "Aula 2: Exame Neurológico",
    "3": "Aula 3: Acidente Vascular Cerebral",
  },
}

export default function AulaFeedbackPage({ params }: { params: { cursoId: string; aulaId: string } }) {
  const lessonTitle = lessonData[params.cursoId]?.[params.aulaId] || "Aula"

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader studentName="João Silva" />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href={`/aluno/cursos/${params.cursoId}/aulas`}>
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold text-foreground mb-4">{lessonTitle}</h1>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Seu feedback é anônimo e essencial para a melhoria contínua de nossas aulas. Por favor, dedique 2 minutos para
          responder às perguntas abaixo.
        </p>

        <FeedbackForm cursoId={params.cursoId} aulaId={params.aulaId} />
      </main>
    </div>
  )
}
