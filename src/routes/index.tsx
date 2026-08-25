import { createFileRoute } from "@tanstack/react-router";
import { Win10 } from "@/components/win10/Win10";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Win10 />;
}
