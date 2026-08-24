import React from "react";

export function SvgGfxDefs() {
  return (
    <svg
      id="gfx"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <linearGradient id="gT" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FBE7BF" />
          <stop offset="1" stopColor="#DFA85C" />
        </linearGradient>
        <linearGradient id="gL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B9863F" />
          <stop offset="1" stopColor="#8A6024" />
        </linearGradient>
        <linearGradient id="gR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E7BC77" />
          <stop offset="1" stopColor="#AE7F38" />
        </linearGradient>
        <linearGradient id="cT" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#BAF3FD" />
          <stop offset="1" stopColor="#57D0E7" />
        </linearGradient>
        <linearGradient id="cL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1B7C93" />
          <stop offset="1" stopColor="#0C4A5C" />
        </linearGradient>
        <linearGradient id="cR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#43B6D0" />
          <stop offset="1" stopColor="#1E7C97" />
        </linearGradient>
        <linearGradient id="mT" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E6EEF7" />
          <stop offset="1" stopColor="#A6BBD1" />
        </linearGradient>
        <linearGradient id="mL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#42607F" />
          <stop offset="1" stopColor="#273D57" />
        </linearGradient>
        <linearGradient id="mR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7189A6" />
          <stop offset="1" stopColor="#405874" />
        </linearGradient>
        <linearGradient id="nT" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#40608A" />
          <stop offset="1" stopColor="#233C5A" />
        </linearGradient>
        <linearGradient id="nL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#122438" />
          <stop offset="1" stopColor="#091524" />
        </linearGradient>
        <linearGradient id="nR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#27415F" />
          <stop offset="1" stopColor="#14263C" />
        </linearGradient>
        <radialGradient id="glowC" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#4FD1E8" stopOpacity=".45" />
          <stop offset="1" stopColor="#4FD1E8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glowG" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#D9A85C" stopOpacity=".42" />
          <stop offset="1" stopColor="#D9A85C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="shdL" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#0A1220" stopOpacity=".26" />
          <stop offset="1" stopColor="#0A1220" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sphN" cx="34%" cy="30%" r="78%">
          <stop offset="0" stopColor="#4E7199" stopOpacity="1" />
          <stop offset="1" stopColor="#0E1F35" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="sphC" cx="34%" cy="30%" r="78%">
          <stop offset="0" stopColor="#93E9F9" stopOpacity="1" />
          <stop offset="1" stopColor="#12617A" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="sphG" cx="34%" cy="30%" r="78%">
          <stop offset="0" stopColor="#FBE7BF" stopOpacity="1" />
          <stop offset="1" stopColor="#96692A" stopOpacity="1" />
        </radialGradient>
      </defs>
    </svg>
  );
}
