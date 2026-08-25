export type Phase = "boot" | "lock" | "login" | "desktop" | "shutdown" | "bsod";

export type Panel =
  | null
  | "start"
  | "search"
  | "calendar"
  | "action"
  | "volume"
  | "network"
  | "power"
  | "user"
  | "wifi";

export type AppId =
  | "explorer"
  | "edge"
  | "notepad"
  | "calculator"
  | "paint"
  | "settings"
  | "cmd"
  | "store"
  | "photos"
  | "mail"
  | "calendar"
  | "sticky"
  | "minesweeper"
  | "recycle"
  | "this-pc"
  | "winver";

export type WinApp = {
  id: AppId;
  name: string;
  singleton: boolean;
  defaultW: number;
  defaultH: number;
  tile: "small" | "medium" | "wide" | "large";
  tileColor?: string;
  pinned?: boolean;
  desktop?: boolean;
};

export type WinWindow = {
  id: string;
  appId: AppId;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  min: boolean;
  max: boolean;
  z: number;
  payload?: Record<string, string>;
};

export type FsKind = "folder" | "file";

export type FsNode = {
  id: string;
  name: string;
  kind: FsKind;
  parentId: string | null;
  ext?: string;
  content?: string;
  dataUrl?: string;
  modified: number;
  trashed?: boolean;
};

export type StickyNote = {
  id: string;
  text: string;
  color: string;
};

export type Settings = {
  userName: string;
  accent: string;
  wallpaper: string;
  darkWindows: boolean;
  transparency: boolean;
  volume: number;
  wifi: boolean;
  notifications: boolean;
  nightLight: boolean;
};

export type CtxMenu = {
  x: number;
  y: number;
  kind: "desktop" | "icon" | "taskbar" | "file";
  targetId?: string;
} | null;

export type MailMessage = {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  unread: boolean;
};
