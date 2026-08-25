import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronRight,
  Grid2x2,
  List,
  Search,
} from "lucide-react";
import { childrenOf, formatSize, pathOf, QUICK_ACCESS, THIS_PC_FOLDERS } from "@/lib/win10/fs";
import { useWinStore } from "@/lib/win10/store";
import type { WinWindow } from "@/lib/win10/types";
import { AppIcon, IconDrive, IconFile, IconFolder } from "../icons";

export function ExplorerApp({ win }: { win: WinWindow }) {
  const { files, openApp, createFolder, trashNode } = useWinStore();
  const initial = win.payload?.folderId ?? "c";
  const thisPc = win.payload?.view === "this-pc" || initial === "c";
  const [folderId, setFolderId] = useState(thisPc ? "c" : initial);
  const [hist, setHist] = useState<string[]>([thisPc ? "c" : initial]);
  const [hi, setHi] = useState(0);
  const [q, setQ] = useState("");
  const [view, setView] = useState<"icons" | "list">("icons");
  const [selected, setSelected] = useState<string | null>(null);

  function go(id: string) {
    const next = hist.slice(0, hi + 1);
    next.push(id);
    setHist(next);
    setHi(next.length - 1);
    setFolderId(id);
    setSelected(null);
  }
  function back() {
    if (hi <= 0) return;
    setHi(hi - 1);
    setFolderId(hist[hi - 1]);
  }
  function forward() {
    if (hi >= hist.length - 1) return;
    setHi(hi + 1);
    setFolderId(hist[hi + 1]);
  }

  const crumbs = pathOf(files, folderId);
  const items = useMemo(() => {
    const kids = childrenOf(files, folderId);
    if (!q.trim()) return kids;
    const n = q.toLowerCase();
    return kids.filter((k) => k.name.toLowerCase().includes(n));
  }, [files, folderId, q]);

  function openNode(id: string) {
    const node = files.find((f) => f.id === id);
    if (!node) return;
    if (node.kind === "folder") {
      go(node.id);
      return;
    }
    if (node.ext === "txt" || node.ext === "md") {
      openApp("notepad", { fileId: node.id, title: node.name });
    } else if (node.ext === "svg" || node.ext === "png" || node.ext === "jpg") {
      openApp("photos", { fileId: node.id });
    }
  }

  const showThisPc = folderId === "c";

  return (
    <div className="flex h-full bg-win-window text-win-window-fg">
      <aside className="win-scroll-light hidden w-48 shrink-0 overflow-y-auto border-r border-black/10 bg-[#f5f5f5] py-2 text-win-sm sm:block">
        <p className="px-3 py-1 text-win-xs text-win-window-muted">Acceso rápido</p>
        {QUICK_ACCESS.map((q) => (
          <button
            key={q.id}
            type="button"
            className="flex w-full items-center gap-2 px-3 py-1.5 text-left hover:bg-black/6"
            onClick={() => go(q.id)}
          >
            <IconFolder size={16} /> {q.name}
          </button>
        ))}
        <p className="mt-3 px-3 py-1 text-win-xs text-win-window-muted">Este equipo</p>
        <button
          type="button"
          className="flex w-full items-center gap-2 px-3 py-1.5 text-left hover:bg-black/6"
          onClick={() => go("c")}
        >
          <IconDrive size={16} /> Disco local (C:)
        </button>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-1 border-b border-black/10 px-2 py-1">
          <button type="button" className="grid size-8 place-items-center hover:bg-black/6" onClick={back} aria-label="Atrás">
            <ArrowLeft className="size-4" />
          </button>
          <button type="button" className="grid size-8 place-items-center hover:bg-black/6" onClick={forward} aria-label="Adelante">
            <ArrowRight className="size-4" />
          </button>
          <button
            type="button"
            className="grid size-8 place-items-center hover:bg-black/6"
            aria-label="Subir"
            onClick={() => {
              const p = files.find((f) => f.id === folderId)?.parentId;
              if (p) go(p);
            }}
          >
            <ArrowUp className="size-4" />
          </button>
          <div className="flex min-w-0 flex-1 items-center overflow-hidden border border-black/15 bg-white px-2 text-win-sm">
            {crumbs.map((c, i) => (
              <button key={c.id} type="button" className="flex shrink-0 items-center hover:underline" onClick={() => go(c.id)}>
                {i > 0 ? <ChevronRight className="size-3 opacity-50" /> : null}
                {c.name}
              </button>
            ))}
          </div>
          <div className="relative hidden w-40 sm:block">
            <Search className="pointer-events-none absolute top-1.5 left-2 size-3.5 text-win-window-muted" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar"
              className="h-7 w-full border border-black/15 bg-white pr-2 pl-7 text-win-sm outline-none"
            />
          </div>
          <button type="button" className="grid size-8 place-items-center hover:bg-black/6" onClick={() => setView(view === "icons" ? "list" : "icons")}>
            {view === "icons" ? <List className="size-4" /> : <Grid2x2 className="size-4" />}
          </button>
        </div>
        <div
          className="win-scroll-light min-h-0 flex-1 overflow-auto p-3"
          onContextMenu={(e) => {
            e.preventDefault();
            createFolder(folderId);
          }}
        >
          {showThisPc ? (
            <div>
              <p className="mb-2 text-win-sm text-win-window-muted">Carpetas</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {THIS_PC_FOLDERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className="flex items-center gap-3 p-2 text-left hover:bg-win-accent/15"
                    onDoubleClick={() => go(f.id)}
                    onClick={() => go(f.id)}
                  >
                    <IconFolder size={40} />
                    <span className="text-win-sm">{f.name}</span>
                  </button>
                ))}
              </div>
              <p className="mt-6 mb-2 text-win-sm text-win-window-muted">Dispositivos y unidades</p>
              <button
                type="button"
                className="flex items-center gap-3 p-2 text-left hover:bg-win-accent/15"
                onClick={() => go("windows")}
              >
                <IconDrive size={40} />
                <span>
                  <span className="block text-win-sm">Disco local (C:)</span>
                  <span className="text-win-xs text-win-window-muted">Windows · 118 GB libres de 256 GB</span>
                </span>
              </button>
            </div>
          ) : view === "icons" ? (
            <div className="flex flex-wrap gap-1">
              {items.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  className="flex w-24 flex-col items-center gap-1 p-2 text-center text-win-xs hover:bg-win-accent/15"
                  data-selected={selected === n.id}
                  onClick={() => setSelected(n.id)}
                  onDoubleClick={() => openNode(n.id)}
                >
                  {n.kind === "folder" ? <IconFolder size={40} /> : n.ext === "svg" ? <AppIcon id="photos" size={40} /> : <IconFile size={40} />}
                  <span className="line-clamp-2 w-full">{n.name}</span>
                </button>
              ))}
              {items.length === 0 ? (
                <p className="p-8 text-win-sm text-win-window-muted">Esta carpeta está vacía.</p>
              ) : null}
            </div>
          ) : (
            <table className="w-full text-left text-win-sm">
              <thead className="text-win-window-muted">
                <tr>
                  <th className="font-medium">Nombre</th>
                  <th className="font-medium">Modificado</th>
                  <th className="font-medium">Tamaño</th>
                </tr>
              </thead>
              <tbody>
                {items.map((n) => (
                  <tr
                    key={n.id}
                    className="cursor-pointer hover:bg-win-accent/15"
                    onClick={() => setSelected(n.id)}
                    onDoubleClick={() => openNode(n.id)}
                  >
                    <td className="flex items-center gap-2 py-1">
                      {n.kind === "folder" ? <IconFolder size={16} /> : <IconFile size={16} />}
                      {n.name}
                    </td>
                    <td>{new Date(n.modified).toLocaleString("es-ES")}</td>
                    <td>{formatSize(n)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="flex h-6 items-center border-t border-black/10 px-3 text-win-xs text-win-window-muted">
          {items.length} elementos
          {selected ? (
            <button type="button" className="ml-auto hover:underline" onClick={() => selected && trashNode(selected)}>
              Eliminar
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
