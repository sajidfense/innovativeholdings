"use client";

import { useEffect, useRef } from "react";

interface StrategyGlobeProps {
  className?: string;
}

interface Projected {
  px: number;
  py: number;
  pz: number;
}

function project(
  ox: number, oy: number, oz: number,
  rotX: number, rotY: number
): Projected {
  const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
  const x1 = ox * cosY - oz * sinY;
  const z1 = ox * sinY + oz * cosY;
  const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
  const y1 = oy * cosX - z1 * sinX;
  const z2 = oy * sinX + z1 * cosX;
  return { px: x1, py: y1, pz: z2 };
}

export function StrategyGlobe({ className }: StrategyGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    let time = 0;

    const NODE_COUNT = 28;

    // Node positions on sphere surface (Fibonacci lattice)
    interface SphereNode { ox: number; oy: number; oz: number; }
    let nodes: SphereNode[] = [];

    function resize() {
      w = canvas!.offsetWidth;
      h = canvas!.offsetHeight;
      canvas!.width = w;
      canvas!.height = h;
    }

    function initNodes() {
      nodes = [];
      const r = Math.min(w, h) * 0.35;
      for (let i = 0; i < NODE_COUNT; i++) {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
        const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
        nodes.push({
          ox: r * Math.sin(phi) * Math.cos(theta),
          oy: r * Math.sin(phi) * Math.sin(theta),
          oz: r * Math.cos(phi),
        });
      }
    }

    function draw(ts: number) {
      if (!ctx || !canvas) return;
      time = ts * 0.001;

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.35;
      const rotY = time * 0.18;
      const rotX = Math.sin(time * 0.07) * 0.3;
      const CONNECTION_DIST = r * 0.85;

      // Latitude rings
      for (let lat = -2; lat <= 2; lat++) {
        const latAngle = (lat / 3) * Math.PI * 0.8;
        const ringR = r * Math.cos(latAngle);
        const ringY = r * Math.sin(latAngle);
        ctx.beginPath();
        for (let k = 0; k <= 60; k++) {
          const theta = (k / 60) * Math.PI * 2;
          const p = project(ringR * Math.cos(theta), ringY, ringR * Math.sin(theta), rotX, rotY);
          if (k === 0) { ctx.moveTo(cx + p.px, cy + p.py); } else { ctx.lineTo(cx + p.px, cy + p.py); }
        }
        ctx.strokeStyle = "rgba(29,78,216,0.12)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Meridian lines
      for (let lon = 0; lon < 6; lon++) {
        const lonAngle = (lon / 6) * Math.PI;
        ctx.beginPath();
        for (let k = 0; k <= 40; k++) {
          const phi = (k / 40) * Math.PI;
          const p = project(
            r * Math.sin(phi) * Math.cos(lonAngle),
            r * Math.cos(phi),
            r * Math.sin(phi) * Math.sin(lonAngle),
            rotX, rotY
          );
          if (k === 0) { ctx.moveTo(cx + p.px, cy + p.py); } else { ctx.lineTo(cx + p.px, cy + p.py); }
        }
        ctx.strokeStyle = "rgba(29,78,216,0.08)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Project nodes
      const projected: Projected[] = nodes.map((n) =>
        project(n.ox, n.oy, n.oz, rotX, rotY)
      );

      // Connection lines
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = nodes[i].ox - nodes[j].ox;
          const dy = nodes[i].oy - nodes[j].oy;
          const dz = nodes[i].oz - nodes[j].oz;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < CONNECTION_DIST) {
            const a = projected[i], b = projected[j];
            const fade = (1 - dist / CONNECTION_DIST) *
              ((a.pz / r + 1) * 0.5) *
              ((b.pz / r + 1) * 0.5);
            ctx.beginPath();
            ctx.moveTo(cx + a.px, cy + a.py);
            ctx.lineTo(cx + b.px, cy + b.py);
            ctx.strokeStyle = `rgba(59,130,246,${fade * 0.65})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (let i = 0; i < NODE_COUNT; i++) {
        const p = projected[i];
        const depth = (p.pz / r + 1) * 0.5;
        ctx.beginPath();
        ctx.arc(cx + p.px, cy + p.py, 1.5 + depth * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${0.4 + depth * 0.6})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initNodes();
    animId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      resize();
      initNodes();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
