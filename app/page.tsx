import { Header } from "@/components/header"
import { MaterialsSection } from "@/components/materials-section"
import { ProjectInfo } from "@/components/project-info"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <MaterialsSection />
        <ProjectInfo />
      </main>
      <Footer />
    </div>
  )
}
