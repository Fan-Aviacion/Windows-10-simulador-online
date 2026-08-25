import { useEffect, useState } from "react";
import { useWinStore } from "@/lib/win10/store";
import type { WinWindow } from "@/lib/win10/types";

export function NotepadApp({ win }: { win: WinWindow }) {
  const { files, writeFile, createFile, closeWindow } = useWinStore();
  const fileId = win.payload?.fileId;
  const file = files.find((f) => f.id === fileId);
  const [text, setText] = useState(file?.content ?? "");
  const [name, setName] = useState(file?.name ?? "Sin título");
  const [menu, setMenu] = useState<string | null>(null);

  useEffect(() => {
    if (file) setText(file.content ?? "");
  }, [file?.id]);

  function save() {
    if (file) {
      writeFile(file.id, text);
      return;
    }
    const id = createFile("documents", name.endsWith(".txt") ? name : `${name}.txt`, "txt", text);
    win.payload = { ...(win.payload ?? {}), fileId: id };
  }

  const lines = text.split("\n").length;
  const cols = text.length - (text.lastIndexOf("\n") + 1);

  return (
    <div className="flex h-full flex-col bg-white text-win-window-fg">
      <div className="flex h-6 items-center bg-[#f0f0f0] text-win-sm">
        {["Archivo", "Edición", "Formato", "Ver", "Ayuda"].map((m) => (
          <div key={m} className="relative">
            <button
              type="button"
              className="px-3 py-0.5 hover:bg-win-accent hover:text-white"
              onClick={() => setMenu(menu === m ? null : m)}
            >
              {m}
            </button>
            {menu === m && m === "Archivo" ? (
              <div className="absolute top-full left-0 z-10 w-44 border border-black/15 bg-white py-1 shadow-[var(--shadow-menu)]">
                <button
                  type="button"
                  className="block w-full px-4 py-1 text-left hover:bg-win-accent hover:text-white"
                  onClick={() => {
                    setText("");
                    setName("Sin título");
                    setMenu(null);
                  }}
                >
                  Nuevo
                </button>
                <button
                  type="button"
                  className="block w-full px-4 py-1 text-left hover:bg-win-accent hover:text-white"
                  onClick={() => {
                    save();
                    setMenu(null);
                  }}
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="block w-full px-4 py-1 text-left hover:bg-win-accent hover:text-white"
                  onClick={() => {
                    closeWindow(win.id);
                    setMenu(null);
                  }}
                >
                  Salir
                </button>
              </div>
            ) : null}
            {menu === m && m === "Ayuda" ? (
              <div className="absolute top-full left-0 z-10 w-52 border border-black/15 bg-white px-4 py-2 text-win-xs shadow-[var(--shadow-menu)]">
                Bloc de notas · Simulador Win10
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        spellCheck={false}
        className="min-h-0 flex-1 resize-none border-0 p-2 font-mono text-win-md leading-relaxed outline-none"
      />
      <div className="flex h-5 items-center justify-end gap-6 border-t border-black/10 bg-[#f0f0f0] px-3 text-win-xs text-win-window-muted">
        Ln {lines}, Col {cols + 1}
        <span>100%</span>
        <span>Windows (CRLF)</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}
