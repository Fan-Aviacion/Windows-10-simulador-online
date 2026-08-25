import type { WinWindow } from "@/lib/win10/types";
import { WindowFrame } from "./WindowFrame";
import { CalculatorApp } from "./apps/CalculatorApp";
import { CmdApp } from "./apps/CmdApp";
import { EdgeApp } from "./apps/EdgeApp";
import { ExplorerApp } from "./apps/ExplorerApp";
import { NotepadApp } from "./apps/NotepadApp";
import {
  CalendarApp,
  MailApp,
  MinesweeperApp,
  PhotosApp,
  RecycleApp,
  StickyApp,
  StoreApp,
  WinverApp,
} from "./apps/OtherApps";
import { PaintApp } from "./apps/PaintApp";
import { SettingsApp } from "./apps/SettingsApp";

export function AppHost({ win }: { win: WinWindow }) {
  let body = null;
  switch (win.appId) {
    case "explorer":
      body = <ExplorerApp win={win} />;
      break;
    case "notepad":
      body = <NotepadApp win={win} />;
      break;
    case "calculator":
      body = <CalculatorApp />;
      break;
    case "paint":
      body = <PaintApp />;
      break;
    case "settings":
      body = <SettingsApp win={win} />;
      break;
    case "edge":
      body = <EdgeApp />;
      break;
    case "cmd":
      body = <CmdApp />;
      break;
    case "store":
      body = <StoreApp />;
      break;
    case "photos":
      body = <PhotosApp win={win} />;
      break;
    case "mail":
      body = <MailApp />;
      break;
    case "calendar":
      body = <CalendarApp />;
      break;
    case "sticky":
      body = <StickyApp win={win} />;
      break;
    case "recycle":
      body = <RecycleApp />;
      break;
    case "winver":
      body = <WinverApp />;
      break;
    case "minesweeper":
      body = <MinesweeperApp />;
      break;
    default:
      body = <div className="p-4 text-win-sm">Aplicación no disponible</div>;
  }
  return <WindowFrame win={win}>{body}</WindowFrame>;
}
