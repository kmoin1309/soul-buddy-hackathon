"use client"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Button onClick={() => alert("Hello, ShadCN!")}>Click Me</Button>
    </main>
  );
}