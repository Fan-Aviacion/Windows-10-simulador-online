import { useEffect, useState } from "react";
import { Wallpaper } from "./Wallpaper";
import { WindowsLogo } from "./icons";
import { useWinStore } from "@/lib/win10/store";
import { formatLock, useNow } from "@/lib/win10/use-now";
import { Wifi, Volume2, BatteryFull, Power, Accessibility } from "lucide-react";

export function BootScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const skip = (e: Event) => {
      e.preventDefault();
      onDone();
    };
    const t = setTimeout(onDone, 2800);
    window.addEventListener("pointerdown", skip);
    window.addEventListener("keydown", skip);
    return () => {
      clearTimeout(t);
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [onDone]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-win-boot text-win-boot-fg">
      <WindowsLogo size={72} />
      <div className="win-loader mt-16" aria-label="Cargando">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const wallpaper = useWinStore((s) => s.settings.wallpaper);
  const now = useNow(1000);
  const stamp = now ? formatLock(now) : null;

  return (
    <button
      type="button"
      className="relative flex h-full w-full cursor-pointer flex-col border-0 p-0 text-left text-win-desktop-fg"
      onClick={onUnlock}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onUnlock();
      }}
    >
      <Wallpaper id={wallpaper} />
      <div className="relative mt-auto px-8 pb-28 sm:px-14 sm:pb-32">
        <div className="win-lock-time tabular-nums">{stamp?.time ?? " "}</div>
        <div className="mt-2 text-win-xl capitalize sm:text-2xl">{stamp?.date ?? " "}</div>
      </div>
      <div className="absolute right-5 bottom-5 flex items-center gap-4 text-win-desktop-fg">
        <Wifi className="size-5" strokeWidth={1.75} />
        <BatteryFull className="size-5" strokeWidth={1.75} />
      </div>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-win-sm text-white/80">
        Haz clic para desbloquear
      </p>
    </button>
  );
}

export function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const { settings } = useWinStore();
  const [pwd, setPwd] = useState("");
  const [busy, setBusy] = useState(false);

  function submit() {
    setBusy(true);
    setTimeout(onLogin, 700);
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center text-win-desktop-fg">
      <Wallpaper id={settings.wallpaper} dim />
      <div className="absolute inset-0 backdrop-blur-[28px]" />
      <div className="relative flex flex-col items-center px-4">
        <div
          className="flex size-28 items-center justify-center rounded-full text-4xl font-light"
          style={{ background: settings.accent }}
        >
          {settings.userName.slice(0, 1).toUpperCase()}
        </div>
        <h1 className="mt-4 text-2xl font-light">{settings.userName}</h1>
        {busy ? (
          <div className="win-loader mt-8 scale-75">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        ) : (
          <form
            className="mt-6 flex w-[min(280px,80vw)] flex-col items-center gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="Contraseña"
              autoFocus
              className="h-8 w-full border border-white/40 bg-white/95 px-2 text-win-md text-win-field-fg outline-none placeholder:text-win-window-muted"
            />
            <button
              type="submit"
              className="h-8 min-w-28 border border-white/30 bg-white/15 px-4 text-win-md text-white hover:bg-white/25"
            >
              Iniciar sesión
            </button>
            <p className="text-center text-win-xs text-white/70">
              Sin contraseña: pulsa Enter o Iniciar sesión
            </p>
          </form>
        )}
      </div>
      <div className="absolute right-4 bottom-4 flex gap-1">
        <span className="grid size-10 place-items-center text-white/90 hover:bg-white/10">
          <Accessibility className="size-5" strokeWidth={1.6} />
        </span>
        <span className="grid size-10 place-items-center text-white/90 hover:bg-white/10">
          <Power className="size-5" strokeWidth={1.6} />
        </span>
      </div>
    </div>
  );
}

export function ShutdownScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-win-boot text-win-boot-fg">
      <div className="win-loader">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <p className="mt-8 text-win-lg font-light">Apagando</p>
    </div>
  );
}

export function BsodScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 5000);
    const skip = () => onDone();
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [onDone]);

  return (
    <div className="flex h-full w-full flex-col justify-center bg-[#0078d7] px-8 text-white sm:px-24">
      <p className="text-7xl font-light">:(</p>
      <p className="mt-6 max-w-xl text-xl font-light leading-snug">
        Tu PC se ha encontrado un problema y debe reiniciarse. Vamos a recopilar
        información de error y luego se reiniciará.
      </p>
      <p className="mt-8 text-lg font-light">0% completado</p>
      <p className="mt-10 text-win-sm opacity-80">
        STOP: 0x000000EF · SIMULATED_BSOD
      </p>
    </div>
  );
}

export function TrayIcons() {
  return (
    <>
      <Wifi className="size-3.5" strokeWidth={1.75} />
      <Volume2 className="size-3.5" strokeWidth={1.75} />
      <BatteryFull className="size-3.5" strokeWidth={1.75} />
    </>
  );
}
