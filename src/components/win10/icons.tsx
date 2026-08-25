import type { CSSProperties, ReactNode } from "react";
import type { AppId } from "@/lib/win10/types";

type IconProps = { size?: number; className?: string; style?: CSSProperties };

export function WindowsLogo({ size = 16, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 88 88"
      className={className}
      style={style}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0 12.5 41.2 6.8v35.4H0zm45.3-6.4L88 0v42.2H45.3zM0 49.2h41.2v35.4L0 79.1zm45.3 0H88V88L45.3 81.4z"
      />
    </svg>
  );
}

function Frame({ size, className, style, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size ?? 32}
      height={size ?? 32}
      viewBox="0 0 32 32"
      className={className}
      style={style}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconExplorer({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <path fill="#dcb152" d="M3 9h10l2 2h14v3H3z" />
      <path fill="#f4d27a" d="M3 13h26v14H3z" />
      <path fill="#c9a045" d="M3 26h26v1.5H3z" />
    </Frame>
  );
}

export function IconThisPc({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <rect x="4" y="5" width="24" height="16" rx="1.2" fill="#3a3a3a" />
      <rect x="6" y="7" width="20" height="12" fill="#4db2e8" />
      <rect x="12" y="21" width="8" height="2" fill="#5a5a5a" />
      <rect x="8" y="23" width="16" height="2.5" rx="0.4" fill="#2a2a2a" />
    </Frame>
  );
}

export function IconRecycle({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <path fill="#8aa0b4" d="M10 8h12l1 3H9z" />
      <path fill="#9eb4c8" d="M9 11h14l-1.4 16H10.4z" />
      <path fill="#c5d4e0" d="M12 13h2v12h-2zm6 0h2v12h-2z" />
    </Frame>
  );
}

export function IconRecycleFull({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <path fill="#8aa0b4" d="M10 8h12l1 3H9z" />
      <path fill="#9eb4c8" d="M9 11h14l-1.4 16H10.4z" />
      <rect x="12" y="14" width="8" height="10" fill="#dce6ee" />
      <path fill="#6a8094" d="M12 13h2v12h-2zm6 0h2v12h-2z" />
    </Frame>
  );
}

export function IconEdge({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <circle cx="16" cy="16" r="13" fill="#0a6cd6" />
      <path fill="#5ec8f0" d="M6 18c3-8 12-12 19-8-4 1-7 4-8 8 4-1 8 1 10 5-6 6-16 5-21-5z" />
      <path fill="#fff" d="M8 19c4 6 13 7 18 1-3 4-10 5-16 1-1-1-2-1-2-2z" opacity=".9" />
    </Frame>
  );
}

export function IconNotepad({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <path fill="#f4f1de" d="M8 3h14l4 4v22H8z" />
      <path fill="#e0dcc4" d="M22 3v4h4z" />
      <path fill="#2b88d8" d="M8 3h14v3H8z" />
      <path stroke="#c8c4b0" strokeWidth="1.2" d="M12 12h10M12 16h10M12 20h8" />
    </Frame>
  );
}

export function IconCalc({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <rect x="6" y="3" width="20" height="26" rx="1.5" fill="#3a3a3a" />
      <rect x="8" y="6" width="16" height="6" fill="#1a1a1a" />
      <g fill="#d0d0d0">
        <rect x="8" y="14" width="4" height="3.2" rx="0.4" />
        <rect x="14" y="14" width="4" height="3.2" rx="0.4" />
        <rect x="20" y="14" width="4" height="3.2" rx="0.4" />
        <rect x="8" y="19" width="4" height="3.2" rx="0.4" />
        <rect x="14" y="19" width="4" height="3.2" rx="0.4" />
        <rect x="20" y="19" width="4" height="3.2" rx="0.4" />
        <rect x="8" y="24" width="10" height="3.2" rx="0.4" />
        <rect x="20" y="24" width="4" height="3.2" rx="0.4" fill="#0078d7" />
      </g>
    </Frame>
  );
}

export function IconPaint({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <path fill="#f2f2f2" d="M6 6h20v16H14l-8 6V6z" />
      <circle cx="12" cy="12" r="3" fill="#e81123" />
      <circle cx="18" cy="11" r="3" fill="#0078d7" />
      <circle cx="15" cy="16" r="3" fill="#ffb900" />
      <circle cx="21" cy="16" r="2.4" fill="#107c10" />
    </Frame>
  );
}

export function IconSettings({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <circle cx="16" cy="16" r="5" fill="#c8c8c8" />
      <path
        fill="#c8c8c8"
        d="M14 3h4l1 4 4-1 2 3-3 3 3 3-2 3-4-1-1 4h-4l-1-4-4 1-2-3 3-3-3-3 2-3 4 1z"
        opacity=".95"
      />
      <circle cx="16" cy="16" r="3.2" fill="#4a4a4a" />
    </Frame>
  );
}

export function IconCmd({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <rect x="3" y="6" width="26" height="20" rx="1" fill="#0c0c0c" />
      <path stroke="#d0d0d0" strokeWidth="1.4" fill="none" d="M7 12l4 4-4 4" />
      <path stroke="#d0d0d0" strokeWidth="1.4" d="M13 20h8" />
    </Frame>
  );
}

export function IconStore({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <rect x="5" y="12" width="22" height="15" fill="#0078d7" />
      <path fill="#50e6ff" d="M10 12c0-4 12-4 12 0" />
      <path fill="#fff" d="M8 12h16l-1.5-5H9.5z" opacity=".9" />
      <rect x="14" y="16" width="4" height="7" fill="#fff" opacity=".85" />
    </Frame>
  );
}

export function IconPhotos({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <rect x="3" y="6" width="26" height="20" rx="1" fill="#0078d7" />
      <circle cx="11" cy="13" r="3" fill="#ffe08a" />
      <path fill="#fff" d="M6 24l7-8 5 6 3-3 5 5z" opacity=".92" />
    </Frame>
  );
}

export function IconMail({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <rect x="3" y="8" width="26" height="16" fill="#0078d7" />
      <path fill="#50e6ff" d="M3 8l13 9 13-9z" />
      <path fill="#003f7f" d="M3 24l9-8M29 24l-9-8" opacity=".35" />
    </Frame>
  );
}

export function IconCalendar({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <rect x="4" y="5" width="24" height="22" rx="1.5" fill="#0078d7" />
      <rect x="4" y="5" width="24" height="6" fill="#005a9e" />
      <rect x="8" y="14" width="4" height="3" fill="#fff" opacity=".9" />
      <rect x="14" y="14" width="4" height="3" fill="#fff" opacity=".9" />
      <rect x="20" y="14" width="4" height="3" fill="#fff" opacity=".9" />
      <rect x="8" y="19" width="4" height="3" fill="#fff" opacity=".7" />
      <rect x="14" y="19" width="4" height="3" fill="#fff" opacity=".7" />
    </Frame>
  );
}

export function IconSticky({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <path fill="#fff475" d="M6 4h16l6 6v18H6z" />
      <path fill="#f0dc50" d="M22 4v6h6z" />
      <path stroke="#c8b030" strokeWidth="1" d="M10 14h12M10 18h10" />
    </Frame>
  );
}

export function IconMine({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <circle cx="16" cy="17" r="8" fill="#2a2a2a" />
      <rect x="15" y="6" width="2" height="5" fill="#2a2a2a" />
      <rect x="14" y="4" width="4" height="2" fill="#c0392b" />
      <circle cx="13" cy="15" r="1.6" fill="#eee" />
    </Frame>
  );
}

export function IconWinver({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <rect x="4" y="4" width="24" height="24" fill="#0078d7" />
      <g fill="#fff" transform="translate(7 8) scale(0.2)">
        <path d="M0 12.5 41.2 6.8v35.4H0zm45.3-6.4L88 0v42.2H45.3zM0 49.2h41.2v35.4L0 79.1zm45.3 0H88V88L45.3 81.4z" />
      </g>
    </Frame>
  );
}

export function IconFolder({ size = 32, className, style }: IconProps) {
  return <IconExplorer size={size} className={className} style={style} />;
}

export function IconFile({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <path fill="#f4f4f4" d="M8 3h11l7 7v19H8z" />
      <path fill="#d8d8d8" d="M19 3v7h7z" />
      <path stroke="#c0c0c0" d="M12 16h10M12 20h8" />
    </Frame>
  );
}

export function IconDrive({ size = 32, className, style }: IconProps) {
  return (
    <Frame size={size} className={className} style={style}>
      <rect x="3" y="10" width="26" height="14" rx="2" fill="#5a6a7a" />
      <rect x="5" y="12" width="22" height="7" fill="#3a4a58" />
      <circle cx="23" cy="21" r="1.4" fill="#3ecf4a" />
    </Frame>
  );
}

const MAP: Record<AppId, (p: IconProps) => ReactNode> = {
  explorer: (p) => <IconExplorer {...p} />,
  "this-pc": (p) => <IconThisPc {...p} />,
  edge: (p) => <IconEdge {...p} />,
  notepad: (p) => <IconNotepad {...p} />,
  calculator: (p) => <IconCalc {...p} />,
  paint: (p) => <IconPaint {...p} />,
  settings: (p) => <IconSettings {...p} />,
  cmd: (p) => <IconCmd {...p} />,
  store: (p) => <IconStore {...p} />,
  photos: (p) => <IconPhotos {...p} />,
  mail: (p) => <IconMail {...p} />,
  calendar: (p) => <IconCalendar {...p} />,
  sticky: (p) => <IconSticky {...p} />,
  minesweeper: (p) => <IconMine {...p} />,
  recycle: (p) => <IconRecycle {...p} />,
  winver: (p) => <IconWinver {...p} />,
};

export function AppIcon({ id, size = 32, className }: { id: AppId; size?: number; className?: string }) {
  return <>{MAP[id]({ size, className })}</>;
}
