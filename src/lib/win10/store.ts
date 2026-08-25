import { create } from "zustand";
import { APPS } from "./apps";
import { childrenOf, nid, seedFs } from "./fs";
import type {
  AppId,
  CtxMenu,
  FsNode,
  MailMessage,
  Panel,
  Phase,
  Settings,
  StickyNote,
  WinWindow,
} from "./types";
import { SAMPLE_MAIL } from "./fs";

const PERSIST_KEY = "win10-sim-v1";

const DEFAULT_SETTINGS: Settings = {
  userName: "Usuario",
  accent: "#0078d7",
  wallpaper: "bloom",
  darkWindows: false,
  transparency: true,
  volume: 70,
  wifi: true,
  notifications: true,
  nightLight: false,
};

type PersistSlice = {
  settings: Settings;
  files: FsNode[];
  stickies: StickyNote[];
  iconPos: Record<string, { x: number; y: number }>;
  mail: MailMessage[];
};

type WinState = PersistSlice & {
  hydrated: boolean;
  phase: Phase;
  panel: Panel;
  windows: WinWindow[];
  zTop: number;
  ctx: CtxMenu;
  searchQ: string;
  selectedIcon: string | null;
  notif: { id: string; title: string; body: string }[];
  volumeOpen: boolean;

  hydrate: () => void;
  persist: () => void;
  setPhase: (p: Phase) => void;
  setPanel: (p: Panel) => void;
  setSearch: (q: string) => void;
  setCtx: (c: CtxMenu) => void;
  setSelectedIcon: (id: string | null) => void;
  patchSettings: (s: Partial<Settings>) => void;
  openApp: (appId: AppId, payload?: Record<string, string>) => void;
  closeWindow: (id: string) => void;
  minimize: (id: string) => void;
  toggleMax: (id: string) => void;
  focus: (id: string) => void;
  moveWindow: (id: string, x: number, y: number) => void;
  resizeWindow: (id: string, x: number, y: number, w: number, h: number) => void;
  restoreOrMin: (appId: AppId) => void;
  createFolder: (parentId: string, name?: string) => string;
  createFile: (
    parentId: string,
    name: string,
    ext: string,
    content?: string,
    dataUrl?: string,
  ) => string;
  renameNode: (id: string, name: string) => void;
  trashNode: (id: string) => void;
  restoreNode: (id: string) => void;
  emptyTrash: () => void;
  writeFile: (id: string, content: string) => void;
  setIconPos: (id: string, x: number, y: number) => void;
  addSticky: (text?: string) => void;
  updateSticky: (id: string, text: string) => void;
  markMailRead: (id: string) => void;
  pushNotif: (title: string, body: string) => void;
  clearNotifs: () => void;
  shutdown: () => void;
  restart: () => void;
  lock: () => void;
  signOut: () => void;
};

function loadPersist(): PersistSlice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PERSIST_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PersistSlice;
  } catch {
    return null;
  }
}

function cascade(n: number) {
  const ox = 80 + (n % 8) * 28;
  const oy = 48 + (n % 8) * 24;
  return { x: ox, y: oy };
}

export const useWinStore = create<WinState>((set, get) => ({
  hydrated: false,
  phase: "boot",
  panel: null,
  windows: [],
  zTop: 10,
  ctx: null,
  searchQ: "",
  selectedIcon: null,
  notif: [],
  volumeOpen: false,
  settings: DEFAULT_SETTINGS,
  files: seedFs(),
  stickies: [{ id: "s1", text: "Notas adhesivas\n\nEscribe aquí.", color: "#fff475" }],
  iconPos: {},
  mail: SAMPLE_MAIL,

  hydrate: () => {
    const saved = loadPersist();
    if (saved) {
      set({
        settings: { ...DEFAULT_SETTINGS, ...saved.settings },
        files: saved.files?.length ? saved.files : seedFs(),
        stickies: saved.stickies ?? [],
        iconPos: saved.iconPos ?? {},
        mail: saved.mail?.length ? saved.mail : SAMPLE_MAIL,
        hydrated: true,
      });
    } else {
      set({ hydrated: true });
    }
  },

  persist: () => {
    const { settings, files, stickies, iconPos, mail } = get();
    try {
      localStorage.setItem(
        PERSIST_KEY,
        JSON.stringify({ settings, files, stickies, iconPos, mail }),
      );
    } catch {
      /* ignore quota */
    }
  },

  setPhase: (phase) => set({ phase, panel: null, ctx: null }),
  setPanel: (panel) => set({ panel, ctx: null }),
  setSearch: (searchQ) => set({ searchQ }),
  setCtx: (ctx) => set({ ctx, panel: ctx ? null : get().panel }),
  setSelectedIcon: (selectedIcon) => set({ selectedIcon }),

  patchSettings: (s) => {
    set({ settings: { ...get().settings, ...s } });
    get().persist();
  },

  openApp: (appId, payload) => {
    const app = APPS[appId];
    const resolved: AppId = appId === "this-pc" ? "explorer" : appId;
    const meta = APPS[resolved];
    if (meta.singleton) {
      const existing = get().windows.find((w) => w.appId === resolved);
      if (existing) {
        set({
          windows: get().windows.map((w) =>
            w.id === existing.id
              ? { ...w, min: false, z: get().zTop + 1, payload: payload ?? w.payload }
              : w,
          ),
          zTop: get().zTop + 1,
          panel: null,
        });
        return;
      }
    }
    const z = get().zTop + 1;
    const { x, y } = cascade(get().windows.length);
    const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
    const vh = typeof window !== "undefined" ? window.innerHeight : 800;
    const w = Math.min(meta.defaultW, Math.max(280, vw - 24));
    const h = Math.min(meta.defaultH, Math.max(200, vh - 64));
    const win: WinWindow = {
      id: nid(),
      appId: resolved,
      title: payload?.title ?? app.name,
      x: Math.max(0, Math.min(x, vw - 240)),
      y: Math.max(0, Math.min(y, vh - 120)),
      w,
      h,
      min: false,
      max: vw < 768,
      z,
      payload:
        resolved === "explorer" && appId === "this-pc"
          ? { folderId: "c", view: "this-pc" }
          : payload,
    };
    set({ windows: [...get().windows, win], zTop: z, panel: null, ctx: null });
  },

  closeWindow: (id) => set({ windows: get().windows.filter((w) => w.id !== id) }),

  minimize: (id) =>
    set({
      windows: get().windows.map((w) => (w.id === id ? { ...w, min: true } : w)),
    }),

  toggleMax: (id) =>
    set({
      windows: get().windows.map((w) =>
        w.id === id ? { ...w, max: !w.max, min: false } : w,
      ),
    }),

  focus: (id) => {
    const z = get().zTop + 1;
    set({
      windows: get().windows.map((w) =>
        w.id === id ? { ...w, z, min: false } : w,
      ),
      zTop: z,
      panel: null,
    });
  },

  moveWindow: (id, x, y) =>
    set({
      windows: get().windows.map((w) => (w.id === id ? { ...w, x, y, max: false } : w)),
    }),

  resizeWindow: (id, x, y, w, h) =>
    set({
      windows: get().windows.map((win) =>
        win.id === id
          ? { ...win, x, y, w: Math.max(240, w), h: Math.max(160, h), max: false }
          : win,
      ),
    }),

  restoreOrMin: (appId) => {
    const focusedZ = Math.max(0, ...get().windows.filter((w) => !w.min).map((w) => w.z));
    const top = get()
      .windows.filter((w) => w.appId === appId)
      .sort((a, b) => b.z - a.z)[0];
    if (!top) {
      get().openApp(appId);
      return;
    }
    if (top.min) {
      get().focus(top.id);
    } else if (top.z === focusedZ) {
      get().minimize(top.id);
    } else {
      get().focus(top.id);
    }
  },

  createFolder: (parentId, name) => {
    const existing = childrenOf(get().files, parentId).map((n) => n.name);
    let base = name ?? "Nueva carpeta";
    let n = 1;
    let final = base;
    while (existing.includes(final)) {
      n += 1;
      final = `${base} (${n})`;
    }
    const id = nid();
    set({
      files: [
        ...get().files,
        { id, name: final, kind: "folder", parentId, modified: Date.now() },
      ],
    });
    get().persist();
    return id;
  },

  createFile: (parentId, name, ext, content = "", dataUrl) => {
    const id = nid();
    set({
      files: [
        ...get().files,
        {
          id,
          name,
          kind: "file",
          parentId,
          ext,
          content,
          dataUrl,
          modified: Date.now(),
        },
      ],
    });
    get().persist();
    return id;
  },

  renameNode: (id, name) => {
    set({
      files: get().files.map((f) =>
        f.id === id ? { ...f, name, modified: Date.now() } : f,
      ),
    });
    get().persist();
  },

  trashNode: (id) => {
    set({
      files: get().files.map((f) => (f.id === id ? { ...f, trashed: true } : f)),
    });
    get().persist();
  },

  restoreNode: (id) => {
    set({
      files: get().files.map((f) => (f.id === id ? { ...f, trashed: false } : f)),
    });
    get().persist();
  },

  emptyTrash: () => {
    set({ files: get().files.filter((f) => !f.trashed) });
    get().persist();
  },

  writeFile: (id, content) => {
    set({
      files: get().files.map((f) =>
        f.id === id ? { ...f, content, modified: Date.now() } : f,
      ),
    });
    get().persist();
  },

  setIconPos: (id, x, y) => {
    set({ iconPos: { ...get().iconPos, [id]: { x, y } } });
    get().persist();
  },

  addSticky: (text = "") => {
    const note: StickyNote = { id: nid(), text, color: "#fff475" };
    set({ stickies: [...get().stickies, note] });
    get().persist();
    get().openApp("sticky", { stickyId: note.id });
  },

  updateSticky: (id, text) => {
    set({
      stickies: get().stickies.map((s) => (s.id === id ? { ...s, text } : s)),
    });
    get().persist();
  },

  markMailRead: (id) => {
    set({
      mail: get().mail.map((m) => (m.id === id ? { ...m, unread: false } : m)),
    });
    get().persist();
  },

  pushNotif: (title, body) =>
    set({
      notif: [{ id: nid(), title, body }, ...get().notif].slice(0, 8),
    }),

  clearNotifs: () => set({ notif: [] }),

  shutdown: () => {
    set({ phase: "shutdown", windows: [], panel: null });
  },
  restart: () => {
    set({ phase: "shutdown", windows: [], panel: null });
  },
  lock: () => set({ phase: "lock", panel: null, windows: get().windows }),
  signOut: () => set({ phase: "login", panel: null, windows: [] }),
}));

export function trashCount(files: FsNode[]) {
  return files.filter((f) => f.trashed).length;
}
