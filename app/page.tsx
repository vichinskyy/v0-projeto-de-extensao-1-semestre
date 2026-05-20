import { Header } from "@/components/header"
import { MaterialsSection } from "@/components/materials-section"
import { ProjectInfo } from "@/components/project-info"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 bg-muted/30">
        <MaterialsSection />
        <ProjectInfo />
      </div>
      <Footer />
    </main>
  )
}
