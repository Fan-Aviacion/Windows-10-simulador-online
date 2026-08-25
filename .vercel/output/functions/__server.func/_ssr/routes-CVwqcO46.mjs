import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, C as FileText, D as BatteryFull, E as Bell, O as ArrowUp, S as Globe, T as ChevronRight, _ as Lock, b as Image, c as Settings, d as Power, f as Plus, g as Monitor, h as Moon, i as User, j as Accessibility, k as ArrowRight, l as Search, m as Palette, n as WifiOff, o as Star, p as Plane, r as Volume2, s as Shield, t as Wifi, u as RefreshCw, v as List, w as Clock, x as Grid2x2, y as LayoutGrid } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CVwqcO46.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var APPS = {
	explorer: {
		id: "explorer",
		name: "Explorador de archivos",
		singleton: false,
		defaultW: 820,
		defaultH: 540,
		tile: "medium",
		pinned: true,
		desktop: true
	},
	"this-pc": {
		id: "this-pc",
		name: "Este equipo",
		singleton: false,
		defaultW: 820,
		defaultH: 540,
		tile: "medium",
		desktop: true
	},
	edge: {
		id: "edge",
		name: "Microsoft Edge",
		singleton: false,
		defaultW: 900,
		defaultH: 600,
		tile: "wide",
		tileColor: "#0078d7",
		pinned: true,
		desktop: true
	},
	notepad: {
		id: "notepad",
		name: "Bloc de notas",
		singleton: false,
		defaultW: 560,
		defaultH: 420,
		tile: "medium",
		desktop: true
	},
	calculator: {
		id: "calculator",
		name: "Calculadora",
		singleton: true,
		defaultW: 320,
		defaultH: 520,
		tile: "medium"
	},
	paint: {
		id: "paint",
		name: "Paint",
		singleton: true,
		defaultW: 840,
		defaultH: 580,
		tile: "medium"
	},
	settings: {
		id: "settings",
		name: "Configuración",
		singleton: true,
		defaultW: 860,
		defaultH: 580,
		tile: "medium",
		tileColor: "#0078d7"
	},
	cmd: {
		id: "cmd",
		name: "Símbolo del sistema",
		singleton: false,
		defaultW: 720,
		defaultH: 440,
		tile: "wide"
	},
	store: {
		id: "store",
		name: "Microsoft Store",
		singleton: true,
		defaultW: 920,
		defaultH: 600,
		tile: "wide",
		tileColor: "#0078d7",
		pinned: true
	},
	photos: {
		id: "photos",
		name: "Fotos",
		singleton: true,
		defaultW: 840,
		defaultH: 560,
		tile: "large",
		tileColor: "#0078d7"
	},
	mail: {
		id: "mail",
		name: "Correo",
		singleton: true,
		defaultW: 880,
		defaultH: 560,
		tile: "wide",
		tileColor: "#0078d7",
		pinned: true
	},
	calendar: {
		id: "calendar",
		name: "Calendario",
		singleton: true,
		defaultW: 820,
		defaultH: 560,
		tile: "medium",
		tileColor: "#0078d7"
	},
	sticky: {
		id: "sticky",
		name: "Notas adhesivas",
		singleton: false,
		defaultW: 280,
		defaultH: 260,
		tile: "small"
	},
	minesweeper: {
		id: "minesweeper",
		name: "Buscaminas",
		singleton: true,
		defaultW: 360,
		defaultH: 460,
		tile: "medium"
	},
	recycle: {
		id: "recycle",
		name: "Papelera de reciclaje",
		singleton: true,
		defaultW: 700,
		defaultH: 480,
		tile: "medium",
		desktop: true
	},
	winver: {
		id: "winver",
		name: "Acerca de Windows",
		singleton: true,
		defaultW: 440,
		defaultH: 380,
		tile: "small"
	}
};
var START_APPS = [
	"edge",
	"store",
	"mail",
	"calendar",
	"photos",
	"settings",
	"calculator",
	"notepad",
	"paint",
	"explorer",
	"cmd",
	"minesweeper",
	"sticky"
];
var ALL_APPS_LIST = [
	{
		letter: "B",
		ids: ["notepad", "minesweeper"]
	},
	{
		letter: "C",
		ids: [
			"calculator",
			"calendar",
			"settings"
		]
	},
	{
		letter: "E",
		ids: ["explorer", "edge"]
	},
	{
		letter: "F",
		ids: ["photos"]
	},
	{
		letter: "M",
		ids: ["store", "mail"]
	},
	{
		letter: "N",
		ids: ["sticky"]
	},
	{
		letter: "P",
		ids: ["paint"]
	},
	{
		letter: "S",
		ids: ["cmd"]
	}
];
var ACCENTS = [
	"#0078d7",
	"#00b7c3",
	"#038387",
	"#00cc6a",
	"#10893e",
	"#107c10",
	"#ffb900",
	"#ff8c00",
	"#e74856",
	"#e81123",
	"#c239b3",
	"#9a0089",
	"#881798",
	"#744da9",
	"#8764b8",
	"#4c4a48",
	"#525e54",
	"#567c73",
	"#486860",
	"#498205"
];
var WALLPAPERS = [
	{
		id: "bloom",
		name: "Hero"
	},
	{
		id: "flow",
		name: "Flujo"
	},
	{
		id: "dusk",
		name: "Atardecer"
	},
	{
		id: "forest",
		name: "Bosque"
	},
	{
		id: "night",
		name: "Noche"
	},
	{
		id: "accent",
		name: "Color de acento"
	}
];
var T = 171e10;
function folder(id, name, parentId) {
	return {
		id,
		name,
		kind: "folder",
		parentId,
		modified: T
	};
}
function file(id, name, parentId, ext, content) {
	return {
		id,
		name,
		kind: "file",
		parentId,
		ext,
		content,
		modified: T
	};
}
var WELCOME = `Bienvenido a Windows 10

Este es un simulador interactivo del escritorio.

Prueba a:
 • Abrir el menú Inicio (botón de Windows o tecla Win)
 • Explorar Este equipo y la carpeta Documentos
 • Escribir en el Bloc de notas y guardar
 • Dibujar en Paint
 • Usar la Calculadora
 • Cambiar el fondo y el color de acento en Configuración
 • Abrir el Símbolo del sistema y escribir help
 • Jugar al Buscaminas
 • Hacer clic derecho en el escritorio

Apagar, reiniciar, suspender y bloquear funcionan
desde el menú Inicio.
`;
var GETTING_STARTED = `Atajos de teclado
==================

Win            Menú Inicio
Esc            Cerrar menús
Alt+F4         Cerrar ventana
Ctrl+N         Nueva nota (Bloc de notas)
Enter          Iniciar sesión (pantalla de bloqueo)

En el Símbolo del sistema
-------------------------
help, dir, cd, cls, echo, ver, date, time
whoami, systeminfo, ipconfig, start, notepad
winver, tree, type, mkdir, color, bsod, exit
`;
var PHOTO_LAKE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="s" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7ec8e8"/>
      <stop offset="1" stop-color="#c8e8f4"/>
    </linearGradient>
    <linearGradient id="w" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2a7ab0"/>
      <stop offset="1" stop-color="#0d4a78"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#s)"/>
  <ellipse cx="620" cy="90" rx="70" ry="70" fill="#fff6d0" opacity=".9"/>
  <path d="M0 280 L120 200 L220 250 L340 160 L480 230 L620 140 L800 220 L800 500 L0 500Z" fill="#2d5a3a"/>
  <path d="M0 340 L800 300 L800 500 L0 500Z" fill="url(#w)"/>
  <path d="M0 360 Q200 340 400 355 T800 330" fill="none" stroke="#8fd0e8" stroke-width="2" opacity=".4"/>
</svg>`;
var PHOTO_CITY = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#1a2744"/>
  <rect width="800" height="220" fill="#243656"/>
  <circle cx="650" cy="70" r="36" fill="#f0e6c8"/>
  <rect x="80" y="180" width="70" height="220" fill="#2c3d5c"/>
  <rect x="170" y="140" width="90" height="260" fill="#33466a"/>
  <rect x="280" y="200" width="60" height="200" fill="#2a3a58"/>
  <rect x="360" y="110" width="110" height="290" fill="#3a5078"/>
  <rect x="490" y="170" width="80" height="230" fill="#2f4468"/>
  <rect x="590" y="150" width="100" height="250" fill="#35507a"/>
  <rect x="40" y="400" width="720" height="100" fill="#121a2c"/>
  <g fill="#d4e8ff" opacity=".7">
    <rect x="190" y="170" width="10" height="14"/>
    <rect x="210" y="170" width="10" height="14"/>
    <rect x="230" y="190" width="10" height="14"/>
    <rect x="380" y="140" width="10" height="14"/>
    <rect x="400" y="160" width="10" height="14"/>
    <rect x="610" y="180" width="10" height="14"/>
    <rect x="640" y="200" width="10" height="14"/>
  </g>
</svg>`;
var PHOTO_HILLS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <linearGradient id="h" xmlns="http://www.w3.org/2000/svg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f4c27a"/>
    <stop offset="1" stop-color="#f08a4b"/>
  </linearGradient>
  <rect width="800" height="500" fill="url(#h)"/>
  <circle cx="140" cy="120" r="50" fill="#fff1c8"/>
  <path d="M0 320 C120 260 220 300 340 250 C460 200 560 280 800 230 L800 500 L0 500Z" fill="#6b8f4e"/>
  <path d="M0 380 C180 330 300 400 480 340 C640 290 720 360 800 330 L800 500 L0 500Z" fill="#4e7340"/>
</svg>`;
function seedFs() {
	return [
		folder("c", "Disco local (C:)", null),
		folder("windows", "Windows", "c"),
		folder("system32", "System32", "windows"),
		folder("pf", "Archivos de programa", "c"),
		folder("users", "Users", "c"),
		folder("user", "Usuario", "users"),
		folder("desktop", "Escritorio", "user"),
		folder("documents", "Documentos", "user"),
		folder("downloads", "Descargas", "user"),
		folder("pictures", "Imágenes", "user"),
		folder("music", "Música", "user"),
		folder("videos", "Vídeos", "user"),
		file("welcome", "Bienvenido.txt", "documents", "txt", WELCOME),
		file("guide", "Primeros pasos.txt", "documents", "txt", GETTING_STARTED),
		{
			id: "photo-lake",
			name: "Lago.svg",
			kind: "file",
			parentId: "pictures",
			ext: "svg",
			content: PHOTO_LAKE,
			dataUrl: `data:image/svg+xml;utf8,${encodeURIComponent(PHOTO_LAKE)}`,
			modified: T
		},
		{
			id: "photo-city",
			name: "Ciudad.svg",
			kind: "file",
			parentId: "pictures",
			ext: "svg",
			content: PHOTO_CITY,
			dataUrl: `data:image/svg+xml;utf8,${encodeURIComponent(PHOTO_CITY)}`,
			modified: T
		},
		{
			id: "photo-hills",
			name: "Colinas.svg",
			kind: "file",
			parentId: "pictures",
			ext: "svg",
			content: PHOTO_HILLS,
			dataUrl: `data:image/svg+xml;utf8,${encodeURIComponent(PHOTO_HILLS)}`,
			modified: T
		},
		file("readme-dl", "Leeme.txt", "downloads", "txt", "No hay descargas nuevas.\n"),
		file("hosts", "hosts", "system32", "txt", "127.0.0.1 localhost\n")
	];
}
var QUICK_ACCESS = [
	{
		id: "desktop",
		name: "Escritorio"
	},
	{
		id: "downloads",
		name: "Descargas"
	},
	{
		id: "documents",
		name: "Documentos"
	},
	{
		id: "pictures",
		name: "Imágenes"
	},
	{
		id: "music",
		name: "Música"
	},
	{
		id: "videos",
		name: "Vídeos"
	}
];
var THIS_PC_FOLDERS = [
	{
		id: "desktop",
		name: "Escritorio"
	},
	{
		id: "documents",
		name: "Documentos"
	},
	{
		id: "downloads",
		name: "Descargas"
	},
	{
		id: "pictures",
		name: "Imágenes"
	},
	{
		id: "music",
		name: "Música"
	},
	{
		id: "videos",
		name: "Vídeos"
	}
];
function nid() {
	return Math.random().toString(36).slice(2, 10);
}
function childrenOf(nodes, parentId) {
	return nodes.filter((n) => n.parentId === parentId && !n.trashed).sort((a, b) => {
		if (a.kind !== b.kind) return a.kind === "folder" ? -1 : 1;
		return a.name.localeCompare(b.name, "es");
	});
}
function pathOf(nodes, id) {
	const map = new Map(nodes.map((n) => [n.id, n]));
	const chain = [];
	let cur = map.get(id);
	while (cur) {
		chain.unshift(cur);
		cur = cur.parentId ? map.get(cur.parentId) : void 0;
	}
	return chain;
}
function formatSize(node) {
	if (node.kind === "folder") return "";
	const n = (node.content?.length ?? node.dataUrl?.length ?? 0) || 1;
	if (n < 1024) return `${n} bytes`;
	return `${(n / 1024).toFixed(1)} KB`;
}
var SAMPLE_MAIL = [
	{
		id: "m1",
		from: "Microsoft",
		fromEmail: "noreply@microsoft.com",
		subject: "Te damos la bienvenida a Windows 10",
		preview: "Gracias por iniciar sesión. Aquí tienes algunos consejos para empezar.",
		body: "Hola,\n\nGracias por usar este equipo. Desde el menú Inicio puedes abrir Configuración para personalizar el fondo, el color de acento y más.\n\nEl equipo de Windows",
		time: "09:14",
		unread: true
	},
	{
		id: "m2",
		from: "Microsoft Store",
		fromEmail: "store@microsoft.com",
		subject: "Aplicaciones recomendadas para ti",
		preview: "Buscaminas, Paint y el Bloc de notas ya están listos.",
		body: "Hola,\n\nHemos preparado algunas aplicaciones clásicas en este equipo. Ábrelas desde Inicio o ancla las que más uses a la barra de tareas.\n\nMicrosoft Store",
		time: "Ayer",
		unread: true
	},
	{
		id: "m3",
		from: "Calendario",
		fromEmail: "calendar@live.com",
		subject: "Hoy · Productividad",
		preview: "No tienes eventos. Un buen día para explorar el escritorio.",
		body: "No hay eventos programados para hoy.\n\nAbre Calendario para ver el mes completo.",
		time: "Lun",
		unread: false
	},
	{
		id: "m4",
		from: "Seguridad de Windows",
		fromEmail: "security@microsoft.com",
		subject: "El dispositivo está protegido",
		preview: "No se requiere ninguna acción.",
		body: "Antivirus de Windows Defender.\nEstado: activo.\nÚltimo análisis: hoy.\n\nNo se requiere ninguna acción.",
		time: "Dom",
		unread: false
	}
];
var PERSIST_KEY = "win10-sim-v1";
var DEFAULT_SETTINGS = {
	userName: "Usuario",
	accent: "#0078d7",
	wallpaper: "bloom",
	darkWindows: false,
	transparency: true,
	volume: 70,
	wifi: true,
	notifications: true,
	nightLight: false
};
function loadPersist() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(PERSIST_KEY);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function cascade(n) {
	return {
		x: 80 + n % 8 * 28,
		y: 48 + n % 8 * 24
	};
}
var useWinStore = create((set, get) => ({
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
	stickies: [{
		id: "s1",
		text: "Notas adhesivas\n\nEscribe aquí.",
		color: "#fff475"
	}],
	iconPos: {},
	mail: SAMPLE_MAIL,
	hydrate: () => {
		const saved = loadPersist();
		if (saved) set({
			settings: {
				...DEFAULT_SETTINGS,
				...saved.settings
			},
			files: saved.files?.length ? saved.files : seedFs(),
			stickies: saved.stickies ?? [],
			iconPos: saved.iconPos ?? {},
			mail: saved.mail?.length ? saved.mail : SAMPLE_MAIL,
			hydrated: true
		});
		else set({ hydrated: true });
	},
	persist: () => {
		const { settings, files, stickies, iconPos, mail } = get();
		try {
			localStorage.setItem(PERSIST_KEY, JSON.stringify({
				settings,
				files,
				stickies,
				iconPos,
				mail
			}));
		} catch {}
	},
	setPhase: (phase) => set({
		phase,
		panel: null,
		ctx: null
	}),
	setPanel: (panel) => set({
		panel,
		ctx: null
	}),
	setSearch: (searchQ) => set({ searchQ }),
	setCtx: (ctx) => set({
		ctx,
		panel: ctx ? null : get().panel
	}),
	setSelectedIcon: (selectedIcon) => set({ selectedIcon }),
	patchSettings: (s) => {
		set({ settings: {
			...get().settings,
			...s
		} });
		get().persist();
	},
	openApp: (appId, payload) => {
		const app = APPS[appId];
		const resolved = appId === "this-pc" ? "explorer" : appId;
		const meta = APPS[resolved];
		if (meta.singleton) {
			const existing = get().windows.find((w) => w.appId === resolved);
			if (existing) {
				set({
					windows: get().windows.map((w) => w.id === existing.id ? {
						...w,
						min: false,
						z: get().zTop + 1,
						payload: payload ?? w.payload
					} : w),
					zTop: get().zTop + 1,
					panel: null
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
		const win = {
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
			payload: resolved === "explorer" && appId === "this-pc" ? {
				folderId: "c",
				view: "this-pc"
			} : payload
		};
		set({
			windows: [...get().windows, win],
			zTop: z,
			panel: null,
			ctx: null
		});
	},
	closeWindow: (id) => set({ windows: get().windows.filter((w) => w.id !== id) }),
	minimize: (id) => set({ windows: get().windows.map((w) => w.id === id ? {
		...w,
		min: true
	} : w) }),
	toggleMax: (id) => set({ windows: get().windows.map((w) => w.id === id ? {
		...w,
		max: !w.max,
		min: false
	} : w) }),
	focus: (id) => {
		const z = get().zTop + 1;
		set({
			windows: get().windows.map((w) => w.id === id ? {
				...w,
				z,
				min: false
			} : w),
			zTop: z,
			panel: null
		});
	},
	moveWindow: (id, x, y) => set({ windows: get().windows.map((w) => w.id === id ? {
		...w,
		x,
		y,
		max: false
	} : w) }),
	resizeWindow: (id, x, y, w, h) => set({ windows: get().windows.map((win) => win.id === id ? {
		...win,
		x,
		y,
		w: Math.max(240, w),
		h: Math.max(160, h),
		max: false
	} : win) }),
	restoreOrMin: (appId) => {
		const focusedZ = Math.max(0, ...get().windows.filter((w) => !w.min).map((w) => w.z));
		const top = get().windows.filter((w) => w.appId === appId).sort((a, b) => b.z - a.z)[0];
		if (!top) {
			get().openApp(appId);
			return;
		}
		if (top.min) get().focus(top.id);
		else if (top.z === focusedZ) get().minimize(top.id);
		else get().focus(top.id);
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
		set({ files: [...get().files, {
			id,
			name: final,
			kind: "folder",
			parentId,
			modified: Date.now()
		}] });
		get().persist();
		return id;
	},
	createFile: (parentId, name, ext, content = "", dataUrl) => {
		const id = nid();
		set({ files: [...get().files, {
			id,
			name,
			kind: "file",
			parentId,
			ext,
			content,
			dataUrl,
			modified: Date.now()
		}] });
		get().persist();
		return id;
	},
	renameNode: (id, name) => {
		set({ files: get().files.map((f) => f.id === id ? {
			...f,
			name,
			modified: Date.now()
		} : f) });
		get().persist();
	},
	trashNode: (id) => {
		set({ files: get().files.map((f) => f.id === id ? {
			...f,
			trashed: true
		} : f) });
		get().persist();
	},
	restoreNode: (id) => {
		set({ files: get().files.map((f) => f.id === id ? {
			...f,
			trashed: false
		} : f) });
		get().persist();
	},
	emptyTrash: () => {
		set({ files: get().files.filter((f) => !f.trashed) });
		get().persist();
	},
	writeFile: (id, content) => {
		set({ files: get().files.map((f) => f.id === id ? {
			...f,
			content,
			modified: Date.now()
		} : f) });
		get().persist();
	},
	setIconPos: (id, x, y) => {
		set({ iconPos: {
			...get().iconPos,
			[id]: {
				x,
				y
			}
		} });
		get().persist();
	},
	addSticky: (text = "") => {
		const note = {
			id: nid(),
			text,
			color: "#fff475"
		};
		set({ stickies: [...get().stickies, note] });
		get().persist();
		get().openApp("sticky", { stickyId: note.id });
	},
	updateSticky: (id, text) => {
		set({ stickies: get().stickies.map((s) => s.id === id ? {
			...s,
			text
		} : s) });
		get().persist();
	},
	markMailRead: (id) => {
		set({ mail: get().mail.map((m) => m.id === id ? {
			...m,
			unread: false
		} : m) });
		get().persist();
	},
	pushNotif: (title, body) => set({ notif: [{
		id: nid(),
		title,
		body
	}, ...get().notif].slice(0, 8) }),
	clearNotifs: () => set({ notif: [] }),
	shutdown: () => {
		set({
			phase: "shutdown",
			windows: [],
			panel: null
		});
	},
	restart: () => {
		set({
			phase: "shutdown",
			windows: [],
			panel: null
		});
	},
	lock: () => set({
		phase: "lock",
		panel: null,
		windows: get().windows
	}),
	signOut: () => set({
		phase: "login",
		panel: null,
		windows: []
	})
}));
function trashCount(files) {
	return files.filter((f) => f.trashed).length;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var WP = {
	bloom: "wp-bloom",
	flow: "wp-flow",
	dusk: "wp-dusk",
	forest: "wp-forest",
	night: "wp-night",
	accent: "wp-accent"
};
function Wallpaper({ id, className, dim }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute inset-0", WP[id] ?? "wp-bloom", className),
		"aria-hidden": true,
		children: [id === "bloom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 bottom-0 h-3/5 opacity-50",
			style: { background: "conic-gradient(from 210deg at 50% 100%, transparent 0deg, rgb(255 255 255 / 18%) 6deg, transparent 14deg, transparent 22deg, rgb(255 255 255 / 10%) 28deg, transparent 38deg, transparent 50deg, rgb(255 255 255 / 14%) 56deg, transparent 68deg)" }
		}) : null, dim ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/45" }) : null]
	});
}
function WindowsLogo({ size = 16, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 88 88",
		className,
		style,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M0 12.5 41.2 6.8v35.4H0zm45.3-6.4L88 0v42.2H45.3zM0 49.2h41.2v35.4L0 79.1zm45.3 0H88V88L45.3 81.4z"
		})
	});
}
function Frame({ size, className, style, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: size ?? 32,
		height: size ?? 32,
		viewBox: "0 0 32 32",
		className,
		style,
		"aria-hidden": true,
		children
	});
}
function IconExplorer({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#dcb152",
				d: "M3 9h10l2 2h14v3H3z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#f4d27a",
				d: "M3 13h26v14H3z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#c9a045",
				d: "M3 26h26v1.5H3z"
			})
		]
	});
}
function IconThisPc({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4",
				y: "5",
				width: "24",
				height: "16",
				rx: "1.2",
				fill: "#3a3a3a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "6",
				y: "7",
				width: "20",
				height: "12",
				fill: "#4db2e8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "21",
				width: "8",
				height: "2",
				fill: "#5a5a5a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "23",
				width: "16",
				height: "2.5",
				rx: "0.4",
				fill: "#2a2a2a"
			})
		]
	});
}
function IconRecycle({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#8aa0b4",
				d: "M10 8h12l1 3H9z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#9eb4c8",
				d: "M9 11h14l-1.4 16H10.4z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#c5d4e0",
				d: "M12 13h2v12h-2zm6 0h2v12h-2z"
			})
		]
	});
}
function IconRecycleFull({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#8aa0b4",
				d: "M10 8h12l1 3H9z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#9eb4c8",
				d: "M9 11h14l-1.4 16H10.4z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "14",
				width: "8",
				height: "10",
				fill: "#dce6ee"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#6a8094",
				d: "M12 13h2v12h-2zm6 0h2v12h-2z"
			})
		]
	});
}
function IconEdge({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "13",
				fill: "#0a6cd6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#5ec8f0",
				d: "M6 18c3-8 12-12 19-8-4 1-7 4-8 8 4-1 8 1 10 5-6 6-16 5-21-5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "M8 19c4 6 13 7 18 1-3 4-10 5-16 1-1-1-2-1-2-2z",
				opacity: ".9"
			})
		]
	});
}
function IconNotepad({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#f4f1de",
				d: "M8 3h14l4 4v22H8z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#e0dcc4",
				d: "M22 3v4h4z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#2b88d8",
				d: "M8 3h14v3H8z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				stroke: "#c8c4b0",
				strokeWidth: "1.2",
				d: "M12 12h10M12 16h10M12 20h8"
			})
		]
	});
}
function IconCalc({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "6",
				y: "3",
				width: "20",
				height: "26",
				rx: "1.5",
				fill: "#3a3a3a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "6",
				width: "16",
				height: "6",
				fill: "#1a1a1a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "#d0d0d0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "8",
						y: "14",
						width: "4",
						height: "3.2",
						rx: "0.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "14",
						y: "14",
						width: "4",
						height: "3.2",
						rx: "0.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "20",
						y: "14",
						width: "4",
						height: "3.2",
						rx: "0.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "8",
						y: "19",
						width: "4",
						height: "3.2",
						rx: "0.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "14",
						y: "19",
						width: "4",
						height: "3.2",
						rx: "0.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "20",
						y: "19",
						width: "4",
						height: "3.2",
						rx: "0.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "8",
						y: "24",
						width: "10",
						height: "3.2",
						rx: "0.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "20",
						y: "24",
						width: "4",
						height: "3.2",
						rx: "0.4",
						fill: "#0078d7"
					})
				]
			})
		]
	});
}
function IconPaint({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#f2f2f2",
				d: "M6 6h20v16H14l-8 6V6z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "3",
				fill: "#e81123"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "11",
				r: "3",
				fill: "#0078d7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "15",
				cy: "16",
				r: "3",
				fill: "#ffb900"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "21",
				cy: "16",
				r: "2.4",
				fill: "#107c10"
			})
		]
	});
}
function IconSettings({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "5",
				fill: "#c8c8c8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#c8c8c8",
				d: "M14 3h4l1 4 4-1 2 3-3 3 3 3-2 3-4-1-1 4h-4l-1-4-4 1-2-3 3-3-3-3 2-3 4 1z",
				opacity: ".95"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "3.2",
				fill: "#4a4a4a"
			})
		]
	});
}
function IconCmd({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "6",
				width: "26",
				height: "20",
				rx: "1",
				fill: "#0c0c0c"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				stroke: "#d0d0d0",
				strokeWidth: "1.4",
				fill: "none",
				d: "M7 12l4 4-4 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				stroke: "#d0d0d0",
				strokeWidth: "1.4",
				d: "M13 20h8"
			})
		]
	});
}
function IconStore({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "12",
				width: "22",
				height: "15",
				fill: "#0078d7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#50e6ff",
				d: "M10 12c0-4 12-4 12 0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "M8 12h16l-1.5-5H9.5z",
				opacity: ".9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "16",
				width: "4",
				height: "7",
				fill: "#fff",
				opacity: ".85"
			})
		]
	});
}
function IconPhotos({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "6",
				width: "26",
				height: "20",
				rx: "1",
				fill: "#0078d7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "11",
				cy: "13",
				r: "3",
				fill: "#ffe08a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff",
				d: "M6 24l7-8 5 6 3-3 5 5z",
				opacity: ".92"
			})
		]
	});
}
function IconMail({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "8",
				width: "26",
				height: "16",
				fill: "#0078d7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#50e6ff",
				d: "M3 8l13 9 13-9z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#003f7f",
				d: "M3 24l9-8M29 24l-9-8",
				opacity: ".35"
			})
		]
	});
}
function IconCalendar({ size = 32, className, style }) {
	const d = typeof window !== "undefined" ? (/* @__PURE__ */ new Date()).getDate() : 25;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4",
				y: "5",
				width: "24",
				height: "22",
				rx: "1.5",
				fill: "#0078d7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4",
				y: "5",
				width: "24",
				height: "6",
				fill: "#005a9e"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "16",
				y: "24",
				textAnchor: "middle",
				fontSize: "12",
				fontWeight: "600",
				fill: "#fff",
				fontFamily: "Segoe UI, sans-serif",
				children: d
			})
		]
	});
}
function IconSticky({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#fff475",
				d: "M6 4h16l6 6v18H6z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#f0dc50",
				d: "M22 4v6h6z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				stroke: "#c8b030",
				strokeWidth: "1",
				d: "M10 14h12M10 18h10"
			})
		]
	});
}
function IconMine({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "17",
				r: "8",
				fill: "#2a2a2a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "15",
				y: "6",
				width: "2",
				height: "5",
				fill: "#2a2a2a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "4",
				width: "4",
				height: "2",
				fill: "#c0392b"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "13",
				cy: "15",
				r: "1.6",
				fill: "#eee"
			})
		]
	});
}
function IconWinver({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "4",
			y: "4",
			width: "24",
			height: "24",
			fill: "#0078d7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			fill: "#fff",
			transform: "translate(7 8) scale(0.2)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 12.5 41.2 6.8v35.4H0zm45.3-6.4L88 0v42.2H45.3zM0 49.2h41.2v35.4L0 79.1zm45.3 0H88V88L45.3 81.4z" })
		})]
	});
}
function IconFolder({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconExplorer, {
		size,
		className,
		style
	});
}
function IconFile({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#f4f4f4",
				d: "M8 3h11l7 7v19H8z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#d8d8d8",
				d: "M19 3v7h7z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				stroke: "#c0c0c0",
				d: "M12 16h10M12 20h8"
			})
		]
	});
}
function IconDrive({ size = 32, className, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		size,
		className,
		style,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "10",
				width: "26",
				height: "14",
				rx: "2",
				fill: "#5a6a7a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "12",
				width: "22",
				height: "7",
				fill: "#3a4a58"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "23",
				cy: "21",
				r: "1.4",
				fill: "#3ecf4a"
			})
		]
	});
}
var MAP = {
	explorer: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconExplorer, { ...p }),
	"this-pc": (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconThisPc, { ...p }),
	edge: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconEdge, { ...p }),
	notepad: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconNotepad, { ...p }),
	calculator: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCalc, { ...p }),
	paint: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPaint, { ...p }),
	settings: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSettings, { ...p }),
	cmd: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCmd, { ...p }),
	store: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconStore, { ...p }),
	photos: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPhotos, { ...p }),
	mail: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMail, { ...p }),
	calendar: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCalendar, { ...p }),
	sticky: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSticky, { ...p }),
	minesweeper: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMine, { ...p }),
	recycle: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRecycle, { ...p }),
	winver: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWinver, { ...p })
};
function AppIcon({ id, size = 32, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: MAP[id]({
		size,
		className
	}) });
}
var DESKTOP = [
	{
		id: "this-pc",
		appId: "this-pc"
	},
	{
		id: "recycle",
		appId: "recycle"
	},
	{
		id: "edge",
		appId: "edge"
	},
	{
		id: "explorer",
		appId: "explorer"
	},
	{
		id: "notepad",
		appId: "notepad"
	},
	{
		id: "settings",
		appId: "settings"
	}
];
function DesktopIcons() {
	const { iconPos, selectedIcon, setSelectedIcon, openApp, setIconPos, setCtx, files } = useWinStore();
	const trash = trashCount(files);
	const drag = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 bottom-taskbar",
		children: DESKTOP.map((item, i) => {
			const def = {
				x: 12,
				y: 12 + i * 86
			};
			const pos = iconPos[item.id] ?? def;
			const app = APPS[item.appId];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("absolute flex w-icon flex-col items-center gap-1 px-1 py-1 text-center text-win-sm text-win-desktop-fg", selectedIcon === item.id && "bg-white/20 ring-1 ring-white/40"),
				style: {
					left: pos.x,
					top: pos.y
				},
				onClick: (e) => {
					e.stopPropagation();
					setSelectedIcon(item.id);
				},
				onDoubleClick: (e) => {
					e.stopPropagation();
					openApp(item.appId);
				},
				onContextMenu: (e) => {
					e.preventDefault();
					e.stopPropagation();
					setSelectedIcon(item.id);
					setCtx({
						x: e.clientX,
						y: e.clientY,
						kind: "icon",
						targetId: item.appId
					});
				},
				onPointerDown: (e) => {
					if (e.button !== 0) return;
					drag.current = {
						id: item.id,
						sx: e.clientX,
						sy: e.clientY,
						ox: pos.x,
						oy: pos.y
					};
					e.currentTarget.setPointerCapture(e.pointerId);
				},
				onPointerMove: (e) => {
					const d = drag.current;
					if (!d || d.id !== item.id) return;
					const dx = e.clientX - d.sx;
					const dy = e.clientY - d.sy;
					if (Math.abs(dx) + Math.abs(dy) < 4) return;
					setIconPos(item.id, Math.max(0, d.ox + dx), Math.max(0, d.oy + dy));
				},
				onPointerUp: () => {
					drag.current = null;
				},
				children: [item.appId === "recycle" ? trash > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRecycleFull, { size: 48 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRecycle, { size: 48 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
					id: item.appId,
					size: 48
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "line-clamp-2 w-full leading-tight",
					style: { textShadow: "0 1px 2px rgb(0 0 0 / 80%)" },
					children: app.name
				})]
			}, item.id);
		})
	});
}
function useNow(ms = 1e3) {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		const t = setInterval(() => setNow(/* @__PURE__ */ new Date()), ms);
		return () => clearInterval(t);
	}, [ms]);
	return now;
}
function formatClock(d) {
	return {
		time: d.toLocaleTimeString("es-ES", {
			hour: "2-digit",
			minute: "2-digit"
		}),
		date: d.toLocaleDateString("es-ES", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric"
		})
	};
}
function formatLock(d) {
	return {
		time: d.toLocaleTimeString("es-ES", {
			hour: "2-digit",
			minute: "2-digit"
		}),
		date: d.toLocaleDateString("es-ES", {
			weekday: "long",
			day: "numeric",
			month: "long"
		})
	};
}
function Tile({ id, span }) {
	const openApp = useWinStore((s) => s.openApp);
	const accent = useWinStore((s) => s.settings.accent);
	const app = APPS[id];
	const now = useNow(6e4);
	const bg = app.tileColor ?? accent;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: cn("relative flex flex-col items-start justify-between overflow-hidden p-2 text-left text-white", span),
		style: { background: bg },
		onClick: () => openApp(id),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
					id,
					size: span.includes("col-span-4") ? 48 : 28
				})
			}),
			id === "calendar" && now ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-2 right-3 text-2xl font-light",
				children: now.getDate()
			}) : null,
			id === "mail" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-win-xs opacity-90",
				children: "2 mensajes nuevos"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-win-xs leading-tight",
				children: app.name
			})
		]
	});
}
function StartMenu() {
	const { settings, openApp, setPanel, lock, signOut } = useWinStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "win-start win-start-enter absolute bottom-taskbar left-0 z-50 flex h-[min(640px,calc(100%-var(--height-taskbar)))] w-[min(650px,100%)] bg-win-start text-win-start-fg shadow-[var(--shadow-flyout)]",
		onPointerDown: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-12 flex-col items-center py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-10 place-items-center hover:bg-win-hover",
					title: settings.userName,
					onClick: () => setPanel("user"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center hover:bg-win-hover",
							title: "Documentos",
							onClick: () => openApp("explorer", { folderId: "documents" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center hover:bg-win-hover",
							title: "Imágenes",
							onClick: () => openApp("explorer", { folderId: "pictures" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center hover:bg-win-hover",
							title: "Configuración",
							onClick: () => openApp("settings"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center hover:bg-win-hover",
							title: "Encendido",
							onClick: () => setPanel("power"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, { className: "size-4" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "win-scroll min-w-0 flex-1 overflow-y-auto px-2 py-3 sm:w-52 sm:flex-none",
				children: ALL_APPS_LIST.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-2 py-1 text-win-xs text-win-start-muted",
						children: g.letter
					}), g.ids.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-center gap-3 px-2 py-1.5 text-left text-win-md hover:bg-win-hover",
						onClick: () => openApp(id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
							id,
							size: 24
						}), APPS[id].name]
					}, id))]
				}, g.letter))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "win-scroll hidden min-w-0 flex-1 overflow-y-auto p-3 sm:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 px-1 text-win-sm text-win-start-muted",
						children: "De un vistazo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-6 gap-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								id: "edge",
								span: "col-span-4 row-span-2 min-h-28"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								id: "mail",
								span: "col-span-2 min-h-14"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								id: "calendar",
								span: "col-span-2 min-h-14"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								id: "photos",
								span: "col-span-4 min-h-24"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								id: "store",
								span: "col-span-2 min-h-24"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 mb-2 px-1 text-win-sm text-win-start-muted",
						children: "Jugar y explorar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-6 gap-0.5",
						children: START_APPS.filter((id) => ![
							"edge",
							"mail",
							"calendar",
							"photos",
							"store"
						].includes(id)).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							id,
							span: "col-span-2 min-h-20"
						}, id))
					})
				]
			}),
			useWinStore.getState().panel === "power" ? null : null,
			useWinStore.getState().panel === "power" ? null : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerFlyout, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserFlyout, {
				onLock: lock,
				onSignOut: signOut
			})
		]
	});
}
function PowerFlyout() {
	const panel = useWinStore((s) => s.panel);
	const { shutdown, restart, lock, setPanel } = useWinStore();
	if (panel !== "power") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute bottom-12 left-12 z-10 w-44 bg-win-start py-1 shadow-[var(--shadow-menu)]",
		children: [
			{
				l: "Suspender",
				fn: lock
			},
			{
				l: "Apagar",
				fn: shutdown
			},
			{
				l: "Reiniciar",
				fn: () => restart()
			}
		].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "block w-full px-4 py-2 text-left text-win-md hover:bg-win-hover",
			onClick: () => {
				setPanel(null);
				a.fn();
			},
			children: a.l
		}, a.l))
	});
}
function UserFlyout({ onLock, onSignOut }) {
	const panel = useWinStore((s) => s.panel);
	const { openApp, setPanel } = useWinStore();
	if (panel !== "user") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute bottom-auto top-12 left-12 z-10 w-52 bg-win-start py-1 shadow-[var(--shadow-menu)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "block w-full px-4 py-2 text-left text-win-md hover:bg-win-hover",
				onClick: () => {
					setPanel(null);
					openApp("settings", { page: "accounts" });
				},
				children: "Cambiar configuración de cuenta"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "block w-full px-4 py-2 text-left text-win-md hover:bg-win-hover",
				onClick: () => {
					setPanel(null);
					onLock();
				},
				children: "Bloquear"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "block w-full px-4 py-2 text-left text-win-md hover:bg-win-hover",
				onClick: () => {
					setPanel(null);
					onSignOut();
				},
				children: "Cerrar sesión"
			})
		]
	});
}
function SearchPanel() {
	const { searchQ, setSearch, openApp, files } = useWinStore();
	const q = searchQ.trim().toLowerCase();
	const apps = Object.keys(APPS).filter((id) => id !== "this-pc" && id !== "winver" && APPS[id].name.toLowerCase().includes(q));
	const docs = q ? files.filter((f) => !f.trashed && f.name.toLowerCase().includes(q)).slice(0, 6) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "win-flyout-enter absolute bottom-taskbar left-0 z-50 flex h-[min(520px,calc(100%-var(--height-taskbar)))] w-[min(520px,100%)] flex-col bg-win-start text-win-start-fg shadow-[var(--shadow-flyout)]",
		onPointerDown: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			autoFocus: true,
			value: searchQ,
			onChange: (e) => setSearch(e.target.value),
			placeholder: "Escribe aquí para buscar",
			className: "h-12 shrink-0 border-0 border-b border-white/10 bg-transparent px-4 text-win-lg outline-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "win-scroll flex-1 overflow-y-auto p-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-2 py-1 text-win-xs text-win-start-muted",
					children: "Aplicaciones"
				}),
				(q ? apps : apps.slice(0, 8)).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex w-full items-center gap-3 px-2 py-2 text-left text-win-md hover:bg-win-hover",
					onClick: () => openApp(id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						id,
						size: 28
					}), APPS[id].name]
				}, id)),
				docs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 px-2 py-1 text-win-xs text-win-start-muted",
					children: "Documentos"
				}), docs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "flex w-full items-center gap-3 px-2 py-2 text-left text-win-md hover:bg-win-hover",
					onClick: () => openApp(f.ext === "txt" ? "notepad" : f.ext === "svg" ? "photos" : "explorer", f.ext === "txt" ? { fileId: f.id } : { folderId: f.parentId ?? "documents" }),
					children: f.name
				}, f.id))] }) : null,
				q && apps.length === 0 && docs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "px-3 py-8 text-center text-win-sm text-win-start-muted",
					children: [
						"No hay resultados para «",
						searchQ,
						"»"
					]
				}) : null
			]
		})]
	});
}
function CalendarFlyout() {
	const now = useNow(1e3);
	const [cursor, setCursor] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const grid = (0, import_react.useMemo)(() => {
		const y = cursor.getFullYear();
		const m = cursor.getMonth();
		const start = (new Date(y, m, 1).getDay() + 6) % 7;
		const days = new Date(y, m + 1, 0).getDate();
		const cells = [...Array(start).fill(null)];
		for (let d = 1; d <= days; d++) cells.push(d);
		while (cells.length % 7) cells.push(null);
		return cells;
	}, [cursor]);
	const today = now ?? /* @__PURE__ */ new Date();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "win-flyout-enter absolute right-2 bottom-taskbar z-50 w-[min(360px,100%)] bg-win-start p-4 text-win-start-fg shadow-[var(--shadow-flyout)]",
		onPointerDown: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-3xl font-light tabular-nums",
				children: today.toLocaleTimeString("es-ES", {
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 capitalize text-win-accent",
				children: today.toLocaleDateString("es-ES", {
					weekday: "long",
					day: "numeric",
					month: "long"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between text-win-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1)),
						children: "‹"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "capitalize",
						children: cursor.toLocaleDateString("es-ES", {
							month: "long",
							year: "numeric"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1)),
						children: "›"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 grid grid-cols-7 gap-1 text-center text-win-xs text-win-start-muted",
				children: [[
					"L",
					"M",
					"X",
					"J",
					"V",
					"S",
					"D"
				].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: d }, d)), grid.map((d, i) => {
					const isToday = d && d === today.getDate() && cursor.getMonth() === today.getMonth() && cursor.getFullYear() === today.getFullYear();
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("grid h-8 place-items-center", isToday && "bg-win-accent text-white"),
						children: d ?? ""
					}, i);
				})]
			})
		]
	});
}
function ActionCenter() {
	const { settings, patchSettings, notif, clearNotifs, openApp } = useWinStore();
	const tiles = [
		{
			id: "wifi",
			label: "Wi-Fi",
			on: settings.wifi,
			icon: settings.wifi ? Wifi : WifiOff,
			toggle: () => patchSettings({ wifi: !settings.wifi })
		},
		{
			id: "plane",
			label: "Avión",
			on: !settings.wifi,
			icon: Plane,
			toggle: () => patchSettings({ wifi: !settings.wifi })
		},
		{
			id: "night",
			label: "Luz nocturna",
			on: settings.nightLight,
			icon: Moon,
			toggle: () => patchSettings({ nightLight: !settings.nightLight })
		},
		{
			id: "tablet",
			label: "Tableta",
			on: false,
			icon: BatteryFull,
			toggle: () => {}
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "win-flyout-enter absolute right-0 bottom-taskbar z-50 flex h-[min(480px,calc(100%-var(--height-taskbar)))] w-[min(360px,100%)] flex-col bg-win-start text-win-start-fg shadow-[var(--shadow-flyout)]",
		onPointerDown: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-win-md",
					children: "Centro de actividades"
				}), notif.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-win-xs text-win-accent",
					onClick: clearNotifs,
					children: "Borrar todo"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "win-scroll flex-1 overflow-y-auto px-3",
				children: notif.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-10 text-center text-win-sm text-win-start-muted",
					children: "No hay notificaciones nuevas"
				}) : notif.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "mb-2 w-full bg-white/8 p-3 text-left hover:bg-white/12",
					onClick: () => openApp("mail"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-win-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-3.5" }),
							" ",
							n.title
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-win-xs text-win-start-muted",
						children: n.body
					})]
				}, n.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-1 p-3",
				children: tiles.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: t.toggle,
					className: cn("flex h-16 flex-col items-start justify-between p-2 text-left text-win-xs", t.on ? "text-white" : "bg-white/10 text-win-start-muted"),
					style: t.on ? { background: settings.accent } : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-4" }), t.label]
				}, t.id))
			})
		]
	});
}
function VolumeFlyout() {
	const { settings, patchSettings } = useWinStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "win-flyout-enter absolute right-16 bottom-taskbar z-50 flex w-72 items-center gap-3 bg-win-start px-4 py-3 text-win-start-fg shadow-[var(--shadow-flyout)]",
		onPointerDown: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4 shrink-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 100,
				value: settings.volume,
				onChange: (e) => patchSettings({ volume: Number(e.target.value) }),
				className: "w-full accent-[var(--color-win-accent)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-8 text-right text-win-sm tabular-nums",
				children: settings.volume
			})
		]
	});
}
function NetworkFlyout() {
	const { settings, patchSettings } = useWinStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "win-flyout-enter absolute right-24 bottom-taskbar z-50 w-72 bg-win-start p-3 text-win-start-fg shadow-[var(--shadow-flyout)]",
		onPointerDown: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-win-sm",
			children: "Red e Internet"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex w-full items-center gap-3 px-2 py-2 text-left hover:bg-win-hover",
			onClick: () => patchSettings({ wifi: !settings.wifi }),
			children: [settings.wifi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-win-md",
				children: settings.wifi ? "Wi-Fi" : "Wi-Fi desactivado"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-win-xs text-win-start-muted",
				children: settings.wifi ? "Conectado · Red simulada" : "Sin conexión"
			})] })]
		})]
	});
}
var PINNED = [
	"edge",
	"explorer",
	"store",
	"mail"
];
function Taskbar() {
	const { panel, setPanel, windows, restoreOrMin, setCtx, settings } = useWinStore();
	const now = useNow(1e3);
	const clock = now ? formatClock(now) : null;
	const extra = [...new Set(windows.map((w) => w.appId))].filter((id) => !PINNED.includes(id));
	const shown = [...PINNED, ...extra];
	const topZ = Math.max(0, ...windows.filter((w) => !w.min).map((w) => w.z));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		panel === "start" || panel === "power" || panel === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartMenu, {}) : null,
		panel === "search" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPanel, {}) : null,
		panel === "calendar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarFlyout, {}) : null,
		panel === "action" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionCenter, {}) : null,
		panel === "volume" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeFlyout, {}) : null,
		panel === "network" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkFlyout, {}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-0 bottom-0 left-0 z-40 flex h-taskbar items-stretch bg-win-taskbar/90 text-win-taskbar-fg backdrop-blur-md select-none",
			onPointerDown: (e) => e.stopPropagation(),
			onContextMenu: (e) => {
				e.preventDefault();
				e.stopPropagation();
				setCtx({
					x: e.clientX,
					y: e.clientY,
					kind: "taskbar"
				});
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Inicio",
					className: cn("grid w-12 place-items-center hover:bg-win-hover", panel === "start" && "bg-win-hover"),
					onClick: () => setPanel(panel === "start" ? null : "start"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowsLogo, { size: 16 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: cn("win-search-box flex w-56 items-center gap-2 bg-white px-3 text-win-md text-black", panel === "search" && "ring-2 ring-win-accent"),
					style: { background: panel === "search" ? "#fff" : "#ccc" },
					onClick: () => setPanel(panel === "search" ? null : "search"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 text-black/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "win-task-label text-black/70",
						children: "Escribe aquí para buscar"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid w-10 place-items-center hover:bg-win-hover sm:hidden",
					"aria-label": "Buscar",
					onClick: () => setPanel(panel === "search" ? null : "search"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid w-10 place-items-center hover:bg-win-hover",
					title: "Vista de tareas",
					onClick: () => {
						const vis = windows.filter((w) => !w.min);
						if (vis.length) useWinStore.getState().minimize(vis[0].id);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-w-0 flex-1 items-stretch overflow-hidden",
					children: shown.map((id) => {
						const wins = windows.filter((w) => w.appId === id);
						const active = wins.some((w) => w.z === topZ && !w.min);
						const open = wins.length > 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							title: APPS[id].name,
							className: cn("relative grid w-12 shrink-0 place-items-center hover:bg-win-hover", active && "bg-white/12"),
							onClick: () => restoreOrMin(id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
								id,
								size: 24
							}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute bottom-0 h-0.5",
								style: {
									width: active ? 22 : 12,
									background: active ? settings.accent : "rgb(255 255 255 / 55%)"
								}
							}) : null]
						}, id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-stretch",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("grid w-8 place-items-center hover:bg-win-hover", panel === "network" && "bg-win-hover"),
							onClick: () => setPanel(panel === "network" ? null : "network"),
							"aria-label": "Red",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("grid w-8 place-items-center hover:bg-win-hover", panel === "volume" && "bg-win-hover"),
							onClick: () => setPanel(panel === "volume" ? null : "volume"),
							"aria-label": "Volumen",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid w-8 place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatteryFull, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: cn("flex flex-col items-end justify-center px-2 text-right text-win-xs leading-tight tabular-nums hover:bg-win-hover", panel === "calendar" && "bg-win-hover"),
							onClick: () => setPanel(panel === "calendar" ? null : "calendar"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: clock?.time ?? "" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: clock?.date ?? "" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("grid w-10 place-items-center hover:bg-win-hover", panel === "action" && "bg-win-hover"),
							onClick: () => setPanel(panel === "action" ? null : "action"),
							"aria-label": "Centro de actividades",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "w-1.5 hover:bg-win-hover",
							title: "Mostrar escritorio",
							onClick: () => {
								const { windows: ws, minimize } = useWinStore.getState();
								ws.filter((w) => !w.min).forEach((w) => minimize(w.id));
							}
						})
					]
				})
			]
		})
	] });
}
function ContextMenu() {
	const { ctx, setCtx, openApp, createFolder, patchSettings, settings } = useWinStore();
	if (!ctx) return null;
	const items = ctx.kind === "desktop" ? [
		{
			label: "Ver",
			fn: () => {}
		},
		{
			label: "Ordenar por",
			fn: () => {}
		},
		{
			label: "Actualizar",
			fn: () => {}
		},
		{
			label: "Nuevo · Carpeta",
			fn: () => createFolder("desktop"),
			sep: true
		},
		{
			label: "Personalizar",
			fn: () => openApp("settings", { page: "personalize" }),
			sep: true
		},
		{
			label: "Configuración de pantalla",
			fn: () => openApp("settings", { page: "system" })
		},
		{
			label: settings.darkWindows ? "Tema claro de ventanas" : "Tema oscuro de ventanas",
			fn: () => patchSettings({ darkWindows: !settings.darkWindows })
		}
	] : ctx.kind === "icon" ? [
		{
			label: "Abrir",
			fn: () => ctx.targetId && openApp(ctx.targetId)
		},
		{
			label: "Anclar a Inicio",
			fn: () => {}
		},
		{
			label: "Propiedades",
			fn: () => openApp("winver"),
			sep: true
		}
	] : ctx.kind === "taskbar" ? [
		{
			label: "Mostrar escritorio",
			fn: () => {
				const { windows, minimize } = useWinStore.getState();
				windows.filter((w) => !w.min).forEach((w) => minimize(w.id));
			}
		},
		{
			label: "Administrador de tareas",
			fn: () => openApp("cmd")
		},
		{
			label: "Configuración de la barra de tareas",
			fn: () => openApp("settings")
		}
	] : [{
		label: "Abrir",
		fn: () => {}
	}, {
		label: "Eliminar",
		fn: () => {}
	}];
	const x = Math.min(ctx.x, typeof window !== "undefined" ? window.innerWidth - 220 : ctx.x);
	const y = Math.min(ctx.y, typeof window !== "undefined" ? window.innerHeight - 280 : ctx.y);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed z-[80] min-w-52 border border-black/20 bg-win-menu py-1 text-win-menu-fg shadow-[var(--shadow-menu)]",
		style: {
			left: x,
			top: y
		},
		onPointerDown: (e) => e.stopPropagation(),
		children: [items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [it.sep ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1 h-px bg-black/10" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "block w-full px-7 py-1.5 text-left text-win-md hover:bg-win-accent hover:text-white",
			onClick: () => {
				it.fn();
				setCtx(null);
			},
			children: it.label
		})] }, it.label)), ctx.kind === "icon" && ctx.targetId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "sr-only",
			children: APPS[ctx.targetId]?.name
		}) : null]
	});
}
var HANDLES = [
	{
		dir: "n",
		className: "top-0 right-2 left-2 h-1 cursor-n-resize"
	},
	{
		dir: "s",
		className: "right-2 bottom-0 left-2 h-1 cursor-s-resize"
	},
	{
		dir: "e",
		className: "top-2 right-0 bottom-2 w-1 cursor-e-resize"
	},
	{
		dir: "w",
		className: "top-2 bottom-2 left-0 w-1 cursor-w-resize"
	},
	{
		dir: "ne",
		className: "top-0 right-0 size-2 cursor-ne-resize"
	},
	{
		dir: "nw",
		className: "top-0 left-0 size-2 cursor-nw-resize"
	},
	{
		dir: "se",
		className: "right-0 bottom-0 size-2 cursor-se-resize"
	},
	{
		dir: "sw",
		className: "bottom-0 left-0 size-2 cursor-sw-resize"
	}
];
function WindowFrame({ win, children, toolbar }) {
	const { closeWindow, minimize, toggleMax, focus, moveWindow, resizeWindow, windows, settings } = useWinStore();
	const topZ = Math.max(0, ...windows.filter((w) => !w.min).map((w) => w.z));
	const active = win.z === topZ && !win.min;
	const sticky = win.appId === "sticky";
	const dark = settings.darkWindows && !sticky;
	const drag = (0, import_react.useRef)(null);
	function onTitleDown(e) {
		if (e.target.closest("[data-caption]")) return;
		focus(win.id);
		if (e.button !== 0) return;
		drag.current = {
			kind: "move",
			sx: e.clientX,
			sy: e.clientY,
			ox: win.x,
			oy: win.y,
			ow: win.w,
			oh: win.h
		};
		e.currentTarget.setPointerCapture(e.pointerId);
	}
	function onMove(e) {
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
					sy: e.clientY
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
	function onResizeDown(dir, e) {
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
			oh: win.h
		};
		e.currentTarget.setPointerCapture(e.pointerId);
	}
	if (win.min) return null;
	const style = win.max ? {
		top: 0,
		left: 0,
		width: "100%",
		height: "calc(100% - var(--spacing-taskbar))",
		zIndex: win.z
	} : {
		top: win.y,
		left: win.x,
		width: win.w,
		height: win.h,
		zIndex: win.z
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("win-window win-window-enter absolute flex flex-col overflow-hidden", win.max ? "shadow-none" : "shadow-[var(--shadow-win)]", sticky ? "bg-[#fff475] text-[#3a3200]" : dark ? "bg-[#2b2b2b] text-white" : "bg-win-window text-win-window-fg"),
		style,
		onPointerDown: () => focus(win.id),
		onContextMenu: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex h-titlebar shrink-0 items-center select-none", sticky ? "bg-[#fff475]" : dark ? "bg-[#2b2b2b]" : "bg-win-caption", !active && "opacity-80"),
				onPointerDown: onTitleDown,
				onPointerMove: onMove,
				onPointerUp: onUp,
				onDoubleClick: () => {
					if (!sticky) toggleMax(win.id);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-2 flex items-center gap-2 overflow-hidden pl-1 text-win-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
						id: win.appId,
						size: 14
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: win.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-auto flex h-full",
					"data-caption": true,
					children: [!sticky ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Minimizar",
						className: "grid h-full w-caption place-items-center hover:bg-black/8",
						onClick: () => minimize(win.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "10",
							height: "10",
							viewBox: "0 0 10 10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M1 5h8",
								stroke: "currentColor",
								strokeWidth: "1"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": win.max ? "Restaurar" : "Maximizar",
						className: "grid h-full w-caption place-items-center hover:bg-black/8",
						onClick: () => toggleMax(win.id),
						children: win.max ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "10",
							height: "10",
							viewBox: "0 0 10 10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M2.5 3.5h5v5h-5zM3.5 2.5h5v5",
								fill: "none",
								stroke: "currentColor"
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "10",
							height: "10",
							viewBox: "0 0 10 10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "1.5",
								y: "1.5",
								width: "7",
								height: "7",
								fill: "none",
								stroke: "currentColor"
							})
						})
					})] }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Cerrar",
						className: "grid h-full w-caption place-items-center hover:bg-win-close hover:text-win-close-fg",
						onClick: () => closeWindow(win.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "10",
							height: "10",
							viewBox: "0 0 10 10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M2 2l6 6M8 2l-6 6",
								stroke: "currentColor",
								strokeWidth: "1.1"
							})
						})
					})]
				})]
			}),
			toolbar,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 flex-1 overflow-hidden",
				children
			}),
			!win.max && HANDLES.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute z-10", h.className),
				onPointerDown: (e) => onResizeDown(h.dir, e),
				onPointerMove: onMove,
				onPointerUp: onUp
			}, h.dir)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: APPS[win.appId].name
			})
		]
	});
}
function fmt(n) {
	if (n === "Error") return n;
	const x = Number(n);
	if (!Number.isFinite(x)) return "Error";
	const s = String(x);
	return s.length > 12 ? x.toExponential(6) : s;
}
function CalculatorApp() {
	const [cur, setCur] = (0, import_react.useState)("0");
	const [acc, setAcc] = (0, import_react.useState)(null);
	const [op, setOp] = (0, import_react.useState)(null);
	const [fresh, setFresh] = (0, import_react.useState)(true);
	function input(d) {
		setCur((c) => {
			if (fresh) {
				setFresh(false);
				return d === "." ? "0." : d;
			}
			if (d === "." && c.includes(".")) return c;
			if (c === "0" && d !== ".") return d;
			return c + d;
		});
	}
	function apply(nextOp) {
		const n = Number(cur);
		if (acc === null || op === null) setAcc(n);
		else {
			let r = acc;
			if (op === "+") r += n;
			else if (op === "−") r -= n;
			else if (op === "×") r *= n;
			else if (op === "÷") r = n === 0 ? NaN : r / n;
			setAcc(r);
			setCur(fmt(String(r)));
		}
		setOp(nextOp);
		setFresh(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-[#e6e6e6] text-win-window-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pt-3 text-win-sm text-win-window-muted",
				children: "Estándar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-20 items-end justify-end px-4 text-4xl font-light tabular-nums",
				children: cur
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid min-h-0 flex-1 grid-cols-4 gap-px bg-[#d0d0d0] p-px",
				children: [
					{
						l: "%",
						fn: () => setCur(fmt(String(Number(cur) / 100)))
					},
					{
						l: "CE",
						fn: () => setCur("0")
					},
					{
						l: "C",
						fn: () => {
							setCur("0");
							setAcc(null);
							setOp(null);
							setFresh(true);
						}
					},
					{
						l: "⌫",
						fn: () => setCur((c) => c.length <= 1 || fresh ? "0" : c.slice(0, -1))
					},
					{
						l: "1/x",
						fn: () => setCur(fmt(String(1 / Number(cur))))
					},
					{
						l: "x²",
						fn: () => setCur(fmt(String(Number(cur) ** 2)))
					},
					{
						l: "√",
						fn: () => setCur(fmt(String(Math.sqrt(Number(cur)))))
					},
					{
						l: "÷",
						fn: () => apply("÷"),
						op: true
					},
					{
						l: "7",
						fn: () => input("7")
					},
					{
						l: "8",
						fn: () => input("8")
					},
					{
						l: "9",
						fn: () => input("9")
					},
					{
						l: "×",
						fn: () => apply("×"),
						op: true
					},
					{
						l: "4",
						fn: () => input("4")
					},
					{
						l: "5",
						fn: () => input("5")
					},
					{
						l: "6",
						fn: () => input("6")
					},
					{
						l: "−",
						fn: () => apply("−"),
						op: true
					},
					{
						l: "1",
						fn: () => input("1")
					},
					{
						l: "2",
						fn: () => input("2")
					},
					{
						l: "3",
						fn: () => input("3")
					},
					{
						l: "+",
						fn: () => apply("+"),
						op: true
					},
					{
						l: "±",
						fn: () => setCur((c) => fmt(String(-Number(c))))
					},
					{
						l: "0",
						fn: () => input("0")
					},
					{
						l: ".",
						fn: () => input(".")
					},
					{
						l: "=",
						fn: () => apply(null),
						eq: true
					}
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: k.fn,
					className: cn("text-win-lg hover:brightness-95", k.eq ? "bg-win-accent text-white" : k.op ? "bg-[#f0f0f0]" : "bg-white"),
					children: k.l
				}, k.l))
			})
		]
	});
}
var BANNER = `Microsoft Windows [Versión 10.0.19045.3803]
(c) Microsoft Corporation. Todos los derechos reservados.
`;
function CmdApp() {
	const { files, openApp, setPhase, createFolder } = useWinStore();
	const [cwd, setCwd] = (0, import_react.useState)("user");
	const [lines, setLines] = (0, import_react.useState)([BANNER, ""]);
	const [input, setInput] = (0, import_react.useState)("");
	const end = (0, import_react.useRef)(null);
	const box = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		end.current?.scrollIntoView();
	}, [lines]);
	function prompt() {
		return `C:\\${pathOf(files, cwd).map((n) => n.name).join("\\")}>`;
	}
	function run(raw) {
		const line = raw.trim();
		const out = [`${prompt()}${raw}`];
		const [cmd, ...rest] = line.split(/\s+/);
		const arg = rest.join(" ");
		const c = (cmd ?? "").toLowerCase();
		if (!c) {} else if (c === "help") out.push("help        Lista de comandos", "dir         Listar directorio", "cd          Cambiar carpeta", "cls         Borrar pantalla", "echo        Escribir texto", "type        Mostrar archivo", "mkdir       Crear carpeta", "tree        Árbol de carpetas", "ver         Versión", "date / time Fecha y hora", "whoami      Usuario actual", "systeminfo  Información del sistema", "ipconfig    Red simulada", "start       Abrir aplicación", "notepad     Bloc de notas", "winver      Acerca de Windows", "color       Color de consola (eco)", "bsod        Pantalla azul (easter egg)", "exit        Cerrar");
		else if (c === "cls") {
			setLines([""]);
			setInput("");
			return;
		} else if (c === "dir") {
			const kids = childrenOf(files, cwd);
			out.push(` Directorio de ${prompt().slice(0, -1)}`, "");
			for (const k of kids) {
				const mark = k.kind === "folder" ? "<DIR>" : "     ";
				out.push(`${new Date(k.modified).toLocaleDateString("es-ES")}  ${mark}  ${k.name}`);
			}
			out.push(`         ${kids.length} elementos`);
		} else if (c === "cd") {
			if (!arg || arg === "\\") setCwd("c");
			else if (arg === "..") {
				const node = files.find((f) => f.id === cwd);
				if (node?.parentId) setCwd(node.parentId);
			} else {
				const hit = childrenOf(files, cwd).find((k) => k.name.toLowerCase() === arg.toLowerCase() && k.kind === "folder");
				if (hit) setCwd(hit.id);
				else out.push("El sistema no puede encontrar la ruta especificada.");
			}
		} else if (c === "echo") out.push(arg);
		else if (c === "type") {
			const hit = childrenOf(files, cwd).find((k) => k.name.toLowerCase() === arg.toLowerCase());
			out.push(hit?.content ?? "No se encuentra el archivo.");
		} else if (c === "mkdir" && arg) {
			createFolder(cwd, arg);
			out.push(`Carpeta creada: ${arg}`);
		} else if (c === "tree") {
			function walk(id, prefix) {
				const kids = childrenOf(files, id);
				kids.forEach((k, i) => {
					const last = i === kids.length - 1;
					out.push(`${prefix}${last ? "└─" : "├─"} ${k.name}`);
					if (k.kind === "folder") walk(k.id, prefix + (last ? "   " : "│  "));
				});
			}
			walk(cwd, "");
		} else if (c === "ver") out.push("Microsoft Windows [Versión 10.0.19045.3803]");
		else if (c === "date") out.push(`La fecha actual es: ${(/* @__PURE__ */ new Date()).toLocaleDateString("es-ES")}`);
		else if (c === "time") out.push(`La hora actual es: ${(/* @__PURE__ */ new Date()).toLocaleTimeString("es-ES")}`);
		else if (c === "whoami") out.push("pc-win10\\usuario");
		else if (c === "hostname") out.push("PC-WIN10");
		else if (c === "systeminfo") out.push("Nombre del host:                 PC-WIN10", "Nombre del SO:                   Microsoft Windows 10 Pro", "Versión del SO:                  10.0.19045", "Fabricante:                      Simulador Win10", "Procesador:                      Grok Virtual CPU", "Memoria física total:            16.384 MB");
		else if (c === "ipconfig") out.push("Adaptador de LAN inalámbrica Wi-Fi:", "   Dirección IPv4. . . . . . . . : 192.168.1.42", "   Máscara de subred . . . . . . : 255.255.255.0", "   Puerta de enlace predeterminada: 192.168.1.1");
		else if (c === "start" || c === "notepad" || c === "calc" || c === "mspaint" || c === "explorer") {
			const app = c === "start" && arg ? void 0 : {
				notepad: "notepad",
				calc: "calculator",
				mspaint: "paint",
				explorer: "explorer",
				start: "edge"
			}[c];
			if (app) openApp(app);
			else if (arg) openApp("edge");
			out.push("Iniciando…");
		} else if (c === "winver") openApp("winver");
		else if (c === "bsod") {
			setPhase("bsod");
			return;
		} else if (c === "exit") {
			const { windows, closeWindow } = useWinStore.getState();
			const w = windows.find((x) => x.appId === "cmd");
			if (w) closeWindow(w.id);
			return;
		} else if (c === "color") out.push("Color de consola actualizado (simulado).");
		else out.push(`"${cmd}" no se reconoce como un comando interno o externo.`);
		out.push("");
		setLines((l) => [...l, ...out]);
		setInput("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full w-full flex-col bg-black p-2 text-left font-mono text-win-sm leading-relaxed text-[#cccccc]",
		onClick: () => box.current?.focus(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "win-scroll min-h-0 flex-1 overflow-auto whitespace-pre-wrap",
			children: [
				lines.join("\n"),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: prompt() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: box,
						value: input,
						autoFocus: true,
						onChange: (e) => setInput(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter") run(input);
						},
						className: "min-w-0 flex-1 border-0 bg-transparent outline-none",
						spellCheck: false
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: end })
			]
		})
	});
}
var ARTICLES = {
	"https://windows.local/welcome": {
		title: "Novedades de Windows 10",
		body: "El menú Inicio combina la lista clásica de aplicaciones con los paneles dinámicos. Ancla lo que más uses y personaliza el color de acento desde Configuración."
	},
	"https://windows.local/tips": {
		title: "Consejos de productividad",
		body: "Arrastra las ventanas a los bordes para acoplarlas. Usa la búsqueda de la barra de tareas para encontrar aplicaciones y documentos. El Bloc de notas y Paint guardan en tus carpetas."
	},
	"https://microsoft.local": {
		title: "Microsoft",
		body: "Microsoft Edge, Office y Windows. Este es un sitio simulado dentro del emulador. No hay conexión real a internet."
	}
};
function EdgeApp() {
	const openApp = useWinStore((s) => s.openApp);
	const [page, setPage] = (0, import_react.useState)({
		url: "https://ntp.msedge.net",
		title: "Nueva pestaña",
		kind: "home"
	});
	const [addr, setAddr] = (0, import_react.useState)(page.url);
	const [hist, setHist] = (0, import_react.useState)([page]);
	const [hi, setHi] = (0, import_react.useState)(0);
	function go(next) {
		const h = hist.slice(0, hi + 1);
		h.push(next);
		setHist(h);
		setHi(h.length - 1);
		setPage(next);
		setAddr(next.url);
	}
	function submitUrl(raw) {
		const v = raw.trim();
		if (!v) return;
		if (ARTICLES[v]) {
			go({
				url: v,
				title: ARTICLES[v].title,
				kind: "article"
			});
			return;
		}
		if (v.startsWith("http") || v.includes(".")) {
			go({
				url: v.startsWith("http") ? v : `https://${v}`,
				title: "Sin conexión",
				kind: "error"
			});
			return;
		}
		go({
			url: `https://www.bing.com/search?q=${encodeURIComponent(v)}`,
			title: `${v} - Búsqueda`,
			kind: "search",
			q: v
		});
	}
	const q = (page.q ?? "").toLowerCase();
	const appHits = Object.keys(APPS).filter((id) => APPS[id].name.toLowerCase().includes(q));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-white text-win-window-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-9 items-center gap-1 bg-[#d6d6d6] px-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-full items-center gap-2 bg-white px-3 text-win-sm",
					children: page.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-7 place-items-center hover:bg-black/8",
					"aria-label": "Nueva pestaña",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 bg-[#e6e6e6] px-2 py-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-7 place-items-center",
						onClick: () => hi > 0 && (setHi(hi - 1), setPage(hist[hi - 1]), setAddr(hist[hi - 1].url)),
						"aria-label": "Atrás",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-7 place-items-center",
						onClick: () => hi < hist.length - 1 && (setHi(hi + 1), setPage(hist[hi + 1]), setAddr(hist[hi + 1].url)),
						"aria-label": "Adelante",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-7 place-items-center",
						"aria-label": "Actualizar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex min-w-0 flex-1 items-center bg-white px-2",
						onSubmit: (e) => {
							e.preventDefault();
							submitUrl(addr);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: addr,
							onChange: (e) => setAddr(e.target.value),
							className: "h-7 min-w-0 flex-1 text-win-sm outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 text-win-window-muted" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mx-1 size-4" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "win-scroll-light min-h-0 flex-1 overflow-auto",
				children: [
					page.kind === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl px-6 py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-center text-3xl font-light text-win-accent",
								children: "Microsoft Edge"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
								className: "mt-6",
								onSubmit: (e) => {
									e.preventDefault();
									const fd = new FormData(e.currentTarget);
									submitUrl(String(fd.get("q") ?? ""));
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "q",
									placeholder: "Buscar o escribir una dirección",
									className: "h-11 w-full border border-black/15 px-4 text-win-md shadow-[var(--shadow-menu)] outline-none"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid grid-cols-3 gap-4 sm:grid-cols-6",
								children: [
									{
										id: "explorer",
										label: "Archivos"
									},
									{
										id: "store",
										label: "Store"
									},
									{
										id: "mail",
										label: "Correo"
									},
									{
										id: "settings",
										label: "Ajustes"
									}
								].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "flex flex-col items-center gap-2 text-win-xs",
									onClick: () => openApp(l.id),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
										id: l.id,
										size: 40
									}), l.label]
								}, l.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-3 sm:grid-cols-2",
								children: Object.entries(ARTICLES).map(([url, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "border border-black/10 p-4 text-left hover:bg-black/4",
									onClick: () => go({
										url,
										title: a.title,
										kind: "article"
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-win-md",
										children: a.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 line-clamp-2 text-win-xs text-win-window-muted",
										children: a.body
									})]
								}, url))
							})
						]
					}) : null,
					page.kind === "article" && ARTICLES[page.url] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "mx-auto max-w-xl px-6 py-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-light",
							children: ARTICLES[page.url].title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-win-md leading-relaxed",
							children: ARTICLES[page.url].body
						})]
					}) : null,
					page.kind === "search" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-win-sm text-win-window-muted",
								children: [
									"Resultados de Bing (simulados) para «",
									page.q,
									"»"
								]
							}),
							appHits.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "mt-4 flex w-full items-center gap-3 text-left",
								onClick: () => openApp(id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
									id,
									size: 28
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-win-accent",
									children: APPS[id].name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-win-xs text-win-window-muted",
									children: "Aplicación de este equipo"
								})] })]
							}, id)),
							Object.entries(ARTICLES).filter(([, a]) => a.title.toLowerCase().includes(q) || a.body.toLowerCase().includes(q)).map(([url, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "mt-4 block text-left",
								onClick: () => go({
									url,
									title: a.title,
									kind: "article"
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-win-accent",
									children: a.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-win-xs text-win-window-muted",
									children: [a.body.slice(0, 120), "…"]
								})]
							}, url)),
							appHits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-win-sm",
								children: "No hay más resultados en este equipo."
							}) : null
						]
					}) : null,
					page.kind === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-10 py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-light",
								children: "Hmmm… no podemos abrir esta página"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-win-sm text-win-window-muted",
								children: "Este navegador es un simulador y no se conecta a Internet. Prueba a buscar o abre una de las páginas locales desde la pestaña nueva."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-6 bg-win-accent px-4 py-1.5 text-win-sm text-white",
								onClick: () => go({
									url: "https://ntp.msedge.net",
									title: "Nueva pestaña",
									kind: "home"
								}),
								children: "Volver al inicio"
							})
						]
					}) : null
				]
			})
		]
	});
}
function ExplorerApp({ win }) {
	const { files, openApp, createFolder, trashNode } = useWinStore();
	const initial = win.payload?.folderId ?? "c";
	const thisPc = win.payload?.view === "this-pc" || initial === "c";
	const [folderId, setFolderId] = (0, import_react.useState)(thisPc ? "c" : initial);
	const [hist, setHist] = (0, import_react.useState)([thisPc ? "c" : initial]);
	const [hi, setHi] = (0, import_react.useState)(0);
	const [q, setQ] = (0, import_react.useState)("");
	const [view, setView] = (0, import_react.useState)("icons");
	const [selected, setSelected] = (0, import_react.useState)(null);
	function go(id) {
		const next = hist.slice(0, hi + 1);
		next.push(id);
		setHist(next);
		setHi(next.length - 1);
		setFolderId(id);
		setSelected(null);
	}
	function back() {
		if (hi <= 0) return;
		setHi(hi - 1);
		setFolderId(hist[hi - 1]);
	}
	function forward() {
		if (hi >= hist.length - 1) return;
		setHi(hi + 1);
		setFolderId(hist[hi + 1]);
	}
	const crumbs = pathOf(files, folderId);
	const items = (0, import_react.useMemo)(() => {
		const kids = childrenOf(files, folderId);
		if (!q.trim()) return kids;
		const n = q.toLowerCase();
		return kids.filter((k) => k.name.toLowerCase().includes(n));
	}, [
		files,
		folderId,
		q
	]);
	function openNode(id) {
		const node = files.find((f) => f.id === id);
		if (!node) return;
		if (node.kind === "folder") {
			go(node.id);
			return;
		}
		if (node.ext === "txt" || node.ext === "md") openApp("notepad", {
			fileId: node.id,
			title: node.name
		});
		else if (node.ext === "svg" || node.ext === "png" || node.ext === "jpg") openApp("photos", { fileId: node.id });
	}
	const showThisPc = folderId === "c";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full bg-win-window text-win-window-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "win-scroll-light hidden w-48 shrink-0 overflow-y-auto border-r border-black/10 bg-[#f5f5f5] py-2 text-win-sm sm:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 py-1 text-win-xs text-win-window-muted",
					children: "Acceso rápido"
				}),
				QUICK_ACCESS.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex w-full items-center gap-2 px-3 py-1.5 text-left hover:bg-black/6",
					onClick: () => go(q.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconFolder, { size: 16 }),
						" ",
						q.name
					]
				}, q.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 px-3 py-1 text-win-xs text-win-window-muted",
					children: "Este equipo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex w-full items-center gap-2 px-3 py-1.5 text-left hover:bg-black/6",
					onClick: () => go("c"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconDrive, { size: 16 }), " Disco local (C:)"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 border-b border-black/10 px-2 py-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-8 place-items-center hover:bg-black/6",
							onClick: back,
							"aria-label": "Atrás",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-8 place-items-center hover:bg-black/6",
							onClick: forward,
							"aria-label": "Adelante",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-8 place-items-center hover:bg-black/6",
							"aria-label": "Subir",
							onClick: () => {
								const p = files.find((f) => f.id === folderId)?.parentId;
								if (p) go(p);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex min-w-0 flex-1 items-center overflow-hidden border border-black/15 bg-white px-2 text-win-sm",
							children: crumbs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex shrink-0 items-center hover:underline",
								onClick: () => go(c.id),
								children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3 opacity-50" }) : null, c.name]
							}, c.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative hidden w-40 sm:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1.5 left-2 size-3.5 text-win-window-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Buscar",
								className: "h-7 w-full border border-black/15 bg-white pr-2 pl-7 text-win-sm outline-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-8 place-items-center hover:bg-black/6",
							onClick: () => setView(view === "icons" ? "list" : "icons"),
							children: view === "icons" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid2x2, { className: "size-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "win-scroll-light min-h-0 flex-1 overflow-auto p-3",
					onContextMenu: (e) => {
						e.preventDefault();
						createFolder(folderId);
					},
					children: showThisPc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-win-sm text-win-window-muted",
							children: "Carpetas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
							children: THIS_PC_FOLDERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex items-center gap-3 p-2 text-left hover:bg-win-accent/15",
								onDoubleClick: () => go(f.id),
								onClick: () => go(f.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconFolder, { size: 40 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-win-sm",
									children: f.name
								})]
							}, f.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 mb-2 text-win-sm text-win-window-muted",
							children: "Dispositivos y unidades"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex items-center gap-3 p-2 text-left hover:bg-win-accent/15",
							onClick: () => go("windows"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconDrive, { size: 40 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-win-sm",
								children: "Disco local (C:)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-win-xs text-win-window-muted",
								children: "Windows · 118 GB libres de 256 GB"
							})] })]
						})
					] }) : view === "icons" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1",
						children: [items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-24 flex-col items-center gap-1 p-2 text-center text-win-xs hover:bg-win-accent/15",
							"data-selected": selected === n.id,
							onClick: () => setSelected(n.id),
							onDoubleClick: () => openNode(n.id),
							children: [n.kind === "folder" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconFolder, { size: 40 }) : n.ext === "svg" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
								id: "photos",
								size: 40
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconFile, { size: 40 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "line-clamp-2 w-full",
								children: n.name
							})]
						}, n.id)), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "p-8 text-win-sm text-win-window-muted",
							children: "Esta carpeta está vacía."
						}) : null]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-win-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-win-window-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "font-medium",
									children: "Nombre"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "font-medium",
									children: "Modificado"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "font-medium",
									children: "Tamaño"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "cursor-pointer hover:bg-win-accent/15",
							onClick: () => setSelected(n.id),
							onDoubleClick: () => openNode(n.id),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "flex items-center gap-2 py-1",
									children: [n.kind === "folder" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconFolder, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconFile, { size: 16 }), n.name]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: new Date(n.modified).toLocaleString("es-ES") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: formatSize(n) })
							]
						}, n.id)) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-6 items-center border-t border-black/10 px-3 text-win-xs text-win-window-muted",
					children: [
						items.length,
						" elementos",
						selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "ml-auto hover:underline",
							onClick: () => selected && trashNode(selected),
							children: "Eliminar"
						}) : null
					]
				})
			]
		})]
	});
}
function NotepadApp({ win }) {
	const { files, writeFile, createFile, closeWindow } = useWinStore();
	const fileId = win.payload?.fileId;
	const file = files.find((f) => f.id === fileId);
	const [text, setText] = (0, import_react.useState)(file?.content ?? "");
	const [name, setName] = (0, import_react.useState)(file?.name ?? "Sin título");
	const [menu, setMenu] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (file) setText(file.content ?? "");
	}, [file?.id]);
	function save() {
		if (file) {
			writeFile(file.id, text);
			return;
		}
		const id = createFile("documents", name.endsWith(".txt") ? name : `${name}.txt`, "txt", text);
		win.payload = {
			...win.payload ?? {},
			fileId: id
		};
	}
	const lines = text.split("\n").length;
	const cols = text.length - (text.lastIndexOf("\n") + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-white text-win-window-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-6 items-center bg-[#f0f0f0] text-win-sm",
				children: [
					"Archivo",
					"Edición",
					"Formato",
					"Ver",
					"Ayuda"
				].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "px-3 py-0.5 hover:bg-win-accent hover:text-white",
							onClick: () => setMenu(menu === m ? null : m),
							children: m
						}),
						menu === m && m === "Archivo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-full left-0 z-10 w-44 border border-black/15 bg-white py-1 shadow-[var(--shadow-menu)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "block w-full px-4 py-1 text-left hover:bg-win-accent hover:text-white",
									onClick: () => {
										setText("");
										setName("Sin título");
										setMenu(null);
									},
									children: "Nuevo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "block w-full px-4 py-1 text-left hover:bg-win-accent hover:text-white",
									onClick: () => {
										save();
										setMenu(null);
									},
									children: "Guardar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "block w-full px-4 py-1 text-left hover:bg-win-accent hover:text-white",
									onClick: () => {
										closeWindow(win.id);
										setMenu(null);
									},
									children: "Salir"
								})
							]
						}) : null,
						menu === m && m === "Ayuda" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-full left-0 z-10 w-52 border border-black/15 bg-white px-4 py-2 text-win-xs shadow-[var(--shadow-menu)]",
							children: "Bloc de notas · Simulador Win10"
						}) : null
					]
				}, m))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: text,
				onChange: (e) => setText(e.target.value),
				spellCheck: false,
				className: "min-h-0 flex-1 resize-none border-0 p-2 font-mono text-win-md leading-relaxed outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-5 items-center justify-end gap-6 border-t border-black/10 bg-[#f0f0f0] px-3 text-win-xs text-win-window-muted",
				children: [
					"Ln ",
					lines,
					", Col ",
					cols + 1,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100%" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Windows (CRLF)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "UTF-8" })
				]
			})
		]
	});
}
function StoreApp() {
	const openApp = useWinStore((s) => s.openApp);
	const featured = [
		"minesweeper",
		"paint",
		"notepad",
		"calculator",
		"photos",
		"mail"
	];
	const [got, setGot] = (0, import_react.useState)({});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "win-scroll-light h-full overflow-auto bg-[#f6f6f6] p-6 text-win-window-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-light",
				children: "Microsoft Store"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-win-sm text-win-window-muted",
				children: "Aplicaciones destacadas para este equipo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 bg-white p-4 shadow-[var(--shadow-menu)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppIcon, {
							id,
							size: 48
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-win-md",
								children: APPS[id].name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-win-xs text-win-window-muted",
								children: "Gratis · Microsoft"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "bg-win-accent px-3 py-1 text-win-sm text-white",
							onClick: () => {
								setGot((g) => ({
									...g,
									[id]: true
								}));
								openApp(id);
							},
							children: got[id] ? "Abrir" : "Obtener"
						})
					]
				}, id))
			})
		]
	});
}
function PhotosApp({ win }) {
	const pics = useWinStore((s) => s.files).filter((f) => !f.trashed && (f.ext === "svg" || f.ext === "png" || f.ext === "jpg") && (f.dataUrl || f.content));
	const [cur, setCur] = (0, import_react.useState)(win.payload?.fileId ?? pics[0]?.id ?? null);
	const pic = pics.find((p) => p.id === cur) ?? pics[0];
	const src = pic?.dataUrl ?? (pic?.content ? `data:image/svg+xml;utf8,${encodeURIComponent(pic.content)}` : "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full bg-[#1a1a1a] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "win-scroll hidden w-40 overflow-auto p-2 sm:block",
			children: pics.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("mb-2 block w-full", cur === p.id && "ring-2 ring-win-accent"),
				onClick: () => setCur(p.id),
				children: p.dataUrl || p.content ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.dataUrl ?? `data:image/svg+xml;utf8,${encodeURIComponent(p.content ?? "")}`,
					alt: p.name,
					className: "h-20 w-full object-cover"
				}) : null
			}, p.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-w-0 flex-1 items-center justify-center p-4",
			children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: pic?.name,
				className: "max-h-full max-w-full object-contain"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No hay imágenes" })
		})]
	});
}
function MailApp() {
	const { mail, markMailRead } = useWinStore();
	const [id, setId] = (0, import_react.useState)(mail[0]?.id);
	const msg = mail.find((m) => m.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full bg-white text-win-window-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "win-scroll-light w-56 shrink-0 overflow-auto border-r border-black/10 sm:w-72",
			children: mail.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn("block w-full border-b border-black/5 px-3 py-3 text-left hover:bg-black/4", id === m.id && "bg-win-accent/10"),
				onClick: () => {
					setId(m.id);
					markMailRead(m.id);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-win-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: m.unread ? "font-semibold" : "",
							children: m.from
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-win-xs text-win-window-muted",
							children: m.time
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-win-sm",
						children: m.subject
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-win-xs text-win-window-muted",
						children: m.preview
					})
				]
			}, m.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "win-scroll-light min-w-0 flex-1 overflow-auto p-6",
			children: msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-light",
					children: msg.subject
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-win-sm",
					children: [
						msg.from,
						" · ",
						msg.fromEmail
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-6 font-sans text-win-md leading-relaxed whitespace-pre-wrap",
					children: msg.body
				})
			] }) : null
		})]
	});
}
function CalendarApp() {
	const now = /* @__PURE__ */ new Date();
	const [cursor, setCursor] = (0, import_react.useState)(new Date(now.getFullYear(), now.getMonth(), 1));
	const grid = (0, import_react.useMemo)(() => {
		const y = cursor.getFullYear();
		const m = cursor.getMonth();
		const start = (new Date(y, m, 1).getDay() + 6) % 7;
		const days = new Date(y, m + 1, 0).getDate();
		const cells = [...Array(start).fill(null)];
		for (let d = 1; d <= days; d++) cells.push(d);
		while (cells.length % 7) cells.push(null);
		return cells;
	}, [cursor]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-white p-4 text-win-window-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-light capitalize",
				children: cursor.toLocaleDateString("es-ES", {
					month: "long",
					year: "numeric"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1)),
					children: "‹"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1)),
					children: "›"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid min-h-0 flex-1 grid-cols-7 grid-rows-6 gap-px bg-black/10",
			children: grid.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white p-2 text-win-sm",
				children: [d ?? "", d === now.getDate() && cursor.getMonth() === now.getMonth() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 inline-block size-2 rounded-full bg-win-accent" }) : null]
			}, i))
		})]
	});
}
function StickyApp({ win }) {
	const { stickies, updateSticky } = useWinStore();
	const id = win.payload?.stickyId ?? stickies[0]?.id;
	const note = stickies.find((s) => s.id === id);
	if (!note) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "p-3 text-win-sm",
		children: "Nota no encontrada"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		value: note.text,
		onChange: (e) => updateSticky(note.id, e.target.value),
		className: "h-full w-full resize-none border-0 bg-transparent p-3 text-win-md leading-relaxed outline-none"
	});
}
function RecycleApp() {
	const { files, restoreNode, emptyTrash } = useWinStore();
	const trash = files.filter((f) => f.trashed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-white text-win-window-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-2 border-b border-black/10 px-3 py-2 text-win-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "px-2 py-1 hover:bg-black/6",
				onClick: emptyTrash,
				disabled: !trash.length,
				children: "Vaciar papelera"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "win-scroll-light flex-1 overflow-auto p-3",
			children: trash.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "p-8 text-center text-win-sm text-win-window-muted",
				children: "La papelera de reciclaje está vacía."
			}) : trash.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex w-full items-center gap-3 px-2 py-2 text-left hover:bg-win-accent/15",
				onDoubleClick: () => restoreNode(n.id),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconFile, { size: 24 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 text-win-sm",
						children: n.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-win-xs text-win-window-muted",
						children: "Doble clic para restaurar"
					})
				]
			}, n.id))
		})]
	});
}
function WinverApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-[#f0f0f0] p-5 text-win-window-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-b border-black/15 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowsLogo, {
					size: 28,
					className: "text-win-accent"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg font-light",
					children: "Windows 10"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-win-sm leading-relaxed",
				children: [
					"Microsoft Windows",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Versión 22H2 (compilación 19045.3803)",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Simulador interactivo · no es un producto de Microsoft."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-win-xs text-win-window-muted",
				children: "Este software es una recreación web con fines demostrativos."
			})
		]
	});
}
var W = 9;
var H = 9;
var MINES = 10;
function neighbors(i) {
	const x = i % W;
	const y = Math.floor(i / W);
	const r = [];
	for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
		if (!dx && !dy) continue;
		const nx = x + dx;
		const ny = y + dy;
		if (nx >= 0 && nx < W && ny >= 0 && ny < H) r.push(ny * W + nx);
	}
	return r;
}
function plant(safe) {
	const mines = /* @__PURE__ */ new Set();
	while (mines.size < MINES) {
		const n = Math.floor(Math.random() * W * H);
		if (n !== safe) mines.add(n);
	}
	const counts = Array(81).fill(0);
	mines.forEach((m) => neighbors(m).forEach((n) => counts[n] += 1));
	return {
		mines,
		counts
	};
}
function MinesweeperApp() {
	const [mines, setMines] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [counts, setCounts] = (0, import_react.useState)(Array(81).fill(0));
	const [open, setOpen] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [flag, setFlag] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [dead, setDead] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	const won = ready && !dead && open.size === 71;
	function reveal(i) {
		if (dead || won || flag.has(i) || open.has(i)) return;
		let m = mines;
		let c = counts;
		if (!ready) {
			const p = plant(i);
			m = p.mines;
			c = p.counts;
			setMines(m);
			setCounts(c);
			setReady(true);
		}
		if (m.has(i)) {
			setDead(true);
			setOpen(/* @__PURE__ */ new Set([
				...open,
				i,
				...m
			]));
			return;
		}
		const next = new Set(open);
		const stack = [i];
		while (stack.length) {
			const cur = stack.pop();
			if (next.has(cur) || flag.has(cur)) continue;
			next.add(cur);
			if (c[cur] === 0) neighbors(cur).forEach((n) => stack.push(n));
		}
		setOpen(next);
	}
	function reset() {
		setMines(/* @__PURE__ */ new Set());
		setCounts(Array(81).fill(0));
		setOpen(/* @__PURE__ */ new Set());
		setFlag(/* @__PURE__ */ new Set());
		setDead(false);
		setReady(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col items-center bg-[#c0c0c0] p-3 text-win-window-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex w-full items-center justify-between bg-[#bdbdbd] px-2 py-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-win-md tabular-nums",
						children: String(MINES - flag.size).padStart(3, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "size-8 bg-[#ddd] text-lg",
						onClick: reset,
						"aria-label": "Nuevo",
						children: dead ? "×" : won ? "!" : "☺"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-win-md",
						children: won ? "WIN" : dead ? "---" : "000"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-9 gap-px bg-[#808080] p-px",
				children: Array.from({ length: 81 }, (_, i) => {
					const isOpen = open.has(i);
					const isMine = mines.has(i);
					const n = counts[i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("grid size-8 place-items-center text-win-sm font-bold", isOpen ? "bg-[#e0e0e0]" : "bg-[#d0d0d0] shadow-[inset_-1px_-1px_#808080,inset_1px_1px_#fff]"),
						onClick: () => reveal(i),
						onContextMenu: (e) => {
							e.preventDefault();
							if (open.has(i) || dead) return;
							const nset = new Set(flag);
							if (nset.has(i)) nset.delete(i);
							else nset.add(i);
							setFlag(nset);
						},
						children: isOpen && isMine ? "●" : isOpen && n ? n : flag.has(i) && !isOpen ? "▶" : ""
					}, i);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-win-xs text-win-window-muted",
				children: "Clic derecho: bandera"
			})
		]
	});
}
var COLORS = [
	"#000000",
	"#7f7f7f",
	"#880015",
	"#ed1c24",
	"#ff7f27",
	"#fff200",
	"#22b14c",
	"#00a2e8",
	"#3f48cc",
	"#a349a4",
	"#ffffff",
	"#c3c3c3",
	"#b97a57",
	"#ffaec9",
	"#ffc90e",
	"#efe4b0",
	"#b5e61d",
	"#99d9ea",
	"#7092be",
	"#c8bfe7"
];
function PaintApp() {
	const canvasRef = (0, import_react.useRef)(null);
	const [tool, setTool] = (0, import_react.useState)("pencil");
	const [color, setColor] = (0, import_react.useState)("#000000");
	const [size, setSize] = (0, import_react.useState)(3);
	const drawing = (0, import_react.useRef)(false);
	const last = (0, import_react.useRef)(null);
	const createFile = useWinStore((s) => s.createFile);
	const pushNotif = useWinStore((s) => s.pushNotif);
	(0, import_react.useEffect)(() => {
		const c = canvasRef.current;
		if (!c) return;
		const ctx = c.getContext("2d");
		if (!ctx) return;
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, c.width, c.height);
	}, []);
	function pos(e) {
		const r = e.currentTarget.getBoundingClientRect();
		const c = e.currentTarget;
		return {
			x: (e.clientX - r.left) / r.width * c.width,
			y: (e.clientY - r.top) / r.height * c.height
		};
	}
	function drawTo(e) {
		const ctx = canvasRef.current?.getContext("2d");
		if (!ctx || !drawing.current) return;
		const p = pos(e);
		const l = last.current ?? p;
		ctx.strokeStyle = tool === "eraser" ? "#ffffff" : color;
		ctx.lineWidth = tool === "eraser" ? size * 4 : size;
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.beginPath();
		ctx.moveTo(l.x, l.y);
		ctx.lineTo(p.x, p.y);
		ctx.stroke();
		last.current = p;
	}
	function save() {
		const c = canvasRef.current;
		if (!c) return;
		const dataUrl = c.toDataURL("image/png");
		createFile("pictures", `Dibujo ${(/* @__PURE__ */ new Date()).toLocaleTimeString("es-ES")}.png`, "png", "", dataUrl);
		pushNotif("Paint", "Imagen guardada en Imágenes");
	}
	function clear() {
		const c = canvasRef.current;
		const ctx = c?.getContext("2d");
		if (!c || !ctx) return;
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, c.width, c.height);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-[#f0f0f0]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2 border-b border-black/10 bg-white px-2 py-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "px-2 py-1 text-win-sm hover:bg-black/6",
					onClick: () => setTool("pencil"),
					children: "Lápiz"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "px-2 py-1 text-win-sm hover:bg-black/6",
					onClick: () => setTool("eraser"),
					children: "Borrador"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-1 text-win-xs",
					children: ["Grosor", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 1,
						max: 16,
						value: size,
						onChange: (e) => setSize(Number(e.target.value))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "px-2 py-1 text-win-sm hover:bg-black/6",
					onClick: clear,
					children: "Limpiar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "px-2 py-1 text-win-sm hover:bg-black/6",
					onClick: save,
					children: "Guardar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-0.5",
					children: COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": c,
						className: "size-4 border border-black/20",
						style: {
							background: c,
							outline: color === c ? "2px solid #0078d7" : void 0
						},
						onClick: () => {
							setColor(c);
							setTool("pencil");
						}
					}, c))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-auto bg-[#808080] p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				width: 900,
				height: 560,
				className: "bg-white shadow-[var(--shadow-menu)]",
				style: {
					width: "100%",
					height: "auto",
					touchAction: "none"
				},
				onPointerDown: (e) => {
					drawing.current = true;
					last.current = pos(e);
					e.currentTarget.setPointerCapture(e.pointerId);
					drawTo(e);
				},
				onPointerMove: drawTo,
				onPointerUp: () => {
					drawing.current = false;
					last.current = null;
				}
			})
		})]
	});
}
var NAV = [
	{
		id: "system",
		label: "Sistema",
		icon: Monitor,
		desc: "Pantalla, notificaciones, energía"
	},
	{
		id: "personalize",
		label: "Personalización",
		icon: Palette,
		desc: "Fondo, pantalla de bloqueo, colores"
	},
	{
		id: "accounts",
		label: "Cuentas",
		icon: User,
		desc: "Tu cuenta, correo, sincronización"
	},
	{
		id: "time",
		label: "Hora e idioma",
		icon: Clock,
		desc: "Habla, región, fecha"
	},
	{
		id: "privacy",
		label: "Privacidad",
		icon: Lock,
		desc: "Ubicación, cámara, micrófono"
	},
	{
		id: "update",
		label: "Actualización y seguridad",
		icon: Shield,
		desc: "Windows Update, recuperación"
	}
];
function SettingsApp({ win }) {
	const start = win.payload?.page ?? "home";
	const [page, setPage] = (0, import_react.useState)(start);
	const { settings, patchSettings } = useWinStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full bg-[#f9f9f9] text-win-window-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [
				page !== "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "m-3 w-fit px-2 py-1 text-win-sm text-win-accent hover:underline",
					onClick: () => setPage("home"),
					children: "← Inicio"
				}) : null,
				page === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "win-scroll-light overflow-auto p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-light",
						children: "Configuración"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-2 sm:grid-cols-2",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex items-start gap-4 p-4 text-left hover:bg-black/5",
							onClick: () => setPage(n.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, {
								className: "mt-0.5 size-8 text-win-accent",
								strokeWidth: 1.4
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-win-lg",
								children: n.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-win-sm text-win-window-muted",
								children: n.desc
							})] })]
						}, n.id))
					})]
				}) : null,
				page === "personalize" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "win-scroll-light overflow-auto p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-light",
							children: "Personalización"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 mb-2 text-win-sm",
							children: "Fondo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-2 sm:grid-cols-6",
							children: WALLPAPERS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: cn("relative h-16 overflow-hidden", settings.wallpaper === w.id && "ring-2 ring-win-accent"),
								onClick: () => patchSettings({ wallpaper: w.id }),
								title: w.name,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallpaper, { id: w.id })
							}, w.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 mb-2 text-win-sm",
							children: "Color de acento"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: ACCENTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: cn("size-8", settings.accent === c && "ring-2 ring-offset-2 ring-black"),
								style: { background: c },
								onClick: () => {
									patchSettings({ accent: c });
									document.documentElement.style.setProperty("--color-win-accent", c);
								},
								"aria-label": c
							}, c))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-6 flex items-center gap-3 text-win-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: settings.darkWindows,
								onChange: (e) => patchSettings({ darkWindows: e.target.checked })
							}), "Modo oscuro en las ventanas"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-2 flex items-center gap-3 text-win-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: settings.transparency,
								onChange: (e) => patchSettings({ transparency: e.target.checked })
							}), "Efectos de transparencia"]
						})
					]
				}) : null,
				page === "system" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "win-scroll-light overflow-auto p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-light",
						children: "Sistema"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-3 text-win-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "mr-2 inline size-4" }), "PC-WIN10"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Procesador: Grok Virtual CPU" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "RAM instalada: 16,0 GB" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Edición: Windows 10 Pro (simulador)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Versión: 22H2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Compilación: 19045.3803" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }),
									" Volumen del sistema: ",
									settings.volume,
									"%"
								]
							})
						]
					})]
				}) : null,
				page === "accounts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-light",
						children: "Cuentas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-win-sm",
						children: ["Nombre de usuario", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: settings.userName,
							onChange: (e) => patchSettings({ userName: e.target.value }),
							className: "mt-1 block h-8 w-64 border border-black/20 bg-white px-2"
						})]
					})]
				}) : null,
				page === "time" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 text-win-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-light",
							children: "Hora e idioma"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4",
							children: "Zona horaria: (UTC-08:00) Hora del Pacífico"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Idioma de Windows: Español (España)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Formato regional: Español (España)" })
					]
				}) : null,
				page === "privacy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 text-win-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-light",
						children: "Privacidad"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-win-window-muted",
						children: "Este simulador se ejecuta por completo en tu navegador. No se envían datos a Microsoft ni a ningún servidor."
					})]
				}) : null,
				page === "update" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdatePane, {}) : null
			]
		})
	});
}
function UpdatePane() {
	const [state, setState] = (0, import_react.useState)("idle");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-light",
			children: "Windows Update"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-10 text-win-accent", state === "check" && "animate-spin") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-win-lg",
					children: state === "idle" ? "Estás al día" : state === "check" ? "Buscando actualizaciones…" : "No hay actualizaciones disponibles"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-win-sm text-win-window-muted",
					children: "Última comprobación: hoy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 bg-win-accent px-4 py-1.5 text-win-sm text-white",
					onClick: () => {
						setState("check");
						setTimeout(() => setState("done"), 1600);
					},
					children: "Buscar actualizaciones"
				})
			] })]
		})]
	});
}
function AppHost({ win }) {
	let body = null;
	switch (win.appId) {
		case "explorer":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplorerApp, { win });
			break;
		case "notepad":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotepadApp, { win });
			break;
		case "calculator":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalculatorApp, {});
			break;
		case "paint":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaintApp, {});
			break;
		case "settings":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsApp, { win });
			break;
		case "edge":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EdgeApp, {});
			break;
		case "cmd":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmdApp, {});
			break;
		case "store":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreApp, {});
			break;
		case "photos":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotosApp, { win });
			break;
		case "mail":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailApp, {});
			break;
		case "calendar":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarApp, {});
			break;
		case "sticky":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyApp, { win });
			break;
		case "recycle":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecycleApp, {});
			break;
		case "winver":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinverApp, {});
			break;
		case "minesweeper":
			body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MinesweeperApp, {});
			break;
		default: body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-4 text-win-sm",
			children: "Aplicación no disponible"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowFrame, {
		win,
		children: body
	});
}
function BootScreen({ onDone }) {
	(0, import_react.useEffect)(() => {
		const skip = (e) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full w-full flex-col items-center justify-center bg-win-boot text-win-boot-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowsLogo, { size: 72 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "win-loader mt-16",
			"aria-label": "Cargando",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
			]
		})]
	});
}
function LockScreen({ onUnlock }) {
	const wallpaper = useWinStore((s) => s.settings.wallpaper);
	const now = useNow(1e3);
	const stamp = now ? formatLock(now) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "relative flex h-full w-full cursor-pointer flex-col border-0 p-0 text-left text-win-desktop-fg",
		onClick: onUnlock,
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " ") onUnlock();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallpaper, { id: wallpaper }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-auto px-8 pb-28 sm:px-14 sm:pb-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "win-lock-time tabular-nums",
					children: stamp?.time ?? " "
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-win-xl capitalize sm:text-2xl",
					children: stamp?.date ?? " "
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-5 bottom-5 flex items-center gap-4 text-win-desktop-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, {
					className: "size-5",
					strokeWidth: 1.75
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatteryFull, {
					className: "size-5",
					strokeWidth: 1.75
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-win-sm text-white/80",
				children: "Haz clic para desbloquear"
			})
		]
	});
}
function LoginScreen({ onLogin }) {
	const { settings } = useWinStore();
	const [pwd, setPwd] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	function submit() {
		setBusy(true);
		setTimeout(onLogin, 700);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full w-full flex-col items-center justify-center text-win-desktop-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallpaper, {
				id: settings.wallpaper,
				dim: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 backdrop-blur-[28px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col items-center px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-28 items-center justify-center rounded-full text-4xl font-light",
						style: { background: settings.accent },
						children: settings.userName.slice(0, 1).toUpperCase()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-2xl font-light",
						children: settings.userName
					}),
					busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "win-loader mt-8 scale-75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 flex w-[min(280px,80vw)] flex-col items-center gap-3",
						onSubmit: (e) => {
							e.preventDefault();
							submit();
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								value: pwd,
								onChange: (e) => setPwd(e.target.value),
								placeholder: "Contraseña",
								autoFocus: true,
								className: "h-8 w-full border border-white/40 bg-white/95 px-2 text-win-md text-win-field-fg outline-none placeholder:text-win-window-muted"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "h-8 min-w-28 border border-white/30 bg-white/15 px-4 text-win-md text-white hover:bg-white/25",
								children: "Iniciar sesión"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-win-xs text-white/70",
								children: "Sin contraseña: pulsa Enter o Iniciar sesión"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-4 bottom-4 flex gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-10 place-items-center text-white/90 hover:bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accessibility, {
						className: "size-5",
						strokeWidth: 1.6
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-10 place-items-center text-white/90 hover:bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, {
						className: "size-5",
						strokeWidth: 1.6
					})
				})]
			})
		]
	});
}
function ShutdownScreen({ onDone }) {
	(0, import_react.useEffect)(() => {
		const t = setTimeout(onDone, 1800);
		return () => clearTimeout(t);
	}, [onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full w-full flex-col items-center justify-center bg-win-boot text-win-boot-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "win-loader",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-win-lg font-light",
			children: "Apagando"
		})]
	});
}
function BsodScreen({ onDone }) {
	(0, import_react.useEffect)(() => {
		const t = setTimeout(onDone, 5e3);
		const skip = () => onDone();
		window.addEventListener("keydown", skip);
		window.addEventListener("pointerdown", skip);
		return () => {
			clearTimeout(t);
			window.removeEventListener("keydown", skip);
			window.removeEventListener("pointerdown", skip);
		};
	}, [onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full w-full flex-col justify-center bg-[#0078d7] px-8 text-white sm:px-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-7xl font-light",
				children: ":("
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-xl text-xl font-light leading-snug",
				children: "Tu PC se ha encontrado un problema y debe reiniciarse. Vamos a recopilar información de error y luego se reiniciará."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-lg font-light",
				children: "0% completado"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-win-sm opacity-80",
				children: "STOP: 0x000000EF · SIMULATED_BSOD"
			})
		]
	});
}
function Win10() {
	const { phase, setPhase, hydrate, settings, windows, setPanel, setCtx, setSelectedIcon, panel, ctx, closeWindow } = useWinStore();
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		document.documentElement.style.setProperty("--color-win-accent", settings.accent);
		document.documentElement.style.setProperty("--color-win-accent-hover", settings.accent);
	}, [settings.accent]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
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
				const top = [...useWinStore.getState().windows.filter((w) => !w.min)].sort((a, b) => b.z - a.z)[0];
				if (top) closeWindow(top.id);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		setPanel,
		setCtx,
		closeWindow
	]);
	const toLock = (0, import_react.useCallback)(() => setPhase("lock"), [setPhase]);
	const toLogin = (0, import_react.useCallback)(() => setPhase("login"), [setPhase]);
	const toDesktop = (0, import_react.useCallback)(() => {
		setPhase("desktop");
		window.setTimeout(() => {
			useWinStore.getState().pushNotif("Windows", "Te damos la bienvenida. Abre Inicio para explorar.");
		}, 600);
	}, [setPhase]);
	const afterShutdown = (0, import_react.useCallback)(() => setPhase("boot"), [setPhase]);
	const afterBsod = (0, import_react.useCallback)(() => setPhase("boot"), [setPhase]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh w-full overflow-hidden bg-black",
		style: { filter: settings.nightLight ? "sepia(0.25) saturate(1.1)" : void 0 },
		children: [
			phase === "boot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, { onDone: toLock }) : null,
			phase === "lock" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockScreen, { onUnlock: toLogin }) : null,
			phase === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginScreen, { onLogin: toDesktop }) : null,
			phase === "shutdown" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShutdownScreen, { onDone: afterShutdown }) : null,
			phase === "bsod" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BsodScreen, { onDone: afterBsod }) : null,
			phase === "desktop" || phase === "lock" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: phase === "desktop" ? "contents" : "hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallpaper, { id: settings.wallpaper }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0",
					onPointerDown: () => {
						if (panel) setPanel(null);
						if (ctx) setCtx(null);
						setSelectedIcon(null);
					},
					onContextMenu: (e) => {
						e.preventDefault();
						setCtx({
							x: e.clientX,
							y: e.clientY,
							kind: "desktop"
						});
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopIcons, {}),
						windows.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHost, { win: w }, w.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Taskbar, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenu, {})
					]
				})]
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Win10, {});
}
//#endregion
export { Home as component };
