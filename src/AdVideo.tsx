import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig
} from 'remotion';

export const AdVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

import { useState, useEffect, useRef } from "react";

const B = {
white: "#FFFFFF", beige: "#E4DBC8", black: "#000000",
n1: "#84837B", n2: "#B7AB97",
blue: "#0047FF", blueDark: "#0C29AB", yellow: "#FFD166",
};


const LogoMark = ({ scale = 1 }) => (
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 * scale }}>
    {/* Constellation dots */}
    <div style={{ position: "relative", width: 44 * scale, height: 32 * scale }}>
    {/* Lines */}
    <svg style={{ position: "absolute", inset: 0 }} width={44 * scale} height={32 * scale} viewBox="0 0 44 32">
        <line x1="22" y1="16" x2="6"  y2="8"  stroke="#b7ab97" strokeWidth="0.8" opacity="0.7"/>
        <line x1="22" y1="16" x2="38" y2="6"  stroke="#b7ab97" strokeWidth="0.8" opacity="0.7"/>
        <line x1="22" y1="16" x2="38" y2="22" stroke="#b7ab97" strokeWidth="0.8" opacity="0.7"/>
        <line x1="22" y1="16" x2="10" y2="28" stroke="#b7ab97" strokeWidth="0.8" opacity="0.7"/>
        <line x1="22" y1="16" x2="34" y2="30" stroke="#b7ab97" strokeWidth="0.8" opacity="0.7"/>
        <line x1="22" y1="16" x2="2"  y2="18" stroke="#e4dbc8" strokeWidth="0.8" opacity="0.7"/>
    </svg>
    {/* Hub dot */}
    <div style={{ position: "absolute", left: 22 * scale - 4 * scale, top: 16 * scale - 4 * scale, width: 8 * scale, height: 8 * scale, borderRadius: "50%", background: "#e4dbc8" }} />
    {/* Satellite dots */}
    {[
        { x: 6,  y: 8,  r: 2.5, c: "#b7ab97" },
        { x: 38, y: 6,  r: 3,   c: "#b7ab97" },
        { x: 38, y: 22, r: 2.5, c: "#84837b" },
        { x: 10, y: 28, r: 3,   c: "#b7ab97" },
        { x: 34, y: 30, r: 2,   c: "#84837b" },
        { x: 2,  y: 18, r: 2,   c: "#e4dbc8" },
    ].map((d, i) => (
        <div key={i} style={{
        position: "absolute",
        left: d.x * scale - d.r * scale,
        top:  d.y * scale - d.r * scale,
        width: d.r * 2 * scale, height: d.r * 2 * scale,
        borderRadius: "50%", background: d.c,
        }} />
    ))}
    </div>
    {/* Wordmark */}
    <div style={{
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
    fontSize: 11 * scale,
    letterSpacing: 1.5 * scale,
    color: "#84837b",
    }}>
    rea<span style={{ fontWeight: 500, color: B.n1 }}>Lea</span>Ds
    </div>
</div>
);

const ALL_ROWS = [
{ id: 1, name: "Suncoast Properties LLC",  type: "LLC",        phone: "(813) 555-0192", owner: "J. Alvarez",  tag: "diamond", rank: 1 },
{ id: 2, name: "Coastal Ventures Trust",   type: "Trust",      phone: "(305) 555-0218", owner: "R. Patel",    tag: "diamond", rank: 2 },
{ id: 3, name: "James R. Morrison",        type: "Individual", phone: "(407) 555-0089", owner: "J. Morrison", tag: "verified", rank: 3 },
{ id: 4, name: "Palm Ridge Holdings LLC",  type: "LLC",        phone: "(786) 555-0344", owner: "S. Williams", tag: "verified", rank: 4 },
{ id: 5, name: "David L. Chen",            type: "Individual", phone: "(561) 555-0276", owner: "D. Chen",     tag: "medium",  rank: 5 },
{ id: 6, name: "Harbor Light Realty LLC",  type: "LLC",        phone: "",               owner: "",            tag: "low",     rank: 6 },
{ id: 7, name: "Sunset Holdings Trust",    type: "Trust",      phone: "",               owner: "",            tag: "low",     rank: 7 },
];

const TYPE_COLORS = {
LLC:        { bg: "#EEF3FF", color: B.blue },
Trust:      { bg: "#F5F0E8", color: "#7A6A4A" },
Individual: { bg: "#EEFAF3", color: "#1A7A4A" },
};

const TAG_ICON = { diamond: "💎", verified: "✅", medium: "🔶", low: "" };

const OVERLAYS = [
{ id: "a", text: "One platform. Every entity type." },
{ id: "b", text: "AI ranks every result." },
{ id: "c", text: "Delivered straight to your inbox." },
];

export default function SkipTraceAd() {
const [scene, setScene]               = useState(0);
const [hookLabel, setHookLabel]       = useState(false);
const [hookLine1, setHookLine1]       = useState(false);
const [hookLine2, setHookLine2]       = useState(false);
const [hookPillA, setHookPillA]       = useState(false);
const [hookPillB, setHookPillB]       = useState(false);
const [hookPillC, setHookPillC]       = useState(false);
const [hookTagline, setHookTagline]   = useState(false);
const [processing, setProcessing]     = useState(false);
const [phonesReveal, setPhonesReveal] = useState(0);
const [sorted, setSorted]             = useState(false);
const [showTags, setShowTags]         = useState(false);
const [highlight, setHighlight]       = useState(false);
const [fadeLow, setFadeLow]           = useState(false);
const [showStats, setShowStats]       = useState(false);
const [showDepth, setShowDepth]       = useState(false);
const [statusPhase, setStatusPhase]   = useState(0); // 0=ready 1=skiptracing 2=ranking 3=complete
const [overlayId, setOverlayId]       = useState(null);
const [emailSent, setEmailSent]       = useState(false);
const [msg1, setMsg1]                 = useState(false);
const [msg2, setMsg2]                 = useState(false);
const [showCTA, setShowCTA]           = useState(false);
const [replay, setReplay]             = useState(false);
const timers = useRef([]);

const ct = () => timers.current.forEach(clearTimeout);
const t  = (fn, ms) => { const id = setTimeout(fn, ms); timers.current.push(id); };

const runAd = () => {
    ct(); timers.current = [];
    setScene(0); setHookLabel(false); setHookLine1(false); setHookLine2(false);
    setHookPillA(false); setHookPillB(false); setHookPillC(false); setHookTagline(false);
    setProcessing(false); setPhonesReveal(0); setSorted(false); setShowTags(false);
    setHighlight(false); setFadeLow(false); setShowStats(false); setShowDepth(false); setStatusPhase(0); setOverlayId(null);
    setEmailSent(false); setMsg1(false); setMsg2(false); setShowCTA(false); setReplay(false);

    // SCENE 1 — Hook (0–4s)
    t(() => setHookLabel(true),   250);
    t(() => setHookLine1(true),   700);
    t(() => setHookLine2(true),   1050);
    t(() => setHookPillA(true),   1700);
    t(() => setHookPillB(true),   2050);
    t(() => setHookPillC(true),   2400);
    t(() => setHookTagline(true), 3050);

    // SCENE 2 — Spreadsheet (4–13.5s)
    t(() => setScene(1),                   4000);
    t(() => setStatusPhase(1),             4300); // Skiptracing...
    t(() => setOverlayId("a"),             4600);
    for (let i = 1; i <= 5; i++) t(() => setPhonesReveal(i), 4900 + i * 300);
    t(() => setOverlayId(null),            7000);
    t(() => { setSorted(true); setStatusPhase(2); }, 7300); // AI Ranking...
    t(() => setOverlayId("b"),             7800);
    t(() => setShowTags(true),             8100);
    t(() => setHighlight(true),            8600);
    t(() => setFadeLow(true),              9200);
    t(() => { setStatusPhase(3); },        9600); // Complete
    t(() => setOverlayId(null),            10300);
    t(() => setShowStats(true),            10500);
    t(() => setShowDepth(true),            11000);
    t(() => setOverlayId("c"),             11100);
    t(() => setOverlayId(null),            13200);

    // SCENE 3 — Results (13.5–21s)
    t(() => setScene(2),          13500);
    t(() => setEmailSent(true),   14200);
    t(() => setMsg1(true),        15300);
    t(() => setMsg2(true),        16100);
    t(() => setShowCTA(true),     17100);
    t(() => setReplay(true),      20800);
};

useEffect(() => { runAd(); return ct; }, []);

const rows = [...ALL_ROWS].sort((a, b) => sorted ? a.rank - b.rank : 0);
const currentOverlay = OVERLAYS.find(o => o.id === overlayId);

return (
    <div style={{
    display: "flex", flexDirection: "column", alignItems: "center",
    justifyContent: "center", minHeight: "100vh", background: "#111",
    fontFamily: "'Montserrat', sans-serif",
    }}>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

    {/* Phone frame */}
    <div style={{
        width: 340, height: 620, borderRadius: 40, overflow: "hidden",
        position: "relative",
        boxShadow: "0 50px 120px rgba(0,0,0,0.8), 0 0 0 9px #222",
        background: B.white,
    }}>

        {/* ══ SCENE 1: HOOK ══ */}
        <div style={{
        position: "absolute", inset: 0, background: B.white,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "40px 36px",
        opacity: scene === 0 ? 1 : 0,
        transition: "opacity 0.6s ease",
        zIndex: scene === 0 ? 3 : 1,
        }}>
        <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `linear-gradient(${B.beige}99 1px, transparent 1px), linear-gradient(90deg, ${B.beige}99 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
        }} />
        <div style={{
            position: "absolute", top: "32%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 220, height: 220, borderRadius: "50%",
            background: `radial-gradient(circle, ${B.blue}1A 0%, transparent 70%)`,
        }} />

        <div style={{ position: "relative", textAlign: "center" }}>
            {/* Logo above hook */}
            <div style={{
            display: "flex", justifyContent: "center", marginBottom: 10,
            opacity: hookLabel ? 1 : 0,
            transform: hookLabel ? "translateY(0)" : "translateY(-8px)",
            transition: "all 0.6s ease",
            }}>
            <LogoMark scale={1.6} />
            </div>
            <div style={{
            fontSize: 9, fontWeight: 700, letterSpacing: "0.22em",
            color: B.n1, textTransform: "uppercase",
            opacity: hookLabel ? 1 : 0,
            transform: hookLabel ? "translateY(0)" : "translateY(6px)",
            transition: "all 0.5s ease 0.1s",
            marginBottom: 18,
            }}>Skip Tracing Platform</div>

            <div style={{ lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 6 }}>
            <div style={{
                fontSize: 56, fontWeight: 900, color: B.black,
                opacity: hookLine1 ? 1 : 0,
                transform: hookLine1 ? "translateY(0)" : "translateY(18px)",
                transition: "all 0.65s cubic-bezier(0.22,1,0.36,1)",
            }}>Find Any</div>
            <div style={{
                fontSize: 56, fontWeight: 900, color: B.blue,
                opacity: hookLine2 ? 1 : 0,
                transform: hookLine2 ? "translateY(0)" : "translateY(18px)",
                transition: "all 0.65s cubic-bezier(0.22,1,0.36,1)",
            }}>Owner.</div>
            </div>

            <div style={{ display: "flex", gap: 8, justifyContent: "center", margin: "22px 0 24px" }}>
            {[
                [hookPillA, "LLC",        B.blue,    "#EEF3FF"],
                [hookPillB, "Trust",      "#7A6A4A", "#F5F0E8"],
                [hookPillC, "Individual", "#1A7A4A", "#EEFAF3"],
            ].map(([vis, label, color, bg]) => (
                <div key={label} style={{
                padding: "8px 16px", borderRadius: 24,
                background: bg, color,
                fontSize: 12, fontWeight: 800, letterSpacing: "0.02em",
                opacity: vis ? 1 : 0,
                transform: vis ? "scale(1) translateY(0)" : "scale(0.75) translateY(10px)",
                transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)",
                }}>{label}</div>
            ))}
            </div>

            <div style={{
            width: hookTagline ? "80%" : "0%", height: 1.5,
            background: `linear-gradient(90deg, transparent, ${B.yellow}, ${B.blue}, transparent)`,
            margin: "0 auto 16px",
            transition: "width 0.8s ease",
            }} />

            <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
            color: B.n1, textTransform: "uppercase",
            opacity: hookTagline ? 1 : 0,
            transform: hookTagline ? "translateY(0)" : "translateY(6px)",
            transition: "all 0.6s ease",
            }}>Change your real estate game.</div>
        </div>
        </div>

        {/* ══ SCENE 2: SPREADSHEET ══ */}
        <div style={{
        position: "absolute", inset: 0, background: B.white,
        display: "flex", flexDirection: "column",
        opacity: scene === 1 ? 1 : 0,
        transition: "opacity 0.5s ease",
        zIndex: scene === 1 ? 3 : 1,
        }}>
        {/* Header */}
        <div style={{
            padding: "16px 14px 10px", borderBottom: `1px solid ${B.beige}`,
            display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LogoMark scale={0.75} />
            <div>
                <div style={{ fontSize: 8, color: B.n1, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Skip Trace Results</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: B.black, marginTop: 1 }}>Owner Search</div>
            </div>
            </div>
            <div style={{
            display: "flex", alignItems: "center", gap: 5,
            padding: "5px 11px", borderRadius: 20,
            background: statusPhase === 1 ? B.beige : statusPhase === 2 ? B.blue : statusPhase === 3 ? "#EEFAF3" : B.beige,
            transition: "background 0.4s ease",
            }}>
            {(statusPhase === 1 || statusPhase === 2) && (
                <div style={{ width: 6, height: 6, borderRadius: "50%",
                background: statusPhase === 2 ? "white" : B.n1,
                animation: "dot 0.7s ease-in-out infinite alternate" }} />
            )}
            <span style={{
                fontSize: 8, fontWeight: 800, letterSpacing: "0.1em",
                color: statusPhase === 2 ? "white" : statusPhase === 3 ? "#1A7A4A" : B.n1,
                textTransform: "uppercase", transition: "color 0.3s",
            }}>
                {statusPhase === 0 && "Ready"}
                {statusPhase === 1 && "Skiptracing…"}
                {statusPhase === 2 && "AI Ranking…"}
                {statusPhase === 3 && "✓ Complete"}
            </span>
            </div>
        </div>

        {/* Col headers */}
        <div style={{
            display: "grid", gridTemplateColumns: "1fr 52px 82px 24px",
            padding: "5px 14px", gap: 4,
            background: "#F8F8F6", borderBottom: `1px solid ${B.beige}`, flexShrink: 0,
        }}>
            {["Name", "Type", "Phone", ""].map(h => (
            <div key={h} style={{ fontSize: 7.5, fontWeight: 700, color: B.n1, textTransform: "uppercase", letterSpacing: "0.1em" }}>{h}</div>
            ))}
        </div>

        {/* Rows */}
        <div style={{ flex: 1, overflow: "hidden", padding: "2px 0" }}>
            {rows.map((row, i) => {
            const isLow = row.tag === "low";
            const isTop = row.rank <= 5;
            const phoneVisible = row.phone && phonesReveal >= row.rank;
            const tc = TYPE_COLORS[row.type];
            return (
                <div key={row.id} style={{
                display: "grid", gridTemplateColumns: "1fr 52px 82px 24px",
                padding: fadeLow && isLow ? "0 14px" : "7px 14px",
                gap: 4, alignItems: "center",
                background: highlight && isTop ? `${B.yellow}28` : "transparent",
                borderLeft: highlight && isTop ? `3px solid ${B.yellow}` : "3px solid transparent",
                borderBottom: `1px solid ${B.beige}44`,
                opacity: fadeLow && isLow ? 0 : 1,
                maxHeight: fadeLow && isLow ? 0 : 42,
                transform: sorted ? "translateY(0)" : `translateY(${(i % 3 - 1) * 3}px)`,
                transition: `all 0.55s cubic-bezier(0.4,0,0.2,1) ${i * 0.05}s`,
                overflow: "hidden",
                }}>
                <div style={{
                    fontSize: 9.5, fontWeight: isTop ? 700 : 400,
                    color: isTop ? B.black : B.n1,
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}>{row.name}</div>

                <div style={{
                    fontSize: 7.5, fontWeight: 700, padding: "2px 5px", borderRadius: 10,
                    background: tc.bg, color: tc.color, textAlign: "center",
                }}>{row.type}</div>

                <div style={{
                    fontSize: 8, color: phoneVisible ? B.blueDark : B.n2,
                    fontWeight: phoneVisible ? 700 : 400,
                    transition: "all 0.5s ease",
                    fontVariantNumeric: "tabular-nums",
                }}>{phoneVisible ? row.phone : "—"}</div>

                <div style={{
                    fontSize: 12, textAlign: "center",
                    opacity: showTags && !isLow ? 1 : 0,
                    transform: showTags && !isLow ? "scale(1)" : "scale(0.4)",
                    transition: `all 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.07}s`,
                }}>{TAG_ICON[row.tag]}</div>
                </div>
            );
            })}
        </div>

        {/* Stats bar */}
        <div style={{
            padding: "8px 14px", borderTop: `1px solid ${B.beige}`,
            display: "flex", gap: 14, background: "#F8F8F6", justifyContent: "center",
            opacity: showStats ? 1 : 0, transition: "opacity 0.6s ease", flexShrink: 0,
        }}>
            {[["5", "Found"], ["2", "💎 Prime Match"], ["2", "✅ Strong Match"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: B.blue }}>{n}</div>
                <div style={{ fontSize: 7.5, color: B.n1, fontWeight: 600 }}>{l}</div>
            </div>
            ))}
        </div>

        {/* Depth info strip */}
        <div style={{
            padding: "5px 12px",
            background: B.beige,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            opacity: showDepth ? 1 : 0,
            transform: showDepth ? "translateY(0)" : "translateY(4px)",
            transition: "all 0.5s ease",
            flexShrink: 0,
        }}>
            {[
            { icon: "👥", text: "Up to 10 contacts / property" },
            { icon: "🏢", text: "All LLC officers" },
            ].map(({ icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 9 }}>{icon}</span>
                <span style={{ fontSize: 7.5, fontWeight: 600, color: B.n1 }}>{text}</span>
            </div>
            ))}
        </div>

        {/* Apple text overlay */}
        <div style={{
            position: "absolute", bottom: 50, left: 0, right: 0,
            display: "flex", justifyContent: "center", pointerEvents: "none",
        }}>
            <div style={{
            background: "rgba(8,8,8,0.82)", backdropFilter: "blur(14px)",
            borderRadius: 28, padding: "11px 22px",
            fontSize: 13, fontWeight: 700, color: "white", letterSpacing: "0.01em",
            opacity: currentOverlay ? 1 : 0,
            transform: currentOverlay ? "translateY(0) scale(1)" : "translateY(8px) scale(0.96)",
            transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
            maxWidth: "86%", textAlign: "center", lineHeight: 1.45,
            }}>
            {currentOverlay?.text || ""}
            </div>
        </div>
        </div>

        {/* ══ SCENE 3: RESULTS ══ */}
        <div style={{
        position: "absolute", inset: 0, background: B.white,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "28px 22px",
        opacity: scene === 2 ? 1 : 0,
        transition: "opacity 0.6s ease",
        zIndex: scene === 2 ? 3 : 1,
        }}>
        <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `linear-gradient(${B.beige}77 1px, transparent 1px), linear-gradient(90deg, ${B.beige}77 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
        }} />
        <div style={{
            position: "absolute", bottom: "-60px", left: "50%", transform: "translateX(-50%)",
            width: 300, height: 200, borderRadius: "50%",
            background: `radial-gradient(circle, ${B.blue}12 0%, transparent 70%)`,
        }} />

        <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
            {/* Email card */}
            <div style={{
            background: "white", borderRadius: 18, padding: "15px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.09), 0 0 0 1px rgba(0,0,0,0.05)",
            marginBottom: 16, textAlign: "left",
            transform: emailSent ? "translateY(0) scale(1)" : "translateY(22px) scale(0.94)",
            opacity: emailSent ? 1 : 0,
            transition: "all 0.65s cubic-bezier(0.34,1.56,0.64,1)",
            }}>
            <div style={{
                display: "flex", alignItems: "center", gap: 8, marginBottom: 10,
                paddingBottom: 9, borderBottom: `1px solid ${B.beige}`,
            }}>
                <div style={{
                width: 30, height: 30, borderRadius: 9, background: B.blue,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
                }}>✉️</div>
                <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9.5, fontWeight: 800, color: B.black }}>Results Delivered</div>
                <div style={{ fontSize: 8, color: B.n1 }}>your@email.com</div>
                </div>
                <div style={{
                background: "#EEFAF3", color: "#1A7A4A",
                fontSize: 8, fontWeight: 800, padding: "3px 9px",
                borderRadius: 20, letterSpacing: "0.05em",
                }}>SENT ✓</div>
            </div>

            {[
                { name: "Suncoast Properties LLC",  type: "LLC",        owner: "J. Alvarez",  phone: "(813) 555-0192", tag: "💎" },
                { name: "Coastal Ventures Trust",   type: "Trust",      owner: "R. Patel",    phone: "(305) 555-0218", tag: "💎" },
                { name: "James R. Morrison",        type: "Individual", owner: "J. Morrison", phone: "(407) 555-0089", tag: "✅" },
            ].map((r, i) => {
                const tc = TYPE_COLORS[r.type];
                return (
                <div key={r.name} style={{
                    display: "flex", alignItems: "center", gap: 7,
                    padding: "7px 0", borderBottom: i < 2 ? `1px solid ${B.beige}55` : "none",
                    opacity: emailSent ? 1 : 0,
                    transform: emailSent ? "translateX(0)" : "translateX(-12px)",
                    transition: `all 0.45s ease ${0.15 + i * 0.13}s`,
                }}>
                    <span style={{ fontSize: 12 }}>{r.tag}</span>
                    <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: B.black }}>{r.name}</div>
                    <div style={{ fontSize: 7.5, color: B.n1, marginTop: 1 }}>{r.owner} · {r.phone}</div>
                    </div>
                    <div style={{
                    fontSize: 7, fontWeight: 700, padding: "2px 7px",
                    borderRadius: 10, background: tc.bg, color: tc.color,
                    }}>{r.type}</div>
                </div>
                );
            })}
            </div>

            {/* Value props */}
            <div style={{
            opacity: msg1 ? 1 : 0, transform: msg1 ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s ease", marginBottom: 4,
            }}>
            <div style={{ fontSize: 23, fontWeight: 900, color: B.black, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Pay as you go.
            </div>
            </div>
            <div style={{
            opacity: msg2 ? 1 : 0, transform: msg2 ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s ease", marginBottom: 18,
            }}>
            <div style={{ fontSize: 23, fontWeight: 900, color: B.blue, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Only for found results.
            </div>
            <div style={{ fontSize: 9.5, color: B.n1, fontWeight: 500, marginTop: 7, letterSpacing: "0.04em" }}>
                LLCs · Trusts · Individuals · No subscriptions
            </div>
            </div>

            {/* Logo + CTA */}
            <div style={{
            opacity: showCTA ? 1 : 0, transform: showCTA ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.55s cubic-bezier(0.34,1.56,0.64,1)",
            }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                <LogoMark scale={1.1} />
            </div>
            <div style={{
                borderRadius: 14, padding: "13px 28px",
                fontSize: 11, fontWeight: 800, letterSpacing: "0.08em",
                textTransform: "uppercase", display: "inline-block", cursor: "pointer",
                animation: showCTA ? "ctaPulse 2s ease-in-out infinite" : "none",
            }}>
                Start Your First Search →
            </div>
            <div style={{
                fontSize: 10, color: B.n1, marginTop: 9, fontWeight: 500,
                opacity: showCTA ? 1 : 0, transition: "opacity 0.5s ease 0.5s",
                letterSpacing: "0.02em", fontStyle: "italic",
            }}>
                The owner behind your next deal is one search away.
            </div>
            </div>
        </div>
        </div>

        {/* Replay */}
        {replay && (
        <button onClick={runAd} style={{
            position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.65)", color: "white", border: "none",
            borderRadius: 20, padding: "7px 18px", fontSize: 10, fontWeight: 700,
            cursor: "pointer", zIndex: 10, letterSpacing: "0.06em", backdropFilter: "blur(8px)",
        }}>↺ Replay</button>
        )}
    </div>

    {/* Scene indicator */}
    <div style={{ display: "flex", gap: 6, marginTop: 20 }}>
        {[["0–4s", "Hook"], ["4–13s", "AI Ranking"], ["13–21s", "Results"]].map(([time, label], i) => (
        <div key={label} style={{
            padding: "5px 12px", borderRadius: 20,
            background: scene === i ? "white" : "rgba(255,255,255,0.12)",
            color: scene === i ? "#000" : "rgba(255,255,255,0.4)",
            fontSize: 9.5, fontWeight: 700, transition: "all 0.3s ease", letterSpacing: "0.04em",
        }}>{time} · {label}</div>
        ))}
    </div>

    <style>{`
        @keyframes dot {
        from { opacity: 1; transform: scale(1); }
        to   { opacity: 0.3; transform: scale(0.7); }
        }
        @keyframes ctaPulse {
        0%   { background: #0047FF; color: white; box-shadow: 0 6px 28px rgba(0,71,255,0.45); }
        50%  { background: #FFD166; color: #000;  box-shadow: 0 6px 28px rgba(255,209,102,0.55); }
        100% { background: #0047FF; color: white; box-shadow: 0 6px 28px rgba(0,71,255,0.45); }
        }
    `}</style>
    </div>
);
}
return (
    <AbsoluteFill>
      {/* your JSX here */}
    </AbsoluteFill>
  );
};