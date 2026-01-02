import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Link href="/test-completo">
        <Button size="lg" className="text-lg px-8 py-6">
          test
        </Button>
      </Link>
    </div>
  )
}
