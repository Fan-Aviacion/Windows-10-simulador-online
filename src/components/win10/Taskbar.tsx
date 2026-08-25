import { BatteryFull, Bell, Search, Volume2, Wifi, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { APPS } from "@/lib/win10/apps";
import { useWinStore } from "@/lib/win10/store";
import type { AppId } from "@/lib/win10/types";
import { formatClock, useNow } from "@/lib/win10/use-now";
import { AppIcon, WindowsLogo } from "./icons";
import { StartMenu } from "./StartMenu";
import { ActionCenter, CalendarFlyout, NetworkFlyout, SearchPanel, VolumeFlyout } from "./Flyouts";

const PINNED: AppId[] = ["edge", "explorer", "store", "mail"];

export function Taskbar() {
  const { panel, setPanel, windows, restoreOrMin, setCtx, settings } = useWinStore();
  const now = useNow(1000);
  const clock = now ? formatClock(now) : null;
  const extra = [...new Set(windows.map((w) => w.appId))].filter((id) => !PINNED.includes(id));
  const shown: AppId[] = [...PINNED, ...extra];
  const topZ = Math.max(0, ...windows.filter((w) => !w.min).map((w) => w.z));

  return (
    <>
      {panel === "start" || panel === "power" || panel === "user" ? <StartMenu /> : null}
      {panel === "search" ? <SearchPanel /> : null}
      {panel === "calendar" ? <CalendarFlyout /> : null}
      {panel === "action" ? <ActionCenter /> : null}
      {panel === "volume" ? <VolumeFlyout /> : null}
      {panel === "network" ? <NetworkFlyout /> : null}

      <div
        className="absolute right-0 bottom-0 left-0 z-40 flex h-taskbar items-stretch bg-win-taskbar/90 text-win-taskbar-fg backdrop-blur-md select-none"
        onPointerDown={(e) => e.stopPropagation()}
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setCtx({ x: e.clientX, y: e.clientY, kind: "taskbar" });
        }}
      >
        <button
          type="button"
          aria-label="Inicio"
          className={cn(
            "grid w-12 place-items-center hover:bg-win-hover",
            panel === "start" && "bg-win-hover",
          )}
          onClick={() => setPanel(panel === "start" ? null : "start")}
        >
          <WindowsLogo size={16} />
        </button>

        <button
          type="button"
          className={cn(
            "win-search-box flex w-56 items-center gap-2 bg-white px-3 text-win-md text-black",
            panel === "search" && "ring-2 ring-win-accent",
          )}
          style={{ background: panel === "search" ? "#fff" : "#ccc" }}
          onClick={() => setPanel(panel === "search" ? null : "search")}
        >
          <Search className="size-3.5 text-black/70" />
          <span className="win-task-label text-black/70">Escribe aquí para buscar</span>
        </button>

        <button
          type="button"
          className="grid w-10 place-items-center hover:bg-win-hover sm:hidden"
          aria-label="Buscar"
          onClick={() => setPanel(panel === "search" ? null : "search")}
        >
          <Search className="size-4" />
        </button>

        <button
          type="button"
          className="grid w-10 place-items-center hover:bg-win-hover"
          title="Vista de tareas"
          onClick={() => {
            const vis = windows.filter((w) => !w.min);
            if (vis.length) useWinStore.getState().minimize(vis[0].id);
          }}
        >
          <LayoutGrid className="size-4" />
        </button>

        <div className="flex min-w-0 flex-1 items-stretch overflow-hidden">
          {shown.map((id) => {
            const wins = windows.filter((w) => w.appId === id);
            const active = wins.some((w) => w.z === topZ && !w.min);
            const open = wins.length > 0;
            return (
              <button
                key={id}
                type="button"
                title={APPS[id].name}
                className={cn(
                  "relative grid w-12 shrink-0 place-items-center hover:bg-win-hover",
                  active && "bg-white/12",
                )}
                onClick={() => restoreOrMin(id)}
              >
                <AppIcon id={id} size={24} />
                {open ? (
                  <span
                    className="absolute bottom-0 h-0.5"
                    style={{
                      width: active ? 22 : 12,
                      background: active ? settings.accent : "rgb(255 255 255 / 55%)",
                    }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="ml-auto flex items-stretch">
          <button
            type="button"
            className={cn("grid w-8 place-items-center hover:bg-win-hover", panel === "network" && "bg-win-hover")}
            onClick={() => setPanel(panel === "network" ? null : "network")}
            aria-label="Red"
          >
            <Wifi className="size-3.5" />
          </button>
          <button
            type="button"
            className={cn("grid w-8 place-items-center hover:bg-win-hover", panel === "volume" && "bg-win-hover")}
            onClick={() => setPanel(panel === "volume" ? null : "volume")}
            aria-label="Volumen"
          >
            <Volume2 className="size-3.5" />
          </button>
          <span className="grid w-8 place-items-center">
            <BatteryFull className="size-3.5" />
          </span>
          <button
            type="button"
            className={cn(
              "flex flex-col items-end justify-center px-2 text-right text-win-xs leading-tight tabular-nums hover:bg-win-hover",
              panel === "calendar" && "bg-win-hover",
            )}
            onClick={() => setPanel(panel === "calendar" ? null : "calendar")}
          >
            <span>{clock?.time ?? ""}</span>
            <span>{clock?.date ?? ""}</span>
          </button>
          <button
            type="button"
            className={cn("grid w-10 place-items-center hover:bg-win-hover", panel === "action" && "bg-win-hover")}
            onClick={() => setPanel(panel === "action" ? null : "action")}
            aria-label="Centro de actividades"
          >
            <Bell className="size-3.5" />
          </button>
          <button
            type="button"
            className="w-1.5 hover:bg-win-hover"
            title="Mostrar escritorio"
            onClick={() => {
              const { windows: ws, minimize } = useWinStore.getState();
              ws.filter((w) => !w.min).forEach((w) => minimize(w.id));
            }}
          />
        </div>
      </div>
    </>
  );
}
