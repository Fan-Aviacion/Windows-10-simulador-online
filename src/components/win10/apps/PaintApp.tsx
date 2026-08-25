import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useWinStore } from "@/lib/win10/store";

const COLORS = [
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
  "#c8bfe7",
];

export function PaintApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useState<"pencil" | "eraser">("pencil");
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(3);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const createFile = useWinStore((s) => s.createFile);
  const pushNotif = useWinStore((s) => s.pushNotif);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, c.width, c.height);
  }, []);

  function pos(e: PointerEvent<HTMLCanvasElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const c = e.currentTarget;
    return {
      x: ((e.clientX - r.left) / r.width) * c.width,
      y: ((e.clientY - r.top) / r.height) * c.height,
    };
  }

  function drawTo(e: PointerEvent<HTMLCanvasElement>) {
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
    createFile("pictures", `Dibujo ${new Date().toLocaleTimeString("es-ES")}.png`, "png", "", dataUrl);
    pushNotif("Paint", "Imagen guardada en Imágenes");
  }

  function clear() {
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, c.width, c.height);
  }

  return (
    <div className="flex h-full flex-col bg-[#f0f0f0]">
      <div className="flex flex-wrap items-center gap-2 border-b border-black/10 bg-white px-2 py-1.5">
        <button type="button" className="px-2 py-1 text-win-sm hover:bg-black/6" onClick={() => setTool("pencil")}>
          Lápiz
        </button>
        <button type="button" className="px-2 py-1 text-win-sm hover:bg-black/6" onClick={() => setTool("eraser")}>
          Borrador
        </button>
        <label className="flex items-center gap-1 text-win-xs">
          Grosor
          <input
            type="range"
            min={1}
            max={16}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>
        <button type="button" className="px-2 py-1 text-win-sm hover:bg-black/6" onClick={clear}>
          Limpiar
        </button>
        <button type="button" className="px-2 py-1 text-win-sm hover:bg-black/6" onClick={save}>
          Guardar
        </button>
        <div className="flex flex-wrap gap-0.5">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={c}
              className="size-4 border border-black/20"
              style={{ background: c, outline: color === c ? "2px solid #0078d7" : undefined }}
              onClick={() => {
                setColor(c);
                setTool("pencil");
              }}
            />
          ))}
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-auto bg-[#808080] p-3">
        <canvas
          ref={canvasRef}
          width={900}
          height={560}
          className="bg-white shadow-[var(--shadow-menu)]"
          style={{ width: "100%", height: "auto", touchAction: "none" }}
          onPointerDown={(e) => {
            drawing.current = true;
            last.current = pos(e);
            e.currentTarget.setPointerCapture(e.pointerId);
            drawTo(e);
          }}
          onPointerMove={drawTo}
          onPointerUp={() => {
            drawing.current = false;
            last.current = null;
          }}
        />
      </div>
    </div>
  );
}
