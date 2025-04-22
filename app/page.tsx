import { PlagiarismChecker } from "@/components/plagiarism-checker"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Advanced Plagiarism Detector</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Compare your text against an original source using semantic similarity analysis. Our AI-powered detector
            identifies not just exact matches, but also reworded phrases and similar concepts.
          </p>
        </div>

        <PlagiarismChecker />
      </div>
    </main>
  )
}
