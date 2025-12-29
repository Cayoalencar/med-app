import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for individual responses
const individualResponses = [
  {
    id: "1",
    aluno: "Aluno 1",
    clareza: "5",
    relevancia: "5",
    ritmo: "Ideal",
    dominio: "5",
    engajamento: "4",
    confianca: "4",
  },
  {
    id: "2",
    aluno: "Aluno 2",
    clareza: "4",
    relevancia: "4",
    ritmo: "Ideal",
    dominio: "5",
    engajamento: "5",
    confianca: "4",
  },
  {
    id: "3",
    aluno: "Aluno 3",
    clareza: "5",
    relevancia: "5",
    ritmo: "Um Pouco Rápido",
    dominio: "5",
    engajamento: "4",
    confianca: "3",
  },
  {
    id: "4",
    aluno: "Aluno 4",
    clareza: "3",
    relevancia: "4",
    ritmo: "Ideal",
    dominio: "4",
    engajamento: "3",
    confianca: "3",
  },
  {
    id: "5",
    aluno: "Aluno 5",
    clareza: "4",
    relevancia: "5",
    ritmo: "Ideal",
    dominio: "5",
    engajamento: "5",
    confianca: "5",
  },
  {
    id: "6",
    aluno: "Aluno 6",
    clareza: "5",
    relevancia: "4",
    ritmo: "Um Pouco Lento",
    dominio: "4",
    engajamento: "4",
    confianca: "4",
  },
]

export function FeedbackTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Aluno</TableHead>
            <TableHead>Clareza</TableHead>
            <TableHead>Relevância</TableHead>
            <TableHead>Ritmo</TableHead>
            <TableHead>Domínio</TableHead>
            <TableHead>Engajamento</TableHead>
            <TableHead>Confiança</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {individualResponses.map((response) => (
            <TableRow key={response.id}>
              <TableCell className="font-medium">{response.aluno}</TableCell>
              <TableCell>{response.clareza}</TableCell>
              <TableCell>{response.relevancia}</TableCell>
              <TableCell>{response.ritmo}</TableCell>
              <TableCell>{response.dominio}</TableCell>
              <TableCell>{response.engajamento}</TableCell>
              <TableCell>{response.confianca}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
