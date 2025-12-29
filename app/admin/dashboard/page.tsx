import { AdminLayout } from "@/components/admin-layout"
import { Card } from "@/components/ui/card"
import { Users, BookMarked } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="container mx-auto px-8 py-8 max-w-6xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Summary Card 1: Total Students */}
          <Card className="p-8">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="font-serif text-5xl font-bold text-foreground">150</p>
                <p className="text-muted-foreground mt-1">Total de Alunos</p>
              </div>
            </div>
          </Card>

          {/* Summary Card 2: Total Courses */}
          <Card className="p-8">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-secondary/10 rounded-lg">
                <BookMarked className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <p className="font-serif text-5xl font-bold text-foreground">12</p>
                <p className="text-muted-foreground mt-1">Total de Cursos</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
