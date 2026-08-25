import { useState } from "react";
import {
  Clock,
  Globe,
  Lock,
  Monitor,
  Palette,
  RefreshCw,
  Shield,
  User,
  Volume2,
} from "lucide-react";
import { ACCENTS, WALLPAPERS } from "@/lib/win10/apps";
import { useWinStore } from "@/lib/win10/store";
import type { WinWindow } from "@/lib/win10/types";
import { Wallpaper } from "../Wallpaper";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "system", label: "Sistema", icon: Monitor, desc: "Pantalla, notificaciones, energía" },
  { id: "personalize", label: "Personalización", icon: Palette, desc: "Fondo, pantalla de bloqueo, colores" },
  { id: "accounts", label: "Cuentas", icon: User, desc: "Tu cuenta, correo, sincronización" },
  { id: "time", label: "Hora e idioma", icon: Clock, desc: "Habla, región, fecha" },
  { id: "privacy", label: "Privacidad", icon: Lock, desc: "Ubicación, cámara, micrófono" },
  { id: "update", label: "Actualización y seguridad", icon: Shield, desc: "Windows Update, recuperación" },
] as const;

type Page = (typeof NAV)[number]["id"] | "home";

export function SettingsApp({ win }: { win: WinWindow }) {
  const start = (win.payload?.page as Page | undefined) ?? "home";
  const [page, setPage] = useState<Page>(start);
  const { settings, patchSettings } = useWinStore();

  return (
    <div className="flex h-full bg-[#f9f9f9] text-win-window-fg">
      <div className="flex min-w-0 flex-1 flex-col">
        {page !== "home" ? (
          <button
            type="button"
            className="m-3 w-fit px-2 py-1 text-win-sm text-win-accent hover:underline"
            onClick={() => setPage("home")}
          >
            ← Inicio
          </button>
        ) : null}
        {page === "home" ? (
          <div className="win-scroll-light overflow-auto p-6">
            <h1 className="text-2xl font-light">Configuración</h1>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  className="flex items-start gap-4 p-4 text-left hover:bg-black/5"
                  onClick={() => setPage(n.id)}
                >
                  <n.icon className="mt-0.5 size-8 text-win-accent" strokeWidth={1.4} />
                  <span>
                    <span className="block text-win-lg">{n.label}</span>
                    <span className="text-win-sm text-win-window-muted">{n.desc}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {page === "personalize" ? (
          <div className="win-scroll-light overflow-auto p-6">
            <h2 className="text-xl font-light">Personalización</h2>
            <p className="mt-4 mb-2 text-win-sm">Fondo</p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {WALLPAPERS.map((w) => (
                <button
                  key={w.id}
                  type="button"
                  className={cn("relative h-16 overflow-hidden", settings.wallpaper === w.id && "ring-2 ring-win-accent")}
                  onClick={() => patchSettings({ wallpaper: w.id })}
                  title={w.name}
                >
                  <Wallpaper id={w.id} />
                </button>
              ))}
            </div>
            <p className="mt-6 mb-2 text-win-sm">Color de acento</p>
            <div className="flex flex-wrap gap-1.5">
              {ACCENTS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={cn("size-8", settings.accent === c && "ring-2 ring-offset-2 ring-black")}
                  style={{ background: c }}
                  onClick={() => {
                    patchSettings({ accent: c });
                    document.documentElement.style.setProperty("--color-win-accent", c);
                  }}
                  aria-label={c}
                />
              ))}
            </div>
            <label className="mt-6 flex items-center gap-3 text-win-sm">
              <input
                type="checkbox"
                checked={settings.darkWindows}
                onChange={(e) => patchSettings({ darkWindows: e.target.checked })}
              />
              Modo oscuro en las ventanas
            </label>
            <label className="mt-2 flex items-center gap-3 text-win-sm">
              <input
                type="checkbox"
                checked={settings.transparency}
                onChange={(e) => patchSettings({ transparency: e.target.checked })}
              />
              Efectos de transparencia
            </label>
          </div>
        ) : null}

        {page === "system" ? (
          <div className="win-scroll-light overflow-auto p-6">
            <h2 className="text-xl font-light">Sistema</h2>
            <div className="mt-4 space-y-3 text-win-sm">
              <p>
                <Globe className="mr-2 inline size-4" />
                PC-WIN10
              </p>
              <p>Procesador: Grok Virtual CPU</p>
              <p>RAM instalada: 16,0 GB</p>
              <p>Edición: Windows 10 Pro (simulador)</p>
              <p>Versión: 22H2</p>
              <p>Compilación: 19045.3803</p>
              <div className="mt-4 flex items-center gap-2">
                <Volume2 className="size-4" /> Volumen del sistema: {settings.volume}%
              </div>
            </div>
          </div>
        ) : null}

        {page === "accounts" ? (
          <div className="p-6">
            <h2 className="text-xl font-light">Cuentas</h2>
            <label className="mt-4 block text-win-sm">
              Nombre de usuario
              <input
                value={settings.userName}
                onChange={(e) => patchSettings({ userName: e.target.value })}
                className="mt-1 block h-8 w-64 border border-black/20 bg-white px-2"
              />
            </label>
          </div>
        ) : null}

        {page === "time" ? (
          <div className="p-6 text-win-sm">
            <h2 className="text-xl font-light">Hora e idioma</h2>
            <p className="mt-4">Zona horaria: (UTC-08:00) Hora del Pacífico</p>
            <p>Idioma de Windows: Español (España)</p>
            <p>Formato regional: Español (España)</p>
          </div>
        ) : null}

        {page === "privacy" ? (
          <div className="p-6 text-win-sm">
            <h2 className="text-xl font-light">Privacidad</h2>
            <p className="mt-4 max-w-md text-win-window-muted">
              Este simulador se ejecuta por completo en tu navegador. No se envían datos a
              Microsoft ni a ningún servidor.
            </p>
          </div>
        ) : null}

        {page === "update" ? (
          <UpdatePane />
        ) : null}
      </div>
    </div>
  );
}

function UpdatePane() {
  const [state, setState] = useState<"idle" | "check" | "done">("idle");
  return (
    <div className="p-6">
      <h2 className="text-xl font-light">Windows Update</h2>
      <div className="mt-6 flex items-start gap-4">
        <RefreshCw className={cn("size-10 text-win-accent", state === "check" && "animate-spin")} />
        <div>
          <p className="text-win-lg">
            {state === "idle"
              ? "Estás al día"
              : state === "check"
                ? "Buscando actualizaciones…"
                : "No hay actualizaciones disponibles"}
          </p>
          <p className="text-win-sm text-win-window-muted">Última comprobación: hoy</p>
          <button
            type="button"
            className="mt-4 bg-win-accent px-4 py-1.5 text-win-sm text-white"
            onClick={() => {
              setState("check");
              setTimeout(() => setState("done"), 1600);
            }}
          >
            Buscar actualizaciones
          </button>
        </div>
      </div>
    </div>
  );
}
