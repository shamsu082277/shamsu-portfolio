import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">
          My Developer Portfolio
        </h1>
        <p>Building useful things for the web.</p>
        <Button>View My Projects</Button>
      </div>
    </main>
  );
}