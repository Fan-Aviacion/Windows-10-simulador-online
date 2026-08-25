import { useMemo, useState } from "react";
import { APPS } from "@/lib/win10/apps";
import { useWinStore } from "@/lib/win10/store";
import type { AppId, WinWindow } from "@/lib/win10/types";
import { AppIcon, IconFile, WindowsLogo } from "../icons";
import { cn } from "@/lib/utils";

export function StoreApp() {
  const openApp = useWinStore((s) => s.openApp);
  const featured: AppId[] = ["minesweeper", "paint", "notepad", "calculator", "photos", "mail"];
  const [got, setGot] = useState<Record<string, boolean>>({});
  return (
    <div className="win-scroll-light h-full overflow-auto bg-[#f6f6f6] p-6 text-win-window-fg">
      <h1 className="text-2xl font-light">Microsoft Store</h1>
      <p className="mt-1 text-win-sm text-win-window-muted">Aplicaciones destacadas para este equipo</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((id) => (
          <div key={id} className="flex items-center gap-3 bg-white p-4 shadow-[var(--shadow-menu)]">
            <AppIcon id={id} size={48} />
            <div className="min-w-0 flex-1">
              <p className="text-win-md">{APPS[id].name}</p>
              <p className="text-win-xs text-win-window-muted">Gratis · Microsoft</p>
            </div>
            <button
              type="button"
              className="bg-win-accent px-3 py-1 text-win-sm text-white"
              onClick={() => {
                setGot((g) => ({ ...g, [id]: true }));
                openApp(id);
              }}
            >
              {got[id] ? "Abrir" : "Obtener"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhotosApp({ win }: { win: WinWindow }) {
  const files = useWinStore((s) => s.files);
  const pics = files.filter(
    (f) => !f.trashed && (f.ext === "svg" || f.ext === "png" || f.ext === "jpg") && (f.dataUrl || f.content),
  );
  const [cur, setCur] = useState(win.payload?.fileId ?? pics[0]?.id ?? null);
  const pic = pics.find((p) => p.id === cur) ?? pics[0];
  const src = pic?.dataUrl ?? (pic?.content ? `data:image/svg+xml;utf8,${encodeURIComponent(pic.content)}` : "");

  return (
    <div className="flex h-full bg-[#1a1a1a] text-white">
      <div className="win-scroll hidden w-40 overflow-auto p-2 sm:block">
        {pics.map((p) => (
          <button key={p.id} type="button" className={cn("mb-2 block w-full", cur === p.id && "ring-2 ring-win-accent")} onClick={() => setCur(p.id)}>
            {p.dataUrl || p.content ? (
              <img src={p.dataUrl ?? `data:image/svg+xml;utf8,${encodeURIComponent(p.content ?? "")}`} alt={p.name} className="h-20 w-full object-cover" />
            ) : null}
          </button>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center p-4">
        {src ? <img src={src} alt={pic?.name} className="max-h-full max-w-full object-contain" /> : <p>No hay imágenes</p>}
      </div>
    </div>
  );
}

export function MailApp() {
  const { mail, markMailRead } = useWinStore();
  const [id, setId] = useState(mail[0]?.id);
  const msg = mail.find((m) => m.id === id);
  return (
    <div className="flex h-full bg-white text-win-window-fg">
      <div className="win-scroll-light w-56 shrink-0 overflow-auto border-r border-black/10 sm:w-72">
        {mail.map((m) => (
          <button
            key={m.id}
            type="button"
            className={cn("block w-full border-b border-black/5 px-3 py-3 text-left hover:bg-black/4", id === m.id && "bg-win-accent/10")}
            onClick={() => {
              setId(m.id);
              markMailRead(m.id);
            }}
          >
            <div className="flex justify-between text-win-sm">
              <span className={m.unread ? "font-semibold" : ""}>{m.from}</span>
              <span className="text-win-xs text-win-window-muted">{m.time}</span>
            </div>
            <p className="truncate text-win-sm">{m.subject}</p>
            <p className="truncate text-win-xs text-win-window-muted">{m.preview}</p>
          </button>
        ))}
      </div>
      <div className="win-scroll-light min-w-0 flex-1 overflow-auto p-6">
        {msg ? (
          <>
            <h1 className="text-xl font-light">{msg.subject}</h1>
            <p className="mt-2 text-win-sm">
              {msg.from} · {msg.fromEmail}
            </p>
            <pre className="mt-6 font-sans text-win-md leading-relaxed whitespace-pre-wrap">{msg.body}</pre>
          </>
        ) : null}
      </div>
    </div>
  );
}

export function CalendarApp() {
  const now = new Date();
  const [cursor, setCursor] = useState(new Date(now.getFullYear(), now.getMonth(), 1));
  const grid = useMemo(() => {
    const y = cursor.getFullYear();
    const m = cursor.getMonth();
    const start = (new Date(y, m, 1).getDay() + 6) % 7;
    const days = new Date(y, m + 1, 0).getDate();
    const cells: (number | null)[] = [...Array(start).fill(null)];
    for (let d = 1; d <= days; d++) cells.push(d);
    while (cells.length % 7) cells.push(null);
    return cells;
  }, [cursor]);

  return (
    <div className="flex h-full flex-col bg-white p-4 text-win-window-fg">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-light capitalize">
          {cursor.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
        </h1>
        <div className="flex gap-2">
          <button type="button" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}>
            ‹
          </button>
          <button type="button" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}>
            ›
          </button>
        </div>
      </div>
      <div className="mt-4 grid min-h-0 flex-1 grid-cols-7 grid-rows-6 gap-px bg-black/10">
        {grid.map((d, i) => (
          <div key={i} className="bg-white p-2 text-win-sm">
            {d ?? ""}
            {d === now.getDate() && cursor.getMonth() === now.getMonth() ? (
              <span className="ml-1 inline-block size-2 rounded-full bg-win-accent" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function StickyApp({ win }: { win: WinWindow }) {
  const { stickies, updateSticky } = useWinStore();
  const id = win.payload?.stickyId ?? stickies[0]?.id;
  const note = stickies.find((s) => s.id === id);
  if (!note) return <p className="p-3 text-win-sm">Nota no encontrada</p>;
  return (
    <textarea
      value={note.text}
      onChange={(e) => updateSticky(note.id, e.target.value)}
      className="h-full w-full resize-none border-0 bg-transparent p-3 text-win-md leading-relaxed outline-none"
    />
  );
}

export function RecycleApp() {
  const { files, restoreNode, emptyTrash } = useWinStore();
  const trash = files.filter((f) => f.trashed);
  return (
    <div className="flex h-full flex-col bg-white text-win-window-fg">
      <div className="flex items-center gap-2 border-b border-black/10 px-3 py-2 text-win-sm">
        <button type="button" className="px-2 py-1 hover:bg-black/6" onClick={emptyTrash} disabled={!trash.length}>
          Vaciar papelera
        </button>
      </div>
      <div className="win-scroll-light flex-1 overflow-auto p-3">
        {trash.length === 0 ? (
          <p className="p-8 text-center text-win-sm text-win-window-muted">La papelera de reciclaje está vacía.</p>
        ) : (
          trash.map((n) => (
            <button
              key={n.id}
              type="button"
              className="flex w-full items-center gap-3 px-2 py-2 text-left hover:bg-win-accent/15"
              onDoubleClick={() => restoreNode(n.id)}
            >
              <IconFile size={24} />
              <span className="flex-1 text-win-sm">{n.name}</span>
              <span className="text-win-xs text-win-window-muted">Doble clic para restaurar</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export function WinverApp() {
  return (
    <div className="flex h-full flex-col bg-[#f0f0f0] p-5 text-win-window-fg">
      <div className="flex items-center gap-3 border-b border-black/15 pb-3">
        <WindowsLogo size={28} className="text-win-accent" />
        <span className="text-lg font-light">Windows 10</span>
      </div>
      <p className="mt-4 text-win-sm leading-relaxed">
        Microsoft Windows
        <br />
        Versión 22H2 (compilación 19045.3803)
        <br />
        Simulador interactivo · no es un producto de Microsoft.
      </p>
      <p className="mt-4 text-win-xs text-win-window-muted">
        Este software es una recreación web con fines demostrativos.
      </p>
    </div>
  );
}

const W = 9;
const H = 9;
const MINES = 10;

function neighbors(i: number) {
  const x = i % W;
  const y = Math.floor(i / W);
  const r: number[] = [];
  for (let dy = -1; dy <= 1; dy++)
    for (let dx = -1; dx <= 1; dx++) {
      if (!dx && !dy) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < W && ny >= 0 && ny < H) r.push(ny * W + nx);
    }
  return r;
}

function plant(safe: number) {
  const mines = new Set<number>();
  while (mines.size < MINES) {
    const n = Math.floor(Math.random() * W * H);
    if (n !== safe) mines.add(n);
  }
  const counts = Array(W * H).fill(0);
  mines.forEach((m) => neighbors(m).forEach((n) => (counts[n] += 1)));
  return { mines, counts };
}

export function MinesweeperApp() {
  const [mines, setMines] = useState<Set<number>>(new Set());
  const [counts, setCounts] = useState<number[]>(Array(W * H).fill(0));
  const [open, setOpen] = useState<Set<number>>(new Set());
  const [flag, setFlag] = useState<Set<number>>(new Set());
  const [dead, setDead] = useState(false);
  const [ready, setReady] = useState(false);

  const won = ready && !dead && open.size === W * H - MINES;

  function reveal(i: number) {
    if (dead || won || flag.has(i) || open.has(i)) return;
    let m = mines;
    let c = counts;
    if (!ready) {
      const p = plant(i);
      m = p.mines;
      c = p.counts;
      setMines(m);
      setCounts(c);
      setReady(true);
    }
    if (m.has(i)) {
      setDead(true);
      setOpen(new Set([...open, i, ...m]));
      return;
    }
    const next = new Set(open);
    const stack = [i];
    while (stack.length) {
      const cur = stack.pop()!;
      if (next.has(cur) || flag.has(cur)) continue;
      next.add(cur);
      if (c[cur] === 0) neighbors(cur).forEach((n) => stack.push(n));
    }
    setOpen(next);
  }

  function reset() {
    setMines(new Set());
    setCounts(Array(W * H).fill(0));
    setOpen(new Set());
    setFlag(new Set());
    setDead(false);
    setReady(false);
  }

  return (
    <div className="flex h-full flex-col items-center bg-[#c0c0c0] p-3 text-win-window-fg">
      <div className="mb-2 flex w-full items-center justify-between bg-[#bdbdbd] px-2 py-1">
        <span className="font-mono text-win-md tabular-nums">{String(MINES - flag.size).padStart(3, "0")}</span>
        <button type="button" className="size-8 bg-[#ddd] text-lg" onClick={reset} aria-label="Nuevo">
          {dead ? "×" : won ? "!" : "☺"}
        </button>
        <span className="font-mono text-win-md">{won ? "WIN" : dead ? "---" : "000"}</span>
      </div>
      <div className="grid grid-cols-9 gap-px bg-[#808080] p-px">
        {Array.from({ length: W * H }, (_, i) => {
          const isOpen = open.has(i);
          const isMine = mines.has(i);
          const n = counts[i];
          return (
            <button
              key={i}
              type="button"
              className={cn(
                "grid size-8 place-items-center text-win-sm font-bold",
                isOpen ? "bg-[#e0e0e0]" : "bg-[#d0d0d0] shadow-[inset_-1px_-1px_#808080,inset_1px_1px_#fff]",
              )}
              onClick={() => reveal(i)}
              onContextMenu={(e) => {
                e.preventDefault();
                if (open.has(i) || dead) return;
                const nset = new Set(flag);
                if (nset.has(i)) nset.delete(i);
                else nset.add(i);
                setFlag(nset);
              }}
            >
              {isOpen && isMine ? "●" : isOpen && n ? n : flag.has(i) && !isOpen ? "▶" : ""}
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-win-xs text-win-window-muted">Clic derecho: bandera</p>
    </div>
  );
}
