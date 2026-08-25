import { useState } from "react";
import { ArrowLeft, ArrowRight, Plus, RefreshCw, Star, User } from "lucide-react";
import { APPS } from "@/lib/win10/apps";
import { useWinStore } from "@/lib/win10/store";
import type { AppId } from "@/lib/win10/types";
import { AppIcon } from "../icons";

type Page = {
  url: string;
  title: string;
  kind: "home" | "search" | "article" | "error";
  q?: string;
};

const ARTICLES: Record<string, { title: string; body: string }> = {
  "https://windows.local/welcome": {
    title: "Novedades de Windows 10",
    body: "El menú Inicio combina la lista clásica de aplicaciones con los paneles dinámicos. Ancla lo que más uses y personaliza el color de acento desde Configuración.",
  },
  "https://windows.local/tips": {
    title: "Consejos de productividad",
    body: "Arrastra las ventanas a los bordes para acoplarlas. Usa la búsqueda de la barra de tareas para encontrar aplicaciones y documentos. El Bloc de notas y Paint guardan en tus carpetas.",
  },
  "https://microsoft.local": {
    title: "Microsoft",
    body: "Microsoft Edge, Office y Windows. Este es un sitio simulado dentro del emulador. No hay conexión real a internet.",
  },
};

export function EdgeApp() {
  const openApp = useWinStore((s) => s.openApp);
  const [page, setPage] = useState<Page>({ url: "https://ntp.msedge.net", title: "Nueva pestaña", kind: "home" });
  const [addr, setAddr] = useState(page.url);
  const [hist, setHist] = useState<Page[]>([page]);
  const [hi, setHi] = useState(0);

  function go(next: Page) {
    const h = hist.slice(0, hi + 1);
    h.push(next);
    setHist(h);
    setHi(h.length - 1);
    setPage(next);
    setAddr(next.url);
  }

  function submitUrl(raw: string) {
    const v = raw.trim();
    if (!v) return;
    if (ARTICLES[v]) {
      go({ url: v, title: ARTICLES[v].title, kind: "article" });
      return;
    }
    if (v.startsWith("http") || v.includes(".")) {
      go({ url: v.startsWith("http") ? v : `https://${v}`, title: "Sin conexión", kind: "error" });
      return;
    }
    go({
      url: `https://www.bing.com/search?q=${encodeURIComponent(v)}`,
      title: `${v} - Búsqueda`,
      kind: "search",
      q: v,
    });
  }

  const q = (page.q ?? "").toLowerCase();
  const appHits = (Object.keys(APPS) as AppId[]).filter((id) => APPS[id].name.toLowerCase().includes(q));

  return (
    <div className="flex h-full flex-col bg-white text-win-window-fg">
      <div className="flex h-9 items-center gap-1 bg-[#d6d6d6] px-1">
        <span className="flex h-full items-center gap-2 bg-white px-3 text-win-sm">
          {page.title}
        </span>
        <button type="button" className="grid size-7 place-items-center hover:bg-black/8" aria-label="Nueva pestaña">
          <Plus className="size-3.5" />
        </button>
      </div>
      <div className="flex items-center gap-1 bg-[#e6e6e6] px-2 py-1">
        <button type="button" className="grid size-7 place-items-center" onClick={() => hi > 0 && (setHi(hi - 1), setPage(hist[hi - 1]), setAddr(hist[hi - 1].url))} aria-label="Atrás">
          <ArrowLeft className="size-4" />
        </button>
        <button type="button" className="grid size-7 place-items-center" onClick={() => hi < hist.length - 1 && (setHi(hi + 1), setPage(hist[hi + 1]), setAddr(hist[hi + 1].url))} aria-label="Adelante">
          <ArrowRight className="size-4" />
        </button>
        <button type="button" className="grid size-7 place-items-center" aria-label="Actualizar">
          <RefreshCw className="size-3.5" />
        </button>
        <form
          className="flex min-w-0 flex-1 items-center bg-white px-2"
          onSubmit={(e) => {
            e.preventDefault();
            submitUrl(addr);
          }}
        >
          <input
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
            className="h-7 min-w-0 flex-1 text-win-sm outline-none"
          />
          <Star className="size-3.5 text-win-window-muted" />
        </form>
        <User className="mx-1 size-4" />
      </div>
      <div className="win-scroll-light min-h-0 flex-1 overflow-auto">
        {page.kind === "home" ? (
          <div className="mx-auto max-w-2xl px-6 py-10">
            <h1 className="text-center text-3xl font-light text-win-accent">Microsoft Edge</h1>
            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                submitUrl(String(fd.get("q") ?? ""));
              }}
            >
              <input
                name="q"
                placeholder="Buscar o escribir una dirección"
                className="h-11 w-full border border-black/15 px-4 text-win-md shadow-[var(--shadow-menu)] outline-none"
              />
            </form>
            <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {[
                { id: "explorer" as AppId, label: "Archivos" },
                { id: "store" as AppId, label: "Store" },
                { id: "mail" as AppId, label: "Correo" },
                { id: "settings" as AppId, label: "Ajustes" },
              ].map((l) => (
                <button
                  key={l.id}
                  type="button"
                  className="flex flex-col items-center gap-2 text-win-xs"
                  onClick={() => openApp(l.id)}
                >
                  <AppIcon id={l.id} size={40} />
                  {l.label}
                </button>
              ))}
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {Object.entries(ARTICLES).map(([url, a]) => (
                <button
                  key={url}
                  type="button"
                  className="border border-black/10 p-4 text-left hover:bg-black/4"
                  onClick={() => go({ url, title: a.title, kind: "article" })}
                >
                  <p className="text-win-md">{a.title}</p>
                  <p className="mt-1 line-clamp-2 text-win-xs text-win-window-muted">{a.body}</p>
                </button>
              ))}
            </div>
          </div>
        ) : null}
        {page.kind === "article" && ARTICLES[page.url] ? (
          <article className="mx-auto max-w-xl px-6 py-8">
            <h1 className="text-2xl font-light">{ARTICLES[page.url].title}</h1>
            <p className="mt-4 text-win-md leading-relaxed">{ARTICLES[page.url].body}</p>
          </article>
        ) : null}
        {page.kind === "search" ? (
          <div className="px-6 py-6">
            <p className="text-win-sm text-win-window-muted">
              Resultados de Bing (simulados) para «{page.q}»
            </p>
            {appHits.map((id) => (
              <button
                key={id}
                type="button"
                className="mt-4 flex w-full items-center gap-3 text-left"
                onClick={() => openApp(id)}
              >
                <AppIcon id={id} size={28} />
                <span>
                  <span className="block text-win-accent">{APPS[id].name}</span>
                  <span className="text-win-xs text-win-window-muted">Aplicación de este equipo</span>
                </span>
              </button>
            ))}
            {Object.entries(ARTICLES)
              .filter(([, a]) => a.title.toLowerCase().includes(q) || a.body.toLowerCase().includes(q))
              .map(([url, a]) => (
                <button
                  key={url}
                  type="button"
                  className="mt-4 block text-left"
                  onClick={() => go({ url, title: a.title, kind: "article" })}
                >
                  <span className="text-win-accent">{a.title}</span>
                  <span className="block text-win-xs text-win-window-muted">{a.body.slice(0, 120)}…</span>
                </button>
              ))}
            {appHits.length === 0 ? (
              <p className="mt-6 text-win-sm">No hay más resultados en este equipo.</p>
            ) : null}
          </div>
        ) : null}
        {page.kind === "error" ? (
          <div className="px-10 py-16">
            <p className="text-3xl font-light">Hmmm… no podemos abrir esta página</p>
            <p className="mt-3 max-w-md text-win-sm text-win-window-muted">
              Este navegador es un simulador y no se conecta a Internet. Prueba a buscar o abre
              una de las páginas locales desde la pestaña nueva.
            </p>
            <button
              type="button"
              className="mt-6 bg-win-accent px-4 py-1.5 text-win-sm text-white"
              onClick={() => go({ url: "https://ntp.msedge.net", title: "Nueva pestaña", kind: "home" })}
            >
              Volver al inicio
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
