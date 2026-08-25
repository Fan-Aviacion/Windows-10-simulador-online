import { useCallback, useEffect } from "react";
import { useWinStore } from "@/lib/win10/store";
import { Wallpaper } from "./Wallpaper";
import { DesktopIcons } from "./DesktopIcons";
import { Taskbar } from "./Taskbar";
import { ContextMenu } from "./ContextMenu";
import { AppHost } from "./AppHost";
import { BootScreen, BsodScreen, LockScreen, LoginScreen, ShutdownScreen } from "./Screens";

export function Win10() {
  const {
    phase,
    setPhase,
    hydrate,
    settings,
    windows,
    setPanel,
    setCtx,
    setSelectedIcon,
    panel,
    ctx,
    closeWindow,
  } = useWinStore();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    document.documentElement.style.setProperty("--color-win-accent", settings.accent);
    document.documentElement.style.setProperty("--color-win-accent-hover", settings.accent);
  }, [settings.accent]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPanel(null);
        setCtx(null);
      }
      if (e.key === "Meta") {
        e.preventDefault();
        const p = useWinStore.getState().panel;
        setPanel(p === "start" ? null : "start");
      }
      if (e.key === "F4" && e.altKey) {
        e.preventDefault();
        const ws = useWinStore.getState().windows.filter((w) => !w.min);
        const top = [...ws].sort((a, b) => b.z - a.z)[0];
        if (top) closeWindow(top.id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setPanel, setCtx, closeWindow]);

  const toLock = useCallback(() => setPhase("lock"), [setPhase]);
  const toLogin = useCallback(() => setPhase("login"), [setPhase]);
  const toDesktop = useCallback(() => {
    setPhase("desktop");
    window.setTimeout(() => {
      useWinStore.getState().pushNotif("Windows", "Te damos la bienvenida. Abre Inicio para explorar.");
    }, 600);
  }, [setPhase]);

  const afterShutdown = useCallback(() => setPhase("boot"), [setPhase]);
  const afterBsod = useCallback(() => setPhase("boot"), [setPhase]);

  return (
    <div
      className="relative h-dvh w-full overflow-hidden bg-black"
      style={{
        filter: settings.nightLight ? "sepia(0.25) saturate(1.1)" : undefined,
      }}
    >
      {phase === "boot" ? <BootScreen onDone={toLock} /> : null}
      {phase === "lock" ? <LockScreen onUnlock={toLogin} /> : null}
      {phase === "login" ? <LoginScreen onLogin={toDesktop} /> : null}
      {phase === "shutdown" ? <ShutdownScreen onDone={afterShutdown} /> : null}
      {phase === "bsod" ? <BsodScreen onDone={afterBsod} /> : null}

      {phase === "desktop" || phase === "lock" ? (
        <div className={phase === "desktop" ? "contents" : "hidden"}>
          <Wallpaper id={settings.wallpaper} />
          <div
            className="absolute inset-0"
            onPointerDown={() => {
              if (panel) setPanel(null);
              if (ctx) setCtx(null);
              setSelectedIcon(null);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              setCtx({ x: e.clientX, y: e.clientY, kind: "desktop" });
            }}
          >
            <DesktopIcons />
            {windows.map((w) => (
              <AppHost key={w.id} win={w} />
            ))}
            <Taskbar />
            <ContextMenu />
          </div>
        </div>
      ) : null}
    </div>
  );
}
