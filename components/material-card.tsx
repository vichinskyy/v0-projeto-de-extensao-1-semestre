import Image from "next/image"
import { ExternalLink, Grid3X3, BookOpen, Layers, Gamepad2 } from "lucide-react"

interface MaterialCardProps {
  title: string
  description: string
  format: string
  formatColor: "green" | "red" | "orange"
  imageUrl: string
  imageAlt: string
  downloadUrl: string
  icon: "board" | "manual" | "cards" | "pawns"
  imageBg?: string
}

const formatColors = {
  green: "bg-primary text-primary-foreground",
  red: "bg-accent text-accent-foreground",
  orange: "bg-orange-500 text-white",
}

const icons = {
  board: Grid3X3,
  manual: BookOpen,
  cards: Layers,
  pawns: Gamepad2,
}

export function MaterialCard({
  title,
  description,
  format,
  formatColor,
  imageUrl,
  imageAlt,
  downloadUrl,
  icon,
  imageBg = "bg-muted",
}: MaterialCardProps) {
  const Icon = icons[icon]

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
      <div className={`relative aspect-[4/3] ${imageBg} overflow-hidden flex items-center justify-center`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground text-sm md:text-base">{title}</h3>
          <span
            className={`ml-auto px-2 py-0.5 text-xs font-bold rounded ${formatColors[formatColor]}`}
          >
            {format}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">{description}</p>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Baixar Arquivo
        </a>
      </div>
    </div>
  )
}
