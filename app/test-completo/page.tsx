import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TestCompleto() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
      <p className="text-lg text-muted-foreground">confirmado</p>
      <Link href="/">
        <Button size="lg" className="text-lg px-8 py-6">
          test completo
        </Button>
      </Link>
    </div>
  )
}
