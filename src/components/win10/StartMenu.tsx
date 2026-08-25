import {
  FileText,
  Image as ImageIcon,
  Power,
  Settings,
  User,
} from "lucide-react";
import { ALL_APPS_LIST, APPS, START_APPS } from "@/lib/win10/apps";
import { useWinStore } from "@/lib/win10/store";
import type { AppId } from "@/lib/win10/types";
import { AppIcon } from "./icons";
import { useNow } from "@/lib/win10/use-now";
import { cn } from "@/lib/utils";

function Tile({
  id,
  span,
}: {
  id: AppId;
  span: string;
}) {
  const openApp = useWinStore((s) => s.openApp);
  const accent = useWinStore((s) => s.settings.accent);
  const app = APPS[id];
  const now = useNow(60000);
  const bg = app.tileColor ?? accent;

  return (
    <button
      type="button"
      className={cn(
        "relative flex flex-col items-start justify-between overflow-hidden p-2 text-left text-white",
        span,
      )}
      style={{ background: bg }}
      onClick={() => openApp(id)}
    >
      <span className="mt-1">
        <AppIcon id={id} size={span.includes("col-span-4") ? 48 : 28} />
      </span>
      {id === "calendar" && now ? (
        <span className="absolute top-2 right-3 text-2xl font-light">{now.getDate()}</span>
      ) : null}
      {id === "mail" ? (
        <span className="text-win-xs opacity-90">2 mensajes nuevos</span>
      ) : null}
      <span className="text-win-xs leading-tight">{app.name}</span>
    </button>
  );
}

export function StartMenu() {
  const { settings, openApp, setPanel, lock, signOut } = useWinStore();

  return (
    <div
      className="win-start win-start-enter absolute bottom-taskbar left-0 z-50 flex h-[min(640px,calc(100%-var(--height-taskbar)))] w-[min(650px,100%)] bg-win-start text-win-start-fg shadow-[var(--shadow-flyout)]"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="flex w-12 flex-col items-center py-2">
        <button
          type="button"
          className="grid size-10 place-items-center hover:bg-win-hover"
          title={settings.userName}
          onClick={() => setPanel("user")}
        >
          <User className="size-4" />
        </button>
        <div className="mt-auto flex flex-col">
          <button
            type="button"
            className="grid size-10 place-items-center hover:bg-win-hover"
            title="Documentos"
            onClick={() => openApp("explorer", { folderId: "documents" })}
          >
            <FileText className="size-4" />
          </button>
          <button
            type="button"
            className="grid size-10 place-items-center hover:bg-win-hover"
            title="Imágenes"
            onClick={() => openApp("explorer", { folderId: "pictures" })}
          >
            <ImageIcon className="size-4" />
          </button>
          <button
            type="button"
            className="grid size-10 place-items-center hover:bg-win-hover"
            title="Configuración"
            onClick={() => openApp("settings")}
          >
            <Settings className="size-4" />
          </button>
          <button
            type="button"
            className="grid size-10 place-items-center hover:bg-win-hover"
            title="Encendido"
            onClick={() => setPanel("power")}
          >
            <Power className="size-4" />
          </button>
        </div>
      </div>

      <div className="win-scroll min-w-0 flex-1 overflow-y-auto px-2 py-3 sm:w-52 sm:flex-none">
        {ALL_APPS_LIST.map((g) => (
          <div key={g.letter} className="mb-2">
            <div className="px-2 py-1 text-win-xs text-win-start-muted">{g.letter}</div>
            {g.ids.map((id) => (
              <button
                key={id}
                type="button"
                className="flex w-full items-center gap-3 px-2 py-1.5 text-left text-win-md hover:bg-win-hover"
                onClick={() => openApp(id)}
              >
                <AppIcon id={id} size={24} />
                {APPS[id].name}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="win-scroll hidden min-w-0 flex-1 overflow-y-auto p-3 sm:block">
        <p className="mb-2 px-1 text-win-sm text-win-start-muted">De un vistazo</p>
        <div className="grid grid-cols-6 gap-0.5">
          <Tile id="edge" span="col-span-4 row-span-2 min-h-28" />
          <Tile id="mail" span="col-span-2 min-h-14" />
          <Tile id="calendar" span="col-span-2 min-h-14" />
          <Tile id="photos" span="col-span-4 min-h-24" />
          <Tile id="store" span="col-span-2 min-h-24" />
        </div>
        <p className="mt-4 mb-2 px-1 text-win-sm text-win-start-muted">Jugar y explorar</p>
        <div className="grid grid-cols-6 gap-0.5">
          {START_APPS.filter((id) => !["edge", "mail", "calendar", "photos", "store"].includes(id)).map(
            (id) => (
              <Tile key={id} id={id} span="col-span-2 min-h-20" />
            ),
          )}
        </div>
      </div>

      {useWinStore.getState().panel === "power" ? null : null}
      {useWinStore.getState().panel === "power" ? null : null}
      <PowerFlyout />
      <UserFlyout onLock={lock} onSignOut={signOut} />
    </div>
  );
}

function PowerFlyout() {
  const panel = useWinStore((s) => s.panel);
  const { shutdown, restart, lock, setPanel } = useWinStore();
  if (panel !== "power") return null;
  return (
    <div className="absolute bottom-12 left-12 z-10 w-44 bg-win-start py-1 shadow-[var(--shadow-menu)]">
      {[
        { l: "Suspender", fn: lock },
        { l: "Apagar", fn: shutdown },
        { l: "Reiniciar", fn: () => restart() },
      ].map((a) => (
        <button
          key={a.l}
          type="button"
          className="block w-full px-4 py-2 text-left text-win-md hover:bg-win-hover"
          onClick={() => {
            setPanel(null);
            a.fn();
          }}
        >
          {a.l}
        </button>
      ))}
    </div>
  );
}

function UserFlyout({ onLock, onSignOut }: { onLock: () => void; onSignOut: () => void }) {
  const panel = useWinStore((s) => s.panel);
  const { openApp, setPanel } = useWinStore();
  if (panel !== "user") return null;
  return (
    <div className="absolute bottom-auto top-12 left-12 z-10 w-52 bg-win-start py-1 shadow-[var(--shadow-menu)]">
      <button
        type="button"
        className="block w-full px-4 py-2 text-left text-win-md hover:bg-win-hover"
        onClick={() => {
          setPanel(null);
          openApp("settings", { page: "accounts" });
        }}
      >
        Cambiar configuración de cuenta
      </button>
      <button
        type="button"
        className="block w-full px-4 py-2 text-left text-win-md hover:bg-win-hover"
        onClick={() => {
          setPanel(null);
          onLock();
        }}
      >
        Bloquear
      </button>
      <button
        type="button"
        className="block w-full px-4 py-2 text-left text-win-md hover:bg-win-hover"
        onClick={() => {
          setPanel(null);
          onSignOut();
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
