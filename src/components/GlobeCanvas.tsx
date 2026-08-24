"use client";

import React, { useEffect, useRef } from "react";

interface City {
  name: string;
  lat: number;
  lon: number;
  c: string;
}

const CITIES: City[] = [
  { name: "RIYADH", lat: 24.71, lon: 46.68, c: "#4FD1E8" },
  { name: "DUBAI", lat: 25.20, lon: 55.27, c: "#D9A85C" },
  { name: "RIGA", lat: 56.95, lon: 24.11, c: "#8FA8FF" }
];

const LINKS: [number, number][] = [[0, 1], [0, 2], [1, 2]];
const D2R = Math.PI / 180;

function toVec(lat: number, lon: number): [number, number, number] {
  const a = lat * D2R;
  const b = lon * D2R;
  return [Math.cos(a) * Math.cos(b), Math.sin(a), Math.cos(a) * Math.sin(b)];
}

function slerp(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  d = Math.max(-1, Math.min(1, d));
  const o = Math.acos(d);
  if (o < 1e-6) return [...a];
  const s = Math.sin(o);
  const k1 = Math.sin((1 - t) * o) / s;
  const k2 = Math.sin(t * o) / s;
  return [
    a[0] * k1 + b[0] * k2,
    a[1] * k1 + b[1] * k2,
    a[2] * k1 + b[2] * k2
  ];
}

export function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const context = cv.getContext("2d");
    if (!context) return;
    const ctx: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;

    let W = 0, H = 0, R = 0, CX = 0, CY = 0, DPR = 1;
    let rotY = -42 * D2R;
    let tiltX = -0.32;
    let velRotY = 0;
    let velTiltX = 0;
    let isDragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    let raf: number | null = null;

    function project(v: [number, number, number]) {
      const curRot = isDragging ? rotY : rotY + mx * 0.12;
      const curTilt = isDragging ? tiltX : tiltX + my * 0.10;
      const cy = Math.cos(curRot), sy = Math.sin(curRot);
      const x = v[0] * cy + v[2] * sy;
      const z = -v[0] * sy + v[2] * cy;
      const ct = Math.cos(curTilt), st = Math.sin(curTilt);
      const y2 = v[1] * ct - z * st;
      const z2 = v[1] * st + z * ct;
      return { x: CX + x * R, y: CY - y2 * R, z: z2 };
    }

    function resize() {
      if (!cv || !cv.parentElement) return;
      const box = cv.parentElement.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, box.width);
      H = Math.max(1, box.height);
      cv.width = Math.round(W * DPR);
      cv.height = Math.round(H * DPR);
      cv.style.width = W + "px";
      cv.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      R = Math.min(W, H) * 0.44;
      CX = W * 0.5;
      CY = H * 0.48;
    }

    function drawGraticule() {
      ctx.lineWidth = 1;
      for (let lat = -60; lat <= 60; lat += 20) {
        let prev: { x: number; y: number; z: number } | null = null;
        for (let lon = 0; lon <= 360; lon += 4) {
          const p = project(toVec(lat, lon));
          if (prev) {
            const d = (p.z + prev.z) / 2;
            ctx.strokeStyle = `rgba(140,190,225,${d > 0 ? 0.30 : 0.07})`;
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
          prev = p;
        }
      }
      for (let lon = 0; lon < 360; lon += 20) {
        let prev: { x: number; y: number; z: number } | null = null;
        for (let lat = -90; lat <= 90; lat += 4) {
          const p = project(toVec(lat, lon));
          if (prev) {
            const d2 = (p.z + prev.z) / 2;
            ctx.strokeStyle = `rgba(140,190,225,${d2 > 0 ? 0.24 : 0.055})`;
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
          prev = p;
        }
      }
    }

    function drawArc(a: number, b: number, t: number) {
      const va = toVec(CITIES[a].lat, CITIES[a].lon);
      const vb = toVec(CITIES[b].lat, CITIES[b].lon);
      const N = 64;
      const pts: { x: number; y: number; z: number }[] = [];
      for (let i = 0; i <= N; i++) {
        const s = i / N;
        const m = slerp(va, vb, s);
        const lift = 1 + 0.20 * Math.sin(Math.PI * s);
        const p = project([m[0] * lift, m[1] * lift, m[2] * lift]);
        pts.push(p);
      }
      ctx.lineWidth = 1.4;
      for (let i = 1; i <= N; i++) {
        const vis = (pts[i].z + pts[i - 1].z) / 2 > -0.25;
        ctx.strokeStyle = vis ? "rgba(79,209,232,.55)" : "rgba(79,209,232,.10)";
        ctx.beginPath();
        ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
        ctx.lineTo(pts[i].x, pts[i].y);
        ctx.stroke();
      }
      /* travelling pulse */
      const head = Math.floor(t * N) % N;
      for (let i = 0; i < 9; i++) {
        const idx = (head - i + N) % N;
        const pt = pts[idx];
        if (pt.z < -0.25) continue;
        const alpha = (1 - i / 9) * 0.9;
        ctx.fillStyle = `rgba(240,201,137,${alpha})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.4 - i * 0.16, 0, 6.2832);
        ctx.fill();
      }
    }

    function drawCities(t: number) {
      CITIES.forEach((c) => {
        const p = project(toVec(c.lat, c.lon));
        if (p.z < -0.05) return;
        const fade = Math.min(1, Math.max(0, (p.z + 0.05) * 3));
        const ring = 6 + Math.sin(t * 2.2) * 2.2;
        ctx.globalAlpha = fade;
        ctx.strokeStyle = c.c;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = fade * 0.45;
        ctx.beginPath();
        ctx.arc(p.x, p.y, ring, 0, 6.2832);
        ctx.stroke();
        ctx.globalAlpha = fade;
        ctx.fillStyle = c.c;
        ctx.shadowColor = c.c;
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.6, 0, 6.2832);
        ctx.fill();
        ctx.shadowBlur = 0;
        if (W > 520) {
          ctx.font = "500 10px 'IBM Plex Mono', monospace";
          ctx.fillStyle = "rgba(243,242,237,.82)";
          ctx.globalAlpha = fade * 0.9;
          ctx.fillText(c.name, p.x + 11, p.y + 3.5);
        }
        ctx.globalAlpha = 1;
      });
    }

    function render(now: number) {
      const t = now / 1000;
      mx += (tmx - mx) * 0.06;
      my += (tmy - my) * 0.06;

      if (!isDragging) {
        rotY += velRotY;
        tiltX += velTiltX;
        velRotY *= 0.92;
        velTiltX *= 0.92;

        if (!reduce) {
          rotY += 0.0028;
        }

        tiltX = Math.max(-0.95, Math.min(0.95, tiltX));
      }

      ctx.clearRect(0, 0, W, H);

      /* atmosphere */
      const atmoR = Math.min(R * 1.13, Math.min(CX, CY, W - CX, H - CY) * 0.98);
      const g = ctx.createRadialGradient(CX, CY, R * 0.2, CX, CY, atmoR);
      g.addColorStop(0, "rgba(79,209,232,.12)");
      g.addColorStop(0.5, "rgba(79,209,232,.03)");
      g.addColorStop(1, "rgba(79,209,232,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(CX, CY, atmoR, 0, 6.2832);
      ctx.fill();

      /* sphere body */
      const s = ctx.createRadialGradient(CX - R * 0.45, CY - R * 0.5, R * 0.1, CX, CY, R);
      s.addColorStop(0, "rgba(30,58,92,.92)");
      s.addColorStop(0.6, "rgba(12,26,46,.94)");
      s.addColorStop(1, "rgba(5,11,20,.96)");
      ctx.fillStyle = s;
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, 6.2832);
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, R * 1.001, 0, 6.2832);
      ctx.clip();
      drawGraticule();
      ctx.restore();

      /* rim light */
      ctx.strokeStyle = "rgba(79,209,232,.45)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, 6.2832);
      ctx.stroke();

      LINKS.forEach((l, i) => {
        drawArc(l[0], l[1], reduce ? 0.5 : t * 0.22 + i * 0.33);
      });
      drawCities(t);

      if (!reduce || isDragging || Math.abs(velRotY) > 0.0001 || Math.abs(velTiltX) > 0.0001) {
        raf = requestAnimationFrame(render);
      }
    }

    function startGlobe() {
      resize();
      if (reduce) {
        render(0);
      } else if (!raf) {
        raf = requestAnimationFrame(render);
      }
    }

    let observer: ResizeObserver | null = null;
    if (window.ResizeObserver && cv.parentElement) {
      observer = new ResizeObserver(() => {
        resize();
        if (reduce) render(0);
      });
      observer.observe(cv.parentElement);
    } else {
      window.addEventListener("resize", resize);
    }

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      velRotY = 0;
      velTiltX = 0;
      try {
        cv.setPointerCapture(e.pointerId);
      } catch {}
      if (reduce && !raf) {
        raf = requestAnimationFrame(render);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const dx = e.clientX - lastPointerX;
        const dy = e.clientY - lastPointerY;
        lastPointerX = e.clientX;
        lastPointerY = e.clientY;

        const sensitivity = 0.0055;
        rotY += dx * sensitivity;
        tiltX += dy * sensitivity;
        tiltX = Math.max(-0.95, Math.min(0.95, tiltX));

        velRotY = dx * sensitivity;
        velTiltX = dy * sensitivity;
      } else if (fine) {
        tmx = (e.clientX / window.innerWidth - 0.5) * 2;
        tmy = (e.clientY / window.innerHeight - 0.5) * 2;
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (isDragging) {
        isDragging = false;
        try {
          cv.releasePointerCapture(e.pointerId);
        } catch {}
      }
    };

    cv.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    const onVisibilityChange = () => {
      if (reduce) return;
      if (document.hidden) {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = null;
        }
      } else if (!raf) {
        raf = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    startGlobe();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
      cv.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <canvas id="globe" ref={canvasRef} />;
}
