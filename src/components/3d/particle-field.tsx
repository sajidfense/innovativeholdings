"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  phase: number;
  size: number;
  opacity: number;
}

interface ParticleFieldProps {
  className?: string;
}

export function ParticleField({ className }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const COUNT = 400;
    const particles: Particle[] = [];
    let time = 0;

    function resize() {
      width = canvas!.offsetWidth;
      height = canvas!.offsetHeight;
      canvas!.width = width;
      canvas!.height = height;
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random(),
          vx: (Math.random() - 0.5) * 0.15,
          vy: -(0.1 + Math.random() * 0.25),
          phase: Math.random() * Math.PI * 2,
          size: 0.5 + Math.random() * 1.5,
          opacity: 0.2 + Math.random() * 0.6,
        });
      }
    }

    function drawGridLines() {
      if (!ctx) return;
      ctx.strokeStyle = "rgba(37,99,235,0.06)";
      ctx.lineWidth = 1;
      const cols = 8;
      const colW = width / cols;
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * colW, height * 0.65);
        ctx.lineTo(i * colW + height * 0.18, height);
        ctx.stroke();
      }
      const rows = 4;
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, height * 0.65 + (j / rows) * height * 0.35);
        ctx.lineTo(width, height * 0.65 + (j / rows) * height * 0.35);
        ctx.stroke();
      }
    }

    function drawFloatingOrb(
      cx: number,
      cy: number,
      r: number,
      t: number,
      phase: number
    ) {
      if (!ctx) return;
      const floatY = cy + Math.sin(t * 0.4 + phase) * 8;
      const sides = 12;
      // Wireframe icosahedron approximation — projected hexagon rings
      for (let ring = 0; ring < 3; ring++) {
        const ringY = floatY - r + (ring / 2) * r * 2;
        const ringR = Math.sqrt(Math.max(0, r * r - (ringY - floatY) * (ringY - floatY)));
        const rotOffset = (t * 0.3 + ring * 0.4 + phase) % (Math.PI * 2);
        ctx.beginPath();
        for (let k = 0; k <= sides; k++) {
          const angle = (k / sides) * Math.PI * 2 + rotOffset;
          const px = cx + ringR * Math.cos(angle);
          const py = ringY + ringR * 0.35 * Math.sin(angle);
          if (k === 0) { ctx.moveTo(px, py); } else { ctx.lineTo(px, py); }
        }
        ctx.strokeStyle = `rgba(37,99,235,${0.06 + ring * 0.02})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
      // Meridian lines
      for (let m = 0; m < 5; m++) {
        const angle = (m / 5) * Math.PI + t * 0.15 + phase;
        ctx.beginPath();
        for (let step = 0; step <= 20; step++) {
          const theta = (step / 20) * Math.PI;
          const px = cx + r * Math.sin(theta) * Math.cos(angle);
          const py = floatY + r * Math.cos(theta);
          if (step === 0) { ctx.moveTo(px, py); } else { ctx.lineTo(px, py); }
        }
        ctx.strokeStyle = "rgba(37,99,235,0.07)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }

    function draw(ts: number) {
      if (!ctx || !canvas) return;
      time = ts * 0.001;

      ctx.clearRect(0, 0, width, height);

      // Floating orbs
      drawFloatingOrb(width * 0.2, height * 0.38, 55, time, 0);
      drawFloatingOrb(width * 0.78, height * 0.45, 40, time, 1.5);
      drawFloatingOrb(width * 0.5, height * 0.22, 70, time, 2.8);

      // Grid
      drawGridLines();

      // Particles
      for (const p of particles) {
        p.x += p.vx + Math.sin(time * 0.2 + p.phase) * 0.04;
        p.y += p.vy;
        if (p.y < -5) p.y = height + 5;
        if (p.x < -5) p.x = width + 5;
        if (p.x > width + 5) p.x = -5;

        const alpha = p.opacity * p.z;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    animId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      resize();
      initParticles();
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
