import { MaterialCard } from "./material-card"

const materials = [
  {
    title: "Tabuleiro do Jogo",
    description: "Arquivo do tabuleiro principal para impressão, utilizando folhas A4",
    format: "PDF",
    formatColor: "green" as const,
    imageUrl: "/tabuleiro.png",
    imageAlt: "Tabuleiro do jogo TecOn com trilha de casas coloridas e símbolos científicos",
    downloadUrl: "https://drive.google.com/file/d/1RQdi7IAuc93KlW5SQ6BPMb1rK-ey04fL/view?usp=drive_link", 
    icon: "board" as const,
    imageBg: "bg-gray-200",
    imageAspect: "aspect-[4/3]",
  },
  {
    title: "Manual de Instruções",
    description: "Guia completo com todas as regras do jogo.",
    format: "PDF",
    formatColor: "green" as const,
    imageUrl: "/regras_a5.png",
    imageAlt: "Manual de instruções do jogo com regras e preparação",
    downloadUrl: "https://canva.link/tosc98jhafsq8v3", 
    icon: "manual" as const,
    imageBg: "bg-white",
    imageAspect: "aspect-[3/4]",
  },
  {
    title: "Cartas do Jogo",
    description: "Deck completo com todas as cartas de perguntas.",
    format: "PDF",
    formatColor: "green" as const,
    imageUrl: "/cartas.png",
    imageAlt: "Cartas do jogo com perguntas de Teoria, Conceito Geral e Prática",
    downloadUrl: "https://drive.google.com/file/d/1b0hjptOifDuhPTOjkb43nWrEEofIQSC-/view?usp=sharing",
    icon: "cards" as const,
    imageBg: "bg-white",
    imageAspect: "aspect-[3/4]",
  },
  {
    title: "Peões do Jogo",
    description: "Modelos 3D dos peões e dados para impressão 3D.",
    format: "STL",
    formatColor: "red" as const,
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peoes_sem_fundo-YMfiVtFXmyYsOzBHnuZ9kCgjXopBcF.png",
    imageAlt: "Peões coloridos do jogo representando diferentes áreas da ciência",
    downloadUrl: "https://www.tinkercad.com/things/7BwoP0UrnvJ-peoes-tecon-30-coloridos?sharecode=jqDTclcMKPQ8cAgK1LvgxF7mB_Q5GG-l6i7kVwYG8aY", 
    icon: "pawns" as const,
    imageBg: "bg-gradient-to-b from-gray-300 to-gray-400",
    imageAspect: "aspect-[4/3]",
  },
]

export function MaterialsSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Repositório de Materiais para confecção própria do jogo
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Baixe todos os arquivos necessários para imprimir e jogar o nosso jogo na comodidade do local que estiver. Os arquivos foram pensados para a maior difusão do método, sendo possível jogar com uma cópia do material.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material) => (
            <MaterialCard key={material.title} {...material} />
          ))}
        </div>
      </div>
    </section>
  )
}
