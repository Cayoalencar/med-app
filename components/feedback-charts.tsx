"use client"

import { Card } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

// Mock data for Likert scale questions (1-5)
const clarezaData = [
  { option: "1 - Muito Confuso", count: 2, percentage: 5 },
  { option: "2", count: 3, percentage: 7 },
  { option: "3", count: 8, percentage: 19 },
  { option: "4", count: 15, percentage: 36 },
  { option: "5 - Muito Claro", count: 14, percentage: 33 },
]

const relevanciaData = [
  { option: "1 - Nada Relevante", count: 1, percentage: 2 },
  { option: "2", count: 2, percentage: 5 },
  { option: "3", count: 5, percentage: 12 },
  { option: "4", count: 18, percentage: 43 },
  { option: "5 - Extremamente Relevante", count: 16, percentage: 38 },
]

const dominioData = [
  { option: "1 - Pouco Domínio", count: 0, percentage: 0 },
  { option: "2", count: 1, percentage: 2 },
  { option: "3", count: 4, percentage: 10 },
  { option: "4", count: 12, percentage: 29 },
  { option: "5 - Domínio Completo", count: 25, percentage: 59 },
]

const engajamentoData = [
  { option: "1 - Pouco Engajante", count: 1, percentage: 2 },
  { option: "2", count: 3, percentage: 7 },
  { option: "3", count: 9, percentage: 21 },
  { option: "4", count: 16, percentage: 38 },
  { option: "5 - Extremamente Engajante", count: 13, percentage: 31 },
]

const confiancaData = [
  { option: "1 - Nada Confiante", count: 2, percentage: 5 },
  { option: "2", count: 4, percentage: 10 },
  { option: "3", count: 11, percentage: 26 },
  { option: "4", count: 17, percentage: 40 },
  { option: "5 - Totalmente Confiante", count: 8, percentage: 19 },
]

// Mock data for pace question (pie chart)
const ritmoData = [
  { name: "Muito Lento", value: 3, percentage: 7 },
  { name: "Um Pouco Lento", value: 5, percentage: 12 },
  { name: "Ideal", value: 28, percentage: 67 },
  { name: "Um Pouco Rápido", value: 5, percentage: 12 },
  { name: "Muito Rápido", value: 1, percentage: 2 },
]

// Colors for pie chart
const COLORS = ["#003366", "#006400", "#6C757D", "#B8860B", "#A42A2A"]

// Mock qualitative responses
const qualitativeResponses = {
  pontoForte: [
    "A explicação sobre a anatomia das válvulas cardíacas foi muito clara e detalhada.",
    "Gostei muito dos exemplos clínicos apresentados durante a aula.",
    "O uso de imagens e diagramas facilitou muito o entendimento.",
    "A correlação entre teoria e prática foi excelente.",
    "O professor conseguiu simplificar conceitos complexos de forma eficaz.",
  ],
  sugestao: [
    "Seria interessante incluir mais casos clínicos para discussão.",
    "Poderia ter mais tempo para perguntas ao final da aula.",
    "Sugiro adicionar vídeos de procedimentos reais.",
    "Gostaria de mais material de apoio para estudo posterior.",
  ],
}

export function FeedbackCharts() {
  return (
    <div className="space-y-6">
      {/* Question 1: Clarity */}
      <Card className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-4">
          Em uma escala de 1 a 5, quão claro foi o conteúdo apresentado nesta aula?
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={clarezaData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="option" type="category" width={150} />
            <Tooltip />
            <Bar dataKey="count" fill="#003366" label={{ position: "right" }} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Question 2: Relevance */}
      <Card className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-4">
          O conteúdo desta aula foi relevante para sua prática clínica / seus estudos?
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={relevanciaData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="option" type="category" width={200} />
            <Tooltip />
            <Bar dataKey="count" fill="#003366" label={{ position: "right" }} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Question 3: Pace (Pie Chart) */}
      <Card className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-4">Como você avalia o ritmo da aula?</h3>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={ritmoData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percentage }) => `${name}: ${percentage}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {ritmoData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      {/* Question 4: Instructor Mastery */}
      <Card className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-4">
          O(A) instrutor(a) demonstrou domínio sobre o assunto?
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dominioData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="option" type="category" width={180} />
            <Tooltip />
            <Bar dataKey="count" fill="#003366" label={{ position: "right" }} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Question 5: Engagement */}
      <Card className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-4">
          O(A) instrutor(a) conseguiu manter seu interesse e engajamento durante a aula?
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={engajamentoData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="option" type="category" width={200} />
            <Tooltip />
            <Bar dataKey="count" fill="#003366" label={{ position: "right" }} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Question 6: Confidence */}
      <Card className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-4">
          Após esta aula, como você avalia sua confiança para aplicar o conhecimento adquirido?
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={confiancaData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="option" type="category" width={200} />
            <Tooltip />
            <Bar dataKey="count" fill="#003366" label={{ position: "right" }} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Question 7: Strengths (Qualitative) */}
      <Card className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-4">
          Qual foi o ponto mais forte ou o principal aprendizado que você tirou desta aula?
        </h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {qualitativeResponses.pontoForte.map((response, index) => (
            <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-foreground leading-relaxed">{response}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Question 8: Suggestions (Qualitative) */}
      <Card className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-4">
          Você tem alguma sugestão de como esta aula poderia ser melhorada?
        </h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {qualitativeResponses.sugestao.map((response, index) => (
            <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-foreground leading-relaxed">{response}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
