import { APPS } from "@/lib/win10/apps";
import { useWinStore } from "@/lib/win10/store";
import type { AppId } from "@/lib/win10/types";

export function ContextMenu() {
  const { ctx, setCtx, openApp, createFolder, patchSettings, settings } = useWinStore();
  if (!ctx) return null;

  const items: { label: string; fn: () => void; sep?: boolean }[] =
    ctx.kind === "desktop"
      ? [
          { label: "Ver", fn: () => {} },
          { label: "Ordenar por", fn: () => {} },
          { label: "Actualizar", fn: () => {} },
          { label: "Nuevo · Carpeta", fn: () => createFolder("desktop"), sep: true },
          {
            label: "Personalizar",
            fn: () => openApp("settings", { page: "personalize" }),
            sep: true,
          },
          { label: "Configuración de pantalla", fn: () => openApp("settings", { page: "system" }) },
          {
            label: settings.darkWindows ? "Tema claro de ventanas" : "Tema oscuro de ventanas",
            fn: () => patchSettings({ darkWindows: !settings.darkWindows }),
          },
        ]
      : ctx.kind === "icon"
        ? [
            {
              label: "Abrir",
              fn: () => ctx.targetId && openApp(ctx.targetId as AppId),
            },
            {
              label: "Anclar a Inicio",
              fn: () => {},
            },
            {
              label: "Propiedades",
              fn: () => openApp("winver"),
              sep: true,
            },
          ]
        : ctx.kind === "taskbar"
          ? [
              { label: "Mostrar escritorio", fn: () => {
                const { windows, minimize } = useWinStore.getState();
                windows.filter((w) => !w.min).forEach((w) => minimize(w.id));
              } },
              { label: "Administrador de tareas", fn: () => openApp("cmd") },
              { label: "Configuración de la barra de tareas", fn: () => openApp("settings") },
            ]
          : [
              { label: "Abrir", fn: () => {} },
              { label: "Eliminar", fn: () => {} },
            ];

  const x = Math.min(ctx.x, typeof window !== "undefined" ? window.innerWidth - 220 : ctx.x);
  const y = Math.min(ctx.y, typeof window !== "undefined" ? window.innerHeight - 280 : ctx.y);

  return (
    <div
      className="fixed z-[80] min-w-52 border border-black/20 bg-win-menu py-1 text-win-menu-fg shadow-[var(--shadow-menu)]"
      style={{ left: x, top: y }}
      onPointerDown={(e) => e.stopPropagation()}
    >
      {items.map((it) => (
        <div key={it.label}>
          {it.sep ? <div className="my-1 h-px bg-black/10" /> : null}
          <button
            type="button"
            className="block w-full px-7 py-1.5 text-left text-win-md hover:bg-win-accent hover:text-white"
            onClick={() => {
              it.fn();
              setCtx(null);
            }}
          >
            {it.label}
          </button>
        </div>
      ))}
      {ctx.kind === "icon" && ctx.targetId ? (
        <p className="sr-only">{APPS[ctx.targetId as AppId]?.name}</p>
      ) : null}
    </div>
  );
}
