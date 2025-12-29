"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { GraduationCap, LogOut, User } from "lucide-react"

interface StudentHeaderProps {
  studentName?: string
}

export function StudentHeader({ studentName = "Aluno" }: StudentHeaderProps) {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/aluno/cursos" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-serif text-xl font-bold text-primary">MedEdu</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-sm text-foreground">Olá, {studentName}</span>
            <Link href="/aluno/perfil">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Meu Perfil
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
