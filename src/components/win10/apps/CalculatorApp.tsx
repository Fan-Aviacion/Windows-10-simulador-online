import { useState } from "react";
import { cn } from "@/lib/utils";

function fmt(n: string) {
  if (n === "Error") return n;
  const x = Number(n);
  if (!Number.isFinite(x)) return "Error";
  const s = String(x);
  return s.length > 12 ? x.toExponential(6) : s;
}

export function CalculatorApp() {
  const [cur, setCur] = useState("0");
  const [acc, setAcc] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [fresh, setFresh] = useState(true);

  function input(d: string) {
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

  function apply(nextOp: string | null) {
    const n = Number(cur);
    if (acc === null || op === null) {
      setAcc(n);
    } else {
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

  const keys = [
    { l: "%", fn: () => setCur(fmt(String(Number(cur) / 100))) },
    { l: "CE", fn: () => setCur("0") },
    { l: "C", fn: () => { setCur("0"); setAcc(null); setOp(null); setFresh(true); } },
    { l: "⌫", fn: () => setCur((c) => (c.length <= 1 || fresh ? "0" : c.slice(0, -1))) },
    { l: "1/x", fn: () => setCur(fmt(String(1 / Number(cur)))) },
    { l: "x²", fn: () => setCur(fmt(String(Number(cur) ** 2))) },
    { l: "√", fn: () => setCur(fmt(String(Math.sqrt(Number(cur))))) },
    { l: "÷", fn: () => apply("÷"), op: true },
    { l: "7", fn: () => input("7") },
    { l: "8", fn: () => input("8") },
    { l: "9", fn: () => input("9") },
    { l: "×", fn: () => apply("×"), op: true },
    { l: "4", fn: () => input("4") },
    { l: "5", fn: () => input("5") },
    { l: "6", fn: () => input("6") },
    { l: "−", fn: () => apply("−"), op: true },
    { l: "1", fn: () => input("1") },
    { l: "2", fn: () => input("2") },
    { l: "3", fn: () => input("3") },
    { l: "+", fn: () => apply("+"), op: true },
    { l: "±", fn: () => setCur((c) => fmt(String(-Number(c)))) },
    { l: "0", fn: () => input("0") },
    { l: ".", fn: () => input(".") },
    { l: "=", fn: () => apply(null), eq: true },
  ];

  return (
    <div className="flex h-full flex-col bg-[#e6e6e6] text-win-window-fg">
      <div className="px-4 pt-3 text-win-sm text-win-window-muted">Estándar</div>
      <div className="flex h-20 items-end justify-end px-4 text-4xl font-light tabular-nums">
        {cur}
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-4 gap-px bg-[#d0d0d0] p-px">
        {keys.map((k) => (
          <button
            key={k.l}
            type="button"
            onClick={k.fn}
            className={cn(
              "text-win-lg hover:brightness-95",
              k.eq ? "bg-win-accent text-white" : k.op ? "bg-[#f0f0f0]" : "bg-white",
            )}
          >
            {k.l}
          </button>
        ))}
      </div>
    </div>
  );
}
