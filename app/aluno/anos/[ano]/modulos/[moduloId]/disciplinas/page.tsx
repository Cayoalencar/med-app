import Link from "next/link"
import { StudentHeader } from "@/components/student-header"
import { DisciplineCard } from "@/components/discipline-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

// Mock data for disciplines by module
const disciplinesByModule: Record<string, { title: string; disciplinas: Array<{ id: string; title: string; description: string }> }> = {
  "1": {
    title: "Estágio Curricular em Atenção Básica I",
    disciplinas: [
      {
        id: "1",
        title: "Funcionamento da Atenção Primária (APS)",
        description:
          "Entender a organização da unidade de saúde, o fluxo de pacientes, e o papel de cada profissional da equipe multidisciplinar (médicos, enfermeiros, agentes comunitários de saúde, etc.).",
      },
      {
        id: "2",
        title: "Saúde Coletiva e Epidemiologia",
        description:
          "Aprender a identificar os principais problemas de saúde da comunidade atendida pela unidade, compreendendo os determinantes sociais da saúde.",
      },
      {
        id: "3",
        title: "Promoção e Prevenção",
        description:
          "Foco em ações para promover a saúde e prevenir doenças, como o acompanhamento de pacientes com doenças crônicas (hipertensão, diabetes), vacinação e orientação.",
      },
      {
        id: "4",
        title: "Políticas de Saúde",
        description:
          "Compreensão prática do funcionamento do Sistema Único de Saúde (SUS) e das políticas nacionais de atenção básica.",
      },
      {
        id: "5",
        title: "Atendimento Supervisionado",
        description:
          "Realização de consultas e atendimentos (sob supervisão) para os problemas de saúde mais comuns, desenvolvendo a relação médico-paciente e a comunicação.",
      },
      {
        id: "6",
        title: "Atenção a Grupos Específicos",
        description:
          "Acompanhamento da saúde de grupos prioritários, como gestantes (pré-natal), crianças (puericultura), idosos e mulheres.",
      },
      {
        id: "7",
        title: "Visitas Domiciliares",
        description:
          "Participação em visitas domiciliares com os agentes de saúde ou outros membros da equipe para entender o contexto de vida dos pacientes.",
      },
    ],
  },
}

export default function DisciplinasModuloPage({
  params,
}: {
  params: { ano: string; moduloId: string }
}) {
  const moduleData = disciplinesByModule[params.moduloId] || { title: "Módulo", disciplinas: [] }

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader studentName="João Silva" />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href={`/aluno/anos/${params.ano}/modulos`}>
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="h-4 w-4" />
            Voltar para Módulos
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">{moduleData.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moduleData.disciplinas.map((discipline) => (
            <DisciplineCard
              key={discipline.id}
              discipline={discipline}
              ano={params.ano}
              moduloId={params.moduloId}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
