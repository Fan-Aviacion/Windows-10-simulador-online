import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { APPS } from "@/lib/win10/apps";
import { useWinStore } from "@/lib/win10/store";
import type { WinWindow } from "@/lib/win10/types";
import { AppIcon } from "./icons";

const HANDLES = [
  { dir: "n", className: "top-0 right-2 left-2 h-1 cursor-n-resize" },
  { dir: "s", className: "right-2 bottom-0 left-2 h-1 cursor-s-resize" },
  { dir: "e", className: "top-2 right-0 bottom-2 w-1 cursor-e-resize" },
  { dir: "w", className: "top-2 bottom-2 left-0 w-1 cursor-w-resize" },
  { dir: "ne", className: "top-0 right-0 size-2 cursor-ne-resize" },
  { dir: "nw", className: "top-0 left-0 size-2 cursor-nw-resize" },
  { dir: "se", className: "right-0 bottom-0 size-2 cursor-se-resize" },
  { dir: "sw", className: "bottom-0 left-0 size-2 cursor-sw-resize" },
] as const;

export function WindowFrame({
  win,
  children,
  toolbar,
}: {
  win: WinWindow;
  children: ReactNode;
  toolbar?: ReactNode;
}) {
  const { closeWindow, minimize, toggleMax, focus, moveWindow, resizeWindow, windows, settings } =
    useWinStore();
  const topZ = Math.max(0, ...windows.filter((w) => !w.min).map((w) => w.z));
  const active = win.z === topZ && !win.min;
  const sticky = win.appId === "sticky";
  const dark = settings.darkWindows && !sticky;
  const drag = useRef<{
    kind: "move" | "resize";
    dir?: string;
    sx: number;
    sy: number;
    ox: number;
    oy: number;
    ow: number;
    oh: number;
  } | null>(null);

  function onTitleDown(e: PointerEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).closest("[data-caption]")) return;
    focus(win.id);
    if (e.button !== 0) return;
    drag.current = {
      kind: "move",
      sx: e.clientX,
      sy: e.clientY,
      ox: win.x,
      oy: win.y,
      ow: win.w,
      oh: win.h,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.sx;
    const dy = e.clientY - d.sy;
    if (d.kind === "move") {
      if (win.max && Math.abs(dy) + Math.abs(dx) > 8) {
        const nx = e.clientX - win.w / 2;
        moveWindow(win.id, Math.max(0, nx), 0);
        drag.current = {
          ...d,
          ox: Math.max(0, nx),
          oy: 0,
          sx: e.clientX,
          sy: e.clientY,
        };
        return;
      }
      moveWindow(win.id, d.ox + dx, Math.max(0, d.oy + dy));
      return;
    }
    let { ox: x, oy: y, ow: w, oh: h } = d;
    const dir = d.dir ?? "";
    if (dir.includes("e")) w = d.ow + dx;
    if (dir.includes("s")) h = d.oh + dy;
    if (dir.includes("w")) {
      x = d.ox + dx;
      w = d.ow - dx;
    }
    if (dir.includes("n")) {
      y = d.oy + dy;
      h = d.oh - dy;
    }
    resizeWindow(win.id, x, y, w, h);
  }

  function onUp() {
    drag.current = null;
  }

  function onResizeDown(dir: string, e: PointerEvent<HTMLDivElement>) {
    e.stopPropagation();
    focus(win.id);
    drag.current = {
      kind: "resize",
      dir,
      sx: e.clientX,
      sy: e.clientY,
      ox: win.x,
      oy: win.y,
      ow: win.w,
      oh: win.h,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  if (win.min) return null;

  const style: CSSProperties = win.max
    ? { top: 0, left: 0, width: "100%", height: "calc(100% - var(--spacing-taskbar))", zIndex: win.z }
    : { top: win.y, left: win.x, width: win.w, height: win.h, zIndex: win.z };

  return (
    <div
      className={cn(
        "win-window win-window-enter absolute flex flex-col overflow-hidden",
        win.max ? "shadow-none" : "shadow-[var(--shadow-win)]",
        sticky
          ? "bg-[#fff475] text-[#3a3200]"
          : dark
            ? "bg-[#2b2b2b] text-white"
            : "bg-win-window text-win-window-fg",
      )}
      style={style}
      onPointerDown={() => focus(win.id)}
      onContextMenu={(e) => e.stopPropagation()}
    >
      <div
        className={cn(
          "flex h-titlebar shrink-0 items-center select-none",
          sticky ? "bg-[#fff475]" : dark ? "bg-[#2b2b2b]" : "bg-win-caption",
          !active && "opacity-80",
        )}
        onPointerDown={onTitleDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onDoubleClick={() => {
          if (!sticky) toggleMax(win.id);
        }}
      >
        <span className="ml-2 flex items-center gap-2 overflow-hidden pl-1 text-win-sm">
          <AppIcon id={win.appId} size={14} />
          <span className="truncate">{win.title}</span>
        </span>
        <span className="ml-auto flex h-full" data-caption>
          {!sticky ? (
            <>
              <button
                type="button"
                aria-label="Minimizar"
                className="grid h-full w-caption place-items-center hover:bg-black/8"
                onClick={() => minimize(win.id)}
              >
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <path d="M1 5h8" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
              <button
                type="button"
                aria-label={win.max ? "Restaurar" : "Maximizar"}
                className="grid h-full w-caption place-items-center hover:bg-black/8"
                onClick={() => toggleMax(win.id)}
              >
                {win.max ? (
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <path
                      d="M2.5 3.5h5v5h-5zM3.5 2.5h5v5"
                      fill="none"
                      stroke="currentColor"
                    />
                  </svg>
                ) : (
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <rect x="1.5" y="1.5" width="7" height="7" fill="none" stroke="currentColor" />
                  </svg>
                )}
              </button>
            </>
          ) : null}
          <button
            type="button"
            aria-label="Cerrar"
            className="grid h-full w-caption place-items-center hover:bg-win-close hover:text-win-close-fg"
            onClick={() => closeWindow(win.id)}
          >
            <svg width="10" height="10" viewBox="0 0 10 10">
              <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.1" />
            </svg>
          </button>
        </span>
      </div>
      {toolbar}
      <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
      {!win.max &&
        HANDLES.map((h) => (
          <div
            key={h.dir}
            className={cn("absolute z-10", h.className)}
            onPointerDown={(e) => onResizeDown(h.dir, e)}
            onPointerMove={onMove}
            onPointerUp={onUp}
          />
        ))}
      <span className="sr-only">{APPS[win.appId].name}</span>
    </div>
  );
}
