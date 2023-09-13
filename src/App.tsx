import { Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";

export function App() {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener noreferrer");
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido com 💜 no NLW da Rocketseat.</span>

          <Separator orientation="vertical" className="h-6"/>
          <Button variant="outline" onClick={()=> openInNewTab("https://github.com/brevsc")}>
            <Github className="h-4 w-4 mr-2" />
            Github 
            </Button>
        </div>
      </div>

    <main className="flex-1 p-6 flex gap-6">
      <div className="flex flex-col flex-1 gap-4">
        <div className="grid grid-rows-2 gap-4 flex-1">
          <Textarea placeholder="input" />
          <Textarea placeholder="output" />

        </div>

        <p className="text-sm text-muted-foreground">Lembre-se: você pode usar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado </p>
      </div>
      <aside className="w-80"></aside>
    </main>

    </div>
  )
}
