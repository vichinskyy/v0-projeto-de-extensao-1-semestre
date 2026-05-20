import { BookOpen } from "lucide-react"

export function ProjectInfo() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card rounded-xl border border-border p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                Projeto de Extensão Universitária
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Este jogo foi desenvolvido como parte de um projeto de extensão do Instituto Federal de São Paulo (IFSP), Campus Suzano, com o intuito de mostrar um pouco mais sobre as profissões de ciências (Química, Física, Matemática e Astronomia) e mostrar que nem tudo que é de exatas é um &quot;bicho de sete cabeças.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
