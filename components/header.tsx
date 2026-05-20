import Image from "next/image"

export function Header() {
  return (
    <header className="w-full bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_ifsp.jpg-TH8pmv6jVHYE0u6tF2L5RPRiG0rYT5.png"
            alt="Logo IFSP - Instituto Federal São Paulo Campus Suzano"
            width={100}
            height={120}
            className="h-auto w-auto max-h-24"
            priority
          />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground leading-tight text-balance">
            TecOn 3.0: Conectando Ciência e tecnologia ao cotidiano juvenil do Alto Tietê - Profissões das áreas de ciência e tecnologia
          </h1>
        </div>
      </div>
    </header>
  )
}
