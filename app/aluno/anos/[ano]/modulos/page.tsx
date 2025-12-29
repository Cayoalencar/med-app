import Link from "next/link"
import { StudentHeader } from "@/components/student-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, BookOpen } from 'lucide-react'

// Mock data for modules by year
const modulosByAno: Record<string, { modulos: Array<{ id: string; title: string }> }> = {
  "5": {
    modulos: [
      { id: "1", title: "Estágio Curricular em Atenção Básica I" },
      { id: "2", title: "Estágio Curricular em Atenção Básica II" },
      { id: "3", title: "Estágio Curricular em Especialidades Médicas" },
      { id: "4", title: "Estágio Curricular em Urgências e Emergências" },
      { id: "5", title: "Estágio Curricular em Saúde Coletiva" },
      { id: "6", title: "Estágio Curricular em Saúde Mental" },
      { id: "7", title: "Estágio Curricular Livre (Optativo)" },
    ],
  },
  "6": {
    modulos: [
      { id: "1", title: "Estágio Curricular em Saúde da Mulher" },
      { id: "2", title: "Estágio Curricular em Saúde da Criança" },
      { id: "3", title: "Estágio Curricular em Saúde do Adulto e do Idoso I" },
      { id: "4", title: "Estágio Curricular em Saúde do Adulto e do Idoso II" },
    ],
  },
}

export default function ModulosAnoPage({ params }: { params: { ano: string } }) {
  const anoData = modulosByAno[params.ano] || { modulos: [] }
  const yearLabel = `Módulos (${params.ano}º Ano)`

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader studentName="João Silva" />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/aluno/boas-vindas">
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="h-4 w-4" />
            Voltar para Boas-vindas
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">{yearLabel}</h1>

        <Card className="p-6">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Módulos Disponíveis</h2>
          <div className="space-y-3">
            {anoData.modulos.map((modulo) => (
              <Link key={modulo.id} href={`/aluno/anos/${params.ano}/modulos/${modulo.id}/disciplinas`}>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                  <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{modulo.title}</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-base mt-6">
            Selecione um módulo para seguir às disciplinas
          </p>
        </Card>
      </main>
    </div>
  )
}
