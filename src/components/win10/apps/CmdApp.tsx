import { useEffect, useRef, useState } from "react";
import { childrenOf, pathOf } from "@/lib/win10/fs";
import { useWinStore } from "@/lib/win10/store";

const BANNER = `Microsoft Windows [Versión 10.0.19045.3803]
(c) Microsoft Corporation. Todos los derechos reservados.
`;

export function CmdApp() {
  const { files, openApp, setPhase, createFolder } = useWinStore();
  const [cwd, setCwd] = useState("user");
  const [lines, setLines] = useState<string[]>([BANNER, ""]);
  const [input, setInput] = useState("");
  const end = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLInputElement>(null);

  useEffect(() => {
    end.current?.scrollIntoView();
  }, [lines]);

  function prompt() {
    const p = pathOf(files, cwd)
      .map((n) => n.name)
      .join("\\");
    return `C:\\${p}>`;
  }

  function run(raw: string) {
    const line = raw.trim();
    const out: string[] = [`${prompt()}${raw}`];
    const [cmd, ...rest] = line.split(/\s+/);
    const arg = rest.join(" ");
    const c = (cmd ?? "").toLowerCase();

    if (!c) {
      /* empty */
    } else if (c === "help") {
      out.push(
        "help        Lista de comandos",
        "dir         Listar directorio",
        "cd          Cambiar carpeta",
        "cls         Borrar pantalla",
        "echo        Escribir texto",
        "type        Mostrar archivo",
        "mkdir       Crear carpeta",
        "tree        Árbol de carpetas",
        "ver         Versión",
        "date / time Fecha y hora",
        "whoami      Usuario actual",
        "systeminfo  Información del sistema",
        "ipconfig    Red simulada",
        "start       Abrir aplicación",
        "notepad     Bloc de notas",
        "winver      Acerca de Windows",
        "color       Color de consola (eco)",
        "bsod        Pantalla azul (easter egg)",
        "exit        Cerrar",
      );
    } else if (c === "cls") {
      setLines([""]);
      setInput("");
      return;
    } else if (c === "dir") {
      const kids = childrenOf(files, cwd);
      out.push(` Directorio de ${prompt().slice(0, -1)}`, "");
      for (const k of kids) {
        const mark = k.kind === "folder" ? "<DIR>" : "     ";
        out.push(`${new Date(k.modified).toLocaleDateString("es-ES")}  ${mark}  ${k.name}`);
      }
      out.push(`         ${kids.length} elementos`);
    } else if (c === "cd") {
      if (!arg || arg === "\\") setCwd("c");
      else if (arg === "..") {
        const node = files.find((f) => f.id === cwd);
        if (node?.parentId) setCwd(node.parentId);
      } else {
        const kids = childrenOf(files, cwd);
        const hit = kids.find((k) => k.name.toLowerCase() === arg.toLowerCase() && k.kind === "folder");
        if (hit) setCwd(hit.id);
        else out.push("El sistema no puede encontrar la ruta especificada.");
      }
    } else if (c === "echo") out.push(arg);
    else if (c === "type") {
      const kids = childrenOf(files, cwd);
      const hit = kids.find((k) => k.name.toLowerCase() === arg.toLowerCase());
      out.push(hit?.content ?? "No se encuentra el archivo.");
    } else if (c === "mkdir" && arg) {
      createFolder(cwd, arg);
      out.push(`Carpeta creada: ${arg}`);
    } else if (c === "tree") {
      function walk(id: string, prefix: string) {
        const kids = childrenOf(files, id);
        kids.forEach((k, i) => {
          const last = i === kids.length - 1;
          out.push(`${prefix}${last ? "└─" : "├─"} ${k.name}`);
          if (k.kind === "folder") walk(k.id, prefix + (last ? "   " : "│  "));
        });
      }
      walk(cwd, "");
    } else if (c === "ver") out.push("Microsoft Windows [Versión 10.0.19045.3803]");
    else if (c === "date") out.push(`La fecha actual es: ${new Date().toLocaleDateString("es-ES")}`);
    else if (c === "time") out.push(`La hora actual es: ${new Date().toLocaleTimeString("es-ES")}`);
    else if (c === "whoami") out.push("pc-win10\\usuario");
    else if (c === "hostname") out.push("PC-WIN10");
    else if (c === "systeminfo") {
      out.push(
        "Nombre del host:                 PC-WIN10",
        "Nombre del SO:                   Microsoft Windows 10 Pro",
        "Versión del SO:                  10.0.19045",
        "Fabricante:                      Simulador Win10",
        "Procesador:                      Grok Virtual CPU",
        "Memoria física total:            16.384 MB",
      );
    } else if (c === "ipconfig") {
      out.push(
        "Adaptador de LAN inalámbrica Wi-Fi:",
        "   Dirección IPv4. . . . . . . . : 192.168.1.42",
        "   Máscara de subred . . . . . . : 255.255.255.0",
        "   Puerta de enlace predeterminada: 192.168.1.1",
      );
    } else if (c === "start" || c === "notepad" || c === "calc" || c === "mspaint" || c === "explorer") {
      const map: Record<string, "notepad" | "calculator" | "paint" | "explorer" | "edge"> = {
        notepad: "notepad",
        calc: "calculator",
        mspaint: "paint",
        explorer: "explorer",
        start: "edge",
      };
      const app = c === "start" && arg ? undefined : map[c];
      if (app) openApp(app);
      else if (arg) openApp("edge");
      out.push("Iniciando…");
    } else if (c === "winver") openApp("winver");
    else if (c === "bsod") {
      setPhase("bsod");
      return;
    } else if (c === "exit") {
      const { windows, closeWindow } = useWinStore.getState();
      const w = windows.find((x) => x.appId === "cmd");
      if (w) closeWindow(w.id);
      return;
    } else if (c === "color") out.push("Color de consola actualizado (simulado).");
    else out.push(`"${cmd}" no se reconoce como un comando interno o externo.`);

    out.push("");
    setLines((l) => [...l, ...out]);
    setInput("");
  }

  return (
    <div
      className="flex h-full w-full flex-col bg-black p-2 text-left font-mono text-win-sm leading-relaxed text-[#cccccc]"
      onClick={() => box.current?.focus()}
    >
      <div className="win-scroll min-h-0 flex-1 overflow-auto whitespace-pre-wrap">
        {lines.join("\n")}
        <div className="flex">
          <span>{prompt()}</span>
          <input
            ref={box}
            value={input}
            autoFocus
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") run(input);
            }}
            className="min-w-0 flex-1 border-0 bg-transparent outline-none"
            spellCheck={false}
          />
        </div>
        <div ref={end} />
      </div>
    </div>
  );
}
