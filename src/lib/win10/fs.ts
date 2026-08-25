import type { FsNode, MailMessage } from "./types";

const T = 1710000000000;

function folder(id: string, name: string, parentId: string | null): FsNode {
  return { id, name, kind: "folder", parentId, modified: T };
}

function file(
  id: string,
  name: string,
  parentId: string,
  ext: string,
  content: string,
): FsNode {
  return { id, name, kind: "file", parentId, ext, content, modified: T };
}

const WELCOME = `Bienvenido a Windows 10

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

const GETTING_STARTED = `Atajos de teclado
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

const PHOTO_LAKE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
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

const PHOTO_CITY = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
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

const PHOTO_HILLS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <linearGradient id="h" xmlns="http://www.w3.org/2000/svg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f4c27a"/>
    <stop offset="1" stop-color="#f08a4b"/>
  </linearGradient>
  <rect width="800" height="500" fill="url(#h)"/>
  <circle cx="140" cy="120" r="50" fill="#fff1c8"/>
  <path d="M0 320 C120 260 220 300 340 250 C460 200 560 280 800 230 L800 500 L0 500Z" fill="#6b8f4e"/>
  <path d="M0 380 C180 330 300 400 480 340 C640 290 720 360 800 330 L800 500 L0 500Z" fill="#4e7340"/>
</svg>`;

export function seedFs(): FsNode[] {
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
      modified: T,
    },
    {
      id: "photo-city",
      name: "Ciudad.svg",
      kind: "file",
      parentId: "pictures",
      ext: "svg",
      content: PHOTO_CITY,
      dataUrl: `data:image/svg+xml;utf8,${encodeURIComponent(PHOTO_CITY)}`,
      modified: T,
    },
    {
      id: "photo-hills",
      name: "Colinas.svg",
      kind: "file",
      parentId: "pictures",
      ext: "svg",
      content: PHOTO_HILLS,
      dataUrl: `data:image/svg+xml;utf8,${encodeURIComponent(PHOTO_HILLS)}`,
      modified: T,
    },
    file("readme-dl", "Leeme.txt", "downloads", "txt", "No hay descargas nuevas.\n"),
    file("hosts", "hosts", "system32", "txt", "127.0.0.1 localhost\n"),
  ];
}

export const QUICK_ACCESS = [
  { id: "desktop", name: "Escritorio" },
  { id: "downloads", name: "Descargas" },
  { id: "documents", name: "Documentos" },
  { id: "pictures", name: "Imágenes" },
  { id: "music", name: "Música" },
  { id: "videos", name: "Vídeos" },
] as const;

export const THIS_PC_FOLDERS = [
  { id: "desktop", name: "Escritorio" },
  { id: "documents", name: "Documentos" },
  { id: "downloads", name: "Descargas" },
  { id: "pictures", name: "Imágenes" },
  { id: "music", name: "Música" },
  { id: "videos", name: "Vídeos" },
] as const;

export function nid(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function childrenOf(nodes: FsNode[], parentId: string | null): FsNode[] {
  return nodes
    .filter((n) => n.parentId === parentId && !n.trashed)
    .sort((a, b) => {
      if (a.kind !== b.kind) return a.kind === "folder" ? -1 : 1;
      return a.name.localeCompare(b.name, "es");
    });
}

export function pathOf(nodes: FsNode[], id: string): FsNode[] {
  const map = new Map(nodes.map((n) => [n.id, n]));
  const chain: FsNode[] = [];
  let cur: FsNode | undefined = map.get(id);
  while (cur) {
    chain.unshift(cur);
    cur = cur.parentId ? map.get(cur.parentId) : undefined;
  }
  return chain;
}

export function formatSize(node: FsNode): string {
  if (node.kind === "folder") return "";
  const n = (node.content?.length ?? node.dataUrl?.length ?? 0) || 1;
  if (n < 1024) return `${n} bytes`;
  return `${(n / 1024).toFixed(1)} KB`;
}

export const SAMPLE_MAIL: MailMessage[] = [
  {
    id: "m1",
    from: "Microsoft",
    fromEmail: "noreply@microsoft.com",
    subject: "Te damos la bienvenida a Windows 10",
    preview: "Gracias por iniciar sesión. Aquí tienes algunos consejos para empezar.",
    body: "Hola,\n\nGracias por usar este equipo. Desde el menú Inicio puedes abrir Configuración para personalizar el fondo, el color de acento y más.\n\nEl equipo de Windows",
    time: "09:14",
    unread: true,
  },
  {
    id: "m2",
    from: "Microsoft Store",
    fromEmail: "store@microsoft.com",
    subject: "Aplicaciones recomendadas para ti",
    preview: "Buscaminas, Paint y el Bloc de notas ya están listos.",
    body: "Hola,\n\nHemos preparado algunas aplicaciones clásicas en este equipo. Ábrelas desde Inicio o ancla las que más uses a la barra de tareas.\n\nMicrosoft Store",
    time: "Ayer",
    unread: true,
  },
  {
    id: "m3",
    from: "Calendario",
    fromEmail: "calendar@live.com",
    subject: "Hoy · Productividad",
    preview: "No tienes eventos. Un buen día para explorar el escritorio.",
    body: "No hay eventos programados para hoy.\n\nAbre Calendario para ver el mes completo.",
    time: "Lun",
    unread: false,
  },
  {
    id: "m4",
    from: "Seguridad de Windows",
    fromEmail: "security@microsoft.com",
    subject: "El dispositivo está protegido",
    preview: "No se requiere ninguna acción.",
    body: "Antivirus de Windows Defender.\nEstado: activo.\nÚltimo análisis: hoy.\n\nNo se requiere ninguna acción.",
    time: "Dom",
    unread: false,
  },
];
