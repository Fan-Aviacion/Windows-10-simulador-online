import { useMemo, useState } from "react";
import {
  BatteryFull,
  Bell,
  Moon,
  Plane,
  Volume2,
  Wifi,
  WifiOff,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APPS } from "@/lib/win10/apps";
import { useWinStore } from "@/lib/win10/store";
import { useNow } from "@/lib/win10/use-now";
import type { AppId } from "@/lib/win10/types";
import { AppIcon } from "./icons";

export function SearchPanel() {
  const { searchQ, setSearch, openApp, files } = useWinStore();
  const q = searchQ.trim().toLowerCase();
  const apps = (Object.keys(APPS) as AppId[]).filter(
    (id) =>
      id !== "this-pc" &&
      id !== "winver" &&
      APPS[id].name.toLowerCase().includes(q),
  );
  const docs = q
    ? files.filter((f) => !f.trashed && f.name.toLowerCase().includes(q)).slice(0, 6)
    : [];

  return (
    <div
      className="win-flyout-enter absolute bottom-taskbar left-0 z-50 flex h-[min(520px,calc(100%-var(--height-taskbar)))] w-[min(520px,100%)] flex-col bg-win-start text-win-start-fg shadow-[var(--shadow-flyout)]"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <input
        autoFocus
        value={searchQ}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Escribe aquí para buscar"
        className="h-12 shrink-0 border-0 border-b border-white/10 bg-transparent px-4 text-win-lg outline-none"
      />
      <div className="win-scroll flex-1 overflow-y-auto p-2">
        <p className="px-2 py-1 text-win-xs text-win-start-muted">Aplicaciones</p>
        {(q ? apps : apps.slice(0, 8)).map((id) => (
          <button
            key={id}
            type="button"
            className="flex w-full items-center gap-3 px-2 py-2 text-left text-win-md hover:bg-win-hover"
            onClick={() => openApp(id)}
          >
            <AppIcon id={id} size={28} />
            {APPS[id].name}
          </button>
        ))}
        {docs.length ? (
          <>
            <p className="mt-3 px-2 py-1 text-win-xs text-win-start-muted">Documentos</p>
            {docs.map((f) => (
              <button
                key={f.id}
                type="button"
                className="flex w-full items-center gap-3 px-2 py-2 text-left text-win-md hover:bg-win-hover"
                onClick={() =>
                  openApp(
                    f.ext === "txt" ? "notepad" : f.ext === "svg" ? "photos" : "explorer",
                    f.ext === "txt" ? { fileId: f.id } : { folderId: f.parentId ?? "documents" },
                  )
                }
              >
                {f.name}
              </button>
            ))}
          </>
        ) : null}
        {q && apps.length === 0 && docs.length === 0 ? (
          <p className="px-3 py-8 text-center text-win-sm text-win-start-muted">
            No hay resultados para «{searchQ}»
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function CalendarFlyout() {
  const now = useNow(1000);
  const [cursor, setCursor] = useState(() => new Date());
  const grid = useMemo(() => {
    const y = cursor.getFullYear();
    const m = cursor.getMonth();
    const first = new Date(y, m, 1);
    const start = (first.getDay() + 6) % 7;
    const days = new Date(y, m + 1, 0).getDate();
    const cells: (number | null)[] = [...Array(start).fill(null)];
    for (let d = 1; d <= days; d++) cells.push(d);
    while (cells.length % 7) cells.push(null);
    return cells;
  }, [cursor]);
  const today = now ?? new Date();

  return (
    <div
      className="win-flyout-enter absolute right-2 bottom-taskbar z-50 w-[min(360px,100%)] bg-win-start p-4 text-win-start-fg shadow-[var(--shadow-flyout)]"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="text-3xl font-light tabular-nums">
        {today.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
      </div>
      <div className="mt-1 capitalize text-win-accent">
        {today.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}
      </div>
      <div className="mt-4 flex items-center justify-between text-win-md">
        <button type="button" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}>
          ‹
        </button>
        <span className="capitalize">
          {cursor.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
        </span>
        <button type="button" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}>
          ›
        </button>
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1 text-center text-win-xs text-win-start-muted">
        {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
          <div key={d}>{d}</div>
        ))}
        {grid.map((d, i) => {
          const isToday =
            d &&
            d === today.getDate() &&
            cursor.getMonth() === today.getMonth() &&
            cursor.getFullYear() === today.getFullYear();
          return (
            <div
              key={i}
              className={cn(
                "grid h-8 place-items-center",
                isToday && "bg-win-accent text-white",
              )}
            >
              {d ?? ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ActionCenter() {
  const { settings, patchSettings, notif, clearNotifs, openApp } = useWinStore();
  const tiles = [
    { id: "wifi", label: "Wi-Fi", on: settings.wifi, icon: settings.wifi ? Wifi : WifiOff, toggle: () => patchSettings({ wifi: !settings.wifi }) },
    { id: "plane", label: "Avión", on: !settings.wifi, icon: Plane, toggle: () => patchSettings({ wifi: !settings.wifi }) },
    { id: "night", label: "Luz nocturna", on: settings.nightLight, icon: Moon, toggle: () => patchSettings({ nightLight: !settings.nightLight }) },
    { id: "tablet", label: "Tableta", on: false, icon: BatteryFull, toggle: () => {} },
  ];

  return (
    <div
      className="win-flyout-enter absolute right-0 bottom-taskbar z-50 flex h-[min(480px,calc(100%-var(--height-taskbar)))] w-[min(360px,100%)] flex-col bg-win-start text-win-start-fg shadow-[var(--shadow-flyout)]"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-win-md">Centro de actividades</span>
        {notif.length ? (
          <button type="button" className="text-win-xs text-win-accent" onClick={clearNotifs}>
            Borrar todo
          </button>
        ) : null}
      </div>
      <div className="win-scroll flex-1 overflow-y-auto px-3">
        {notif.length === 0 ? (
          <p className="py-10 text-center text-win-sm text-win-start-muted">No hay notificaciones nuevas</p>
        ) : (
          notif.map((n) => (
            <button
              key={n.id}
              type="button"
              className="mb-2 w-full bg-white/8 p-3 text-left hover:bg-white/12"
              onClick={() => openApp("mail")}
            >
              <div className="flex items-center gap-2 text-win-sm">
                <Bell className="size-3.5" /> {n.title}
              </div>
              <p className="mt-1 text-win-xs text-win-start-muted">{n.body}</p>
            </button>
          ))
        )}
      </div>
      <div className="grid grid-cols-4 gap-1 p-3">
        {tiles.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={t.toggle}
            className={cn(
              "flex h-16 flex-col items-start justify-between p-2 text-left text-win-xs",
              t.on ? "text-white" : "bg-white/10 text-win-start-muted",
            )}
            style={t.on ? { background: settings.accent } : undefined}
          >
            <t.icon className="size-4" />
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function VolumeFlyout() {
  const { settings, patchSettings } = useWinStore();
  return (
    <div
      className="win-flyout-enter absolute right-16 bottom-taskbar z-50 flex w-72 items-center gap-3 bg-win-start px-4 py-3 text-win-start-fg shadow-[var(--shadow-flyout)]"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <Volume2 className="size-4 shrink-0" />
      <input
        type="range"
        min={0}
        max={100}
        value={settings.volume}
        onChange={(e) => patchSettings({ volume: Number(e.target.value) })}
        className="w-full accent-[var(--color-win-accent)]"
      />
      <span className="w-8 text-right text-win-sm tabular-nums">{settings.volume}</span>
    </div>
  );
}

export function NetworkFlyout() {
  const { settings, patchSettings } = useWinStore();
  return (
    <div
      className="win-flyout-enter absolute right-24 bottom-taskbar z-50 w-72 bg-win-start p-3 text-win-start-fg shadow-[var(--shadow-flyout)]"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <p className="mb-2 text-win-sm">Red e Internet</p>
      <button
        type="button"
        className="flex w-full items-center gap-3 px-2 py-2 text-left hover:bg-win-hover"
        onClick={() => patchSettings({ wifi: !settings.wifi })}
      >
        {settings.wifi ? <Wifi className="size-4" /> : <WifiOff className="size-4" />}
        <span>
          <span className="block text-win-md">{settings.wifi ? "Wi-Fi" : "Wi-Fi desactivado"}</span>
          <span className="text-win-xs text-win-start-muted">
            {settings.wifi ? "Conectado · Red simulada" : "Sin conexión"}
          </span>
        </span>
      </button>
    </div>
  );
}
