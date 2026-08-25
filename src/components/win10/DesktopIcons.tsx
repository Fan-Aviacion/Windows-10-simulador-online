import { useRef } from "react";
import { cn } from "@/lib/utils";
import { APPS } from "@/lib/win10/apps";
import { useWinStore, trashCount } from "@/lib/win10/store";
import type { AppId } from "@/lib/win10/types";
import { AppIcon, IconRecycle, IconRecycleFull } from "./icons";

const DESKTOP: { id: string; appId: AppId }[] = [
  { id: "this-pc", appId: "this-pc" },
  { id: "recycle", appId: "recycle" },
  { id: "edge", appId: "edge" },
  { id: "explorer", appId: "explorer" },
  { id: "notepad", appId: "notepad" },
  { id: "settings", appId: "settings" },
];

export function DesktopIcons() {
  const { iconPos, selectedIcon, setSelectedIcon, openApp, setIconPos, setCtx, files } =
    useWinStore();
  const trash = trashCount(files);
  const drag = useRef<{ id: string; sx: number; sy: number; ox: number; oy: number } | null>(
    null,
  );

  return (
    <div className="absolute inset-0 bottom-taskbar">
      {DESKTOP.map((item, i) => {
        const def = { x: 12, y: 12 + i * 86 };
        const pos = iconPos[item.id] ?? def;
        const app = APPS[item.appId];
        return (
          <button
            key={item.id}
            type="button"
            className={cn(
              "absolute flex w-icon flex-col items-center gap-1 px-1 py-1 text-center text-win-sm text-win-desktop-fg",
              selectedIcon === item.id && "bg-white/20 ring-1 ring-white/40",
            )}
            style={{ left: pos.x, top: pos.y }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIcon(item.id);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              openApp(item.appId);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelectedIcon(item.id);
              setCtx({ x: e.clientX, y: e.clientY, kind: "icon", targetId: item.appId });
            }}
            onPointerDown={(e) => {
              if (e.button !== 0) return;
              drag.current = { id: item.id, sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y };
              e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              const d = drag.current;
              if (!d || d.id !== item.id) return;
              const dx = e.clientX - d.sx;
              const dy = e.clientY - d.sy;
              if (Math.abs(dx) + Math.abs(dy) < 4) return;
              setIconPos(item.id, Math.max(0, d.ox + dx), Math.max(0, d.oy + dy));
            }}
            onPointerUp={() => {
              drag.current = null;
            }}
          >
            {item.appId === "recycle" ? (
              trash > 0 ? (
                <IconRecycleFull size={48} />
              ) : (
                <IconRecycle size={48} />
              )
            ) : (
              <AppIcon id={item.appId} size={48} />
            )}
            <span
              className="line-clamp-2 w-full leading-tight"
              style={{ textShadow: "0 1px 2px rgb(0 0 0 / 80%)" }}
            >
              {app.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
