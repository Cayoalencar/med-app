import Link from "next/link"
import { Card } from "@/components/ui/card"
import { BookOpen } from 'lucide-react'

interface DisciplineCardProps {
  discipline: {
    id: string
    title: string
    description: string
  }
  ano: string
  moduloId: string
}

export function DisciplineCard({ discipline, ano, moduloId }: DisciplineCardProps) {
  return (
    <Link href={`/aluno/anos/${ano}/modulos/${moduloId}/disciplinas/${discipline.id}`}>
      <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">{discipline.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{discipline.description}</p>
          </div>
        </div>
      </Card>
    </Link>
  )
}
